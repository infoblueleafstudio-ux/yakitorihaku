"use client";

import { motion } from "framer-motion";

/**
 * 焼鳥はく 川越 CTAセクション
 * 焼鳥はくの世界観を締めくくる静かな呼びかけ
 * 予約や問い合わせ導線を明示しつつ、最後の印象を柔らかく残す
 */
export const CTASection = () => {
  return (
    <motion.section
      id="cta"
      className="relative w-full min-h-[60svh] py-20 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* メイン見出し */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-warmwhite mb-8 tracking-wider"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          ご予約・お問い合わせはお気軽に。
        </motion.h2>

        {/* サブテキスト */}
        <motion.p
          className="text-lg md:text-xl text-warmwhite/90 mb-12 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          落ち着いた空間で、心に残る一串を。
        </motion.p>

        {/* CTAボタン群 */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
        >
          {/* ご予約ボタン */}
          <motion.a
            href="/reserve"
            className="bg-ember hover:bg-[#a13e2e] text-white rounded-full px-10 py-4 md:px-12 md:py-5 text-base md:text-lg font-medium tracking-wide shadow-lg transition-colors duration-300 w-full md:w-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ご予約はこちら
          </motion.a>

          {/* お問い合わせボタン */}
          <motion.a
            href="/contact"
            className="bg-transparent border border-warmwhite text-warmwhite rounded-full px-10 py-4 md:px-12 md:py-5 text-base md:text-lg font-medium tracking-wide hover:bg-warmwhite/10 transition-colors duration-300 w-full md:w-auto"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            お問い合わせ
          </motion.a>
        </motion.div>

        {/* 装飾的なライン */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-px bg-ember/60"></div>
            <div className="w-2 h-2 bg-ember/50 rounded-full"></div>
            <div className="w-12 h-px bg-ember/60"></div>
          </div>
        </motion.div>
      </div>

      {/* 背景装飾要素 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-warmwhite/20 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-ember/30 rounded-full"
        animate={{
          y: [0, -12, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.section>
  );
};
