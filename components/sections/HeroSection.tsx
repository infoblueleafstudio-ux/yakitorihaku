"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ 円の開き具合（覗き穴）
  // PC: 縦120vh、横100vw → 中心は (50%, 60%) 付近
  // スマホ: 縦120vh、横100vw → 中心は (50%, 50%) 付近（縦長なので真ん中）
  const centerY = isMobile ? 38:38; // PCは少し上目、スマホは真ん中
  const radius = useTransform(scrollYProgress, [0, 0.35], [12, isMobile ? 90 : 120]);
  const clipPath = useTransform(radius, (r) => `circle(${r}% at 51% ${centerY}%)`);

  // ✅ スクロールによる画像のズーム
  const imageScale = useTransform(scrollYProgress, [0, 0.35, 1], [0.9, 1.0, 1.0]);

  // ✅ Scrollラベルフェードアウト
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section className="relative h-[120vh] md:h-[140vh] bg-[#0a0a0a] overflow-hidden">
      {/* 背景（暗→光） */}
      <motion.div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-to-b from-[#000000] via-[#141414] to-[#1a1a1a]"
            : "bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]"
        }`}
      />

      {/* タイトル */}
      <div className="absolute top-[10vh] left-0 w-full text-center z-10">
        <h1
          className="text-4xl md:text-6xl text-[#d8c289] tracking-[0.1em]"
          style={{
            fontFamily: "Yuji Syuku, serif",
            textShadow: "0 0 20px rgba(216,194,137,0.2)",
          }}
        >
          やきとり 箔
        </h1>
        <p
          className="text-sm md:text-base text-[#d8c289]/70 mt-1 tracking-[0.25em]"
          style={{ fontFamily: "Yuji Syuku, serif" }}
        >
          KAWAGOE
        </p>
      </div>

      {/* 覗き穴 */}
      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.img
          src="/images/hakutennnai .png" // ✅ ファイル名確認
          alt="店内"
          className="absolute w-[120%] h-[120%] md:w-[115%] md:h-[115%] object-cover object-[50%_58%] md:object-[50%_52%] select-none pointer-events-none"
          style={{ scale: imageScale }}
          draggable={false}
        />
      </motion.div>

      {/* Scroll消失アニメ */}
      <motion.div
        className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 text-center z-20"
        style={{ opacity: scrollOpacity }}
      >
        <ChevronDown
          size={22}
          className="mx-auto text-[#d8c289] drop-shadow-[0_0_6px_rgba(216,194,137,0.6)]"
        />
        <p
          className="text-[12px] text-[#d8c289]/90 tracking-[0.2em] mt-1"
          style={{ fontFamily: "Yuji Syuku, serif" }}
        >
          SCROLL
        </p>
      </motion.div>
    </section>
  );
};
