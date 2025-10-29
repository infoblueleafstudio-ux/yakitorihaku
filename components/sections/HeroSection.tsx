"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  // 👇 セクション単位でスクロール進捗をとる
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // start: セクションの先頭が画面先頭に重なった時
    // end  : セクションの末尾が画面先頭に来た時
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ 覗き穴の中心位置（PC / スマホで変更）
  const centerX = isMobile ? 50 : 50;
  const centerY = isMobile ? 50 : 50;

  // ✅ 覗き穴の広がり（スピード + 最大サイズ）
  const radius = useTransform(
    scrollYProgress,
    [0, 0.55],
    isMobile ? [15, 190] : [15, 190]
  );

  // ✅ 覗き穴（楕円の形）
  // PC：横に広く（0.60） / スマホ：縦に細く（0.40）
  const ellipse = useTransform(radius, (r) =>
    isMobile
      ? `ellipse(${r * 0.80}% ${r}% at ${centerX}% ${centerY}%)` // ← スマホ：縦長
      : `ellipse(${r * 0.30}% ${r}% at ${centerX}% ${centerY}%)` // ← PC：横広め
  );

  // ✅ スクロールによる画像のズーム
  const imageScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.9, 1, 1]);

  // ✅ Scrollラベルフェードアウト
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    // 👇 ヒーロー全体の高さを “画面の約2.2倍” にしてスクロール余白を作る
    <section ref={sectionRef} className="relative h-[220vh] md:h-[240vh]">
      {/* 👇 ここを sticky に。画面は固定され、スクロール量だけ進む */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0a0a0a]">
        {/* 背景（暗→光） */}
        <motion.div
          className={`absolute inset-0 ${
            isMobile
              ? "bg-gradient-to-b from-[#000] via-[#141414] to-[#1a1a1a]"
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

        {/* 覗き穴（楕円） */}
        <motion.div style={{ clipPath: ellipse }} className="absolute inset-0">
          <motion.video
            src="/videos/7878.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-[120%] h-[120%] md:w-[115%] md:h-[115%] object-cover object-[50%_58%] md:object-[50%_52%] select-none pointer-events-none"
            style={{ scale: imageScale }}
            draggable={false}
          />
        </motion.div>

        {/* Scroll ラベル */}
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
      </div>
    </section>
  );
};
