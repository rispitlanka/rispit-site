'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  ADMIN_COOKIE,
  adminConfigured,
  cookieOptions,
  isAdmin,
  loginAllowed,
  noteLoginFailure,
  passwordMatches,
  sessionToken,
} from '@/lib/admin-session.mjs';
import { saveBlogImage } from '@/lib/blog-images.mjs';
import { createPost, deletePost, updatePost } from '@/lib/blog-store.mjs';

function fields(formData) {
  return {
    title: formData.get('title'),
    slug: formData.get('slug'),
    excerpt: formData.get('excerpt'),
    category: formData.get('category'),
    tags: formData.get('tags'),
    body: formData.get('body'),
    coverImage: formData.get('coverImage'),
    status: formData.get('status'),
  };
}

function refresh(post, previousSlug) {
  revalidatePath('/blog');
  revalidatePath(`/blog/${post.slug}`);
  if (previousSlug && previousSlug !== post.slug) revalidatePath(`/blog/${previousSlug}`);
}

export async function loginAction(formData) {
  if (!adminConfigured()) redirect('/admin/login?error=config');
  if (!(await loginAllowed())) redirect('/admin/login?error=rate');
  if (!passwordMatches(formData.get('password'))) {
    await noteLoginFailure();
    redirect('/admin/login?error=1');
  }
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, sessionToken(), cookieOptions());
  redirect('/admin');
}

export async function logoutAction() {
  const jar = await cookies();
  jar.set(ADMIN_COOKIE, '', { ...cookieOptions(), maxAge: 0 });
  redirect('/admin/login');
}

export async function uploadImageAction(formData) {
  if (!(await isAdmin())) return { error: 'Sign in again.' };
  return saveBlogImage(formData.get('image'));
}

export async function savePostAction(formData) {
  if (!(await isAdmin())) redirect('/admin/login');
  const id = String(formData.get('id') || '');
  const input = fields(formData);
  const result = id ? updatePost(id, input) : createPost(input);
  if (result.error) {
    const back = id ? `/admin/posts/${id}` : '/admin/posts/new';
    redirect(`${back}?error=${encodeURIComponent(result.error)}`);
  }
  refresh(result.post, result.previousSlug);
  redirect(`/admin?saved=${result.post.status === 'published' ? 'published' : 'draft'}`);
}

export async function deletePostAction(formData) {
  if (!(await isAdmin())) redirect('/admin/login');
  const id = String(formData.get('id') || '');
  const result = deletePost(id);
  if (result.error) redirect(`/admin/posts/${id}?error=${encodeURIComponent(result.error)}`);
  revalidatePath('/blog');
  if (result.post?.slug) revalidatePath(`/blog/${result.post.slug}`);
  redirect('/admin?saved=deleted');
}
