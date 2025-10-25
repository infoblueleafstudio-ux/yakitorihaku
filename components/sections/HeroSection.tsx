"use client";

import { motion } from "framer-motion";
import { SmokeSVG } from "../ui/SmokeSVG";

/**
 * 焼鳥はく 川越 ヒーローセクション + ヘッダー付き
 * トップのブランド感と導線強化
 */
export const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full min-h-[100svh] md:min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero_bg.jpg')",
          opacity: 0.25,
        }}
      />

      {/* グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      {/* 🔹 ヘッダーエリア */}
      <header
        className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-4 bg-black/30 backdrop-blur-sm z-20"
      >
        {/* 店名ロゴ */}
        <h1
          className="text-warmwhite font-serif text-lg md:text-2xl tracking-wider"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
        >
          焼鳥はく <span className="text-sm md:text-base opacity-70">川越</span>
        </h1>

        {/* 中央情報 */}
        <div
          className="hidden md:flex flex-col text-right text-warmwhite/70 text-sm leading-tight"
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
        >
          <span>営業時間 17:00〜23:00（L.O. 22:30）</span>
          <span>定休日：月曜・第3火曜</span>
        </div>

        {/* CTA & 言語 */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            className="bg-ember hover:bg-[#a13e2e] text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            予約する
          </button>

          <select
            className="bg-transparent border border-warmwhite/30 text-warmwhite text-sm md:text-base rounded-md px-3 py-1 focus:outline-none hover:border-warmwhite/60 transition-colors duration-200"
          >
            <option value="ja">日本語</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-6 mt-16 md:mt-0">
        <motion.h1
          className="text-5xl md:text-7xl font-serif text-warmwhite mb-3 tracking-widest"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          焼鳥はく
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-serif text-warmwhite/90 mb-4 tracking-wider"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        >
          川越
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-warmwhite/80 mb-10 leading-relaxed max-w-lg"
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.9 }}
        >
          備長炭で焼く、静けさの一串。
        </motion.p>

        <motion.button
          className="
            bg-ember text-white rounded-full 
            px-10 py-4 md:px-12 md:py-5 
            text-base md:text-lg font-medium tracking-wide 
            hover:bg-[#a13e2e] transition-colors duration-300 shadow-lg
          "
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -2, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 1.2,
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          ご予約はこちら
        </motion.button>
      </div>

      {/* 背景煙 */}
      <SmokeSVG />
    </motion.section>
  );
};