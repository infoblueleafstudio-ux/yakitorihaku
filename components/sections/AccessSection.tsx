"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, MapPin } from "lucide-react";

/**
 * 焼鳥はく 川越 アクセスセクション
 * 来訪者が「行きたい」と思った瞬間に、店舗情報・営業時間・地図への導線を明確に提示
 * コンセプトの余韻を保ちながら、信頼感のある締めくくりとして設計
 */
export const AccessSection = () => {
  return (
    <motion.section
      id="access"
      className="relative min-h-[70svh] py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2B2B2B 100%)"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="max-w-[420px] md:max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-serif text-warmwhite mb-8 text-center tracking-wider"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          アクセス
        </motion.h2>

        {/* モバイル: 縦並び / PC: 左右2カラム */}
        <div className="flex flex-col md:flex-row md:gap-12">
          
          {/* 左側: 地図エリア */}
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/map.jpg"
                alt="焼鳥はく 川越店舗位置"
                className="w-full h-64 md:h-80 object-cover"
              />
              {/* オーバーレイグラデーション */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* 地図アイコン */}
              <div className="absolute top-4 left-4 bg-ember/90 text-white p-2 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              
              {/* 装飾的な光の粒子 */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-ember/80 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* 右側: 情報＋CTAエリア */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            {/* 営業情報 */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            >
              {/* 営業時間 */}
              <div className="text-center md:text-left">
                <p className="text-sm text-ember mb-1 font-medium" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  営業時間
                </p>
                <p className="text-base text-warmwhite" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  17:00 - 23:00 (L.O. 22:30)
                </p>
              </div>

              {/* 定休日 */}
              <div className="text-center md:text-left">
                <p className="text-sm text-ember mb-1 font-medium" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  定休日
                </p>
                <p className="text-base text-warmwhite" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  月曜日・第三火曜日
                </p>
              </div>

              {/* 住所 */}
              <div className="text-center md:text-left">
                <p className="text-sm text-ember mb-1 font-medium" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  住所
                </p>
                <p className="text-base text-warmwhite leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  埼玉県川越市脇田町XX-XX
                </p>
                <p className="text-sm text-warmwhite/70 mt-1" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  JR・東武東上線 川越駅 徒歩5分
                </p>
              </div>
            </motion.div>

            {/* CTAボタン群 */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            >
              {/* 電話するボタン */}
              <motion.a
                href="tel:049-000-0000"
                className="flex-1 flex flex-col items-center justify-center bg-ember text-white rounded-xl px-6 py-4 hover:bg-[#a13e2e] transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 mb-2" />
                <span className="text-sm font-medium" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  電話する
                </span>
              </motion.a>

              {/* 予約するボタン */}
              <motion.a
                href="/reserve"
                className="flex-1 flex flex-col items-center justify-center bg-ember text-white rounded-xl px-6 py-4 hover:bg-[#a13e2e] transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5 mb-2" />
                <span className="text-sm font-medium" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  予約する
                </span>
              </motion.a>

              {/* 地図を見るボタン */}
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center justify-center bg-ember text-white rounded-xl px-6 py-4 hover:bg-[#a13e2e] transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="w-5 h-5 mb-2" />
                <span className="text-sm font-medium" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  地図を見る
                </span>
              </motion.a>
            </motion.div>

            {/* 装飾的なライン */}
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
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-warmwhite/20 rounded-full"
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
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-ember/30 rounded-full"
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
      </div>
    </motion.section>
  );
};
