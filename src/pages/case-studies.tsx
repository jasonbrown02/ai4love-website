import Layout from '@/components/Layout'

export default function CaseStudies() {
  const title = "Case Studies - AI4Love"
  const description = "Explore real-world examples of how nonprofits and foundations have transformed their supporter relationships with AI4Love's relationship intelligence platform."
  
  return (
    <Layout title={title} description={description} canonicalUrl="https://ai4love.com/case-studies">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1>Case Studies</h1>
          <p>Explore how organizations like yours have transformed their supporter relationships with AI4Love's relationship intelligence platform.</p>

          <h2>Memorial Hospital Foundation</h2>
          <p><strong>Challenge:</strong> Memorial Hospital Foundation was struggling with donor retention, particularly among grateful patients. Their development team was overwhelmed trying to maintain relationships with thousands of donors, and they lacked visibility into which relationships needed attention.</p>
          
          <p><strong>Solution:</strong> AI4Love implemented its Generosity Engine and Recognition Engine, integrating with the foundation's existing Raiser's Edge CRM and email marketing platform.</p>
          
          <p><strong>Results:</strong></p>
          <ul>
            <li>38% increase in donor retention rate within 12 months</li>
            <li>42% improvement in grateful patient conversion to recurring donors</li>
            <li>25% increase in average gift size from retained donors</li>
            <li>Development officers reported saving 15+ hours per week on relationship management</li>
            <li>Physician engagement in fundraising increased by 30%</li>
          </ul>
          
          <p><em>"AI4Love has transformed how we manage donor relationships. We now know exactly who needs attention and why, allowing us to be proactive rather than reactive. Our donors feel more connected to our mission than ever before."</em> - Sarah Johnson, Development Director</p>

          <h2>Westlake University Alumni Association</h2>
          <p><strong>Challenge:</strong> Westlake University was facing declining alumni engagement rates, particularly among young alumni. Their alumni relations team was struggling to personalize outreach at scale, and they lacked insights into alumni interests and preferences.</p>
          
          <p><strong>Solution:</strong> AI4Love implemented its Engagement Engine and Insights Dashboard, integrating with the university's Ellucian CRM and event management platform.</p>
          
          <p><strong>Results:</strong></p>
          <ul>
            <li>45% increase in overall alumni engagement within 10 months</li>
            <li>62% improvement in young alumni participation</li>
            <li>28% increase in event attendance</li>
            <li>Alumni giving participation increased from 18% to 27%</li>
            <li>Alumni satisfaction scores improved by 35%</li>
          </ul>
          
          <p><em>"AI4Love has revolutionized our alumni engagement strategy. We're now able to create personalized journeys for different alumni segments, and we have clear visibility into what's working and what's not. The impact on our young alumni engagement has been particularly remarkable."</em> - Michael Chen, Alumni Relations Director</p>

          <h2>Greenway Environmental Foundation</h2>
          <p><strong>Challenge:</strong> Greenway was struggling to convert one-time environmental advocates into long-term donors and volunteers. They had a large base of people who had taken action on environmental issues but couldn't effectively nurture these relationships into deeper engagement.</p>
          
          <p><strong>Solution:</strong> AI4Love implemented its Engagement Engine and Language Engine, integrating with Greenway's CRM, advocacy platform, and email marketing system.</p>
          
          <p><strong>Results:</strong></p>
          <ul>
            <li>52% increase in advocate-to-donor conversion rate</li>
            <li>35% improvement in multi-channel engagement</li>
            <li>40% increase in volunteer retention</li>
            <li>Monthly giving program grew by 65% in 8 months</li>
            <li>Staff reported 30% reduction in time spent on communication planning</li>
          </ul>
          
          <p><em>"AI4Love has helped us build a bridge between advocacy and philanthropy. We're now able to create seamless supporter journeys that nurture people from their first action to becoming committed donors and volunteers. The personalized communication recommendations have been game-changing for our messaging effectiveness."</em> - Elena Rodriguez, Executive Director</p>

          <h2>Community Foundation of Greater Lakeside</h2>
          <p><strong>Challenge:</strong> The foundation was struggling to effectively engage their donor-advised fund holders and professional advisor network. They lacked visibility into fund holder interests and couldn't provide personalized giving opportunities at scale.</p>
          
          <p><strong>Solution:</strong> AI4Love implemented its Generosity Engine and Insights Dashboard, integrating with the foundation's FIMS database and donor portal.</p>
          
          <p><strong>Results:</strong></p>
          <ul>
            <li>32% increase in donor-advised fund activity</li>
            <li>48% improvement in professional advisor referrals</li>
            <li>27% increase in new fund establishment</li>
            <li>DAF holders reported 45% higher satisfaction with foundation services</li>
            <li>Staff capacity for donor services increased by 35% without adding headcount</li>
          </ul>
          
          <p><em>"AI4Love has transformed our ability to serve our fund holders and work with professional advisors. We now have deep insights into our donors' interests and can proactively suggest giving opportunities that align with their passions. Our team is able to provide a much higher level of personalized service without working longer hours."</em> - Robert Thompson, CEO</p>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold font-poppins mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-gray-600 mb-6 font-poppins">
            Discover how AI4Love can help your organization achieve similar results through relationship intelligence.
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
