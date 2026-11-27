import PostEditor from '@/components/admin/PostEditor';

export default async function NewPostPage({ searchParams }) {
  const query = await searchParams;
  return (
    <>
      <div className="admin-heading">
        <div>
          <h1>New post</h1>
          <p>Save a draft to keep working, or publish it onto the blog.</p>
        </div>
      </div>
      <PostEditor error={query.error || ''} />
    </>
  );
}
