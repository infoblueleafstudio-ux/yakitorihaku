"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    // ✅ 覗き穴が開き始めたら動画再生
    const unsub = scrollYProgress.on("change", (v) => {
      if (v > 0.03) setPlayVideo(true); // ← 開き始める位置で調整可能
    });

    return () => unsub();
  }, [scrollYProgress]);

  useEffect(() => {
    // ✅ playVideoがtrueになったら動画再生
    if (playVideo && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("動画再生エラー:", err);
      });
    }
  }, [playVideo]);

  // ✅ 覗き穴の広がり (mobile は大きく)
  const radius = useTransform(
    scrollYProgress,
    [0, 0.55],
    isMobile ? [0, 250] : [0, 190]
  );

  // ✅ clip-path を自由に変更できるように変数化
  // ここを「丸 → 楕円 → 将来は path() 」へ差し替え可能
  const mask = useTransform(radius, (r) =>
    isMobile
      ? `ellipse(${r * 0.75}% ${r}% at 50% 50%)`
      : `ellipse(${r * 0.30}% ${r}% at 50% 50%)`
  );

  // ✅ SCROLLボタンのフェードアウト
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  // ✅ 文字のフェードアウト（狭い時だけ見える）
  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh] md:h-[240vh]"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0a0a0a]">

        {/* --- 背景 (動画 + mask) --- */}
        <motion.div
          className="absolute inset-0"
          style={{ clipPath: mask, WebkitClipPath: mask }}
        >
          <motion.video
            ref={videoRef}
            src="/videos/7878.mp4"
            muted
            playsInline
            loop
            autoPlay={false}
            className="absolute w-[120%] h-[120%] md:w-[115%] md:h-[115%] object-cover object-[50%_58%] md:object-[50%_52%]"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.45, 1], [0.9, 1, 1]),
            }}
          />
        </motion.div>

        {/* --- 覗き穴が狭い時のキャッチコピー --- */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
          style={{ opacity: introOpacity }}
        >
          <motion.p
            className="text-[#d8c289]/90 text-[20px] md:text-[32px] tracking-[0.25em]"
            style={{
              fontFamily: "Yuji Syuku, serif",
              textShadow: "0 0 22px rgba(216, 194, 137, 0.65)",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
             静寂が、すべてを研ぎ澄ます。
          </motion.p>

          {/* 英語版（ゆっくり遅れてフェードイン） */}
          <motion.p
            className="mt-2 text-[#d8c289]/60 text-[12px] md:text-[16px] tracking-[0.18em]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "0 0 14px rgba(216, 194, 137, 0.4)",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
          >
            Silence sharpens everything.
          </motion.p>
        </motion.div>

        {/* --- タイトル "やきとり 箔" --- */}
        <div className="absolute top-[8vh] md:top-[10vh] left-0 w-full text-center z-30">
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

        {/* --- Scroll ボタン (iPhone / PCで位置調整済み) --- */}
        <motion.div
          className="
            absolute left-1/2 -translate-x-1/2 z-40
            pb-[env(safe-area-inset-bottom)]
          "
          style={{
            opacity: scrollOpacity,
            bottom: isMobile ? "14vh" : "10vh",  // ← 実機目線で微調整
          }}
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
