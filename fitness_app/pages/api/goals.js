import Goal from '@/models/Goal';
import dbConnect from '@/utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { userId, goalName, targetValue } = req.body;

    if (!userId || !goalName || !targetValue) {
      return res.status(400).json({ message: 'userId, goalName, and targetValue are required' });
    }

    try {
      const newGoal = new Goal({ userId, goalName, targetValue, currentValue: 0 });
      await newGoal.save();
      return res.status(201).json(newGoal);
    } catch (error) {
      return res.status(500).json({ message: 'Error saving goal' });
    }
  } else if (req.method === 'GET') {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }

    try {
      const goals = await Goal.find({ userId });
      return res.status(200).json(goals);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching goals' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
