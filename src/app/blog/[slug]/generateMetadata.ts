import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params?.slug;
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'This blog post does not exist.',
    };
  }
  const description = post.excerpt || post.content?.slice(0, 160) || post.title;
  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
    },
    keywords: post.tags,
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}
