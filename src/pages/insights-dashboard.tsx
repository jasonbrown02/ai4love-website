import Layout from '@/components/Layout'

export default function InsightsDashboard() {
  const title = "Insights Dashboard - AI4Love"
  const description = "AI4Love's Insights Dashboard provides a centralized view of all supporter relationships with actionable intelligence and priority recommendations."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/insights-dashboard">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Insights Dashboard</h1>
          <p>The AI4Love Insights Dashboard is your command center for relationship intelligence, providing a centralized view of all supporter relationships with actionable insights and priority recommendations.</p>

          <h2>Relationship Intelligence at a Glance</h2>
          <p>The dashboard presents a comprehensive overview of your supporter relationships:</p>
          
          <ul>
            <li><strong>Relationship Health Metrics</strong> - Visual indicators of overall relationship health across segments</li>
            <li><strong>Priority Actions</strong> - Daily-updated list of the most important relationship-building actions</li>
            <li><strong>Engagement Trends</strong> - Visual representation of engagement patterns over time</li>
            <li><strong>Supporter Segments</strong> - Dynamic segmentation based on relationship patterns</li>
            <li><strong>Early Warning Indicators</strong> - Alerts for potential disengagement or relationship issues</li>
          </ul>

          <h2>Actionable Intelligence</h2>
          <p>The dashboard transforms complex data into clear, actionable intelligence:</p>
          
          <ul>
            <li><strong>Specific Recommendations</strong> - Precise actions to strengthen specific relationships</li>
            <li><strong>Prioritized Tasks</strong> - Tasks ranked by potential relationship impact</li>
            <li><strong>Communication Suggestions</strong> - Recommended messaging approaches for different segments</li>
            <li><strong>Recognition Opportunities</strong> - Timely alerts for meaningful recognition moments</li>
            <li><strong>Re-engagement Strategies</strong> - Targeted approaches for re-engaging at-risk supporters</li>
          </ul>

          <h2>Customizable Views</h2>
          <p>The dashboard can be customized to focus on what matters most to your team:</p>
          
          <ul>
            <li><strong>Role-Based Views</strong> - Different perspectives for development staff, volunteer coordinators, etc.</li>
            <li><strong>Custom Segments</strong> - Create and save custom supporter segments</li>
            <li><strong>Metric Selection</strong> - Choose which relationship metrics to highlight</li>
            <li><strong>Time Period Adjustment</strong> - Analyze relationship data across different timeframes</li>
            <li><strong>Saved Filters</strong> - Save frequently used filter combinations</li>
          </ul>

          <h2>Collaborative Features</h2>
          <p>The dashboard facilitates team collaboration on relationship management:</p>
          
          <ul>
            <li><strong>Task Assignment</strong> - Assign relationship-building tasks to team members</li>
            <li><strong>Action Tracking</strong> - Monitor completion of relationship-building activities</li>
            <li><strong>Notes and Updates</strong> - Capture and share relationship insights</li>
            <li><strong>Success Stories</strong> - Document and share relationship wins</li>
            <li><strong>Team Performance</strong> - Track relationship management effectiveness</li>
          </ul>

          <h2>Integration with Your Workflow</h2>
          <p>The dashboard integrates seamlessly with your existing workflow:</p>
          
          <ul>
            <li><strong>Mobile Responsive</strong> - Access insights on any device</li>
            <li><strong>Email Alerts</strong> - Receive critical relationship insights via email</li>
            <li><strong>Calendar Integration</strong> - Sync relationship tasks with your calendar</li>
            <li><strong>Export Capabilities</strong> - Export insights for presentations or reports</li>
            <li><strong>API Access</strong> - Connect insights to other systems</li>
          </ul>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready to Transform Your Supporter Relationships?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Discover how AI4Love's Insights Dashboard can help your organization build deeper, more meaningful connections with supporters.
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
