'use client';

import { useMemo, useState } from 'react';
import { CATEGORIES, slugify } from '@/lib/blog-format.mjs';
import { deletePostAction, savePostAction, uploadImageAction } from '@/app/admin/actions';

export default function PostEditor({ post, error }) {
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));
  const [body, setBody] = useState(post?.body || '');
  const [cover, setCover] = useState(post?.coverImage || '');
  const [uploading, setUploading] = useState(false);
  const [imageError, setImageError] = useState('');
  const address = useMemo(() => slugify(slugTouched ? slug : title), [slug, slugTouched, title]);

  async function upload(file) {
    if (!file) return '';
    if (file.size > 5 * 1024 * 1024) {
      setImageError('Images need to be 5 MB or smaller.');
      return '';
    }
    setUploading(true);
    setImageError('');
    const data = new FormData();
    data.set('image', file);
    const result = await uploadImageAction(data);
    setUploading(false);
    if (result?.error) {
      setImageError(result.error);
      return '';
    }
    return result.url;
  }

  return (
    <form className="admin-editor" action={savePostAction}>
      {post?.id && <input type="hidden" name="id" value={post.id} />}
      {error && <p className="admin-error">{error}</p>}
      <label>
        Title
        <input
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          maxLength={140}
        />
      </label>
      <label>
        Web address
        <input
          name="slug"
          value={address}
          onChange={(event) => {
            setSlugTouched(true);
            setSlug(event.target.value);
          }}
          required
        />
        <small>/blog/{address || 'your-article'}</small>
      </label>
      <div className="admin-split">
        <label>
          Category
          <select name="category" defaultValue={post?.category || CATEGORIES[0]}>
            {CATEGORIES.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label>
          Tags
          <input name="tags" defaultValue={(post?.tags || []).join(', ')} placeholder="MVP, Startups" />
        </label>
      </div>
      <label>
        Excerpt
        <textarea name="excerpt" defaultValue={post?.excerpt || ''} rows={3} maxLength={300} />
      </label>
      <div className="admin-upload">
        <input type="hidden" name="coverImage" value={cover} />
        {cover && <img className="admin-preview" src={cover} alt="" />}
        <div className="admin-file">
          <label>
            Cover image
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              disabled={uploading}
              onChange={async (event) => {
                const url = await upload(event.target.files?.[0]);
                event.target.value = '';
                if (url) setCover(url);
              }}
            />
          </label>
          {cover && <button type="button" className="admin-quiet" onClick={() => setCover('')}>Remove</button>}
        </div>
        <small>JPG, PNG, WEBP, or GIF. Up to 5 MB. Shown on the blog card and at the top of the article.</small>
      </div>
      <label>
        Article
        <textarea name="body" value={body} onChange={(event) => setBody(event.target.value)} rows={18} required />
        <small>Start a line with ## for a heading, - for a list item, or &gt; for a quote.</small>
      </label>
      <div className="admin-upload">
        <label>
          Image inside the article
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            disabled={uploading}
            onChange={async (event) => {
              const file = event.target.files?.[0];
              const url = await upload(file);
              event.target.value = '';
              if (!url) return;
              const alt = (file.name || 'Image').replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ').slice(0, 80);
              setBody((current) => `${current.trim()}\n\n![${alt}](${url})\n`);
            }}
          />
        </label>
        {uploading && <small>Uploading…</small>}
        {imageError && <p className="admin-error">{imageError}</p>}
      </div>
      <input type="hidden" name="status" defaultValue="draft" />
      <div className="admin-actions">
        <button
          type="submit"
          className="admin-quiet"
          onClick={(event) => { event.currentTarget.form.elements.status.value = 'draft'; }}
        >
          Save draft
        </button>
        <button
          type="submit"
          onClick={(event) => { event.currentTarget.form.elements.status.value = 'published'; }}
        >
          Publish
        </button>
        {post?.status === 'published' && (
          <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer">View live</a>
        )}
      </div>
      {post?.id && (
        <div className="admin-danger">
          <p>Deleting removes the article from the site.</p>
          <button type="submit" formAction={deletePostAction} formNoValidate className="admin-danger-btn">
            Delete article
          </button>
        </div>
      )}
    </form>
  );
}
