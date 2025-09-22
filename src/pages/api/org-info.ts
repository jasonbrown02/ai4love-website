import { NextApiRequest, NextApiResponse } from 'next'

// This endpoint will be used to fetch organization information
// after Passage authentication via Airtable lookup
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // TODO: Implement Passage authentication validation
    // TODO: Implement Airtable lookup based on authenticated user
    
    // For now, we'll use the existing orgName from the current session
    // This should be replaced with actual Passage + Airtable integration
    const { userId } = req.query
    
    if (!userId) {
      return res.status(400).json({ message: 'User ID required' })
    }

    // Placeholder for Airtable lookup
    // In a real implementation, this would:
    // 1. Validate the Passage authentication token
    // 2. Look up the user in Airtable
    // 3. Return the organization name
    
    // For now, return a default response
    // This will be replaced with actual Airtable integration
    const orgInfo = {
      orgName: 'Friend', // Default fallback
      userId: userId
    }

    res.status(200).json(orgInfo)
  } catch (error) {
    console.error('Error fetching org info:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
