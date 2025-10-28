"use client";
import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // モバイル判定
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ==== Motion値（相対化） ====
  // PC: 15% → 160%, モバイル: 15% → 120%
  const radius = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [15, 120] : [15, 160]
  );
  const clipPath = useTransform(radius, (r) => `circle(${r}% at 50% 50%)`);
  const imageY = useTransform(scrollYProgress, [0, 1], [-300, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  // ==== 呼吸エフェクト ====
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
    <section className="relative h-[130vh] md:h-[140vh] bg-[#0a0a0a] overflow-hidden">
      {/* 背景グラデーション（明暗差を強化） */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className={`absolute inset-0 ${
          isMobile 
            ? 'bg-gradient-to-b from-[#000000] via-[#1a1a1a] to-[#000000]' 
            : 'bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]'
        }`}
      />

      {/* タイトル */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="relative z-10 flex flex-col items-center justify-end 
                   h-[24vh] md:h-[26vh] pt-[8vh] md:pt-[10vh] text-center"
      >
        <h2
          className="text-4xl md:text-6xl font-bold text-[#c3a970]/90 mb-1 tracking-wide"
          style={{
            fontFamily: "Yuji Syuku, serif",
            letterSpacing: "0.05em",
            textShadow: "0 0 12px rgba(195,169,112,0.15)",
          }}
        >
          やきとり 箔
        </h2>
        <p
          className="text-base md:text-lg text-[#c3a970]/70 tracking-[0.3em] mt-[0.2em]"
          style={{ fontFamily: "Yuji Syuku, serif" }}
        >
          KAWAGOE
        </p>
      </motion.div>

      {/* 覗き穴 */}
      <motion.div
        style={{ clipPath, y: imageY }}
        className="
          relative w-[100vw] h-[120vh] md:h-[125vh] 
          flex items-center justify-center overflow-hidden
          -mt-[5vh] md:-mt-[3vh]
        "
      >
        <motion.img
          src="/images/haku.png"
          alt="焼鳥はく 店内"
          className="
            absolute inset-0 
            w-full h-full 
            object-cover 
            object-[45%_30%] md:object-[50%_30%]
          "
          style={{ scale }}
        />
      </motion.div>

      {/* 金の呼吸フェード */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[24vh] md:h-[22vh] z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(195,169,112,0.18) 0%, rgba(195,169,112,0.08) 45%, rgba(10,10,10,0.85) 100%)",
          filter: "blur(32px)",
          opacity: breathOpacity,
          y: breathY,
        }}
      />

      {/* Scrollラベル（光の呼吸ver） */}
      <motion.div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-20"
        style={{ top: "calc(50% + 16vh)" }}
      >
        {/* 光の呼吸層 */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-[#c3a970]/15 blur-3xl"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.25, 0.8, 0.25],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* 発光コア */}
        <motion.div
          className="absolute w-10 h-10 rounded-full bg-[#c3a970]/20 blur-lg"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 1.4, 1],
            y: [0, 3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* 矢印 */}
        <ChevronDown
          size={22}
          className="text-[#c3a970]/90 mb-1 relative z-10 drop-shadow-[0_0_6px_rgba(195,169,112,0.5)]"
        />
        {/* テキスト */}
        <motion.span
          className="text-[12px] tracking-[0.22em] text-[#c3a970]/90 uppercase relative z-10"
          style={{ fontFamily: "Yuji Syuku, serif" }}
          animate={{ opacity: [0.6, 1, 0.6], y: [0, -3, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
};