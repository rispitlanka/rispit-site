import { randomUUID } from 'crypto';
import { mkdirSync, writeFileSync } from 'fs';
import path from 'path';

const MAX_BYTES = 5 * 1024 * 1024;
export const UPLOAD_PATH = /^\/uploads\/blog\/[0-9a-f-]{36}\.(jpg|png|webp|gif)$/;

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
  const name = `${randomUUID()}.${kind}`;
  const dir = path.join(process.cwd(), 'public', 'uploads', 'blog');
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, name), bytes);
  return { url: `/uploads/blog/${name}` };
}
