import FloatingHearts from '@/components/FloatingHearts';
import MusicToggle from '@/components/MusicToggle';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import LetterSection from '@/components/LetterSection';
import DreamsSection from '@/components/DreamsSection';
import CanadaSection from '@/components/CanadaSection';
import VisionSection from '@/components/VisionSection';
import FinalLetter from '@/components/FinalLetter';
import ClosingSection from '@/components/ClosingSection';

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Floating hearts in background */}
      <FloatingHearts />
      
      {/* Music toggle button */}
      <MusicToggle />
      
      {/* Main sections */}
      <HeroSection />
      <TimelineSection />
      <LetterSection />
      <DreamsSection />
      <CanadaSection />
      <VisionSection />
      <FinalLetter />
      <ClosingSection />
    </div>
  );
};

export default Index;
