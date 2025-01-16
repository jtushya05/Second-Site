import { BlogPost } from '../types/post';
import { expertCounselingPost } from './expert-counseling-post';
import { careerPathPost } from './career-path-post';
import { skillsPost } from './skills-post';
import { collegeApplicationsPost } from './college-applications-post';
import { softSkillsPost } from './soft-skills-post';
import { studyAbroadPost } from './ultimate-guide-to-studying-abroad';
import { studyAbroadDestinationPost } from './choose-best-study-abroad-destination';

// Store all posts for static path generation
const allPosts: Record<string, BlogPost> = {
  "expert-career-counseling-future": expertCounselingPost,
  "choose-right-career-path": careerPathPost,
  "top-skills-2025": skillsPost,
  "navigating-college-applications": collegeApplicationsPost,
  "role-of-soft-skills": softSkillsPost,
  "ultimate-guide-to-studying-abroad": studyAbroadPost ,
"choose-best-study-abroad-destination": studyAbroadDestinationPost // Updating the slug to match the expected format

};

// Get filtered and sorted posts
export async function getPosts(): Promise<Record<string, BlogPost>> {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return Object.fromEntries(
    Object.entries(allPosts)
      .filter(([_, post]) => {
        const postDate = new Date(post.date);
        postDate.setHours(0, 0, 0, 0);
        return postDate <= currentDate;
      })
      .sort(([_, a], [__, b]) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )
  );
}

// For static path generation
export async function getAllSlugs(): Promise<string[]> {
  return Object.keys(allPosts);
}

// For individual post pages
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return allPosts[slug];
}

// Export posts for direct access if needed
export const posts = allPosts;
