'use client'
import { useState } from "react";
import { LetterForm } from "../components/LetterForm";
import { HomeScreen } from "../components/HomeScreen";
import { SendingScreen } from "../components/SendingScreen";
import { Confirmation } from "../components/Confirmation";
import axios from "axios";

type Screen = 'home' | 'letter-form' | 'sending' | 'confirmation';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const handleTriggerLetterForm = (): void => {
    setCurrentScreen('letter-form');
  };

  const handleBackToHome = (): void => {
    setCurrentScreen('home');
  };

  const handleLetterSubmit = async (name: string, email: string, letter: string, file?: string): Promise<void> => {
    setCurrentScreen('sending');
    console.log("Letter submitted!");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Letter: ${letter}`);
    console.log(`File: ${file}`);

    try {
      await axios.post('/api/letters', {
        name,
        email,
        letter,
        file,
      });
    } catch (error) {
      console.error('Error submitting letter:', error);
      setCurrentScreen('home');
      return;
    }

    setCurrentScreen('confirmation');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen triggerLetterForm={handleTriggerLetterForm} />;
      case 'letter-form':
        return <LetterForm onBack={handleBackToHome} onLetterSubmit={handleLetterSubmit} />;
      case 'sending':
        return <SendingScreen />;
      case 'confirmation':
        return <Confirmation triggerLetterForm={handleTriggerLetterForm} />;
      default:
        return <HomeScreen triggerLetterForm={handleTriggerLetterForm} />;
    }
  };

  return <>{renderScreen()}</>;
}