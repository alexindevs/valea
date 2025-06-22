import { connectDB } from '@/lib/db';
import { createEmailTemplate } from '@/lib/email';
import { Letter } from '@/lib/models/Letter';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  await connectDB();

  const now = new Date();

  const dueLetters = await Letter.find({
    delivered: false,
    deliverAt: { $lte: now },
  });

  if (dueLetters.length === 0) {
    return NextResponse.json({ message: 'No letters to send.' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  for (const letter of dueLetters) {
    const sentDate = new Date(letter.sentAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailBody = createEmailTemplate(
      letter.name,
      letter.letter,
      letter.attachmentUrl,
      sentDate
    );

    try {
      await transporter.sendMail({
        from: `"Valea" <noreply@valea.vercel.app>`,
        to: letter.email,
        subject: "There's a letter for you!",
        html: emailBody,
      });

      letter.delivered = true;
      await letter.save();
    } catch (err) {
      console.error(`Failed to send letter to ${letter.email}`, err);
    }
  }

  return NextResponse.json({ message: `${dueLetters.length} letter(s) sent.` });
}