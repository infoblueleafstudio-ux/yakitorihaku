"use client";

import { motion } from "framer-motion";

/**
 * 焼鳥はく 川越 フッターセクション
 * サイト全体の締めとして、店舗名・住所・著作権表記を静かで品のある終わり方で実現
 */
export const FooterSection = () => {
  return (
    <motion.footer
      id="footer"
      className="relative min-h-[30svh] py-12 px-6 md:px-8 text-center text-warmwhite/70 bg-[#111111]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto space-y-3">
        {/* 店舗名 */}
        <motion.p
          className="font-serif text-lg text-warmwhite"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        >
          焼鳥はく 川越
        </motion.p>

        {/* 住所 */}
        <motion.p
          className="text-sm"
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
        >
          〒350-0043 埼玉県川越市新富町1丁目XX
        </motion.p>

        {/* 営業時間・定休日 */}
        <motion.p
          className="text-sm"
          style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        >
          営業時間：17:00〜23:00（L.O.22:30）／定休日：月曜日・第二火曜日
        </motion.p>

        {/* 区切りライン */}
        <motion.div
          className="pt-4 border-t border-white/10 mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.8 }}
        >
          {/* 著作権表記 */}
          <motion.p
            className="text-xs text-warmwhite/50 tracking-wide"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 1.0 }}
          >
            © 2025 焼鳥はく Kawagoe. All Rights Reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* 背景装飾要素（控えめ） */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-1 h-1 bg-warmwhite/10 rounded-full"
        animate={{
          y: [0, -6, 0],
          opacity: [0.1, 0.3, 0.1],
          scale: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-ember/20 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.1, 0.4, 0.1],
          scale: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />
    </motion.footer>
  );
};