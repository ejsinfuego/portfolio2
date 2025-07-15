import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'This blog post does not exist.',
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
    },
    keywords: [...post.tags, ...post.keywords],
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}
