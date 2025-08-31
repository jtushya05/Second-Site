import { Book } from '@/types/ebook';

// Import individual book files
import { top20CareersBook } from './books/top-20-careers';
import { studyAbroadGuideBook } from './books/study-abroad-guide';
import { languageTestPrepBook } from './books/language-test-prep';
import { scholarshipGuideBook } from './books/scholarship-guide';

// Export all books as a collection
export const sampleBooks: Book[] = [
  top20CareersBook,
  studyAbroadGuideBook,
  languageTestPrepBook,
  scholarshipGuideBook,
];

// Export individual books for specific use
export { 
  top20CareersBook, 
  studyAbroadGuideBook, 
  languageTestPrepBook, 
  scholarshipGuideBook 
};
