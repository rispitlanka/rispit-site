export const CATEGORIES = [
  'Product strategy',
  'Design',
  'Development',
  'Mobile',
  'AI',
  'Launch',
];

export function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function readMinutes(body) {
  const words = String(body || '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso) {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

function imageLine() {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME || '';
  const remote = /^[a-z0-9_-]+$/i.test(cloud)
    ? `|https:\\/\\/res\\.cloudinary\\.com\\/${cloud}\\/image\\/upload\\/[A-Za-z0-9_.,\\/-]+`
    : '';
  return new RegExp(`^!\\[([^\\]\\n]*)\\]\\((\\/uploads\\/blog\\/[0-9a-f-]{36}\\.(?:jpg|png|webp|gif)${remote})\\)$`, 'i');
}

function blockStart(line) {
  return line.startsWith('## ') || line.startsWith('> ') || line.startsWith('- ') || imageLine().test(line.trim());
}

export function parseBody(body) {
  const lines = String(body || '').replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    const image = line.trim().match(imageLine());
    if (image) {
      blocks.push({ type: 'image', alt: image[1].slice(0, 140), src: image[2] });
      i += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      i += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      const parts = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        parts.push(lines[i].slice(2).trim());
        i += 1;
      }
      blocks.push({ type: 'quote', text: parts.join(' ') });
      continue;
    }
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2).trim());
        i += 1;
      }
      blocks.push({ type: 'list', items });
      continue;
    }
    const parts = [line.trim()];
    i += 1;
    while (i < lines.length && lines[i].trim() && !blockStart(lines[i])) {
      parts.push(lines[i].trim());
      i += 1;
    }
    blocks.push({ type: 'p', text: parts.join(' ') });
  }
  return blocks;
}

export function publicPost(post) {
  const blocks = parseBody(post.body);
  let section = 0;
  const withIds = blocks.map((block) => {
    if (block.type !== 'h2') return block;
    section += 1;
    return { ...block, id: `s${section}` };
  });
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags || [],
    coverImage: post.coverImage || '',
    body: post.body,
    blocks: withIds,
    readLabel: `${readMinutes(post.body)} min read`,
    dateLabel: formatDate(post.publishedAt || post.createdAt),
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
  };
}
