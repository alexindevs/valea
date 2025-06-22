import { connectDB } from '@/lib/db';
import { Letter } from '@/lib/models/Letter';
import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  await connectDB();

  const totalLetters = await Letter.countDocuments();
  const deliveredLetters = await Letter.countDocuments({ delivered: true });
  const pendingLetters = await Letter.countDocuments({ delivered: false });

  const nextLetter = await Letter.findOne({ delivered: false }).sort({ deliverAt: 1 });
  const lastDelivered = await Letter.findOne({ delivered: true }).sort({ deliverAt: -1 });

  const attachmentsIncluded = await Letter.countDocuments({ attachmentUrl: { $exists: true, $ne: "" } });

  const domainCounts = await Letter.aggregate([
    {
      $group: {
        _id: { $arrayElemAt: [{ $split: ['$email', '@'] }, 1] },
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 5 },
  ]);

  return NextResponse.json({
    totalLetters,
    deliveredLetters,
    pendingLetters,
    nextDeliveryDate: nextLetter?.deliverAt ?? "Nothing found.",
    lastDeliveredAt: lastDelivered?.deliverAt ?? null,
    attachmentsIncluded,
    topDomains: domainCounts.map((d) => ({ domain: d._id, count: d.count })),
  });
}
