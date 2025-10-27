"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const { scrollY } = useScroll();

  // 覗き穴
  const radius = useTransform(scrollY, [0, 600], [15, 160]);
  const clipPath = useTransform(radius, (r) => `circle(${r}% at 50% 50%)`);

  // 画像のゆらぎ
  const imageY = useTransform(scrollY, [0, 400], [-350, -60]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.05]);

  // トーン & タイトル
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.85]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section className="relative h-[140vh] bg-[#0a0a0a] overflow-hidden">
      {/* 背景グラデーション */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]"
      />

      {/* タイトル */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="relative z-10 flex flex-col items-center justify-center h-[28vh] -mt-[4vh] text-center"
      >
        <h2
          className="text-4xl md:text-6xl font-bold text-[#c3a970]/90 mb-3 tracking-wide"
          style={{ fontFamily: "Zen Old Mincho, serif", textShadow: "0 0 16px rgba(195,169,112,0.14)" }}
        >
          焼鳥はく
        </h2>
        <p
          className="text-lg md:text-xl text-[#c3a970]/60 tracking-[0.25em]"
          style={{ fontFamily: "Noto Serif, serif" }}
        >
          KAWAGOE
        </p>
      </motion.div>

      {/* 覗き穴（画像） */}
      <motion.div
        style={{ clipPath, y: imageY }}
        className="relative w-[100vw] h-[130vh] flex items-center justify-center overflow-hidden"
      >
        <motion.img
          src="/images/haku.png"
          alt="焼鳥はく 店内"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
          style={{ scale, transition: "transform 0.3s ease-in-out" }}
        />
      </motion.div>

      {/* 下フェード（金のにじみ層） */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[16vh]"
        style={{
          background:
            // 下へ向かって黒、中央に金の霞がわずかに差す
            'radial-gradient(120% 60% at 50% 0%, rgba(195,169,112,0.10) 0%, rgba(10,10,10,0.0) 45%), linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 90%)',
          filter: 'blur(18px)',
          opacity: 0.9,
        }}
      />

      {/* Scroll ラベル（覗き穴の下端付近に固定） */}
      <motion.div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-20"
        style={{ top: "calc(50% + 20vh)" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ChevronDown size={22} className="text-[#c3a970]/80 mb-1" style={{ strokeWidth: 1.5 }} />
        <span
          className="text-[12px] tracking-[0.22em] text-[#c3a970]/80 uppercase"
          style={{ fontFamily: "Noto Serif, serif", letterSpacing: "0.25em" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
};