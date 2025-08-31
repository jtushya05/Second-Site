import { Book } from '@/types/ebook';

export const languageTestPrepBook: Book = {
  id: 'language-test-prep',
  title: 'Language Test Preparation Guide',
  author: 'EA Global Language Experts',
  description: 'Master IELTS, TOEFL, PTE, and other language proficiency tests with proven strategies and practice materials.',
  coverImage: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
  totalPages: 12,
  genre: 'Test Preparation',
  publishedDate: '2024',
  isbn: '978-0-987654-33-8',
  url: '/digital-library/books/language-test-prep',
  isPublic: false,
  accessLevel: 'authenticated',
  requiredRoles: ['student', 'premium'],
  pages: [
    {
      id: 'language-test-overview',
      pageNumber: 1,
      title: 'Language Test Overview',
      content: `
        <div class="book-page-content">
          <h1 class="book-title">Language Test Preparation Guide</h1>
          
          <div class="intro-section">
            <p class="lead-text">Master the language proficiency tests that open doors to international education and career opportunities worldwide.</p>
            
            <div class="stats-banner">
              <div class="stat-item">
                <span class="stat-number">3M+</span>
                <span class="stat-label">Students take IELTS annually</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">95%</span>
                <span class="stat-label">Success rate with proper preparation</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">6.5+</span>
                <span class="stat-label">Average band score needed</span>
              </div>
            </div>
          </div>

          <div class="test-comparison">
            <h2>Major Language Tests Comparison</h2>
            
            <div class="tests-grid">
              <div class="test-card ielts">
                <div class="test-header">
                  <div class="test-logo">IELTS</div>
                  <h3>International English Language Testing System</h3>
                </div>
                <div class="test-details">
                  <div class="detail-row">
                    <span class="detail-label">Format:</span>
                    <span class="detail-value">Paper/Computer-based</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">2 hours 45 minutes</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Sections:</span>
                    <span class="detail-value">Listening, Reading, Writing, Speaking</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Scoring:</span>
                    <span class="detail-value">0-9 band scale</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Validity:</span>
                    <span class="detail-value">2 years</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Accepted by:</span>
                    <span class="detail-value">11,000+ organizations worldwide</span>
                  </div>
                </div>
                <div class="test-strengths">
                  <h4>Best For:</h4>
                  <ul>
                    <li>UK, Australia, Canada, New Zealand</li>
                    <li>Face-to-face speaking test</li>
                    <li>Academic and General Training versions</li>
                  </ul>
                </div>
              </div>

              <div class="test-card toefl">
                <div class="test-header">
                  <div class="test-logo">TOEFL</div>
                  <h3>Test of English as a Foreign Language</h3>
                </div>
                <div class="test-details">
                  <div class="detail-row">
                    <span class="detail-label">Format:</span>
                    <span class="detail-value">Internet-based (iBT)</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">3 hours</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Sections:</span>
                    <span class="detail-value">Reading, Listening, Speaking, Writing</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Scoring:</span>
                    <span class="detail-value">0-120 points</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Validity:</span>
                    <span class="detail-value">2 years</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Accepted by:</span>
                    <span class="detail-value">11,500+ universities</span>
                  </div>
                </div>
                <div class="test-strengths">
                  <h4>Best For:</h4>
                  <ul>
                    <li>United States universities</li>
                    <li>Academic focus</li>
                    <li>Computer-based environment</li>
                  </ul>
                </div>
              </div>

              <div class="test-card pte">
                <div class="test-header">
                  <div class="test-logo">PTE</div>
                  <h3>Pearson Test of English</h3>
                </div>
                <div class="test-details">
                  <div class="detail-row">
                    <span class="detail-label">Format:</span>
                    <span class="detail-value">Computer-based</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">3 hours</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Sections:</span>
                    <span class="detail-value">Speaking & Writing, Reading, Listening</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Scoring:</span>
                    <span class="detail-value">10-90 points</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Validity:</span>
                    <span class="detail-value">2 years</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Accepted by:</span>
                    <span class="detail-value">3,000+ institutions</span>
                  </div>
                </div>
                <div class="test-strengths">
                  <h4>Best For:</h4>
                  <ul>
                    <li>Fast results (24-48 hours)</li>
                    <li>Australia and UK</li>
                    <li>AI-based scoring</li>
                  </ul>
                </div>
              </div>

              <div class="test-card duolingo">
                <div class="test-header">
                  <div class="test-logo">DET</div>
                  <h3>Duolingo English Test</h3>
                </div>
                <div class="test-details">
                  <div class="detail-row">
                    <span class="detail-label">Format:</span>
                    <span class="detail-value">Online adaptive</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">1 hour</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Sections:</span>
                    <span class="detail-value">Integrated skills assessment</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Scoring:</span>
                    <span class="detail-value">10-160 points</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Validity:</span>
                    <span class="detail-value">2 years</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Accepted by:</span>
                    <span class="detail-value">4,000+ institutions</span>
                  </div>
                </div>
                <div class="test-strengths">
                  <h4>Best For:</h4>
                  <ul>
                    <li>Convenience and accessibility</li>
                    <li>Lower cost option</li>
                    <li>Quick turnaround</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="prep-strategy">
            <h2>Universal Preparation Strategy</h2>
            
            <div class="strategy-timeline">
              <div class="timeline-item">
                <div class="timeline-marker">1</div>
                <div class="timeline-content">
                  <h3>Assessment Phase (Week 1)</h3>
                  <div class="phase-activities">
                    <div class="activity-item">
                      <span class="activity-icon">📊</span>
                      <span class="activity-text">Take diagnostic test to identify current level</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">🎯</span>
                      <span class="activity-text">Set target scores based on requirements</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">📅</span>
                      <span class="activity-text">Create personalized study schedule</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker">2</div>
                <div class="timeline-content">
                  <h3>Foundation Building (Weeks 2-4)</h3>
                  <div class="phase-activities">
                    <div class="activity-item">
                      <span class="activity-icon">📚</span>
                      <span class="activity-text">Strengthen grammar and vocabulary</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">👂</span>
                      <span class="activity-text">Develop listening comprehension skills</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">📖</span>
                      <span class="activity-text">Practice reading strategies and speed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker">3</div>
                <div class="timeline-content">
                  <h3>Skill Development (Weeks 5-8)</h3>
                  <div class="phase-activities">
                    <div class="activity-item">
                      <span class="activity-icon">✍️</span>
                      <span class="activity-text">Master writing task formats and structures</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">🗣️</span>
                      <span class="activity-text">Practice speaking fluency and pronunciation</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">⏱️</span>
                      <span class="activity-text">Work on time management strategies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker">4</div>
                <div class="timeline-content">
                  <h3>Test Mastery (Weeks 9-12)</h3>
                  <div class="phase-activities">
                    <div class="activity-item">
                      <span class="activity-icon">🎮</span>
                      <span class="activity-text">Take full-length practice tests</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">🔍</span>
                      <span class="activity-text">Analyze mistakes and weak areas</span>
                    </div>
                    <div class="activity-item">
                      <span class="activity-icon">🎯</span>
                      <span class="activity-text">Fine-tune test-taking strategies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="success-tips">
            <h2>Expert Success Tips</h2>
            <div class="tips-grid">
              <div class="tip-card">
                <div class="tip-icon">⚡</div>
                <h3>Consistency is Key</h3>
                <p>Study 1-2 hours daily rather than cramming. Regular practice builds lasting skills.</p>
              </div>
              <div class="tip-card">
                <div class="tip-icon">🎧</div>
                <h3>Immerse Yourself</h3>
                <p>Consume English media daily - podcasts, news, movies with subtitles.</p>
              </div>
              <div class="tip-card">
                <div class="tip-icon">👥</div>
                <h3>Practice Speaking</h3>
                <p>Find conversation partners or join online speaking groups for regular practice.</p>
              </div>
              <div class="tip-card">
                <div class="tip-icon">📝</div>
                <h3>Keep a Journal</h3>
                <p>Write daily entries to improve vocabulary and writing fluency naturally.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/test-comparison-guide',
          title: 'Language Test Comparison Guide',
          description: 'Complete comparison of IELTS, TOEFL, PTE, and other major language tests'
        },
        {
          type: 'interactive',
          url: '/tools/test-selector',
          title: 'Test Selection Tool',
          description: 'Find the best language test for your needs and destination'
        }
      ]
    },
    {
      id: 'ielts-strategies',
      pageNumber: 2,
      title: 'IELTS Success Strategies',
      content: `
        <div class="book-page-content">
          <h1 class="book-title">IELTS Success Strategies</h1>
          
          <div class="intro-section">
            <p class="lead-text">Master each IELTS section with proven strategies that have helped thousands achieve their target band scores.</p>
          </div>

          <div class="section-strategies">
            <div class="strategy-section listening">
              <div class="section-header">
                <span class="section-icon">👂</span>
                <h2>Listening Section Mastery</h2>
                <span class="duration-badge">30 minutes</span>
              </div>
              
              <div class="section-breakdown">
                <h3>Section Structure</h3>
                <div class="parts-grid">
                  <div class="part-card">
                    <h4>Part 1: Everyday Conversation</h4>
                    <p>Two people discussing daily situations (booking, shopping, etc.)</p>
                    <div class="difficulty">Difficulty: ⭐⭐</div>
                  </div>
                  <div class="part-card">
                    <h4>Part 2: Monologue</h4>
                    <p>One person speaking about social situations (tours, events, etc.)</p>
                    <div class="difficulty">Difficulty: ⭐⭐⭐</div>
                  </div>
                  <div class="part-card">
                    <h4>Part 3: Academic Discussion</h4>
                    <p>Group discussion in educational context (up to 4 people)</p>
                    <div class="difficulty">Difficulty: ⭐⭐⭐⭐</div>
                  </div>
                  <div class="part-card">
                    <h4>Part 4: Academic Lecture</h4>
                    <p>University-style lecture or presentation</p>
                    <div class="difficulty">Difficulty: ⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
              </div>

              <div class="strategies-list">
                <h3>Winning Strategies</h3>
                <div class="strategy-items">
                  <div class="strategy-item">
                    <span class="strategy-number">1</span>
                    <div class="strategy-content">
                      <h4>Preview Questions</h4>
                      <p>Use the 30-second preview time to underline keywords and predict answers</p>
                    </div>
                  </div>
                  <div class="strategy-item">
                    <span class="strategy-number">2</span>
                    <div class="strategy-content">
                      <h4>Follow the Flow</h4>
                      <p>Questions follow the order of the audio - if you miss one, move on immediately</p>
                    </div>
                  </div>
                  <div class="strategy-item">
                    <span class="strategy-number">3</span>
                    <div class="strategy-content">
                      <h4>Watch for Distractors</h4>
                      <p>IELTS includes wrong answers first, then corrections - listen for "actually," "but," "however"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="strategy-section reading">
              <div class="section-header">
                <span class="section-icon">📖</span>
                <h2>Reading Section Excellence</h2>
                <span class="duration-badge">60 minutes</span>
              </div>
              
              <div class="time-management">
                <h3>Perfect Time Allocation</h3>
                <div class="time-breakdown">
                  <div class="time-block">
                    <span class="time-label">Passage 1:</span>
                    <span class="time-value">18 minutes</span>
                    <span class="time-note">(easier, build confidence)</span>
                  </div>
                  <div class="time-block">
                    <span class="time-label">Passage 2:</span>
                    <span class="time-value">20 minutes</span>
                    <span class="time-note">(moderate difficulty)</span>
                  </div>
                  <div class="time-block">
                    <span class="time-label">Passage 3:</span>
                    <span class="time-value">22 minutes</span>
                    <span class="time-note">(most challenging)</span>
                  </div>
                </div>
              </div>

              <div class="question-types">
                <h3>Question Type Strategies</h3>
                <div class="types-grid">
                  <div class="type-card">
                    <h4>Multiple Choice</h4>
                    <div class="type-strategy">
                      <p>✓ Eliminate obviously wrong answers</p>
                      <p>✓ Look for paraphrasing, not exact words</p>
                      <p>✓ Choose the most complete answer</p>
                    </div>
                  </div>
                  <div class="type-card">
                    <h4>True/False/Not Given</h4>
                    <div class="type-strategy">
                      <p>✓ TRUE: Statement matches passage exactly</p>
                      <p>✓ FALSE: Statement contradicts passage</p>
                      <p>✓ NOT GIVEN: No information in passage</p>
                    </div>
                  </div>
                  <div class="type-card">
                    <h4>Matching Headings</h4>
                    <div class="type-strategy">
                      <p>✓ Read paragraph first, then headings</p>
                      <p>✓ Focus on main idea, not details</p>
                      <p>✓ Cross out used headings</p>
                    </div>
                  </div>
                  <div class="type-card">
                    <h4>Gap Filling</h4>
                    <div class="type-strategy">
                      <p>✓ Check word limit carefully</p>
                      <p>✓ Use exact words from passage</p>
                      <p>✓ Ensure grammatical correctness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="strategy-section writing">
              <div class="section-header">
                <span class="section-icon">✍️</span>
                <h2>Writing Section Framework</h2>
                <span class="duration-badge">60 minutes</span>
              </div>
              
              <div class="task-breakdown">
                <div class="task-card task1">
                  <h3>Task 1: Report Writing (20 min, 150 words)</h3>
                  <div class="task-structure">
                    <div class="structure-step">
                      <span class="step-number">1</span>
                      <div class="step-content">
                        <h4>Introduction (1 sentence)</h4>
                        <p>Paraphrase the question/chart title</p>
                      </div>
                    </div>
                    <div class="structure-step">
                      <span class="step-number">2</span>
                      <div class="step-content">
                        <h4>Overview (2 sentences)</h4>
                        <p>Highlight main trends or key features</p>
                      </div>
                    </div>
                    <div class="structure-step">
                      <span class="step-number">3</span>
                      <div class="step-content">
                        <h4>Body Paragraphs (2 paragraphs)</h4>
                        <p>Describe specific data and trends with numbers</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="task-card task2">
                  <h3>Task 2: Essay Writing (40 min, 250 words)</h3>
                  <div class="task-structure">
                    <div class="structure-step">
                      <span class="step-number">1</span>
                      <div class="step-content">
                        <h4>Introduction (3-4 sentences)</h4>
                        <p>Hook + Background + Thesis statement</p>
                      </div>
                    </div>
                    <div class="structure-step">
                      <span class="step-number">2</span>
                      <div class="step-content">
                        <h4>Body Paragraph 1 (5-7 sentences)</h4>
                        <p>Main idea + Explanation + Example + Analysis</p>
                      </div>
                    </div>
                    <div class="structure-step">
                      <span class="step-number">3</span>
                      <div class="step-content">
                        <h4>Body Paragraph 2 (5-7 sentences)</h4>
                        <p>Second main idea + Explanation + Example + Analysis</p>
                      </div>
                    </div>
                    <div class="structure-step">
                      <span class="step-number">4</span>
                      <div class="step-content">
                        <h4>Conclusion (2-3 sentences)</h4>
                        <p>Summarize main points + Final thought</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="strategy-section speaking">
              <div class="section-header">
                <span class="section-icon">🗣️</span>
                <h2>Speaking Section Confidence</h2>
                <span class="duration-badge">11-14 minutes</span>
              </div>
              
              <div class="speaking-parts">
                <div class="part-detailed">
                  <h3>Part 1: Introduction & Interview (4-5 minutes)</h3>
                  <div class="part-tips">
                    <div class="tip-item">
                      <span class="tip-icon">💡</span>
                      <p>Keep answers between 1-3 sentences - don't over-elaborate</p>
                    </div>
                    <div class="tip-item">
                      <span class="tip-icon">🎯</span>
                      <p>Use present tense for current situations, past for experiences</p>
                    </div>
                    <div class="tip-item">
                      <span class="tip-icon">😊</span>
                      <p>Be natural and friendly - show your personality</p>
                    </div>
                  </div>
                </div>

                <div class="part-detailed">
                  <h3>Part 2: Individual Long Turn (3-4 minutes)</h3>
                  <div class="cue-card-strategy">
                    <h4>1-Minute Preparation Strategy</h4>
                    <div class="prep-steps">
                      <div class="prep-step">
                        <span class="prep-time">0-20 sec:</span>
                        <span class="prep-action">Understand the topic and all bullet points</span>
                      </div>
                      <div class="prep-step">
                        <span class="prep-time">20-40 sec:</span>
                        <span class="prep-action">Brainstorm ideas for each bullet point</span>
                      </div>
                      <div class="prep-step">
                        <span class="prep-time">40-60 sec:</span>
                        <span class="prep-action">Plan your 2-minute structure</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="part-detailed">
                  <h3>Part 3: Two-way Discussion (4-5 minutes)</h3>
                  <div class="discussion-strategies">
                    <div class="strategy-box">
                      <h4>For Abstract Questions:</h4>
                      <p>Use "It depends on..." or "There are several factors..." to show analytical thinking</p>
                    </div>
                    <div class="strategy-box">
                      <h4>For Opinion Questions:</h4>
                      <p>Give your view, explain reasoning, provide examples from your knowledge/experience</p>
                    </div>
                    <div class="strategy-box">
                      <h4>For Future Predictions:</h4>
                      <p>Use conditionals: "If..., then..." and modal verbs: "might," "could," "will probably"</p>
                    </div>
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
          url: 'https://www.youtube.com/embed/ielts-speaking-band9',
          title: 'IELTS Speaking Band 9 Examples',
          description: 'Watch real Band 9 speaking performances with examiner feedback'
        },
        {
          type: 'audio',
          url: '/audio/ielts-listening-practice.mp3',
          title: 'IELTS Listening Practice Test',
          description: 'Full-length listening practice with different accents'
        }
      ]
    }
    // Additional pages for TOEFL, PTE strategies...
  ]
};

export default languageTestPrepBook;
