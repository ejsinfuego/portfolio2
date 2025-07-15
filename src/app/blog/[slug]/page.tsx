'use client';


import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import Tag from '@/app/components/Tag/Tag';
import { ArrowLeft } from '@deemlol/next-icons';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Image from 'next/image';

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const [renderedContent, setRenderedContent] = useState<string>('');

  const slug = params?.slug as string;
  const post = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    
    if (!post) {
      router.push('/blog');
      return;
    }

    // Redirect to blog page if post not found
    const parseMarkdown = async () => {
      if (post?.content) {
        const html = await marked.parse(post.content);
        setRenderedContent(html);
      }
    };

    parseMarkdown();
  }, [post, router, slug]);

  if (!post) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[#eaeaea9d] hover:text-sky-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to all posts</span>
          </button>
          
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 rounded-full text-sm bg-sky-800/20 text-[#eaeaea9d] hover:bg-sky-800/40 transition-colors"
          >
            ← Back to Home
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#eaeaea9d]">{post.title}</h1>

        <div className="text-sm text-[#eaeaea7d] mb-6">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>

        {post.coverImage && (
          <div className="mb-8">
            <Image
              height={500}
              width={500}
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div 
          className="prose prose-invert prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: renderedContent }} 
        />
      </div>
    </div>
  );
}