import { createHash, randomUUID } from 'crypto';
import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'fs';
import path from 'path';
import { CATEGORIES, publicPost, slugify } from './blog-format.mjs';
import { isStoredImage } from './blog-images.mjs';

const FILE = path.join(process.cwd(), 'data', 'posts.json');

const SEED = [
  {
    id: 'p_scope_mvp',
    slug: 'how-to-scope-your-mvp',
    title: 'How to scope your MVP so it ships in 21 days',
    excerpt: 'A simple way to decide what goes into your first version, and what can safely wait.',
    category: 'Product strategy',
    tags: ['MVP', 'Product strategy', 'Startups'],
    status: 'published',
    publishedAt: '2026-03-12T09:00:00.000Z',
    createdAt: '2026-03-12T09:00:00.000Z',
    updatedAt: '2026-03-12T09:00:00.000Z',
    body: `Most first products don't fail because they're badly built. They fail because they try to do too much, take too long, and reach real users too late. Scoping is the skill that fixes this. Here's the simple process we use with every founder before a 21-day build.

## Start with one problem

Write down the single problem your product solves, for one specific type of person. Not three problems, not "everyone". If you can't describe it in a sentence, your first version will be hard to build and harder to explain.

A clinic booking app, for example, isn't about "improving healthcare". It's about letting a patient book a visit without calling the front desk.

## List everything, then cut

Get every feature idea out of your head and onto one list. Then sort each item into one of three groups:

- Must have: without it, the core problem isn't solved.
- Nice to have: useful, but users can live without it for now.
- Later: ideas for when you have real users and real feedback.

Your first version is the "must have" group, and nothing else. Be strict. Most lists shrink by more than half.

> If a feature doesn't help someone solve the core problem on day one, it can wait.

## Use the one-sentence test

Before you commit, describe your first version in one sentence: "A [person] can [do one thing] so that [result]." If the sentence needs an "and", something can probably move to the later list.

## Plan in weeks, not months

Once the scope is clear, plan the build in short, visible steps. We use three weeks: design in the first, build in the second, test and launch in the third, with a demo at the end of each one. Short cycles keep everyone honest and make problems easy to spot early.`,
  },
];

const POSTS_ID = 'rispit/posts.json';

function cloudinaryReady() {
  const name = process.env.CLOUDINARY_CLOUD_NAME || '';
  return /^[a-z0-9_-]+$/i.test(name) && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET;
}

function sign(params) {
  const serialized = Object.keys(params).sort().map((key) => `${key}=${params[key]}`).join('&');
  return createHash('sha1').update(serialized + process.env.CLOUDINARY_API_SECRET).digest('hex');
}

