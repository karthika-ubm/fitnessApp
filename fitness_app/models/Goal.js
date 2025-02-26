import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  goalName: { type: String, required: true },
  targetValue: { type: Number, required: true },
  currentValue: { type: Number, required: true, default: 0 },
}, { timestamps: true });

// Exporting the model
export default mongoose.models.Goal || mongoose.model('Goal', GoalSchema);
