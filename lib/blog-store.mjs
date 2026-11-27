import { randomUUID } from 'crypto';
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

function ensureFile() {
  mkdirSync(path.dirname(FILE), { recursive: true });
  try {
    readFileSync(FILE, 'utf8');
  } catch {
    writeFileSync(FILE, JSON.stringify(SEED, null, 2));
  }
}

function readAll() {
  ensureFile();
  const raw = readFileSync(FILE, 'utf8');
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed;
}

function writeAll(posts) {
  mkdirSync(path.dirname(FILE), { recursive: true });
  const tmp = `${FILE}.${process.pid}.tmp`;
  writeFileSync(tmp, JSON.stringify(posts, null, 2));
  renameSync(tmp, FILE);
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

export function validatePostInput(input, { id } = {}) {
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

  const posts = readAll();
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

export function listPosts() {
  return readAll().sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

export function listPublished() {
  return readAll()
    .filter((post) => post.status === 'published')
    .sort((a, b) => String(b.publishedAt || b.createdAt).localeCompare(String(a.publishedAt || a.createdAt)))
    .map(publicPost);
}

export function getPost(id) {
  return readAll().find((post) => post.id === id) || null;
}

export function getPublishedBySlug(slug) {
  const post = readAll().find((item) => item.slug === slug && item.status === 'published');
  return post ? publicPost(post) : null;
}

export function createPost(input) {
  const checked = validatePostInput(input);
  if (checked.error) return checked;
  const now = new Date().toISOString();
  const post = {
    id: randomUUID(),
    ...checked.value,
    publishedAt: checked.value.status === 'published' ? now : null,
    createdAt: now,
    updatedAt: now,
  };
  const posts = readAll();
  posts.unshift(post);
  writeAll(posts);
  return { post };
}

export function updatePost(id, input) {
  const posts = readAll();
  const index = posts.findIndex((post) => post.id === id);
  if (index < 0) return { error: 'That article no longer exists.' };
  const checked = validatePostInput(input, { id });
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
  writeAll(posts);
  return { post: next, previousSlug: current.slug };
}

export function deletePost(id) {
  const posts = readAll();
  const current = posts.find((post) => post.id === id);
  if (!current) return { error: 'That article no longer exists.' };
  writeAll(posts.filter((post) => post.id !== id));
  return { post: current };
}