function readLocal() {
  try {
    const parsed = JSON.parse(readFileSync(FILE, 'utf8'));
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function writeLocal(json) {
  try {
    mkdirSync(path.dirname(FILE), { recursive: true });
    const tmp = `${FILE}.${process.pid}.tmp`;
    writeFileSync(tmp, json);
    renameSync(tmp, FILE);
    return true;
  } catch {
    return false;
  }
}

async function readRemote() {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const auth = Buffer.from(`${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`).toString('base64');
  const info = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/resources/raw/upload/${POSTS_ID}`, {
    headers: { Authorization: `Basic ${auth}` },
    cache: 'no-store',
  });
  if (info.status === 404) return null;
  if (!info.ok) throw new Error('posts unavailable');
  const meta = await info.json();
  if (!meta.secure_url) return null;
  const file = await fetch(meta.secure_url, { cache: 'no-store' });
  if (!file.ok) throw new Error('posts unavailable');
  const parsed = JSON.parse(await file.text());
  return Array.isArray(parsed) ? parsed : null;
}

async function writeRemote(json) {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const timestamp = Math.floor(Date.now() / 1000);
  const params = { invalidate: 'true', overwrite: 'true', public_id: POSTS_ID, timestamp };
  const body = new FormData();
  body.append('file', new Blob([json], { type: 'application/json' }), 'posts.json');
  body.append('api_key', process.env.CLOUDINARY_API_KEY);
  body.append('timestamp', String(timestamp));
  body.append('public_id', POSTS_ID);
  body.append('overwrite', 'true');
  body.append('invalidate', 'true');
  body.append('signature', sign(params));
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/raw/upload`, { method: 'POST', body });
  if (!response.ok) throw new Error('posts not saved');
}

async function readAll() {
  if (cloudinaryReady()) {
    try {
      const remote = await readRemote();
      if (remote) return remote;
    } catch {
      // The file shipped with the site is still readable.
    }
  }
  return readLocal() || JSON.parse(JSON.stringify(SEED));
}

async function writeAll(posts) {
  const json = JSON.stringify(posts, null, 2);
  const localOk = writeLocal(json);
  if (cloudinaryReady()) {
    try {
      await writeRemote(json);
      return null;
    } catch {
      return { error: 'The article could not be saved. Check the Cloudinary settings and try again.' };
    }
  }
  if (!localOk) {
    return { error: 'This host cannot store articles on its disk. Add the Cloudinary settings, then publish again.' };
  }
  return null;
}

function cleanTags(value) {
  const source = Array.isArray(value) ? value.join(',') : String(value || '');
  const seen = new Set();
  const tags = [];
  for (const part of source.split(',')) {
    const tag = part.trim().replace(/^#/, '').slice(0, 32);
    const key = tag.toLowerCase();
    if (!tag || seen.has(key)) continue;
    seen.add(key);
    tags.push(tag);
    if (tags.length === 8) break;
  }
  return tags;
}

export async function validatePostInput(input, { id } = {}) {
  const title = String(input.title || '').trim();
  const excerpt = String(input.excerpt || '').trim();
  const body = String(input.body || '').replace(/\r\n/g, '\n').trim();
  const category = String(input.category || '').trim();
  const status = input.status === 'published' ? 'published' : 'draft';
  let slug = slugify(input.slug || title);

  if (title.length < 3 || title.length > 140) {
    return { error: 'Title needs to be between 3 and 140 characters.' };
  }
  if (excerpt.length > 300) {
    return { error: 'Excerpt needs to be 300 characters or fewer.' };
  }
  if (body.length < 1 || body.length > 20000) {
    return { error: 'Write the article body before saving. Keep it under 20,000 characters.' };
  }
  if (!CATEGORIES.includes(category)) {
    return { error: 'Choose a category.' };
  }
  if (!slug) return { error: 'Add a web address for this article.' };
  const coverImage = String(input.coverImage || '').trim();
  if (coverImage && !isStoredImage(coverImage)) {
    return { error: 'That cover image is not valid. Upload it again.' };
  }

  const posts = await readAll();
  if (posts.some((post) => post.slug === slug && post.id !== id)) {
    return { error: 'Another article already uses that web address.' };
  }

  return {
    value: {
      title,
      excerpt,
      body,
      category,
      status,
      slug,
      coverImage,
      tags: cleanTags(input.tags),
    },
  };
}

export async function listPosts() {
  const posts = await readAll();
  return posts.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

export async function listPublished() {
  const posts = await readAll();
  return posts
    .filter((post) => post.status === 'published')
    .sort((a, b) => String(b.publishedAt || b.createdAt).localeCompare(String(a.publishedAt || a.createdAt)))
    .map(publicPost);
}

export async function getPost(id) {
  const posts = await readAll();
  return posts.find((post) => post.id === id) || null;
}

export async function getPublishedBySlug(slug) {
  const posts = await readAll();
  const post = posts.find((item) => item.slug === slug && item.status === 'published');
  return post ? publicPost(post) : null;
}

export async function createPost(input) {
  const checked = await validatePostInput(input);
  if (checked.error) return checked;
  const now = new Date().toISOString();
  const post = {
    id: randomUUID(),
    ...checked.value,
    publishedAt: checked.value.status === 'published' ? now : null,
    createdAt: now,
    updatedAt: now,
  };
  const posts = await readAll();
  posts.unshift(post);
  const failed = await writeAll(posts);
  if (failed) return failed;
  return { post };
}

export async function updatePost(id, input) {
  const posts = await readAll();
  const index = posts.findIndex((post) => post.id === id);
  if (index < 0) return { error: 'That article no longer exists.' };
  const checked = await validatePostInput(input, { id });
  if (checked.error) return checked;
  const current = posts[index];
  const now = new Date().toISOString();
  const next = {
    ...current,
    ...checked.value,
    updatedAt: now,
    publishedAt:
      checked.value.status === 'published'
        ? current.publishedAt || now
        : null,
  };
  posts[index] = next;
  const failed = await writeAll(posts);
  if (failed) return failed;
  return { post: next, previousSlug: current.slug };
}

export async function deletePost(id) {
  const posts = await readAll();
  const current = posts.find((post) => post.id === id);
  if (!current) return { error: 'That article no longer exists.' };
  const failed = await writeAll(posts.filter((post) => post.id !== id));
  if (failed) return failed;
  return { post: current };
}
