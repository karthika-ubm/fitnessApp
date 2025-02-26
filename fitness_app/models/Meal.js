// models/Meal.js
import mongoose from 'mongoose';

const MealSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fat: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.models.Meal || mongoose.model('Meal', MealSchema);
