"use client";

import { motion } from "framer-motion";

/**
 * 焼鳥はく 川越 アクセスセクション
 * 静けさ×高級感×和モダンのトーンで店舗情報と予約動線を明示
 */
export const AccessSection = () => {
  return (
    <motion.section
      id="access"
      className="relative w-full min-h-[80svh] py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ヘッダー */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-warmwhite mb-16 tracking-wider text-center"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          アクセス
        </motion.h2>

        {/* 2カラム構成（PC） / 縦並び（SP） */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* 左：地図エリア */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <img
                src="/images/map.jpg"
                alt="焼鳥はく 川越店へのアクセス"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* 右：情報・ボタンエリア */}
          <motion.div
            className="text-left space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
          >
            {/* 店舗名・住所 */}
            <div>
              <p className="text-warmwhite text-lg font-serif mb-2" style={{ fontFamily: "Zen Old Mincho, serif" }}>
                焼鳥はく 川越店
              </p>
              <p className="text-warmwhite/85 text-sm" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                〒350-0043 埼玉県川越市新富町1丁目XX
              </p>
            </div>

            {/* 営業時間・定休日 */}
            <div>
              <p className="text-warmwhite text-sm leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                営業時間：17:00～23:00（L.O.22:30）
              </p>
              <p className="text-warmwhite text-sm leading-relaxed" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                定休日：月曜日・第二火曜日
              </p>
            </div>

            {/* CTAボタン群 */}
            <div className="flex flex-wrap gap-4 mt-6">
              <motion.a
                href="tel:049-000-0000"
                className="bg-ember hover:bg-[#a13e2e] text-white rounded-full px-8 py-3 text-sm tracking-wide shadow-lg transition-colors duration-300"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                電話する
              </motion.a>
              <motion.a
                href="/reserve"
                className="bg-transparent border border-warmwhite text-warmwhite rounded-full px-8 py-3 text-sm tracking-wide hover:bg-warmwhite/10 transition-colors duration-300"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                ご予約はこちら
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};