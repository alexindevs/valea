import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db'; 
import { Letter } from '@/lib/models/Letter';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, letter, file } = body;
    
     const deliverInDays = Math.floor(Math.random() * (365 - 7 + 1)) + 7;
     const deliverAt = new Date(Date.now() + deliverInDays * 24 * 60 * 60 * 1000);
    // for testing, set deliverAt to 2 minutes from now
    // const deliverAt = new Date(Date.now() + 2 * 60 * 1000);
     
     await Letter.create({
       name,
       email,
       letter,
       attachmentUrl: file,
       deliverAt,
     });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Letter submitted successfully' 
    });
  } catch (error) {
    console.error('Error submitting letter:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit letter' },
      { status: 500 }
    );
  }
}