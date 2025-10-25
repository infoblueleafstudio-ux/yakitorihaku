"use client";

import { motion } from "framer-motion";

/**
 * 焼鳥はく 川越 コンセプトセクション
 * 職人・素材の紹介で"信頼"と"手仕事のこだわり"を訴求
 * Heroから自然に流れるモバイルファーストな導入セクション
 */
export const ConceptSection = () => {
  return (
    <motion.section
      id="concept"
      className="relative min-h-[80svh] py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2B2B2B 100%)"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="max-w-[420px] md:max-w-4xl mx-auto">
        {/* モバイル: 1カラム / PC: 2カラム（左右） */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          
          {/* 左側: 画像エリア */}
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/concept.jpg"
                alt="職人の手元 - 備長炭で焼く静けさの一串"
                className="w-full h-64 md:h-80 object-cover"
              />
              {/* オーバーレイグラデーション */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* 装飾的な光の粒子 */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-ember/60 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* 右側: テキストエリア */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            {/* セクションタイトル */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-serif text-warmwhite mb-6 tracking-wider"
              style={{ fontFamily: "Zen Old Mincho, serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            >
              香りが伝わる、静かな炎
            </motion.h2>

            {/* コンセプトテキスト */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            >
              <p
                className="text-sm md:text-base lg:text-lg text-warmwhite/90 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                備長炭の遠赤外線効果により、串の芯までじっくりと火を通します。
              </p>
              
              <p
                className="text-sm md:text-base lg:text-lg text-warmwhite/90 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                厳選した国産鶏と旬の野菜を、職人の手で一本一本丁寧に仕上げる。
              </p>
              
              <p
                className="text-sm md:text-base lg:text-lg text-warmwhite/90 leading-relaxed"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                静かな店内で、炭火の音と香りをお楽しみください。
              </p>
            </motion.div>

            {/* 装飾的な要素 */}
            <motion.div
              className="mt-8 flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.0 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-px bg-ember/60"></div>
                <div className="w-2 h-2 bg-ember/40 rounded-full"></div>
                <div className="w-8 h-px bg-ember/60"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 背景装飾要素 */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-warmwhite/20 rounded-full"
          animate={{
            y: [0, -10, 0],
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
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-ember/30 rounded-full"
          animate={{
            y: [0, -15, 0],
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
      </div>
    </motion.section>
  );
};
