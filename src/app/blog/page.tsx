'use client';

import { useState } from 'react';
import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';
import Tag from '../components/Tag/Tag';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags across all blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#eaeaea9d]">Posts</h1>
          <Link href="/">
            <button className="px-4 py-2 rounded-full text-sm bg-sky-800/20 text-[#eaeaea9d] hover:bg-sky-800/40 transition-colors">
              ← Back to Home
            </button>
          </Link>
        </div>
        
        {/* Tags filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-1 rounded-full text-sm ${
                selectedTag === null 
                  ? 'bg-sky-600 text-white' 
                  : 'bg-sky-800/20 text-[#eaeaea9d] hover:bg-sky-800/40'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1 rounded-full text-sm ${
                  selectedTag === tag
                    ? 'bg-sky-600 text-white'
                    : 'bg-sky-800/20 text-[#eaeaea9d] hover:bg-sky-800/40'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog posts list */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-[#eaeaea1a] pt-8 first:border-t-0 first:pt-0"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-bold hover:text-sky-400 transition-colors mb-2 text-[#eaeaea9d]">
                  {post.title}
                </h2>
              </Link>
              <div className="text-sm text-[#eaeaea7d] mb-3">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <p className="text-[#eaeaea9d] mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-block text-sky-500 hover:text-sky-400 transition-colors"
              >
                Read more →
              </Link>
            </motion.div>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-[#eaeaea9d] italic">
              No posts found with selected filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;