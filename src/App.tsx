import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { SidesSection } from './sections/SidesSection';
import { WritingSection } from './sections/WritingSection';
import { ValuesSection } from './sections/ValuesSection';
import { BuildingSection, MindRoomSection, BeliefsSection, Footer } from './sections/RemainingSections';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-text-primary tracking-[-0.02em] font-sans selection:bg-[var(--text-primary)] selection:text-text-inverse overflow-x-clip transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
      <CustomCursor />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SidesSection />
      <WritingSection />
      <ValuesSection />
      <BuildingSection />
      <MindRoomSection />
      <BeliefsSection />
      <Footer />
    </div>
  );
}
