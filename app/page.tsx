'use client';

import { ChevronDown, Phone, Calendar, MapPin } from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { ConceptSection } from '../components/sections/ConceptSection';
import { MenuSection } from '../components/sections/MenuSection';
import { SpaceSection } from '../components/sections/SpaceSection';
import { AccessSection } from '../components/sections/AccessSection';
import { CTASection } from '../components/sections/CTASection';
import { FooterSection } from '../components/sections/FooterSection';

export default function Home() {
  return (
    <div className="bg-charcoal min-h-screen">
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

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
