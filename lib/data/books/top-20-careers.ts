import { Book } from '@/types/ebook';

export const top20CareersBook: Book = {
  id: 'top-20-careers',
  title: 'Top 20 Careers for the Future',
  author: 'Career Development Institute',
  description: 'A comprehensive guide to the most promising career paths in the modern economy, featuring detailed insights into growth potential, required skills, and salary expectations.',
  coverImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  totalPages: 22,
  genre: 'Career Development',
  publishedDate: '2024',
  isbn: '978-0-123456-78-9',
  url: '/digital-library/books/top-20-careers',
  isPublic: true,
  accessLevel: 'public',
  pages: [
    {
      id: 'page-1',
      pageNumber: 1,
      title: 'Introduction to Future Careers',
      content: `
        <div class="book-page">
          <h1 class="book-title">Welcome to the Future of Work</h1>
          
          <div class="book-intro">
            <p class="lead-text">The job market is evolving at an unprecedented pace. Technology, globalization, and changing consumer behaviors are reshaping entire industries and creating new opportunities that didn't exist just a decade ago.</p>
          </div>

          <div class="content-section">
            <p>This comprehensive guide explores the top 20 careers that are not only thriving today but are projected to experience significant growth in the coming years. Each career profile includes:</p>
            
            <ul class="feature-list">
              <li><span class="highlight">✓</span> Detailed job descriptions and responsibilities</li>
              <li><span class="highlight">✓</span> Required education and skills</li>
              <li><span class="highlight">✓</span> Salary ranges and growth projections</li>
              <li><span class="highlight">✓</span> Industry insights and trends</li>
              <li><span class="highlight">✓</span> Steps to get started in the field</li>
            </ul>
          </div>

          <div class="callout-box">
            <h3>🎯 Who This Guide Is For</h3>
            <p>Whether you're a recent graduate, considering a career change, or planning for the future, this guide will help you make informed decisions about your professional journey.</p>
          </div>

          <div class="stats-grid">
            <div class="stat-item">
              <h4>20</h4>
              <p>Future-Ready Careers</p>
            </div>
            <div class="stat-item">
              <h4>$50K-$300K</h4>
              <p>Salary Range</p>
            </div>
            <div class="stat-item">
              <h4>25%+</h4>
              <p>Average Growth Rate</p>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/gPfriiHBBek',
          title: 'Future of Work: Top Career Trends 2024',
          description: 'Watch our expert analysis of emerging career opportunities'
        }
      ]
    },
    {
      id: 'page-2',
      pageNumber: 2,
      title: '1. Data Scientist',
      content: `
        <div class="book-page-content">
          <div class="career-header">
            <h1 class="career-title">Data Scientist</h1>
            <h2 class="career-subtitle">The Detective of the Digital Age</h2>
            <div class="career-stats">
              <span class="salary-range">$95,000 - $165,000</span>
              <span class="growth-rate">35% Growth</span>
            </div>
          </div>

          <div class="career-overview">
            <h3>🔍 What They Do</h3>
            <p>Data scientists analyze complex data to help organizations make better decisions. They use statistical methods, machine learning, and programming to extract insights from large datasets that drive business strategy and innovation.</p>
          </div>

          <div class="requirements-section">
            <h3>🛠️ Required Skills & Qualifications</h3>
            <div class="requirements-grid">
              <div class="requirement-card">
                <h4>Technical Skills</h4>
                <ul>
                  <li>Python, R, SQL programming</li>
                  <li>Machine Learning algorithms</li>
                  <li>Statistical analysis</li>
                  <li>Data visualization tools</li>
                  <li>Big data technologies</li>
                </ul>
              </div>
              <div class="requirement-card">
                <h4>Education & Experience</h4>
                <ul>
                  <li>Bachelor's in Computer Science, Statistics, or Math</li>
                  <li>Master's degree preferred</li>
                  <li>2+ years experience with data analysis</li>
                  <li>Portfolio of data projects</li>
                  <li>Continuous learning mindset</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="salary-breakdown">
            <h3>💰 Salary Breakdown</h3>
            <div class="salary-levels">
              <div class="salary-level">
                <span class="level-name">Entry Level (0-2 years)</span>
                <span class="level-salary">$65,000 - $95,000</span>
              </div>
              <div class="salary-level">
                <span class="level-name">Mid Level (3-5 years)</span>
                <span class="level-salary">$95,000 - $130,000</span>
              </div>
              <div class="salary-level">
                <span class="level-name">Senior Level (6+ years)</span>
                <span class="level-salary">$130,000 - $165,000+</span>
              </div>
            </div>
          </div>

          <div class="industry-insights">
            <h3>📈 Industry Insights</h3>
            <div class="insight-grid">
              <div class="insight-item">
                <h4>Growth Trend</h4>
                <p>35% job growth expected through 2032, much faster than average for all occupations.</p>
              </div>
              <div class="insight-item">
                <h4>High Demand</h4>
                <p>Every industry from healthcare to finance needs data scientists to make sense of their data.</p>
              </div>
            </div>
          </div>

          <div class="getting-started">
            <h3>🚀 Getting Started</h3>
            <div class="steps-list">
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Learn Programming</h4>
                  <p>Start with Python or R, focus on data manipulation libraries like pandas and numpy.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Build Projects</h4>
                  <p>Create a portfolio with real-world data analysis projects and share them on GitHub.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Get Certified</h4>
                  <p>Consider certifications from Google, IBM, or Microsoft to validate your skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/X3paOmcrTjQ',
          title: 'Day in the Life of a Data Scientist',
          description: 'See what a typical day looks like for data scientists at top tech companies.'
        }
      ]
    },
    {
      id: 'page-3',
      pageNumber: 3,
      title: '2. Cybersecurity Specialist',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Cybersecurity Specialist</h1>
            <h2 class="career-subtitle">Digital Guardian of the Modern World</h2>
            <div class="career-stats">
              <span class="salary-range">$85,000 - $150,000</span>
              <span class="growth-rate">33% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🛡️ What They Do</h3>
                <p>Cybersecurity specialists protect organizations from digital threats by implementing security measures, monitoring for breaches, and responding to incidents.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Network Security</strong>
                    <span>Firewalls & Protocols</span>
                  </div>
                  <div class="skill-item">
                    <strong>Risk Assessment</strong>
                    <span>Threat Analysis</span>
                  </div>
                  <div class="skill-item">
                    <strong>Incident Response</strong>
                    <span>Crisis Management</span>
                  </div>
                  <div class="skill-item">
                    <strong>Ethical Hacking</strong>
                    <span>Penetration Testing</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>🎓 Education Path</h3>
                <p>Bachelor's degree in cybersecurity, computer science, or information technology. Industry certifications are highly valued.</p>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>As cyber threats become more sophisticated and frequent, organizations are investing heavily in cybersecurity talent to protect their digital assets.</p>
              </section>
            </div>

            <div class="sidebar">
              <div class="certifications">
                <h4>Top Certifications</h4>
                <ul>
                  <li>CISSP</li>
                  <li>CEH</li>
                  <li>CISM</li>
                  <li>Security+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-4',
      pageNumber: 4,
      title: '3. Software Developer',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Software Developer</h1>
            <h2 class="career-subtitle">Architect of Digital Solutions</h2>
            <div class="career-stats">
              <span class="salary-range">$75,000 - $140,000</span>
              <span class="growth-rate">25% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>💻 What They Do</h3>
                <p>Software developers design, build, and maintain applications and systems. They work across various platforms including web, mobile, desktop, and enterprise software.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Programming Languages</strong>
                    <span>JavaScript, Python, Java, C++</span>
                  </div>
                  <div class="skill-item">
                    <strong>Frameworks</strong>
                    <span>React, Angular, Django</span>
                  </div>
                  <div class="skill-item">
                    <strong>Database Management</strong>
                    <span>SQL, NoSQL</span>
                  </div>
                  <div class="skill-item">
                    <strong>Version Control</strong>
                    <span>Git, GitHub</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>🎓 Education Path</h3>
                <p>Bachelor's degree in computer science or related field. Strong portfolio and coding skills often more important than formal education.</p>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Digital transformation across industries continues to drive demand for software solutions and skilled developers.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-5',
      pageNumber: 5,
      title: '4. AI/Machine Learning Engineer',
      accessLevel: 'authenticated',
      content: `
        <div class="book-page career-page premium">
          <div class="career-header">
            <h1 class="career-title">AI/Machine Learning Engineer</h1>
            <h2 class="career-subtitle">Building the Intelligence of Tomorrow</h2>
            <div class="career-stats">
              <span class="salary-range">$110,000 - $180,000</span>
              <span class="growth-rate">40% Growth</span>
            </div>
          </div>

          <div class="premium-badge">🔒 Premium Content</div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🤖 What They Do</h3>
                <p>AI/ML engineers design and implement artificial intelligence and machine learning systems that can learn and make decisions from data. This is an exclusive deep-dive into the most advanced career in technology.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Machine Learning</strong>
                    <span>Algorithms & Deep Learning</span>
                  </div>
                  <div class="skill-item">
                    <strong>Programming</strong>
                    <span>Python, R, TensorFlow</span>
                  </div>
                  <div class="skill-item">
                    <strong>Data Processing</strong>
                    <span>Feature Engineering</span>
                  </div>
                  <div class="skill-item">
                    <strong>Mathematics</strong>
                    <span>Statistics, Linear Algebra</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>🎓 Education Path</h3>
                <p>Master's degree in computer science, AI, or related field highly preferred. Strong mathematical background essential. Many top AI engineers have Ph.D.s in relevant fields.</p>
              </section>

              <section class="career-section insider-tips">
                <h3>💡 Industry Insider Tips</h3>
                <div class="tips-list">
                  <div class="tip-item">
                    <strong>Build a Portfolio:</strong> Create ML projects on GitHub showing end-to-end pipelines
                  </div>
                  <div class="tip-item">
                    <strong>Learn Cloud Platforms:</strong> AWS SageMaker, Google AI Platform, Azure ML
                  </div>
                  <div class="tip-item">
                    <strong>Network Strategically:</strong> Attend AI conferences and meetups
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>💰 Salary Breakdown</h3>
                <div class="salary-breakdown">
                  <div class="salary-tier">
                    <strong>Entry Level (0-2 years):</strong> $90,000 - $130,000
                  </div>
                  <div class="salary-tier">
                    <strong>Mid Level (2-5 years):</strong> $130,000 - $180,000
                  </div>
                  <div class="salary-tier">
                    <strong>Senior Level (5+ years):</strong> $180,000 - $300,000+
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/aircAruvnKk',
          title: 'Neural Networks Explained',
          description: 'Understanding the fundamentals of neural networks and deep learning.'
        },
        {
          type: 'image',
          url: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'AI/ML Career Path Visualization'
        }
      ]
    },
    {
      id: 'page-6',
      pageNumber: 6,
      title: '5. Healthcare Professional',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Healthcare Professional</h1>
            <h2 class="career-subtitle">Healing and Caring for Tomorrow</h2>
            <div class="career-stats">
              <span class="salary-range">$70,000 - $200,000+</span>
              <span class="growth-rate">15% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🏥 What They Do</h3>
                <p>Healthcare professionals diagnose, treat, and care for patients across various medical specialties. This includes doctors, nurses, therapists, and healthcare administrators.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Medical Knowledge</strong>
                    <span>Anatomy, Physiology</span>
                  </div>
                  <div class="skill-item">
                    <strong>Patient Care</strong>
                    <span>Empathy, Communication</span>
                  </div>
                  <div class="skill-item">
                    <strong>Critical Thinking</strong>
                    <span>Problem Solving</span>
                  </div>
                  <div class="skill-item">
                    <strong>Technology</strong>
                    <span>Medical Equipment, EMR</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>🎓 Education Path</h3>
                <p>Varies by specialty: Bachelor's degree + medical school for physicians, nursing degree for nurses, specialized programs for therapists.</p>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Aging population and increased focus on preventive care drive demand for healthcare professionals across all specialties.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-7',
      pageNumber: 7,
      title: '6. Digital Marketing Specialist',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Digital Marketing Specialist</h1>
            <h2 class="career-subtitle">Driving Brand Success in the Digital Age</h2>
            <div class="career-stats">
              <span class="salary-range">$45,000 - $85,000</span>
              <span class="growth-rate">23% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>📱 What They Do</h3>
                <p>Digital marketing specialists develop and execute online marketing campaigns to promote products, services, or brands through various digital channels.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>SEO/SEM</strong>
                    <span>Search Optimization</span>
                  </div>
                  <div class="skill-item">
                    <strong>Social Media</strong>
                    <span>Platform Management</span>
                  </div>
                  <div class="skill-item">
                    <strong>Content Creation</strong>
                    <span>Copywriting, Design</span>
                  </div>
                  <div class="skill-item">
                    <strong>Analytics</strong>
                    <span>Data Interpretation</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>🎓 Education Path</h3>
                <p>Bachelor's degree in marketing, communications, or related field. Digital marketing certifications highly valued.</p>
              </section>

              <section class="career-section">
                <h3>📈 Career Progression</h3>
                <div class="progression-path">
                  <div class="progression-step">
                    <strong>Junior Digital Marketer</strong>
                    <span>→ Digital Marketing Specialist</span>
                  </div>
                  <div class="progression-step">
                    <strong>Digital Marketing Manager</strong>
                    <span>→ Senior Marketing Manager</span>
                  </div>
                  <div class="progression-step">
                    <strong>Marketing Director</strong>
                    <span>→ Chief Marketing Officer (CMO)</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'interactive',
          url: '/tools/marketing-roi-calculator',
          title: 'Marketing ROI Calculator',
          description: 'Calculate the return on investment for various digital marketing campaigns.'
        }
      ]
    },
    {
      id: 'page-8',
      pageNumber: 8,
      title: '7. Cloud Solutions Architect',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Cloud Solutions Architect</h1>
            <h2 class="career-subtitle">Building the Infrastructure of Tomorrow</h2>
            <div class="career-stats">
              <span class="salary-range">$120,000 - $190,000</span>
              <span class="growth-rate">30% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>☁️ What They Do</h3>
                <p>Cloud solutions architects design and oversee cloud computing strategies for organizations, ensuring scalable, secure, and cost-effective cloud infrastructure.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Cloud Platforms</strong>
                    <span>AWS, Azure, Google Cloud</span>
                  </div>
                  <div class="skill-item">
                    <strong>System Design</strong>
                    <span>Architecture Planning</span>
                  </div>
                  <div class="skill-item">
                    <strong>Security</strong>
                    <span>Cloud Security Protocols</span>
                  </div>
                  <div class="skill-item">
                    <strong>DevOps</strong>
                    <span>CI/CD, Containerization</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Digital transformation and cloud migration initiatives are driving unprecedented demand for cloud expertise across all industries.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-9',
      pageNumber: 9,
      title: '8. UX/UI Designer',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">UX/UI Designer</h1>
            <h2 class="career-subtitle">Crafting Experiences That Matter</h2>
            <div class="career-stats">
              <span class="salary-range">$65,000 - $120,000</span>
              <span class="growth-rate">20% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🎨 What They Do</h3>
                <p>UX/UI designers create intuitive and engaging user experiences for digital products, focusing on user needs, usability, and visual design.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Design Tools</strong>
                    <span>Figma, Sketch, Adobe XD</span>
                  </div>
                  <div class="skill-item">
                    <strong>User Research</strong>
                    <span>Testing, Analytics</span>
                  </div>
                  <div class="skill-item">
                    <strong>Prototyping</strong>
                    <span>Wireframing, Mockups</span>
                  </div>
                  <div class="skill-item">
                    <strong>Psychology</strong>
                    <span>User Behavior</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>As digital products become more complex, the need for skilled designers who can create intuitive experiences is increasing rapidly.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-10',
      pageNumber: 10,
      title: '9. Renewable Energy Engineer',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Renewable Energy Engineer</h1>
            <h2 class="career-subtitle">Powering a Sustainable Future</h2>
            <div class="career-stats">
              <span class="salary-range">$80,000 - $130,000</span>
              <span class="growth-rate">28% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>⚡ What They Do</h3>
                <p>Renewable energy engineers design and develop sustainable energy systems including solar, wind, and hydroelectric power solutions.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Engineering</strong>
                    <span>Electrical, Mechanical</span>
                  </div>
                  <div class="skill-item">
                    <strong>Project Management</strong>
                    <span>Systems Integration</span>
                  </div>
                  <div class="skill-item">
                    <strong>Sustainability</strong>
                    <span>Environmental Impact</span>
                  </div>
                  <div class="skill-item">
                    <strong>Technology</strong>
                    <span>Smart Grid Systems</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Global focus on climate change and renewable energy adoption is creating massive opportunities in this field.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-11',
      pageNumber: 11,
      title: '10. Financial Analyst',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Financial Analyst</h1>
            <h2 class="career-subtitle">Navigating the Numbers of Success</h2>
            <div class="career-stats">
              <span class="salary-range">$60,000 - $110,000</span>
              <span class="growth-rate">18% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>📊 What They Do</h3>
                <p>Financial analysts evaluate investment opportunities, analyze financial data, and provide insights to guide business and investment decisions.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Financial Modeling</strong>
                    <span>Excel, VBA</span>
                  </div>
                  <div class="skill-item">
                    <strong>Analysis</strong>
                    <span>Risk Assessment</span>
                  </div>
                  <div class="skill-item">
                    <strong>Communication</strong>
                    <span>Report Writing</span>
                  </div>
                  <div class="skill-item">
                    <strong>Markets</strong>
                    <span>Investment Knowledge</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Increasing complexity of financial markets and need for data-driven investment decisions drive demand for skilled analysts.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-12',
      pageNumber: 12,
      title: '11. Biomedical Engineer',
      accessLevel: 'premium',
      content: `
        <div class="book-page career-page premium">
          <div class="career-header">
            <h1 class="career-title">Biomedical Engineer</h1>
            <h2 class="career-subtitle">Bridging Medicine and Technology</h2>
            <div class="career-stats">
              <span class="salary-range">$90,000 - $145,000</span>
              <span class="growth-rate">22% Growth</span>
            </div>
          </div>

          <div class="premium-badge">💎 Premium Exclusive</div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🧬 What They Do</h3>
                <p>Biomedical engineers combine engineering principles with biological sciences to design medical devices, prosthetics, and systems that improve healthcare outcomes.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Engineering</strong>
                    <span>Mechanical, Electrical</span>
                  </div>
                  <div class="skill-item">
                    <strong>Biology</strong>
                    <span>Life Sciences</span>
                  </div>
                  <div class="skill-item">
                    <strong>Medical Devices</strong>
                    <span>Design & Testing</span>
                  </div>
                  <div class="skill-item">
                    <strong>Regulation</strong>
                    <span>FDA Compliance</span>
                  </div>
                </div>
              </section>

              <section class="career-section premium-insights">
                <h3>🔬 Cutting-Edge Applications</h3>
                <div class="applications-list">
                  <div class="app-item">
                    <strong>Artificial Organs:</strong> Developing life-saving replacement organs
                  </div>
                  <div class="app-item">
                    <strong>Neural Interfaces:</strong> Brain-computer interaction systems
                  </div>
                  <div class="app-item">
                    <strong>Smart Prosthetics:</strong> AI-powered limb replacements
                  </div>
                  <div class="app-item">
                    <strong>Gene Therapy:</strong> Bioengineered treatment solutions
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-13',
      pageNumber: 13,
      title: '12. Product Manager',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Product Manager</h1>
            <h2 class="career-subtitle">Orchestrating Innovation</h2>
            <div class="career-stats">
              <span class="salary-range">$95,000 - $160,000</span>
              <span class="growth-rate">24% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🚀 What They Do</h3>
                <p>Product managers guide the development of products from conception to launch, working with cross-functional teams to deliver solutions that meet user needs and business goals.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Strategy</strong>
                    <span>Product Roadmaps</span>
                  </div>
                  <div class="skill-item">
                    <strong>Analytics</strong>
                    <span>Data-Driven Decisions</span>
                  </div>
                  <div class="skill-item">
                    <strong>Leadership</strong>
                    <span>Cross-Team Coordination</span>
                  </div>
                  <div class="skill-item">
                    <strong>User Research</strong>
                    <span>Market Understanding</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>As companies become more product-focused and customer-centric, skilled product managers are essential for competitive success.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-14',
      pageNumber: 14,
      title: '13. Environmental Scientist',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Environmental Scientist</h1>
            <h2 class="career-subtitle">Protecting Our Planet's Future</h2>
            <div class="career-stats">
              <span class="salary-range">$55,000 - $95,000</span>
              <span class="growth-rate">17% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🌍 What They Do</h3>
                <p>Environmental scientists study environmental problems and develop solutions to protect the environment and human health.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Research</strong>
                    <span>Data Collection</span>
                  </div>
                  <div class="skill-item">
                    <strong>Analysis</strong>
                    <span>Statistical Methods</span>
                  </div>
                  <div class="skill-item">
                    <strong>Field Work</strong>
                    <span>Sample Collection</span>
                  </div>
                  <div class="skill-item">
                    <strong>Communication</strong>
                    <span>Policy Recommendations</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Climate change concerns and environmental regulations are increasing demand for environmental expertise across industries.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-15',
      pageNumber: 15,
      title: '14. Blockchain Developer',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Blockchain Developer</h1>
            <h2 class="career-subtitle">Building Decentralized Solutions</h2>
            <div class="career-stats">
              <span class="salary-range">$100,000 - $170,000</span>
              <span class="growth-rate">35% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>⛓️ What They Do</h3>
                <p>Blockchain developers create decentralized applications and smart contracts using blockchain technology for secure, transparent transactions.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Programming</strong>
                    <span>Solidity, JavaScript</span>
                  </div>
                  <div class="skill-item">
                    <strong>Cryptography</strong>
                    <span>Security Protocols</span>
                  </div>
                  <div class="skill-item">
                    <strong>Smart Contracts</strong>
                    <span>Ethereum, Web3</span>
                  </div>
                  <div class="skill-item">
                    <strong>Architecture</strong>
                    <span>Distributed Systems</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Adoption of blockchain technology in finance, supply chain, and other industries is creating high demand for skilled developers.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-16',
      pageNumber: 16,
      title: '15. Mental Health Counselor',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Mental Health Counselor</h1>
            <h2 class="career-subtitle">Supporting Emotional Wellbeing</h2>
            <div class="career-stats">
              <span class="salary-range">$50,000 - $85,000</span>
              <span class="growth-rate">25% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🧠 What They Do</h3>
                <p>Mental health counselors provide therapy and support to individuals dealing with emotional, behavioral, and mental health challenges.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Psychology</strong>
                    <span>Therapeutic Techniques</span>
                  </div>
                  <div class="skill-item">
                    <strong>Empathy</strong>
                    <span>Active Listening</span>
                  </div>
                  <div class="skill-item">
                    <strong>Communication</strong>
                    <span>Patient Interaction</span>
                  </div>
                  <div class="skill-item">
                    <strong>Assessment</strong>
                    <span>Diagnostic Skills</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Increased awareness of mental health importance and reduced stigma are driving demand for mental health services.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-17',
      pageNumber: 17,
      title: '16. Robotics Engineer',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Robotics Engineer</h1>
            <h2 class="career-subtitle">Automating the Future</h2>
            <div class="career-stats">
              <span class="salary-range">$85,000 - $140,000</span>
              <span class="growth-rate">26% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🤖 What They Do</h3>
                <p>Robotics engineers design, build, and program robots for various applications including manufacturing, healthcare, and exploration.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Engineering</strong>
                    <span>Mechanical, Electrical</span>
                  </div>
                  <div class="skill-item">
                    <strong>Programming</strong>
                    <span>C++, Python, ROS</span>
                  </div>
                  <div class="skill-item">
                    <strong>AI/ML</strong>
                    <span>Autonomous Systems</span>
                  </div>
                  <div class="skill-item">
                    <strong>Hardware</strong>
                    <span>Sensors, Actuators</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Automation trends and advances in AI are expanding robotics applications across multiple industries.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-18',
      pageNumber: 18,
      title: '17. Sustainability Manager',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Sustainability Manager</h1>
            <h2 class="career-subtitle">Leading Green Business Practices</h2>
            <div class="career-stats">
              <span class="salary-range">$70,000 - $120,000</span>
              <span class="growth-rate">21% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>♻️ What They Do</h3>
                <p>Sustainability managers develop and implement environmental and social responsibility programs to help organizations reduce their environmental impact.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Environmental Science</strong>
                    <span>Sustainability Principles</span>
                  </div>
                  <div class="skill-item">
                    <strong>Project Management</strong>
                    <span>Program Implementation</span>
                  </div>
                  <div class="skill-item">
                    <strong>Analytics</strong>
                    <span>Impact Measurement</span>
                  </div>
                  <div class="skill-item">
                    <strong>Communication</strong>
                    <span>Stakeholder Engagement</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Corporate focus on ESG (Environmental, Social, Governance) and regulatory requirements are driving demand for sustainability expertise.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-19',
      pageNumber: 19,
      title: '18. Voice Technology Specialist',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Voice Technology Specialist</h1>
            <h2 class="career-subtitle">Designing Conversational Interfaces</h2>
            <div class="career-stats">
              <span class="salary-range">$80,000 - $130,000</span>
              <span class="growth-rate">32% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🗣️ What They Do</h3>
                <p>Voice technology specialists develop voice-activated applications, chatbots, and conversational AI systems for various platforms and devices.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>NLP</strong>
                    <span>Natural Language Processing</span>
                  </div>
                  <div class="skill-item">
                    <strong>AI/ML</strong>
                    <span>Speech Recognition</span>
                  </div>
                  <div class="skill-item">
                    <strong>Programming</strong>
                    <span>Python, JavaScript</span>
                  </div>
                  <div class="skill-item">
                    <strong>UX Design</strong>
                    <span>Conversation Design</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Proliferation of voice assistants and smart devices is creating new opportunities in voice technology development.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-20',
      pageNumber: 20,
      title: '19. Quantum Computing Researcher',
      accessLevel: 'premium',
      content: `
        <div class="book-page career-page premium">
          <div class="career-header">
            <h1 class="career-title">Quantum Computing Researcher</h1>
            <h2 class="career-subtitle">Exploring the Quantum Frontier</h2>
            <div class="career-stats">
              <span class="salary-range">$130,000 - $250,000</span>
              <span class="growth-rate">45% Growth</span>
            </div>
          </div>

          <div class="premium-badge">💎 Cutting-Edge Career</div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>⚛️ What They Do</h3>
                <p>Quantum computing researchers develop quantum algorithms, design quantum systems, and work on breakthrough technologies that could revolutionize computing.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Quantum Physics</strong>
                    <span>Advanced Mathematics</span>
                  </div>
                  <div class="skill-item">
                    <strong>Programming</strong>
                    <span>Qiskit, Cirq</span>
                  </div>
                  <div class="skill-item">
                    <strong>Research</strong>
                    <span>Scientific Method</span>
                  </div>
                  <div class="skill-item">
                    <strong>Algorithms</strong>
                    <span>Quantum Computing</span>
                  </div>
                </div>
              </section>

              <section class="career-section premium-insights">
                <h3>🔬 Research Areas</h3>
                <div class="research-areas">
                  <div class="area-item">
                    <strong>Quantum Algorithms:</strong> Developing new computational methods
                  </div>
                  <div class="area-item">
                    <strong>Error Correction:</strong> Making quantum computers more reliable
                  </div>
                  <div class="area-item">
                    <strong>Quantum Supremacy:</strong> Achieving computational advantages
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-21',
      pageNumber: 21,
      title: '20. Space Technology Engineer',
      content: `
        <div class="book-page career-page">
          <div class="career-header">
            <h1 class="career-title">Space Technology Engineer</h1>
            <h2 class="career-subtitle">Engineering the Final Frontier</h2>
            <div class="career-stats">
              <span class="salary-range">$90,000 - $155,000</span>
              <span class="growth-rate">29% Growth</span>
            </div>
          </div>

          <div class="content-grid">
            <div class="main-content">
              <section class="career-section">
                <h3>🚀 What They Do</h3>
                <p>Space technology engineers design spacecraft, satellites, and space exploration systems for government agencies and private space companies.</p>
              </section>

              <section class="career-section">
                <h3>🛠️ Required Skills</h3>
                <div class="skills-grid">
                  <div class="skill-item">
                    <strong>Aerospace Engineering</strong>
                    <span>Propulsion Systems</span>
                  </div>
                  <div class="skill-item">
                    <strong>Systems Design</strong>
                    <span>Spacecraft Architecture</span>
                  </div>
                  <div class="skill-item">
                    <strong>Materials Science</strong>
                    <span>Space-Grade Components</span>
                  </div>
                  <div class="skill-item">
                    <strong>Project Management</strong>
                    <span>Mission Planning</span>
                  </div>
                </div>
              </section>

              <section class="career-section">
                <h3>📈 Why It's Growing</h3>
                <p>Commercial space industry growth and renewed interest in space exploration are creating unprecedented opportunities.</p>
              </section>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'page-22',
      pageNumber: 22,
      title: 'Conclusion: Your Future Starts Now',
      content: `
        <div class="book-page conclusion-page">
          <div class="conclusion-header">
            <h1 class="conclusion-title">Your Future Starts Now</h1>
            <h2 class="conclusion-subtitle">Taking Action on Your Career Journey</h2>
          </div>

          <div class="content-section">
            <p class="lead-text">You've now explored 20 of the most promising careers for the future. Each offers unique opportunities for growth, impact, and financial success.</p>
            
            <section class="action-section">
              <h3>🚀 Next Steps</h3>
              <div class="action-grid">
                <div class="action-item">
                  <h4>1. Assess Your Interests</h4>
                  <p>Reflect on which careers align with your passions and strengths</p>
                </div>
                <div class="action-item">
                  <h4>2. Skill Gap Analysis</h4>
                  <p>Identify what skills you need to develop for your chosen path</p>
                </div>
                <div class="action-item">
                  <h4>3. Create a Learning Plan</h4>
                  <p>Design a roadmap for acquiring necessary qualifications</p>
                </div>
                <div class="action-item">
                  <h4>4. Start Building</h4>
                  <p>Begin projects, gain experience, and build your professional network</p>
                </div>
              </div>
            </section>

            <div class="career-summary">
              <h3>📊 Career Summary by Category</h3>
              <div class="category-breakdown">
                <div class="category">
                  <strong>Technology (8 careers):</strong> Data Science, AI/ML, Software Development, Cybersecurity, Cloud Architecture, Blockchain, Robotics, Quantum Computing
                </div>
                <div class="category">
                  <strong>Healthcare & Science (4 careers):</strong> Healthcare Professional, Biomedical Engineer, Mental Health Counselor, Environmental Scientist
                </div>
                <div class="category">
                  <strong>Business & Design (4 careers):</strong> Digital Marketing, UX/UI Design, Product Manager, Financial Analyst
                </div>
                <div class="category">
                  <strong>Emerging Fields (4 careers):</strong> Renewable Energy, Sustainability Manager, Voice Technology, Space Technology
                </div>
              </div>
            </div>

            <div class="final-message">
              <h3>💡 Remember</h3>
              <p>The future belongs to those who prepare for it today. Choose your path, commit to continuous learning, and embrace the journey ahead. The skills you develop today will determine your success tomorrow.</p>
            </div>

            <div class="contact-section">
              <h3>📞 Need Guidance?</h3>
              <p>Contact EA Global for personalized career counseling and educational pathway planning. Our expert counselors can help you navigate your career transition and achieve your professional goals.</p>
              
              <div class="contact-info">
                <p><strong>Email:</strong> careers@eaglobal.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Website:</strong> www.eaglobal.com/careers</p>
              </div>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'interactive',
          url: '/tools/career-assessment',
          title: 'Career Assessment Tool',
          description: 'Take our comprehensive career assessment to find your ideal path among these 20 careers.'
        }
      ]
    }
  ]
};

export default top20CareersBook;
