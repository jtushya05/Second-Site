import { Book } from '@/types/ebook';

export const studyAbroadGuideBook: Book = {
  id: 'study-abroad-guide',
  title: 'Complete Guide to Studying Abroad',
  author: 'Global Education Experts',
  description: 'Everything you need to know about studying abroad, from choosing the right destination to visa applications and cultural adaptation.',
  coverImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400',
  totalPages: 15,
  genre: 'Education',
  publishedDate: '2024',
  isbn: '978-0-987654-32-1',
  url: '/digital-library/books/study-abroad-guide',
  isPublic: true,
  accessLevel: 'public',
  pages: [
    {
      id: 'study-intro-page',
      pageNumber: 1,
      title: 'Why Study Abroad?',
      content: `
        <div class="book-page-content">
          <div class="book-header">
            <h1 class="book-chapter-title">Chapter 1</h1>
            <h2 class="book-section-title">Why Study Abroad?</h2>
          </div>
          
          <div class="book-epigraph">
            <blockquote>
              "Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime."
            </blockquote>
            <cite>— Mark Twain</cite>
          </div>

          <div class="book-text">
            <p class="book-opening-paragraph">
              <span class="drop-cap">I</span>n an increasingly interconnected world, the decision to pursue education beyond one's national borders has become more than just an academic choice—it has evolved into a transformative journey that shapes character, broadens perspectives, and opens doors to unprecedented opportunities.
            </p>
            
            <p>
              Studying abroad represents one of the most profound investments you can make in your personal and professional development. It is a journey that challenges your preconceptions, expands your worldview, and equips you with the global competencies essential for success in our interconnected world.
            </p>

            <h3 class="book-subheading">The Global Education Revolution</h3>
            
            <p>
              Today, over 5.3 million students worldwide choose to pursue their education in a country different from their homeland. This remarkable figure represents not just a statistical milestone, but a fundamental shift in how we approach education and personal growth.
            </p>

            <div class="book-statistics-box">
              <h4>By the Numbers:</h4>
              <ul class="book-stats-list">
                <li><strong>5.3 million</strong> students study internationally each year</li>
                <li><strong>73%</strong> report significantly increased self-confidence</li>
                <li><strong>85%</strong> secure employment faster than domestic graduates</li>
                <li><strong>64%</strong> pursue careers in international organizations</li>
              </ul>
            </div>

            <h3 class="book-subheading">Personal Transformation</h3>
            
            <p>
              The benefits of studying abroad extend far beyond academic credentials. Students consistently report profound personal transformations that influence every aspect of their lives:
            </p>

            <div class="book-benefit-section">
              <h4 class="book-benefit-title">🌟 Enhanced Self-Awareness</h4>
              <p>
                Living independently in a foreign environment forces you to confront your assumptions about the world and yourself. You discover strengths you never knew you possessed and develop resilience that will serve you throughout your life.
              </p>
            </div>

            <div class="book-benefit-section">
              <h4 class="book-benefit-title">🧠 Cultural Intelligence</h4>
              <p>
                Immersion in a different culture develops your ability to navigate diverse environments with sensitivity and effectiveness. This cultural fluency becomes invaluable in our globalized professional landscape.
              </p>
            </div>

            <div class="book-benefit-section">
              <h4 class="book-benefit-title">🗣️ Language Mastery</h4>
              <p>
                While classroom language learning has its merits, true fluency emerges from daily interaction with native speakers. The nuances of communication—from colloquialisms to cultural context—become second nature.
              </p>
            </div>
          </div>
        </div>

              <div class="benefit-category personal">
                <h3>🌱 Personal Growth</h3>
                <div class="benefit-list">
                  <div class="benefit-item">
                    <span class="benefit-icon">💪</span>
                    <div class="benefit-content">
                      <h4>Independence & Confidence</h4>
                      <p>Navigate new environments and develop self-reliance</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">🌐</span>
                    <div class="benefit-content">
                      <h4>Cultural Awareness</h4>
                      <p>Develop global perspective and cultural sensitivity</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">🗣️</span>
                    <div class="benefit-content">
                      <h4>Language Skills</h4>
                      <p>Achieve fluency in foreign languages through immersion</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">🧘</span>
                    <div class="benefit-content">
                      <h4>Adaptability</h4>
                      <p>Build resilience and problem-solving skills</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="benefit-category career">
                <h3>🚀 Career Advantages</h3>
                <div class="benefit-list">
                  <div class="benefit-item">
                    <span class="benefit-icon">🤝</span>
                    <div class="benefit-content">
                      <h4>Global Network</h4>
                      <p>Build lifelong connections across the world</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">💼</span>
                    <div class="benefit-content">
                      <h4>International Experience</h4>
                      <p>Stand out to employers with global perspective</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">📈</span>
                    <div class="benefit-content">
                      <h4>Enhanced Employability</h4>
                      <p>Graduates earn 15-25% higher starting salaries</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <span class="benefit-icon">🌏</span>
                    <div class="benefit-content">
                      <h4>Cross-Cultural Skills</h4>
                      <p>Essential skills for today's global economy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="success-stories">
            <h2>Success Stories</h2>
            <div class="stories-carousel">
              <div class="story-card">
                <div class="story-quote">"Studying in Germany opened doors I never imagined. The engineering program was world-class, and now I work for a Fortune 500 company."</div>
                <div class="story-author">- Sarah M., Mechanical Engineer</div>
              </div>
              <div class="story-card">
                <div class="story-quote">"My MBA in London connected me with classmates from 50+ countries. These relationships have been invaluable for my consulting career."</div>
                <div class="story-author">- Raj P., Management Consultant</div>
              </div>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/q8q8Q8Q8Q8Q',
          title: 'Study Abroad: Life-Changing Experiences',
          description: 'Hear from students who transformed their lives through international education'
        }
      ]
    },
    {
      id: 'choosing-destination-page',
      pageNumber: 2,
      title: 'Choosing Your Perfect Destination',
      content: `
        <div class="book-page-content">
          <h1 class="book-title">Choosing Your Perfect Destination</h1>
          
          <div class="intro-section">
            <p class="lead-text">Selecting the right country and university is crucial for your study abroad success. This decision will impact your education quality, career prospects, and life experiences.</p>
          </div>

          <div class="decision-framework">
            <h2>Decision Framework</h2>
            <div class="framework-grid">
              <div class="framework-category">
                <h3>🎓 Academic Factors</h3>
                <div class="factor-checklist">
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Program quality and accreditation</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Research opportunities and facilities</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Faculty expertise and reputation</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">University rankings and global recognition</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Alumni network and career services</span>
                  </div>
                </div>
              </div>

              <div class="framework-category">
                <h3>💰 Financial Considerations</h3>
                <div class="factor-checklist">
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Tuition fees and educational costs</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Cost of living and accommodation</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Scholarship and funding opportunities</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Work opportunities during studies</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Post-graduation work permits</span>
                  </div>
                </div>
              </div>

              <div class="framework-category">
                <h3>🌍 Practical Factors</h3>
                <div class="factor-checklist">
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Language requirements and support</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Visa policies and application process</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Climate and lifestyle preferences</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Safety and political stability</span>
                  </div>
                  <div class="checklist-item">
                    <span class="checkbox">✓</span>
                    <span class="item-text">Cultural fit and diversity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="destinations-overview">
            <h2>Top Study Destinations</h2>
            <div class="destinations-grid">
              <div class="destination-card usa">
                <div class="destination-header">
                  <span class="destination-flag">🇺🇸</span>
                  <h3>United States</h3>
                </div>
                <div class="destination-highlights">
                  <div class="highlight-item">
                    <span class="highlight-label">Strengths:</span>
                    <span class="highlight-value">Research opportunities, diverse programs</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Best For:</span>
                    <span class="highlight-value">STEM, Business, Liberal Arts</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Cost Range:</span>
                    <span class="highlight-value">$30K - $70K annually</span>
                  </div>
                </div>
              </div>

              <div class="destination-card uk">
                <div class="destination-header">
                  <span class="destination-flag">🇬🇧</span>
                  <h3>United Kingdom</h3>
                </div>
                <div class="destination-highlights">
                  <div class="highlight-item">
                    <span class="highlight-label">Strengths:</span>
                    <span class="highlight-value">Rich academic tradition, shorter programs</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Best For:</span>
                    <span class="highlight-value">Finance, Literature, History</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Cost Range:</span>
                    <span class="highlight-value">£15K - £45K annually</span>
                  </div>
                </div>
              </div>

              <div class="destination-card canada">
                <div class="destination-header">
                  <span class="destination-flag">🇨🇦</span>
                  <h3>Canada</h3>
                </div>
                <div class="destination-highlights">
                  <div class="highlight-item">
                    <span class="highlight-label">Strengths:</span>
                    <span class="highlight-value">Multicultural, post-study work options</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Best For:</span>
                    <span class="highlight-value">Engineering, Natural Sciences</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Cost Range:</span>
                    <span class="highlight-value">CAD $20K - $40K annually</span>
                  </div>
                </div>
              </div>

              <div class="destination-card australia">
                <div class="destination-header">
                  <span class="destination-flag">🇦🇺</span>
                  <h3>Australia</h3>
                </div>
                <div class="destination-highlights">
                  <div class="highlight-item">
                    <span class="highlight-label">Strengths:</span>
                    <span class="highlight-value">High quality education, beautiful lifestyle</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Best For:</span>
                    <span class="highlight-value">Medicine, Mining, Marine Sciences</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Cost Range:</span>
                    <span class="highlight-value">AUD $25K - $50K annually</span>
                  </div>
                </div>
              </div>

              <div class="destination-card germany">
                <div class="destination-header">
                  <span class="destination-flag">🇩🇪</span>
                  <h3>Germany</h3>
                </div>
                <div class="destination-highlights">
                  <div class="highlight-item">
                    <span class="highlight-label">Strengths:</span>
                    <span class="highlight-value">Strong engineering, low tuition costs</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Best For:</span>
                    <span class="highlight-value">Engineering, Technology, Sciences</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Cost Range:</span>
                    <span class="highlight-value">€500 - €20K annually</span>
                  </div>
                </div>
              </div>

              <div class="destination-card netherlands">
                <div class="destination-header">
                  <span class="destination-flag">🇳🇱</span>
                  <h3>Netherlands</h3>
                </div>
                <div class="destination-highlights">
                  <div class="highlight-item">
                    <span class="highlight-label">Strengths:</span>
                    <span class="highlight-value">English-taught programs, innovation hub</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Best For:</span>
                    <span class="highlight-value">Business, International Relations</span>
                  </div>
                  <div class="highlight-item">
                    <span class="highlight-label">Cost Range:</span>
                    <span class="highlight-value">€8K - €20K annually</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/destination-comparison',
          title: 'Study Destination Comparison Guide',
          description: 'Detailed comparison of top study abroad destinations'
        },
        {
          type: 'interactive',
          url: '/tools/destination-selector',
          title: 'Destination Selection Tool',
          description: 'Interactive tool to help you choose the perfect study destination'
        }
      ]
    },
    {
      id: 'visa-application-page',
      pageNumber: 3,
      title: 'Visa Application Mastery (Premium Content)',
      accessLevel: 'premium',
      restricted: true,
      content: `
        <div class="book-page-content premium-content">
          <div class="premium-header">
            <span class="premium-badge">👑 PREMIUM CONTENT</span>
            <h1 class="book-title">Visa Application Mastery</h1>
          </div>
          
          <div class="content-preview">
            <h2>🔒 This section contains exclusive premium content</h2>
            <p class="preview-text">Get insider strategies and step-by-step guidance that have helped thousands of students secure their study visas successfully.</p>
            
            <div class="premium-benefits">
              <h3>What Premium Members Get:</h3>
              <div class="benefits-grid">
                <div class="benefit-item">
                  <span class="benefit-icon">📋</span>
                  <div class="benefit-content">
                    <h4>Complete Document Checklists</h4>
                    <p>Country-specific requirements with templates</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">💡</span>
                  <div class="benefit-content">
                    <h4>Insider Tips</h4>
                    <p>What visa officers really look for</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">🎯</span>
                  <div class="benefit-content">
                    <h4>Common Mistakes to Avoid</h4>
                    <p>Learn from others' failures</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">🗣️</span>
                  <div class="benefit-content">
                    <h4>Interview Preparation</h4>
                    <p>Mock interviews and practice questions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="upgrade-cta">
              <button class="premium-button">Upgrade to Premium Access</button>
              <p class="cta-subtext">Join thousands of successful students who used our premium guidance</p>
            </div>
          </div>
        </div>
      `,
      seoContent: `
        <h1>Student Visa Application Guide</h1>
        <p>Comprehensive guide to student visa applications for all major study destinations. Learn the step-by-step process, required documents, and success strategies for securing your study visa.</p>
        
        <h2>Visa Application Process Overview</h2>
        <p>The student visa application process varies by country but generally includes document preparation, application submission, biometric data collection, and visa interview (if required).</p>
        
        <h3>Required Documents (General)</h3>
        <ul>
          <li>Passport with minimum 6 months validity</li>
          <li>Letter of acceptance from educational institution</li>
          <li>Proof of financial support</li>
          <li>Academic transcripts and certificates</li>
          <li>English language proficiency test scores</li>
          <li>Statement of purpose</li>
          <li>Medical examination reports</li>
          <li>Police clearance certificate</li>
        </ul>
        
        <h3>Financial Requirements by Country</h3>
        <p>Each country has specific financial requirements to demonstrate your ability to support yourself during studies. These typically include tuition fees plus living expenses for the duration of your program.</p>
        
        <h3>Interview Preparation Tips</h3>
        <p>If a visa interview is required, preparation is crucial. Be ready to discuss your study plans, career goals, ties to your home country, and financial arrangements.</p>
        
        <p>Get detailed country-specific visa guides, document templates, and expert consultation to maximize your visa approval chances.</p>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/visa-success-tips',
          title: 'Visa Application Success Stories',
          description: 'Learn from students who successfully navigated the visa process'
        }
      ]
    }
    // Additional pages can be added here...
  ]
};

export default studyAbroadGuideBook;
