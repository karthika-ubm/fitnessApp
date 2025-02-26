import Exercise from '../../../models/Exercise';
import { authMiddleware } from '../../../utils/authMiddleware';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { user } = await authMiddleware(req, res);
  const { name, duration, calories } = req.body;

  const exercise = new Exercise({ user: user.id, name, duration, calories });
  await exercise.save();
  res.status(201).json({ exercise });
}
