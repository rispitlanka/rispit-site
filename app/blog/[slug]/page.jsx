import { notFound } from 'next/navigation';
import { BlogArticle } from '@/components/blog/BlogViews';
import { getPublishedBySlug, listPublished } from '@/lib/blog-store.mjs';
import '../blog.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPublishedBySlug(slug);
  if (!post) return { title: 'Article' };
  return { title: post.title, description: post.excerpt || undefined };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPublishedBySlug(slug);
  if (!post) notFound();
  const related = (await listPublished())
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  return <BlogArticle post={post} related={related} />;
}
