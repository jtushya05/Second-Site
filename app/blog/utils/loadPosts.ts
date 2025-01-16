import { BlogPost } from '../types/post';

// Import all blog posts
import { expertCounselingPost } from '../data/expert-counseling-post';
import { careerPathPost } from '../data/career-path-post';
import { skillsPost } from '../data/skills-post';
import { collegeApplicationsPost } from '../data/college-applications-post';
import { softSkillsPost } from '../data/soft-skills-post';
import { studyAbroadPost } from '../data/ultimate-guide-to-studying-abroad';
import { studyAbroadDestinationPost } from '../data/choose-best-study-abroad-destination';


// Create a map of all posts
const allPosts: Record<string, BlogPost> = {
  "expert-career-counseling-future": expertCounselingPost,
  "choose-right-career-path": careerPathPost,
  "top-skills-2025": skillsPost,
  "navigating-college-applications": collegeApplicationsPost,
  "role-of-soft-skills": softSkillsPost,
  "ultimate-guide-to-studying-abroad": studyAbroadPost,
  "choose-best-study-abroad-destination" : studyAbroadDestinationPost
};

export function loadPosts(): Record<string, BlogPost> {
  // Get current date at midnight UTC for consistent comparison
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);

  // Filter and sort posts
  const publishedPosts = Object.entries(allPosts)
    .filter(([_, post]) => {
      const postDate = new Date(post.date);
      postDate.setUTCHours(0, 0, 0, 0);
      return postDate <= currentDate;
    })
    .sort(([_, a], [__, b]) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  // Convert back to object
  return Object.fromEntries(publishedPosts);
}

// Get all slugs for static path generation
export function getAllSlugs(): string[] {
  return Object.keys(allPosts);
}

// Get a specific post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return allPosts[slug];
}

// Get related posts
export function getRelatedPosts(currentSlug: string, count: number = 2): BlogPost[] {
  const currentPost = allPosts[currentSlug];
  if (!currentPost) return [];

  return Object.values(allPosts)
    .filter(post => post.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}
