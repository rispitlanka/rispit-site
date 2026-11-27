import { createHash } from 'crypto';

const MAX_BYTES = 5 * 1024 * 1024;
const LOCAL_PATH = /^\/uploads\/blog\/[0-9a-f-]{36}\.(jpg|png|webp|gif)$/;
const FOLDER = 'rispit/blog';

function cloudName() {
  const name = process.env.CLOUDINARY_CLOUD_NAME || '';
  return /^[a-z0-9_-]+$/i.test(name) ? name : '';
}

export function isStoredImage(url) {
  if (LOCAL_PATH.test(url)) return true;
  const cloud = cloudName();
  if (!cloud) return false;
  return new RegExp(`^https://res\\.cloudinary\\.com/${cloud}/image/upload/[A-Za-z0-9_.,/-]+$`).test(url);
}

function signature(params) {
  const serialized = Object.keys(params).sort().map((key) => `${key}=${params[key]}`).join('&');
  return createHash('sha1').update(serialized + process.env.CLOUDINARY_API_SECRET).digest('hex');
}

function kindOf(bytes) {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpg';
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return 'png';
  if (bytes.length >= 6) {
    const head = bytes.subarray(0, 6).toString('ascii');
    if (head === 'GIF87a' || head === 'GIF89a') return 'gif';
  }
  if (
    bytes.length >= 12 &&
    bytes.subarray(0, 4).toString('ascii') === 'RIFF' &&
    bytes.subarray(8, 12).toString('ascii') === 'WEBP'
  ) return 'webp';
  return '';
}

export async function saveBlogImage(file) {
  if (!file || typeof file === 'string' || typeof file.arrayBuffer !== 'function') {
    return { error: 'Choose an image.' };
  }
  const bytes = Buffer.from(await file.arrayBuffer());
  if (!bytes.length) return { error: 'That file is empty.' };
  if (bytes.length > MAX_BYTES) return { error: 'Images need to be 5 MB or smaller.' };
  const kind = kindOf(bytes);
  if (!kind) return { error: 'Use a JPG, PNG, WEBP, or GIF image.' };
  const cloud = cloudName();
  if (!cloud || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return { error: 'Image storage is not configured.' };
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const params = { folder: FOLDER, timestamp };
  const body = new FormData();
  body.append('file', new Blob([bytes], { type: `image/${kind === 'jpg' ? 'jpeg' : kind}` }), `image.${kind}`);
  body.append('api_key', process.env.CLOUDINARY_API_KEY);
  body.append('timestamp', String(timestamp));
  body.append('folder', FOLDER);
  body.append('signature', signature(params));
  let response;
  try {
    response = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, { method: 'POST', body });
  } catch {
    return { error: 'The image could not be uploaded. Try again.' };
  }
  const payload = await response.json().catch(() => ({}));
  const url = payload.secure_url || '';
  if (!response.ok || !isStoredImage(url)) {
    return { error: 'The image could not be uploaded. Try again.' };
  }
  return { url };
}
