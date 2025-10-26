"use client";

import { motion } from "framer-motion";

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
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 60%, #8a3b26 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 柔らかい環境光 */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] rounded-full bg-ember/10 blur-[120px]"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:gap-16">
        {/* 左側：浮かび上がる画像 */}
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]">
            {/* 画像本体 */}
            <img
              src="/images/33.png"
              alt="職人の手元 - 備長炭で焼く静けさの一串"
              className="w-full h-72 md:h-96 object-cover brightness-[0.7] contrast-[1.2]"
            />

            {/* 内側の光（中心を強調） */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.8) 80%)",
                mixBlendMode: "screen",
              }}
            />

            {/* 外側のぼかし（奥行き感） */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9) 100%)",
              }}
            />

            {/* ゆらぐ赤い光点（炭火の残光） */}
            <motion.div
              className="absolute bottom-6 right-6 w-3 h-3 bg-ember/70 rounded-full blur-[3px]"
              animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 4,
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
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-warmwhite mb-8 tracking-wide"
            style={{ fontFamily: "Zen Old Mincho, serif" }}
          >
            香りが伝わる、静かな炎
          </motion.h2>

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
