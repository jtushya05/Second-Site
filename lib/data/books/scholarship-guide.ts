import { Book } from '@/types/ebook';

export const scholarshipGuideBook: Book = {
  id: 'scholarship-guide',
  title: 'Complete Scholarship Guide',
  author: 'EA Global Scholarship Team',
  description: 'Discover and secure scholarships for international education. From application strategies to interview preparation.',
  coverImage: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=400',
  totalPages: 10,
  genre: 'Financial Aid',
  publishedDate: '2024',
  isbn: '978-0-987654-34-5',
  url: '/digital-library/books/scholarship-guide',
  isPublic: false,
  accessLevel: 'premium',
  requiredRoles: ['premium', 'vip'],
  pages: [
    {
      id: 'scholarship-overview',
      pageNumber: 1,
      title: 'Scholarship Opportunities Landscape',
      content: `
        <div class="book-page-content">
          <h1 class="book-title">Complete Scholarship Guide</h1>
          
          <div class="intro-section">
            <p class="lead-text">Unlock thousands of scholarship opportunities worldwide. With the right strategy, you can significantly reduce your education costs or even study for free.</p>
            
            <div class="stats-banner">
              <div class="stat-item">
                <span class="stat-number">$46B</span>
                <span class="stat-label">In scholarships available annually</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1.7M</span>
                <span class="stat-label">Scholarships go unclaimed each year</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">85%</span>
                <span class="stat-label">Of students don't apply for scholarships</span>
              </div>
            </div>
          </div>

          <div class="scholarship-types">
            <h2>Types of Scholarships</h2>
            
            <div class="types-grid">
              <div class="type-category merit">
                <div class="category-header">
                  <span class="category-icon">🏆</span>
                  <h3>Merit-Based Scholarships</h3>
                </div>
                <div class="category-content">
                  <p class="category-description">Awarded based on academic excellence, leadership, or special talents.</p>
                  <div class="scholarship-examples">
                    <h4>Examples:</h4>
                    <div class="example-item">
                      <strong>Rhodes Scholarship</strong>
                      <span class="amount">Full tuition + living expenses</span>
                      <span class="destination">Oxford University</span>
                    </div>
                    <div class="example-item">
                      <strong>Fulbright Program</strong>
                      <span class="amount">$15,000 - $50,000</span>
                      <span class="destination">United States</span>
                    </div>
                    <div class="example-item">
                      <strong>DAAD Scholarships</strong>
                      <span class="amount">€850 - €1,200/month</span>
                      <span class="destination">Germany</span>
                    </div>
                  </div>
                  <div class="requirements">
                    <h4>Typical Requirements:</h4>
                    <ul>
                      <li>High GPA (3.5+ or equivalent)</li>
                      <li>Standardized test scores</li>
                      <li>Leadership experience</li>
                      <li>Research experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="type-category need-based">
                <div class="category-header">
                  <span class="category-icon">🤝</span>
                  <h3>Need-Based Scholarships</h3>
                </div>
                <div class="category-content">
                  <p class="category-description">For students who demonstrate financial need.</p>
                  <div class="scholarship-examples">
                    <h4>Examples:</h4>
                    <div class="example-item">
                      <strong>MasterCard Foundation Scholars</strong>
                      <span class="amount">Full funding</span>
                      <span class="destination">Various universities</span>
                    </div>
                    <div class="example-item">
                      <strong>Joint Japan World Bank</strong>
                      <span class="amount">Full tuition + stipend</span>
                      <span class="destination">Graduate programs</span>
                    </div>
                    <div class="example-item">
                      <strong>University of Toronto Lester B. Pearson</strong>
                      <span class="amount">Full tuition + living costs</span>
                      <span class="destination">Canada</span>
                    </div>
                  </div>
                  <div class="requirements">
                    <h4>Typical Requirements:</h4>
                    <ul>
                      <li>Family income documentation</li>
                      <li>Financial statements</li>
                      <li>Tax returns</li>
                      <li>Bank statements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="type-category specific">
                <div class="category-header">
                  <span class="category-icon">🎯</span>
                  <h3>Specific Category Scholarships</h3>
                </div>
                <div class="category-content">
                  <p class="category-description">For specific demographics, fields of study, or countries.</p>
                  <div class="scholarship-examples">
                    <h4>Examples:</h4>
                    <div class="example-item">
                      <strong>Women in STEM Scholarships</strong>
                      <span class="amount">$1,000 - $20,000</span>
                      <span class="destination">Various programs</span>
                    </div>
                    <div class="example-item">
                      <strong>Commonwealth Scholarships</strong>
                      <span class="amount">Full funding</span>
                      <span class="destination">Commonwealth countries</span>
                    </div>
                    <div class="example-item">
                      <strong>Country-Specific Programs</strong>
                      <span class="amount">Varies</span>
                      <span class="destination">Target specific nationalities</span>
                    </div>
                  </div>
                  <div class="requirements">
                    <h4>Typical Requirements:</h4>
                    <ul>
                      <li>Belong to specific demographic</li>
                      <li>Study in particular field</li>
                      <li>Citizenship requirements</li>
                      <li>Community involvement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="type-category university">
                <div class="category-header">
                  <span class="category-icon">🏫</span>
                  <h3>University-Specific Scholarships</h3>
                </div>
                <div class="category-content">
                  <p class="category-description">Offered directly by universities to attract top students.</p>
                  <div class="scholarship-examples">
                    <h4>Examples:</h4>
                    <div class="example-item">
                      <strong>Harvard University Scholarships</strong>
                      <span class="amount">Need-based, up to full tuition</span>
                      <span class="destination">Harvard University</span>
                    </div>
                    <div class="example-item">
                      <strong>Melbourne International Scholarships</strong>
                      <span class="amount">$10,000 - Full tuition</span>
                      <span class="destination">University of Melbourne</span>
                    </div>
                    <div class="example-item">
                      <strong>Edinburgh Global Scholarships</strong>
                      <span class="amount">£5,000 - £30,000</span>
                      <span class="destination">University of Edinburgh</span>
                    </div>
                  </div>
                  <div class="requirements">
                    <h4>Typical Requirements:</h4>
                    <ul>
                      <li>Admission to the university</li>
                      <li>Academic merit</li>
                      <li>Personal statement</li>
                      <li>References</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="application-timeline">
            <h2>Scholarship Application Timeline</h2>
            <div class="timeline-container">
              <div class="timeline-item">
                <div class="timeline-marker">12+ months before</div>
                <div class="timeline-content">
                  <h3>Research & Planning Phase</h3>
                  <ul>
                    <li>Research scholarship opportunities</li>
                    <li>Create scholarship tracking spreadsheet</li>
                    <li>Start building your profile</li>
                    <li>Begin networking with alumni</li>
                  </ul>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">8-10 months before</div>
                <div class="timeline-content">
                  <h3>Profile Building</h3>
                  <ul>
                    <li>Improve GPA and test scores</li>
                    <li>Gain relevant work/research experience</li>
                    <li>Take on leadership roles</li>
                    <li>Start building relationships with recommenders</li>
                  </ul>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">6-8 months before</div>
                <div class="timeline-content">
                  <h3>Application Preparation</h3>
                  <ul>
                    <li>Draft personal statements and essays</li>
                    <li>Request recommendation letters</li>
                    <li>Gather required documents</li>
                    <li>Create compelling portfolio</li>
                  </ul>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">3-6 months before</div>
                <div class="timeline-content">
                  <h3>Application Submission</h3>
                  <ul>
                    <li>Submit early applications</li>
                    <li>Follow up on recommendations</li>
                    <li>Prepare for interviews</li>
                    <li>Apply for backup scholarships</li>
                  </ul>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">1-3 months before</div>
                <div class="timeline-content">
                  <h3>Final Preparations</h3>
                  <ul>
                    <li>Submit remaining applications</li>
                    <li>Attend scholarship interviews</li>
                    <li>Send thank-you notes</li>
                    <li>Plan for different outcomes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="success-factors">
            <h2>Key Success Factors</h2>
            <div class="factors-grid">
              <div class="factor-card">
                <div class="factor-icon">🎯</div>
                <h3>Strategic Targeting</h3>
                <p>Apply to a mix of reach, match, and safety scholarships. Don't put all your eggs in one basket.</p>
              </div>
              <div class="factor-card">
                <div class="factor-icon">📝</div>
                <h3>Compelling Narrative</h3>
                <p>Tell your unique story. Show how the scholarship aligns with your goals and values.</p>
              </div>
              <div class="factor-card">
                <div class="factor-icon">⏰</div>
                <h3>Early Preparation</h3>
                <p>Start early to build a strong profile and submit polished applications.</p>
              </div>
              <div class="factor-card">
                <div class="factor-icon">🔄</div>
                <h3>Persistence</h3>
                <p>Apply to multiple scholarships. Even rejections provide valuable feedback for improvement.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/scholarship-success-stories',
          title: 'Scholarship Success Stories',
          description: 'Hear from students who won major international scholarships'
        },
        {
          type: 'interactive',
          url: '/tools/scholarship-finder',
          title: 'Scholarship Finder Tool',
          description: 'Find scholarships that match your profile and goals'
        }
      ]
    },
    {
      id: 'application-strategies',
      pageNumber: 2,
      title: 'Winning Application Strategies (Premium)',
      accessLevel: 'premium',
      restricted: true,
      content: `
        <div class="book-page-content premium-content">
          <div class="premium-header">
            <span class="premium-badge">👑 PREMIUM CONTENT</span>
            <h1 class="book-title">Winning Application Strategies</h1>
          </div>
          
          <div class="content-preview">
            <h2>🔒 Unlock insider secrets that scholarship committees don't want you to know</h2>
            <p class="preview-text">Get access to proven templates, evaluation rubrics, and strategies that have helped thousands win competitive scholarships.</p>
            
            <div class="premium-benefits">
              <h3>Premium Content Includes:</h3>
              <div class="benefits-grid">
                <div class="benefit-item">
                  <span class="benefit-icon">📋</span>
                  <div class="benefit-content">
                    <h4>Personal Statement Templates</h4>
                    <p>Proven templates for different scholarship types</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">⚖️</span>
                  <div class="benefit-content">
                    <h4>Evaluation Rubrics</h4>
                    <p>See exactly how applications are scored</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">💬</span>
                  <div class="benefit-content">
                    <h4>Interview Question Bank</h4>
                    <p>500+ real interview questions with model answers</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">📊</span>
                  <div class="benefit-content">
                    <h4>Selection Committee Insights</h4>
                    <p>What reviewers really look for in applications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="upgrade-cta">
              <button class="premium-button">Access Premium Strategies</button>
              <p class="cta-subtext">Join 10,000+ students who secured scholarships with our premium guide</p>
            </div>
          </div>
        </div>
      `,
      seoContent: `
        <h1>Scholarship Application Strategies</h1>
        <p>Master the art of scholarship applications with proven strategies and insider tips. Learn how to craft compelling personal statements, secure strong recommendations, and excel in scholarship interviews.</p>
        
        <h2>Personal Statement Excellence</h2>
        <p>Your personal statement is often the most important part of your scholarship application. It's your opportunity to tell your unique story and demonstrate why you deserve the scholarship.</p>
        
        <h3>Key Elements of a Strong Personal Statement</h3>
        <ul>
          <li>Compelling opening that grabs attention</li>
          <li>Clear articulation of goals and motivations</li>
          <li>Specific examples and achievements</li>
          <li>Connection between your goals and the scholarship's mission</li>
          <li>Strong conclusion that reinforces your main message</li>
        </ul>
        
        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Generic statements that could apply to anyone</li>
          <li>Focusing too much on financial need without showing merit</li>
          <li>Poor grammar and spelling errors</li>
          <li>Exceeding word limits</li>
          <li>Failing to answer the specific question asked</li>
        </ul>
        
        <h2>Building Strong Relationships with Recommenders</h2>
        <p>Strong letters of recommendation can make or break your scholarship application. Choose recommenders who know you well and can speak to your relevant qualities and achievements.</p>
        
        <h2>Interview Preparation</h2>
        <p>Many competitive scholarships include an interview component. Prepare thoroughly by researching the organization, practicing common questions, and developing compelling stories that highlight your achievements and goals.</p>
      `,
      media: [
        {
          type: 'interactive',
          url: '/tools/scholarship-application-template',
          title: 'Scholarship Application Template',
          description: 'Professional template for organizing scholarship applications'
        }
      ]
    }
    // Additional pages for specific scholarship programs, application essays, etc.
  ]
};

export default scholarshipGuideBook;
