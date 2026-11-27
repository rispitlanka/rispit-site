import { BlogIndex } from '@/components/blog/BlogViews';
import { listPublished } from '@/lib/blog-store.mjs';
import './blog.css';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Blog' };

export default function Page() {
  return <BlogIndex posts={listPublished()} />;
}
