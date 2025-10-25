"use client";

import { motion } from "framer-motion";

/**
 * 焼鳥はく 川越 コンセプトセクション（Versea統一トーン版）
 * Heroとの一体感を重視した、静けさと温もりの導入パート
 */
export const ConceptSection = () => {
  return (
    <motion.section
      id="concept"
      className="
        relative w-full 
        min-h-[90svh] 
        py-20 px-6 
        flex items-center justify-center
        overflow-hidden
      "
      style={{
        background: "linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 背景装飾：柔らかな光 */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-48 h-48 bg-ember/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:gap-16">
        {/* 左側：画像 */}
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/concept.jpg"
              alt="職人の手元 - 備長炭で焼く静けさの一串"
              className="w-full h-72 md:h-96 object-cover"
            />
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* 光の粒 */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 bg-ember/50 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* 右側：テキスト */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          {/* タイトル */}
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-warmwhite mb-8 tracking-wide"
            style={{ fontFamily: "Zen Old Mincho, serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            香りが伝わる、静かな炎
          </motion.h2>

          {/* 本文 */}
          <div
            className="space-y-5 text-warmwhite/90 leading-relaxed text-base md:text-lg"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            <p>
              備長炭の遠赤外線効果により、串の芯までじっくりと火を通します。
            </p>
            <p>
              厳選した国産鶏と旬の野菜を、職人の手で一本一本丁寧に仕上げます。
            </p>
            <p>
              静かな店内で、炭火の音と香りをお楽しみください。
            </p>
          </div>

          {/* 装飾線 */}
          <motion.div
            className="mt-10 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-px bg-ember/60"></div>
              <div className="w-2 h-2 bg-ember/50 rounded-full"></div>
              <div className="w-10 h-px bg-ember/60"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
