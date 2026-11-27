import { notFound } from 'next/navigation';
import PostEditor from '@/components/admin/PostEditor';
import { getPost } from '@/lib/blog-store.mjs';

export default async function EditPostPage({ params, searchParams }) {
  const { id } = await params;
  const query = await searchParams;
  const post = await getPost(id);
  if (!post) notFound();
  return (
    <>
      <div className="admin-heading">
        <div>
          <h1>Edit post</h1>
          <p>{post.status === 'published' ? 'This article is on the public blog.' : 'This draft is not on the public blog.'}</p>
        </div>
      </div>
      <PostEditor post={post} error={query.error || ''} />
    </>
  );
}
