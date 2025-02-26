// models/Workout.js
import mongoose from 'mongoose';

const WorkoutSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  duration: { type: Number, required: true }, // minutes
  calories: { type: Number, required: true }, // calories burned
}, { timestamps: true });

export default mongoose.models.Workout || mongoose.model('Workout', WorkoutSchema);
