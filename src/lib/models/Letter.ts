import mongoose from 'mongoose';

const LetterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  letter: { type: String, required: true },
  attachmentUrl: { type: String, required: false },
  sentAt: { type: Date, default: Date.now },
  deliverAt: { type: Date, required: true },
  delivered: { type: Boolean, default: false },
});

export const Letter = mongoose.models.Letter || mongoose.model('Letter', LetterSchema);
