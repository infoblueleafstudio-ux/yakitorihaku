'use client';

import { ChevronDown, Phone, Calendar, MapPin } from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { ConceptSection } from '../components/sections/ConceptSection';
import { AccessSection } from '../components/sections/AccessSection';
import { FooterSection } from '../components/sections/FooterSection';

export default function Home() {
  return (
    <div className="bg-charcoal min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Concept Section */}
      <ConceptSection />

      {/* Menu Section */}
      <section className="py-16 px-4 bg-[#232323]">
        <div className="max-w-[420px] mx-auto">
          <h2 className="text-2xl font-serif text-[#FAF8F5] mb-8 text-center">
            おすすめの串
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="min-w-[280px] bg-[#2B2B2B] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="白レバー"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif text-[#FAF8F5] mb-2">白レバー</h3>
                <p className="text-xs text-[#DCD8D4] leading-relaxed">
                  希少部位の白レバー。クリーミーで濃厚な味わいが特徴です。
                </p>
              </div>
            </div>
            <div className="min-w-[280px] bg-[#2B2B2B] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ねぎま"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif text-[#FAF8F5] mb-2">ねぎま</h3>
                <p className="text-xs text-[#DCD8D4] leading-relaxed">
                  ジューシーなもも肉と甘みのある長ネギの定番の組み合わせ。
                </p>
              </div>
            </div>
            <div className="min-w-[280px] bg-[#2B2B2B] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/5409019/pexels-photo-5409019.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="つくね"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif text-[#FAF8F5] mb-2">つくね</h3>
                <p className="text-xs text-[#DCD8D4] leading-relaxed">
                  当店自慢の自家製つくね。ふわふわの食感と秘伝のタレで。
                </p>
              </div>
            </div>
            <div className="min-w-[280px] bg-[#2B2B2B] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2133352/pexels-photo-2133352.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="手羽先"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif text-[#FAF8F5] mb-2">手羽先</h3>
                <p className="text-xs text-[#DCD8D4] leading-relaxed">
                  パリッと香ばしい皮と、ジューシーな肉汁が溢れる逸品。
                </p>
              </div>
            </div>
            <div className="min-w-[280px] bg-[#2B2B2B] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ささみ梅しそ"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif text-[#FAF8F5] mb-2">ささみ梅しそ</h3>
                <p className="text-xs text-[#DCD8D4] leading-relaxed">
                  さっぱりとしたささみに、梅と大葉の爽やかな風味。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section className="py-16 px-4">
        <div className="max-w-[420px] mx-auto">
          <h2 className="text-2xl font-serif text-[#FAF8F5] mb-8 text-center">
            静けさに包まれる空間
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="店内雰囲気1"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="店内雰囲気2"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg col-span-2">
              <img
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="店内雰囲気3"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="店内雰囲気4"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="店内雰囲気5"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <AccessSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
