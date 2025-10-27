"use client";
import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const { scrollY } = useScroll();

  const radius = useTransform(scrollY, [0, 600], [15, 160]);
  const clipPath = useTransform(radius, (r) => `circle(${r}% at 50% 50%)`);
  const imageY = useTransform(scrollY, [0, 400], [-350, -60]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.05]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.85]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -40]);

  // ✅ 呼吸：useEffectでアニメート
  const breathing = useSpring(0, { stiffness: 30, damping: 12, mass: 0.2 });
  useEffect(() => {
    const controls = animate(breathing, 1, {
      duration: 4.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [breathing]);

  const breathOpacity = useTransform(breathing, [0, 1], [0.75, 0.95]);
  const breathY = useTransform(breathing, [0, 1], [0, -8]);

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
          style={{
            fontFamily: "Zen Old Mincho, serif",
            textShadow: "0 0 16px rgba(195,169,112,0.14)",
          }}
        >
          やきとり 箔
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
          className="
            absolute inset-0 
            w-full h-full 
            object-cover 
            object-[45%_30%]   /* ✅ 焦点を中央より少し左に調整 */
          "
          style={{ scale }}
        />
      </motion.div>

      {/* 下フェード（金の呼吸層） */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[22vh] z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(195,169,112,0.18) 0%, rgba(195,169,112,0.08) 45%, rgba(10,10,10,0.85) 100%)",
          filter: "blur(32px)",
          opacity: breathOpacity,
          y: breathY,
        }}
      />

      {/* Scroll */}
      <motion.div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-20"
        style={{ top: "calc(50% + 20vh)" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ChevronDown size={22} className="text-[#c3a970]/80 mb-1" />
        <span className="text-[12px] tracking-[0.22em] text-[#c3a970]/80 uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};