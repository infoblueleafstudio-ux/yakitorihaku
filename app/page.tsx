'use client';

import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { ConceptSection } from '../components/sections/ConceptSection';
import { MenuSection } from '../components/sections/MenuSection';
import { SpaceSection } from '../components/sections/SpaceSection';
import { AccessSection } from '../components/sections/AccessSection';
import ClosingSection from '../components/sections/ClosingSection';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Concept Section */}
      <ConceptSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Space Section */}
      <SpaceSection />

      {/* Access Section */}
      <AccessSection />

      {/* Closing Section */}
      <ClosingSection />
    </div>
  );
}