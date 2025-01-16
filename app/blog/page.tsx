import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from './types/post';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Insights Blog | Educational Guidance | EA Global",
  description: "Explore expert career guidance, educational insights, and professional development tips from EA Global's counseling experts.",
  openGraph: {
    title: "Career Insights Blog | EA Global",
    description: "Expert career guidance and educational insights",
    type: "website",
  },
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const { getPosts } = await import('./data/posts');
  const posts = await getPosts();
  return Object.values(posts);
}

export default async function BlogPage() {
  try {
    const blogPosts = await getBlogPosts();

    return (
      <main className="min-h-screen pt-20">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">EA Global Blog</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: BlogPost) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline inline-flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return (
      <main className="min-h-screen pt-20">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Error</h1>
            <p className="text-center">An error occurred while loading the blog posts.</p>
          </div>
        </section>
      </main>
    );
  }
}
