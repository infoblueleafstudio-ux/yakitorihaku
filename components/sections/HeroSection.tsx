"use client";

import { motion } from "framer-motion";
import { SmokeSVG } from "../ui/SmokeSVG";

/**
 * 焼鳥はく 川越 ヒーローセクション
 * 炭火の余韻を感じる深いグレー背景で、店舗の上品さ・静けさ・温かみを演出
 */
export const HeroSection = () => {
  return (
    <motion.section
      className="relative h-[90svh] max-w-[420px] mx-auto overflow-hidden md:max-w-[600px] lg:max-w-[800px]"
      style={{
        background: "linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* 背景画像オーバーレイ */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero_bg.jpg')",
          opacity: 0.3
        }}
      />
      
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      
      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-24 text-center">
        {/* 店舗名 */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-warmwhite mb-4 tracking-wider"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3
          }}
        >
          焼鳥はく
        </motion.h1>
        
        {/* サブタイトル */}
        <motion.h2
          className="text-lg md:text-xl lg:text-2xl font-serif text-warmwhite/90 mb-2 tracking-wide"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: "easeOut",
            delay: 0.6
          }}
        >
          川越
        </motion.h2>
        
        {/* キャッチコピー */}
        <motion.p
          className="text-sm md:text-base lg:text-lg text-warmwhite/80 mb-8 leading-relaxed max-w-xs md:max-w-sm lg:max-w-md"
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: "easeOut",
            delay: 0.9
          }}
        >
          備長炭で焼く、静けさの一串
        </motion.p>
        
        {/* CTAボタン */}
        <motion.button
          className="bg-ember text-white rounded-full px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-sm md:text-base lg:text-lg font-medium tracking-wide hover:bg-ember/90 transition-colors duration-300 shadow-lg"
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -2, 0]
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 1.2,
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          ご予約はこちら
        </motion.button>
        
        {/* 微細なゆらぎアニメーション */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-ember/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* 煙のアニメーション */}
      <SmokeSVG />
      
      {/* 装飾的な光の粒子 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-warmwhite/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-ember/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-warmwhite/20 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 0.7, 0.4],
          scale: [0.6, 1.2, 0.6]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.section>
  );
};
