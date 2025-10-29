"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ClosingSection
 * ページ末尾で覗き穴が閉じていく演出 + CTA + Footer統合セクション
 */
export default function ClosingSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // scale → MotionValue<number>
  const maskScale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // ✅ MotionValueを適切に変換してCSS値にする
  const maskSizeValue = useTransform(maskScale, (value) => `${value * 180}%`);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[140svh] bg-black overflow-hidden">

      {/* ✅ マスクする背景画像 */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/kannbann.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: `radial-gradient(circle at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%)`,
          maskImage: `radial-gradient(circle at center, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%)`,

          // ✅ useMotionTemplate を適用
          WebkitMaskSize: maskSizeValue,
          maskSize: maskSizeValue,
        }}
      />

      {/* 黒フェード（雰囲気キープ） */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

      {/* CTAテキスト */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-40 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#d8c289] tracking-widest"
          style={{ fontFamily: "Yuji Syuku, serif" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          ご予約・お問い合わせはお気軽に。
        </motion.h2>

        <motion.p
          className="mt-4 text-warmwhite/80 font-serif"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          静謐な時間とともに、心を尽くしたおもてなしをご用意しております。
        </motion.p>

        {/* CTAボタン */}
        <motion.a
          href="https://www.hotpepper.jp/index.html"
          target="_blank"
          className="inline-block mt-10 border border-[#d8c289]/60 text-[#d8c289]
            px-10 py-4 rounded-full hover:bg-[#d8c289]/15 transition-all tracking-widest"
          style={{ fontFamily: "Yuji Syuku, serif" }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          ご予約はこちら
        </motion.a>
      </div>

      {/* Footer情報 */}
      <div className="relative z-10 text-center pb-14 text-warmwhite/60 tracking-wide font-serif">
        <p className="text-warmwhite text-lg">焼鳥はく 川越</p>
        <p className="text-sm">〒350-0043 埼玉県川越市新富町1丁目XX</p>
        <p className="text-sm">営業時間：17:00〜23:00（L.O.22:30）／定休日：月曜日・第二火曜日</p>
        <p className="mt-6 opacity-60 text-xs">© 2025 焼鳥はく Kawagoe. All Rights Reserved.</p>
      </div>

    </section>
  );
}