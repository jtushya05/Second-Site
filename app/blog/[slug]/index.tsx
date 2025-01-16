import React from 'react';
import { useRouter } from "next/router";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("Current slug:", slug);

  // Here you can fetch the blog post data based on the slug
  // For now, we will use static data for the example
  const post = {
    title: "How to Choose the Right Career Path",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-2">1. Self-Assessment</h2>
        <p className="text-gray-700 mb-4">
          Start by assessing your strengths and weaknesses. Consider taking personality tests or career assessments to gain insights into your preferences and potential career matches.
        </p>
        <h2 className="text-2xl font-semibold mb-2">2. Research Career Options</h2>
        <p className="text-gray-700 mb-4">
          Explore various career paths that align with your interests. Research job descriptions, required skills, and potential growth in those fields.
        </p>
        <h2 className="text-2xl font-semibold mb-2">3. Seek Guidance</h2>
        <p className="text-gray-700 mb-4">
          Don’t hesitate to seek advice from mentors, career counselors, or professionals in your desired field. Their experiences can provide valuable insights.
        </p>
        <h2 className="text-2xl font-semibold mb-2">4. Gain Experience</h2>
        <p className="text-gray-700 mb-4">
          Consider internships, volunteer work, or part-time jobs in your areas of interest. Gaining hands-on experience can help you determine if a career is the right fit for you.
        </p>
        <h2 className="text-2xl font-semibold mb-2">5. Make a Decision</h2>
        <p className="text-gray-700 mb-4">
          After thorough research and self-reflection, it’s time to make a decision. Remember, it’s okay to change paths if you find that your initial choice isn’t the right one.
        </p>
      </>
    )
  };

  return (
    <article className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>
      <div className="relative w-full aspect-[16/9] mb-6">
        <Image
          src={post.image}
          alt="Career Path"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      {post.content}
    </article>
  );
};

export default BlogPost;
