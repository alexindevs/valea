'use client'
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Confirmation({ triggerLetterForm }: { triggerLetterForm: () => void }) {
  const [showPetals, setShowPetals] = useState(false);

  const createPetal = (index: number) => (
    <div
      key={index}
      className="absolute text-lg md:text-4xl text-lilac-medium animate-fall opacity-80"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    >
      🌸
    </div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPetals(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {showPetals && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => createPetal(i))}
        </div>
      )}
      
      <div className="text-center md:w-[70%] py-10 space-y-6 md:space-y-4 px-5 relative z-10">
        <h1 className="animate-float text-5xl">💜</h1>
        <h2 className="animate-fade-in-up text-3xl font-lavish">
          Your Letter Has Taken Flight
        </h2>
        <p className="animate-fade-in-up font-light">
          It now dances among the cosmos, waiting for the perfect moment to return to you.
        </p>
        <p className="animate-fade-in-up font-light">
          When you need it most, when the universe knows you&apos;re ready, it will find its way back.
        </p>
        <p className="animate-fade-in-up font-light text-sm">
          <i>Trust the journey. Trust the timing. Trust yourself.</i>
        </p>
        <Button className="rounded-2xl" onClick={triggerLetterForm}>
          Write Another Letter 🪶
        </Button>
      </div>
    </div>
  );
}