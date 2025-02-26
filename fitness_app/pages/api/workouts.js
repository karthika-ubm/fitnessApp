import Workout from '@/models/Workout';

// pages/api/workouts.js
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { userId, name, duration, calories } = req.body;
    const newWorkout = new Workout({ userId, name, duration, calories });
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } else if (req.method === 'GET') {
    const workouts = await Workout.find({ userId: req.query.userId });
    res.status(200).json(workouts);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
