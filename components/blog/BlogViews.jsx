'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Main from '@/components/dc/Main';
import Footer from '@/components/dc/Footer';
import MobNav from '@/components/dc/MobNav';
import MobFooter from '@/components/dc/MobFooter';
import { CATEGORIES } from '@/lib/blog-format.mjs';

function Cover({ title, featured, src }) {
  const className = featured ? 'blog-cover is-featured' : 'blog-cover';
  if (src) {
    return (
      <div className={`${className} has-image`}>
        <img src={src} alt="" />
      </div>
    );
  }
  return (
    <div className={className} aria-hidden="true">
      <span>{title.slice(0, 1)}</span>
    </div>
  );
}

export function BlogIndex({ posts }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const inCategory = category === 'All' || post.category === category;
      const inQuery = !q || `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [posts, category, query]);
  const [featured, ...rest] = visible;

  const body = (
    <>
      <section className="blog-hero">
        <div>
          <p className="blog-pill"><i />The Rispit Blog</p>
          <h1>Lessons from <span>building MVPs.</span></h1>
          <p>Practical guides on product, design, development and launch, for founders building their first version.</p>
        </div>
        <label className="blog-search">
          <span className="sr">Search articles</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search articles" />
        </label>
      </section>

      {posts.length === 0 ? (
        <p className="blog-empty">No articles yet.</p>
      ) : visible.length === 0 ? (
        <p className="blog-empty">No articles match that search.</p>
      ) : (
        <>
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="blog-feature">
              <Cover title={featured.title} featured src={featured.coverImage} />
              <div>
                <p>{featured.category} · {featured.dateLabel} · {featured.readLabel}</p>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <strong>Read article</strong>
              </div>
            </Link>
          )}
          <div className="blog-tools">
            <h2>All articles</h2>
            <div role="tablist" aria-label="Filter by topic">
              {['All', ...CATEGORIES].map((label) => (
                <button key={label} type="button" role="tab" aria-selected={category === label} onClick={() => setCategory(label)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="blog-grid">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card">
                <Cover title={post.title} src={post.coverImage} />
                <p>{post.category} · {post.readLabel}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="v-desktop blog-page">
        <div className="blog-nav"><Main active="Blogs" /></div>
        {body}
        <Footer />
      </div>
      <div className="v-mobile blog-page is-mobile">
        <MobNav active="Blogs" />
        {body}
        <MobFooter />
      </div>
    </>
  );
}

function Share({ title }) {
  function open(kind) {
    const url = window.location.href;
    if (kind === 'copy') {
      navigator.clipboard?.writeText(url);
      return;
    }
    const href = kind === 'x'
      ? `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
      : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(href, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className="blog-share">
      <span>Share</span>
      <button type="button" onClick={() => open('linkedin')} aria-label="Share on LinkedIn">in</button>
      <button type="button" onClick={() => open('x')} aria-label="Share on X">X</button>
      <button type="button" onClick={() => open('copy')} aria-label="Copy link">Copy</button>
    </div>
  );
}

export function BlogArticle({ post, related }) {
  const article = (
    <>
      <header className="blog-article-hero">
        <nav aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <strong>{post.category}</strong>
        </nav>
        <h1>{post.title}</h1>
        {post.excerpt && <p>{post.excerpt}</p>}
        <div className="blog-meta">
          <span>{post.category}</span>
          <span>{post.dateLabel} · {post.readLabel}</span>
          <Share title={post.title} />
        </div>
      </header>
      <Cover title={post.title} featured src={post.coverImage} />
      <div className="blog-layout">
        {post.blocks.some((block) => block.type === 'h2') && (
          <aside className="blog-toc">
            <p>On this page</p>
            {post.blocks.filter((block) => block.type === 'h2').map((block) => (
              <a key={block.id} href={`#${block.id}`}>{block.text}</a>
            ))}
          </aside>
        )}
        <article className="blogpost--rsp-body">
          {post.blocks.map((block, index) => {
            if (block.type === 'h2') return <h2 key={block.id} id={block.id}>{block.text}</h2>;
            if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>;
            if (block.type === 'list') {
              return (
                <ul key={index}>
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              );
            }
            if (block.type === 'image') {
              return (
                <figure key={block.src}>
                  <img src={block.src} alt={block.alt || ''} />
                </figure>
              );
            }
            return <p key={index}>{block.text}</p>;
          })}
          {post.tags.length > 0 && (
            <div className="blog-tags">
              {post.tags.map((tag) => <span key={tag}>#{tag.replace(/\s+/g, '')}</span>)}
            </div>
          )}
        </article>
        <aside className="blog-cta">
          <strong>Have an idea you want to build?</strong>
          <p>Let&apos;s scope your first version together on a 20-minute call.</p>
          <Link href="/contact">Book a call</Link>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="blog-related">
          <div>
            <h2>Keep reading</h2>
            <Link href="/blog">All articles</Link>
          </div>
          <div className="blog-grid">
            {related.map((item) => (
              <Link key={item.id} href={`/blog/${item.slug}`} className="blog-card">
                <Cover title={item.title} src={item.coverImage} />
                <p>{item.category} · {item.readLabel}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );

  return (
    <>
      <div className="v-desktop blog-page">
        <div className="blog-nav"><Main active="Blogs" /></div>
        {article}
        <Footer />
      </div>
      <div className="v-mobile blog-page is-mobile">
        <MobNav active="Blogs" />
        {article}
        <MobFooter />
      </div>
    </>
  );
}
