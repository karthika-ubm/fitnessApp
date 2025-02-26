import Meal from '@/models/Meal';

// pages/api/meals.js
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { userId, name, calories, protein, carbs, fat } = req.body;
    const newMeal = new Meal({ userId, name, calories, protein, carbs, fat });
    await newMeal.save();
    res.status(201).json(newMeal);
  } else if (req.method === 'GET') {
    const meals = await Meal.find({ userId: req.query.userId });
    res.status(200).json(meals);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
