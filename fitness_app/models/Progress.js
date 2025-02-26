import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    goalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal', required: true },
    currentValue: { type: Number, default: 0 },
    targetValue: { type: Number, required: true },
  });
  
  const Progress = mongoose.models.Progress || mongoose.model('Progress', progressSchema);
  
  export default Progress;