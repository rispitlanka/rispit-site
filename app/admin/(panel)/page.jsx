import Link from 'next/link';
import { formatDate } from '@/lib/blog-format.mjs';
import { listPosts } from '@/lib/blog-store.mjs';

const NOTES = {
  published: 'Published. It is now on the blog.',
  draft: 'Saved as a draft. It stays off the public blog.',
  deleted: 'Article deleted.',
};

export default async function AdminHome({ searchParams }) {
  const query = await searchParams;
  const posts = listPosts();
  const note = NOTES[query.saved] || '';

  return (
    <>
      <div className="admin-heading">
        <div>
          <h1>Posts</h1>
          <p>Drafts stay private. Publish when an article should appear on the site.</p>
        </div>
        <Link href="/admin/posts/new" className="admin-primary">New post</Link>
      </div>
      {note && <p className="admin-note">{note}</p>}
      {posts.length === 0 ? (
        <p className="admin-empty">No articles yet. Write the first one.</p>
      ) : (
        <ul className="admin-list">
          {posts.map((post) => (
            <li key={post.id}>
              <div>
                <strong>{post.title}</strong>
                <span>{post.category} · {formatDate(post.updatedAt)}</span>
              </div>
              <em className={post.status === 'published' ? 'is-live' : ''}>
                {post.status === 'published' ? 'Published' : 'Draft'}
              </em>
              <Link href={`/admin/posts/${post.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
