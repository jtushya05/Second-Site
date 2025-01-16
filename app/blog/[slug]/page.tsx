import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next"; // Import Metadata type
import type { BlogPost } from "../types/post"; // Ensure BlogPost is defined correctly

type PageProps = {
  params: {
    slug: string;
  };
};

async function getPostData(slug: string): Promise<BlogPost | undefined> {
  const { getPostBySlug } = await import("../data/posts");
  return getPostBySlug(slug);
}

async function getStaticPaths() {
  const { getAllSlugs } = await import("../data/posts");
  return getAllSlugs();
}

export async function generateStaticParams() {
  const slugs = await getStaticPaths();
  console.log("Generated slugs:", slugs);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);

    if (!post) {
      return {
        title: "Post Not Found | EA Global",
        description: "The requested blog post could not be found.",
        metadataBase: new URL("https://studyoverseas.netlify.app"), // Add metadataBase
      };
    }

    return {
      title: post.metadata.title,
      description: post.metadata.description,
      keywords: post.metadata.keywords,
      metadataBase: new URL("https://studyoverseas.netlify.app"), // Add metadataBase
      openGraph: {
        title: post.metadata.title,
        description: post.metadata.description,
        url: `https://studyoverseas.netlify.app/blog/${params.slug}`,
        images: [
          {
            url: post.image.startsWith("http")
              ? post.image
              : `https://studyoverseas.netlify.app${post.image}`, // Handle relative image URLs
            width: 1200,
            height: 630,
            alt: post.metadata.title || "EA Global Blog Post",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error | EA Global",
      description: "An error occurred while loading the blog post.",
      metadataBase: new URL("https://studyoverseas.netlify.app"),
    };
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center">Post Not Found</h1>
        <p className="text-center mt-4">
          The requested blog post could not be found.
        </p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.metadata.structuredData),
        }}
      />

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>

      <div className="relative w-full h-[400px] mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>

      <div className="prose max-w-none space-y-8">
        {post.content.map((section, index: number) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {section.internalLinks?.reduce(
                (
                  text: string,
                  link: { context: string; url: string; text: string },
                  linkIndex: number
                ) => {
                  const parts = text.split(link.context);
                  if (parts.length === 2) {
                    return (
                      parts[0] +
                      link.context +
                      " " +
                      `<a href="${link.url}" class="text-primary hover:underline">${link.text}</a>` +
                      parts[1]
                    );
                  }
                  return text;
                },
                section.text
              ) || section.text}
            </div>
            {section.image && (
              <div className="relative w-full h-[300px] mt-6">
                <Image
                  src={section.image}
                  alt={`${section.heading} illustration`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {post.relatedPosts.map(
              (relatedPost: { slug: string; title: string; context: string }) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-white rounded-lg shadow-md p-6 transition-all group-hover:shadow-lg">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600">{relatedPost.context}</p>
                    <span className="inline-flex items-center mt-4 text-primary font-medium">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </article>
  );
}
