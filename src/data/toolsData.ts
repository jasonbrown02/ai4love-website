export interface Tool {
  id: string
  name: string
  category: string
  description: string
  url: string
  logo?: string
}

export const tools: Tool[] = [
  // Fundraising & CRM
  { id: 'salesforce', name: 'Salesforce Nonprofit Cloud', category: 'Fundraising & CRM', description: 'Leading CRM platform built for nonprofit donor management and engagement', url: 'https://www.salesforce.org/nonprofit/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/salesforce_nonprofit_cloud.jpeg' },
  { id: 'blackbaud-re', name: 'Blackbaud Raiser\'s Edge NXT', category: 'Fundraising & CRM', description: 'Cloud-based fundraising and relationship management solution', url: 'https://www.blackbaud.com/products/blackbaud-raisers-edge-nxt', logo: '/platform-logos/Donor_&_Fundraising_CRMs/blackbaud_raisersedge_nxt_1.jpg' },
  { id: 'donorperfect', name: 'DonorPerfect', category: 'Fundraising & CRM', description: 'All-in-one donor management and fundraising software', url: 'https://www.donorperfect.com/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/donorperfect.png' },
  { id: 'bloomerang', name: 'Bloomerang', category: 'Fundraising & CRM', description: 'Donor management software focused on retention and engagement', url: 'https://www.bloomerang.co/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/bloomerang.png' },
  { id: 'virtuous', name: 'Virtuous', category: 'Fundraising & CRM', description: 'Responsive fundraising CRM built for modern donor engagement', url: 'https://www.virtuous.org/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/virtuous.png' },
  { id: 'neon-one', name: 'Neon One', category: 'Fundraising & CRM', description: 'Unified nonprofit management platform for fundraising', url: 'https://www.neonone.com/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/neon_one.png' },
  { id: 'everyaction', name: 'EveryAction (Bonterra)', category: 'Fundraising & CRM', description: 'Integrated fundraising, advocacy, and organizing platform', url: 'https://www.everyaction.com/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/everyaction.png' },
  { id: 'little-green-light', name: 'Little Green Light', category: 'Fundraising & CRM', description: 'Web-based donor management for small to mid-sized nonprofits', url: 'https://www.littlegreenlight.com/', logo: '/platform-logos/Marketing_&_Communications/little-green-light.png' },
  { id: 'civicrm', name: 'CiviCRM', category: 'Fundraising & CRM', description: 'Open-source constituent relationship management', url: 'https://civicrm.org/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/civiCRM.jpeg' },
  { id: 'kindful', name: 'Kindful', category: 'Fundraising & CRM', description: 'Donor management and online fundraising platform', url: 'https://www.kindful.com/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/kindful.jpg' },

  // Grantmaking & Foundation Tools
  { id: 'foundant-glm', name: 'Foundant GLM', category: 'Grantmaking & Foundation Tools', description: 'Comprehensive grant lifecycle management for foundations', url: 'https://www.foundant.com/grantmaking/', logo: '/platform-logos/Grantmaking_&_Foundation_Tools/foundant.jpg' },
  { id: 'fluxx', name: 'Fluxx', category: 'Grantmaking & Foundation Tools', description: 'Cloud-based grants management platform for funders', url: 'https://www.fluxx.io/', logo: '/platform-logos/Grantmaking_&_Foundation_Tools/fluxx.png' },
  { id: 'givingdata', name: 'GivingData', category: 'Grantmaking & Foundation Tools', description: 'Data-driven grantmaking and impact measurement', url: 'https://www.givingdata.com/', logo: '/platform-logos/Grantmaking_&_Foundation_Tools/givingData.png' },
  { id: 'smartsimple', name: 'SmartSimple Cloud', category: 'Grantmaking & Foundation Tools', description: 'Enterprise grants management and impact tracking', url: 'https://www.smartsimple.com/', logo: '/platform-logos/Grantmaking_&_Foundation_Tools/smartSimple_Cloud.png' },
  { id: 'instrumentl', name: 'Instrumentl', category: 'Grantmaking & Foundation Tools', description: 'Grant discovery and management platform', url: 'https://www.instrumentl.com/', logo: '/platform-logos/Grantmaking_&_Foundation_Tools/instrumentl.jpg' },
  { id: 'submittable', name: 'Submittable', category: 'Grantmaking & Foundation Tools', description: 'Social impact platform for grant applications', url: 'https://www.submittable.com/', logo: '/platform-logos/Grantmaking_&_Foundation_Tools/submittable.png' },

  // Volunteer & Membership Management
  { id: 'galaxy-digital', name: 'Galaxy Digital', category: 'Volunteer & Membership Management', description: 'Volunteer management software for recruiting', url: 'https://www.galaxydigital.com/', logo: '/platform-logos/Volunteer_&_Membership Management/Galaxy_Digital.png' },
  { id: 'better-impact', name: 'Better Impact', category: 'Volunteer & Membership Management', description: 'Volunteer management system for tracking', url: 'https://www.betterimpact.com/', logo: '/platform-logos/Volunteer_&_Membership Management/Better_Impact.png' },
  { id: 'initlive', name: 'InitLive', category: 'Volunteer & Membership Management', description: 'Event volunteer management and coordination', url: 'https://www.initlive.com/', logo: '/platform-logos/Volunteer_&_Membership Management/InitLive.png' },
  { id: 'volunteerhub', name: 'VolunteerHub', category: 'Volunteer & Membership Management', description: 'Volunteer management for all organization sizes', url: 'https://www.volunteerhub.com/', logo: '/platform-logos/Volunteer_&_Membership Management/VolunteerHub.png' },
  { id: 'yourmembership', name: 'YourMembership', category: 'Volunteer & Membership Management', description: 'All-in-one membership management software', url: 'https://www.yourmembership.com/', logo: '/platform-logos/Volunteer_&_Membership Management/YourMembership.png' },
  { id: 'wild-apricot', name: 'Wild Apricot', category: 'Volunteer & Membership Management', description: 'Membership management for small associations', url: 'https://www.wildapricot.com/', logo: '/platform-logos/Volunteer_&_Membership Management/Wild_Apricot.png' },

  // Events & Peer-to-Peer Campaigns
  { id: 'classy', name: 'Classy', category: 'Events & Peer-to-Peer Campaigns', description: 'Online fundraising platform for peer-to-peer and events', url: 'https://www.classy.org/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/classy.jpg' },
  { id: 'givebutter', name: 'Givebutter', category: 'Events & Peer-to-Peer Campaigns', description: 'Free fundraising platform for events and campaigns', url: 'https://givebutter.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/give_butter.png' },
  { id: 'qgiv', name: 'Qgiv', category: 'Events & Peer-to-Peer Campaigns', description: 'Mobile-friendly fundraising and event registration', url: 'https://www.qgiv.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/Qgiv.jpeg' },
  { id: 'donordrive', name: 'DonorDrive', category: 'Events & Peer-to-Peer Campaigns', description: 'Peer-to-peer fundraising for events', url: 'https://www.donordrive.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/donorDrive.png' },
  { id: 'onecause', name: 'OneCause', category: 'Events & Peer-to-Peer Campaigns', description: 'Fundraising event software and auction platform', url: 'https://www.onecause.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/oneCause.png' },
  { id: 'rallybound', name: 'Rallybound', category: 'Events & Peer-to-Peer Campaigns', description: 'Peer-to-peer fundraising for athletic events', url: 'https://www.rallybound.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/rallybound.png' },
  { id: 'fundraise-up', name: 'Fundraise Up', category: 'Events & Peer-to-Peer Campaigns', description: 'AI-powered online fundraising and donations', url: 'https://fundraiseup.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/fundraise.png' },
  { id: 'eventbrite', name: 'Eventbrite', category: 'Events & Peer-to-Peer Campaigns', description: 'Event management and ticketing platform', url: 'https://www.eventbrite.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/eventbrite.png' },
  { id: 'zeffy-events', name: 'Zeffy', category: 'Events & Peer-to-Peer Campaigns', description: '100% free fundraising platform for nonprofits', url: 'https://www.zeffy.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/zeffy.png' },
  { id: 'handbid', name: 'Handbid', category: 'Events & Peer-to-Peer Campaigns', description: 'Mobile bidding and auction management', url: 'https://www.handbid.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/handbid.png' },
  { id: 'clickbid', name: 'ClickBid', category: 'Events & Peer-to-Peer Campaigns', description: 'Fundraising auction and event management', url: 'https://www.clickbid.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/clickbid.png' },

  // Marketing & Supporter Communications
  { id: 'mailchimp', name: 'Mailchimp', category: 'Marketing & Supporter Communications', description: 'Email marketing and automation platform', url: 'https://mailchimp.com/', logo: '/platform-logos/Marketing_&_Communications/mailchimp.png' },
  { id: 'constant-contact', name: 'Constant Contact', category: 'Marketing & Supporter Communications', description: 'Email marketing and digital marketing', url: 'https://www.constantcontact.com/', logo: '/platform-logos/Marketing_&_Communications/constant_contact.png' },
  { id: 'hubspot', name: 'HubSpot', category: 'Marketing & Supporter Communications', description: 'Inbound marketing, sales, and CRM platform', url: 'https://www.hubspot.com/', logo: '/platform-logos/Marketing_&_Communications/hubspot.png' },
  { id: 'campaign-monitor', name: 'Campaign Monitor', category: 'Marketing & Supporter Communications', description: 'Email marketing for designers and agencies', url: 'https://www.campaignmonitor.com/', logo: '/platform-logos/Marketing_&_Communications/campaign_monitor.png' },
  { id: 'keela', name: 'Keela', category: 'Marketing & Supporter Communications', description: 'All-in-one nonprofit CRM and fundraising', url: 'https://www.keela.co/', logo: '/platform-logos/Marketing_&_Communications/keela.png' },
  { id: 'emma', name: 'Emma', category: 'Marketing & Supporter Communications', description: 'Email marketing for teams and agencies', url: 'https://myemma.com/', logo: '/platform-logos/Marketing_&_Communications/emma.jpeg' },
  { id: 'engaging-networks', name: 'Engaging Networks', category: 'Marketing & Supporter Communications', description: 'Digital engagement for advocacy and fundraising', url: 'https://www.engagingnetworks.net/', logo: '/platform-logos/Marketing_&_Communications/engaging_networks.png' },
  { id: 'wordpress', name: 'WordPress', category: 'Marketing & Supporter Communications', description: 'Open-source content management system', url: 'https://wordpress.org/', logo: '/platform-logos/Marketing_&_Communications/wordpress.png' },
  { id: 'squarespace', name: 'Squarespace', category: 'Marketing & Supporter Communications', description: 'Website builder and hosting platform', url: 'https://www.squarespace.com/', logo: '/platform-logos/Marketing_&_Communications/squarespace.png' },
  { id: 'wix', name: 'Wix', category: 'Marketing & Supporter Communications', description: 'Cloud-based website development platform', url: 'https://www.wix.com/', logo: '/platform-logos/Marketing_&_Communications/wix.png' },
  { id: 'drupal', name: 'Drupal', category: 'Marketing & Supporter Communications', description: 'Open-source content management framework', url: 'https://www.drupal.org/', logo: '/platform-logos/Marketing_&_Communications/drupal.png' },

  // Finance, Payments & Fund Accounting
  { id: 'quickbooks', name: 'QuickBooks Online', category: 'Finance, Payments & Fund Accounting', description: 'Cloud-based accounting for nonprofits', url: 'https://quickbooks.intuit.com/nonprofit/', logo: '/platform-logos/Finance_&_Operations/intuit_quickbooks.png' },
  { id: 'aplos', name: 'Aplos', category: 'Finance, Payments & Fund Accounting', description: 'Fund accounting and donor management', url: 'https://www.aplos.com/', logo: '/platform-logos/Finance_&_Operations/apios.png' },
  { id: 'sage-intacct', name: 'Sage Intacct', category: 'Finance, Payments & Fund Accounting', description: 'Cloud-based financial management', url: 'https://www.sageintacct.com/', logo: '/platform-logos/Finance_&_Operations/sage_intacct.png' },
  { id: 'blackbaud-fenxt', name: 'Blackbaud Financial Edge NXT', category: 'Finance, Payments & Fund Accounting', description: 'Cloud-based fund accounting', url: 'https://www.blackbaud.com/products/blackbaud-financial-edge-nxt', logo: '/platform-logos/Finance_&_Operations/Blackbaud_Financial_Edge.png' },
  { id: 'xero', name: 'Xero', category: 'Finance, Payments & Fund Accounting', description: 'Cloud accounting software', url: 'https://www.xero.com/', logo: '/platform-logos/Finance_&_Operations/xero.png' },
  { id: 'stripe', name: 'Stripe', category: 'Finance, Payments & Fund Accounting', description: 'Online payment processing platform', url: 'https://stripe.com/', logo: '/platform-logos/Finance_&_Operations/stripe.png' },
  { id: 'square', name: 'Square', category: 'Finance, Payments & Fund Accounting', description: 'Payment processing and point-of-sale', url: 'https://squareup.com/', logo: '/platform-logos/Finance_&_Operations/square.png' },
  { id: 'paypal-giving', name: 'PayPal Giving Fund', category: 'Finance, Payments & Fund Accounting', description: 'Donation platform with no fees', url: 'https://www.paypal.com/givingfund/', logo: '/platform-logos/Finance_&_Operations/paypal_giving_fund.png' },
  { id: 'canadahelps', name: 'CanadaHelps', category: 'Finance, Payments & Fund Accounting', description: 'Canada\'s largest donation platform', url: 'https://www.canadahelps.org/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/canada_helps.png' },

  // Productivity & Team Collaboration
  { id: 'slack', name: 'Slack', category: 'Productivity & Team Collaboration', description: 'Team communication and collaboration', url: 'https://slack.com/', logo: '/platform-logos/Productivity_&_Collaboration/slack.jpeg' },
  { id: 'microsoft-365', name: 'Microsoft 365', category: 'Productivity & Team Collaboration', description: 'Cloud-based productivity suite', url: 'https://www.microsoft.com/microsoft-365', logo: '/platform-logos/Productivity_&_Collaboration/microsoft_365.png' },
  { id: 'google-workspace', name: 'Google Workspace', category: 'Productivity & Team Collaboration', description: 'Cloud-based productivity tools', url: 'https://workspace.google.com/', logo: '/platform-logos/Productivity_&_Collaboration/google_workspace.png' },
  { id: 'zoom', name: 'Zoom', category: 'Productivity & Team Collaboration', description: 'Video conferencing and online meetings', url: 'https://zoom.us/', logo: '/platform-logos/Productivity_&_Collaboration/zoom.png' },
  { id: 'dropbox', name: 'Dropbox', category: 'Productivity & Team Collaboration', description: 'Cloud storage and file sharing', url: 'https://www.dropbox.com/', logo: '/platform-logos/Productivity_&_Collaboration/dropbox.png' },
  { id: 'sync', name: 'Sync.com', category: 'Productivity & Team Collaboration', description: 'Secure cloud storage with encryption', url: 'https://www.sync.com/', logo: '/platform-logos/Productivity_&_Collaboration/sync.png' },
  { id: 'asana', name: 'Asana', category: 'Productivity & Team Collaboration', description: 'Work management platform for teams', url: 'https://asana.com/', logo: '/platform-logos/Productivity_&_Collaboration/asana.png' },
  { id: 'trello', name: 'Trello', category: 'Productivity & Team Collaboration', description: 'Visual collaboration tool', url: 'https://trello.com/', logo: '/platform-logos/Productivity_&_Collaboration/trello.png' },
  { id: 'monday', name: 'Monday.com', category: 'Productivity & Team Collaboration', description: 'Work operating system', url: 'https://monday.com/', logo: '/platform-logos/Productivity_&_Collaboration/monday.png' },

  // BI, Analytics & Reporting
  { id: 'power-bi', name: 'Power BI', category: 'BI, Analytics & Reporting', description: 'Business analytics and data visualization', url: 'https://powerbi.microsoft.com/', logo: '/platform-logos/Analytics_&_Reporting/power-bi.png' },
  { id: 'tableau', name: 'Tableau', category: 'BI, Analytics & Reporting', description: 'Visual analytics and business intelligence', url: 'https://www.tableau.com/', logo: '/platform-logos/Analytics_&_Reporting/tableau.png' },
  { id: 'looker-studio', name: 'Google Looker Studio', category: 'BI, Analytics & Reporting', description: 'Free data visualization and reporting', url: 'https://lookerstudio.google.com/', logo: '/platform-logos/Analytics_&_Reporting/looker.png' },
  { id: 'keela-intelligence', name: 'Keela Intelligence', category: 'BI, Analytics & Reporting', description: 'AI-powered insights for fundraising', url: 'https://www.keela.co/', logo: '/platform-logos/Analytics_&_Reporting/keela.png' },
  { id: 'salesforce-reports', name: 'Salesforce Reports', category: 'BI, Analytics & Reporting', description: 'Built-in reporting and analytics', url: 'https://www.salesforce.com/products/platform/products/reports-dashboards/', logo: '/platform-logos/Analytics_&_Reporting/salesforce.png' },
  { id: 'google-analytics', name: 'Google Analytics', category: 'BI, Analytics & Reporting', description: 'Web analytics and reporting', url: 'https://analytics.google.com/', logo: '/platform-logos/Analytics_&_Reporting/google-analytics.png' },

  // Advocacy & Campaigning
  { id: 'engaging-networks-advocacy', name: 'Engaging Networks', category: 'Advocacy & Campaigning', description: 'Digital advocacy and campaigning', url: 'https://www.engagingnetworks.net/', logo: '/platform-logos/Advocacy_&_Campaigning/engaging_networks.png' },
  { id: 'new-mode', name: 'New/Mode', category: 'Advocacy & Campaigning', description: 'Digital advocacy tools for campaigns', url: 'https://www.newmode.net/', logo: '/platform-logos/Advocacy_&_Campaigning/new-mode.png' },
  { id: 'phone2action', name: 'Phone2Action (Bonterra)', category: 'Advocacy & Campaigning', description: 'Advocacy and grassroots engagement', url: 'https://www.phone2action.com/', logo: '/platform-logos/Advocacy_&_Campaigning/phone2action.png' },
  { id: 'salsa-engage', name: 'Salsa Engage', category: 'Advocacy & Campaigning', description: 'Integrated advocacy and fundraising', url: 'https://www.salsalabs.com/', logo: '/platform-logos/Advocacy_&_Campaigning/salsa_engage.png' },

  // Crowdfunding & Micro-Giving
  { id: 'gofundme-charity', name: 'GoFundMe Charity', category: 'Crowdfunding & Micro-Giving', description: 'Crowdfunding platform for charitable causes', url: 'https://www.gofundme.com/c/charity', logo: '/platform-logos/Crowdfunding_&_Micro-Giving/gofundme-charity.png' },
  { id: 'chuffed', name: 'Chuffed.org', category: 'Crowdfunding & Micro-Giving', description: 'Social enterprise crowdfunding', url: 'https://chuffed.org/', logo: '/platform-logos/Crowdfunding_&_Micro-Giving/chuffed.png' },
  { id: 'canadahelps-crowdfunding', name: 'CanadaHelps', category: 'Crowdfunding & Micro-Giving', description: 'Canadian crowdfunding platform', url: 'https://www.canadahelps.org/', logo: '/platform-logos/Donor_&_Fundraising_CRMs/canada_helps.png' },
  { id: 'zeffy-crowdfunding', name: 'Zeffy', category: 'Crowdfunding & Micro-Giving', description: 'Zero-fee fundraising for nonprofits', url: 'https://www.zeffy.com/', logo: '/platform-logos/Event_Ticketing_&_Peer_to_Peer/zeffy.png' },
]

export const categories = [
  'Fundraising & CRM',
  'Grantmaking & Foundation Tools',
  'Volunteer & Membership Management',
  'Events & Peer-to-Peer Campaigns',
  'Marketing & Supporter Communications',
  'Finance, Payments & Fund Accounting',
  'Productivity & Team Collaboration',
  'BI, Analytics & Reporting',
  'Advocacy & Campaigning',
  'Crowdfunding & Micro-Giving'
]
