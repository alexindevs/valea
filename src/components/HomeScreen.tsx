import { Button } from '@/components/ui/button';
import { Header } from './Header';
import Link from 'next/link';

export function HomeScreen({ triggerLetterForm }: { triggerLetterForm: () => void }) {
  return (
    <>
      <Header />
      <div className="space-y-2 font-light text-center text-md w-[70%] mx-auto h-fit mt-5 mb-10">
        <p className='animate-fade-in-up ![animation-delay:0s]'>
          A time-capsule messaging system where you write letters in moments of clarity, love, pain, or chaos. But you don&apos;t choose when they arrive.
        </p>
        <p className='animate-fade-in-up ![animation-delay:0.4s]'>
          You just let them go. Then one day, when you least expect it, when you need it most, they return. Like a whisper from the past.
        </p>
        <p className='animate-fade-in-up ![animation-delay:0.8s]'>
          The goal isn&apos;t control. It&apos;s surrender. To healing. To randomness. To timing that&apos;s out of your hands, but just right.
        </p>
      </div>
      <Button 
        className='rounded-3xl block w-[150px] mx-auto animate-fade-in-up ![animation-delay:1.2s]'
        onClick={triggerLetterForm}
      >
        Write A Letter 🪶
      </Button>

      <p className="text-center mt-10 text-sm">Made with 💜 by <Link href="https://github.com/alexindevs" target="_blank" className="text-lilac-medium hover:text-lilac-dark">Alexin</Link> 🌸</p>
    </>
  );
}