"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";

/**
 * 焼鳥はく 川越 CTA＋Footerセクション
 * トップページの最後に「行動を促すCTA」と「ブランド締め」を自然に接続し、
 * 信頼感のあるエンディングを演出する
 */
export const FooterSection = () => {
  return (
    <>
      {/* CTAセクション */}
      <motion.section
        id="cta"
        className="relative min-h-[50svh] py-16 px-4 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #1A1A1A 0%, #111111 100%)"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="max-w-[420px] md:max-w-2xl mx-auto text-center">
          {/* CTAメッセージ */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-serif text-warmwhite mb-4 tracking-wider"
              style={{ fontFamily: "Zen Old Mincho, serif" }}
            >
              ご予約・お問い合わせはお気軽に。
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg text-warmwhite/80 leading-relaxed"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              落ち着いた空間で、心に残る一串を。
            </p>
          </motion.div>

          {/* CTAボタン */}
          <motion.a
            href="/reserve"
            className="inline-block bg-ember text-white rounded-full px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-sm md:text-base lg:text-lg font-medium tracking-wide hover:bg-[#a13e2e] transition-colors duration-300 shadow-lg"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ご予約はこちら
          </motion.a>

          {/* 装飾的な要素 */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-ember/60"></div>
              <div className="w-2 h-2 bg-ember/40 rounded-full"></div>
              <div className="w-8 h-px bg-ember/60"></div>
            </div>
          </motion.div>

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

      {/* Footerセクション */}
      <motion.footer
        id="footer"
        className="relative min-h-[30svh] py-12 px-4 bg-[#111111]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="max-w-[420px] md:max-w-4xl mx-auto text-center">
          {/* 店舗名 */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <h3
              className="text-lg md:text-xl font-serif text-warmwhite mb-2 tracking-wider"
              style={{ fontFamily: "Zen Old Mincho, serif" }}
            >
              焼鳥はく 川越
            </h3>
            <p
              className="text-xs md:text-sm text-warmwhite/60"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              埼玉県川越市脇田町XX-XX
            </p>
          </motion.div>

          {/* SNSリンク */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmwhite/60 hover:text-ember transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warmwhite/60 hover:text-ember transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* コピーライト */}
          <motion.div
            className="border-t border-warmwhite/10 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          >
            <p
              className="text-xs text-warmwhite/40"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              © 2025 焼鳥はく 川越. All rights reserved.
            </p>
          </motion.div>

          {/* 背景装飾要素 */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-warmwhite/10 rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>
      </motion.footer>
    </>
  );
};
