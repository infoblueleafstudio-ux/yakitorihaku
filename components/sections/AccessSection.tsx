"use client";
import { motion } from "framer-motion";

export const AccessSection = () => {
  return (
    <motion.section
      id="access"
      className="
        relative w-full min-h-[90svh]
        flex items-center justify-center
        py-24 px-6 md:px-12 overflow-hidden
      "
    >
      {/* ✅ 背景画像（店舗） */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/access1.jpg')`,
          filter: "brightness(0.65)",
        }}
      />

      {/* ✨ 金箔オーバーレイ */}
      <div
        className="
          absolute inset-0 z-1
          bg-[url('/images/foil-texture.png')]
          opacity-[0.18]
          mix-blend-screen
        "
      />

      {/* 🌓 黒フェード（上は薄く、下は濃く） */}
      <div
        className="
          absolute inset-0 z-2
          bg-gradient-to-b from-black/40 via-black/60 to-black/80
        "
      />

      {/* ✅ メインカード */}
      <motion.div
        className="
          relative z-10
          w-full max-w-5xl grid md:grid-cols-2 gap-10
          bg-black/45 backdrop-blur-[14px]
          rounded-3xl p-8 md:p-12
          border border-[#bfa670]/25
          shadow-[0_0_40px_rgba(191,166,112,0.15)]
        "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* ✅ Google Map */}
        <div className="w-full h-[300px] md:h-[380px] overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.906472290497!2d139.76493637565423!3d35.68123607259245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bff0f15f9a9%3A0x2e4b6d8c2e51bda1!2z5p2x5Lqs6YO95Y-w5p2x5Lqs6YO95riv5Yy65paw5a6_!5e0!3m2!1sja!2sjp!4v1730200700000!5m2!1sja!2sjp"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>

        {/* ✅ 店舗情報 */}
        <div className="flex flex-col justify-center text-center md:text-center space-y-4">
          <h2 className="text-3xl text-[#d8c289] tracking-widest" style={{ fontFamily: "Yuji Syuku, serif" }}>
            アクセス
          </h2>

          <p className="text-warmwhite font-serif text-lg">焼鳥はく 川越店</p>
          <p className="text-warmwhite/70 text-sm">〒350-0043 埼玉県川越市新富町1丁目XX</p>
          <p className="text-warmwhite/70 text-sm">営業時間：17:00〜23:00（L.O. 22:30）</p>
          <p className="text-warmwhite/70 text-sm">定休日：月曜日・第二火曜日</p>

          {/* CTA */}
       <a href="https://www.hotpepper.jp/index.html"
            className="
              border border-[#d8c289]/60 text-[#d8c289]
              px-6 py-3 md:px-8 md:py-4 rounded-full
              tracking-[0.25em]
              bg-black/60 backdrop-blur-md
              hover:bg-[#d8c289]/20 hover:border-[#d8c289]
              transition-all text-center
              shadow-[0_0_22px_rgba(216,194,137,0.25)]
              text-sm md:text-base
            "
            style={{ fontFamily: "Yuji Syuku, serif" }}
          >
            ご予約はこちら
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};