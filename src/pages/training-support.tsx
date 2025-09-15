import Layout from '@/components/Layout'

export default function TrainingSupport() {
  const title = "Training & Support - AI4Love"
  const description = "Learn about AI4Love's comprehensive training and support services that ensure your team gets maximum value from relationship intelligence."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/training-support">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Training & Support</h1>
          <p>AI4Love provides comprehensive training and ongoing support to ensure your team gets maximum value from relationship intelligence. Our approach focuses on practical skills development and continuous learning.</p>

          <h2>Training Philosophy</h2>
          <p>Our training approach is built around several core principles:</p>
          
          <ul>
            <li><strong>Role-Based Learning</strong> - Training tailored to different user roles and responsibilities</li>
            <li><strong>Practical Application</strong> - Hands-on exercises using your actual data and scenarios</li>
            <li><strong>Bite-Sized Sessions</strong> - Focused training modules that respect busy schedules</li>
            <li><strong>Continuous Learning</strong> - Ongoing education beyond initial implementation</li>
            <li><strong>Skill Building</strong> - Focus on developing relationship intelligence skills, not just software usage</li>
          </ul>

          <h2>Training Programs</h2>
          <p>We offer a variety of training programs to meet different needs:</p>
          
          <h3>Implementation Training</h3>
          <ul>
            <li><strong>Admin Training</strong> - Comprehensive training for system administrators</li>
            <li><strong>User Onboarding</strong> - Role-based training for all system users</li>
            <li><strong>Executive Overview</strong> - Strategic briefing for leadership team</li>
            <li><strong>Train-the-Trainer</strong> - Preparing internal champions to support colleagues</li>
          </ul>

          <h3>Ongoing Education</h3>
          <ul>
            <li><strong>Monthly Webinars</strong> - Regular sessions on new features and best practices</li>
            <li><strong>Quarterly Workshops</strong> - Deep dives into specific relationship intelligence topics</li>
            <li><strong>Annual Refresher</strong> - Comprehensive review and advanced training</li>
            <li><strong>New User Training</strong> - Onboarding for staff who join after implementation</li>
          </ul>

          <h3>Specialized Training</h3>
          <ul>
            <li><strong>Advanced Analytics</strong> - Getting the most from relationship intelligence data</li>
            <li><strong>Workflow Optimization</strong> - Integrating relationship intelligence into daily work</li>
            <li><strong>Leadership Insights</strong> - Using relationship intelligence for strategic decisions</li>
            <li><strong>Cross-Department Collaboration</strong> - Breaking down silos with shared intelligence</li>
          </ul>

          <h2>Training Formats</h2>
          <p>We offer flexible training formats to accommodate different learning preferences:</p>
          
          <ul>
            <li><strong>Live Virtual Training</strong> - Interactive online sessions with expert trainers</li>
            <li><strong>On-Site Workshops</strong> - In-person training at your location (additional fee)</li>
            <li><strong>Self-Paced Learning</strong> - On-demand videos and tutorials</li>
            <li><strong>Documentation Library</strong> - Comprehensive written guides and resources</li>
            <li><strong>Office Hours</strong> - Regular drop-in sessions for questions and guidance</li>
          </ul>

          <h2>Ongoing Support</h2>
          <p>Our support doesn't end after implementation:</p>
          
          <h3>Technical Support</h3>
          <ul>
            <li><strong>Dedicated Support Team</strong> - Specialists who understand your implementation</li>
            <li><strong>Multiple Support Channels</strong> - Email, chat, and phone support options</li>
            <li><strong>Rapid Response Times</strong> - 1-hour response for critical issues</li>
            <li><strong>24/7 Emergency Support</strong> - Available for critical situations</li>
            <li><strong>Proactive Monitoring</strong> - We identify and address potential issues before they impact you</li>
          </ul>

          <h3>Success Support</h3>
          <ul>
            <li><strong>Dedicated Success Manager</strong> - Your advocate focused on your long-term success</li>
            <li><strong>Regular Check-ins</strong> - Scheduled success meetings to review progress</li>
            <li><strong>Adoption Monitoring</strong> - We track usage and provide guidance to increase adoption</li>
            <li><strong>Best Practice Sharing</strong> - We share relevant insights from similar organizations</li>
            <li><strong>Quarterly Business Reviews</strong> - Strategic sessions to maximize your ROI</li>
          </ul>

          <h2>Support Resources</h2>
          <p>We provide extensive resources to support your team:</p>
          
          <ul>
            <li><strong>Knowledge Base</strong> - Searchable repository of articles and guides</li>
            <li><strong>Video Library</strong> - Short, focused how-to videos</li>
            <li><strong>User Community</strong> - Connect with peers at other organizations</li>
            <li><strong>Monthly Newsletter</strong> - Tips, updates, and best practices</li>
            <li><strong>Feature Webinars</strong> - Regular demonstrations of new capabilities</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready to Learn More About Our Training and Support?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Contact us to discuss how AI4Love can ensure your team's success with relationship intelligence.
          </p>
          <a 
            href="mailto:hello@ai4love.com" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-poppins font-medium hover:bg-red-600 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </Layout>
  )
}
