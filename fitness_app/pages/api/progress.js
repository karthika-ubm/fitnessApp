import mongoose from 'mongoose';

import Progress from '@/models/Progress';
import dbConnect from '@/utils/dbConnect';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;
    
    // Validate userId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid userId format' });
    }

    try {
      await dbConnect();
      
      // Log the userId to check the incoming value
      console.log("Fetching progress for userId:", userId);

      const progressData = await Progress.find({ userId: new mongoose.Types.ObjectId(userId) });
      console.log('Progress Data:', progressData);
      if (!progressData || progressData.length === 0) {
        return res.status(404).json({ message: 'Progress not found' });
      }
      

      return res.status(200).json({ goalProgress: progressData });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
