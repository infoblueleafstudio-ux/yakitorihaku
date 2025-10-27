"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export const ConceptSection = () => {
  const { scrollY } = useScroll();
  // 上部の金霞を、スクロールでほんの少しだけ呼吸させる
  const glowY = useTransform(scrollY, [0, 400], [0, 20]);
  const glowOpacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <motion.section
      id="concept"
      className="relative w-full min-h-[100svh] pt-[12vh] pb-24 overflow-hidden flex items-start justify-center"
      style={{
        background:
          "linear-gradient(to bottom, #0a0a0a 0%, #141414 60%, #0a0a0a 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 1) 上端の金霞：強度アップ＋呼吸 */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-full h-[32vh]"
        style={{
          y: glowY,
          opacity: glowOpacity,
          background:
            // 金の半透明を screen、下に黒グラデで馴染ませる
            "radial-gradient(120% 60% at 50% 0%, rgba(195,169,112,0.18) 0%, rgba(10,10,10,0.0) 60%), linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 100%)",
          filter: "blur(48px)",
        }}
      />

      {/* 2) 背景の"箔感"：overlay で粒子を見せる（画像が無くても出るCSSノイズを併用） */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            // 画像ノイズ（あれば使用）＋CSSノイズの二段構え
            "url('/images/foil-noise.png'), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "auto, 2px 2px",
          backgroundRepeat: "repeat, repeat",
          // overlayで金色を感じる層、下に薄い金の広がり
          backgroundBlendMode: "overlay, normal",
          opacity: 0.12,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80rem 40rem at 50% 30%, rgba(195,169,112,0.08), rgba(0,0,0,0) 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* 3) 縁ビネット：中央集中＆"黒の深み" */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120rem 60rem at 50% 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* コンテンツ：中央1カラム */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2
          className="text-4xl md:text-5xl font-serif mb-6 text-kinpaku"
          style={{
            textShadow:
              "0 0 18px rgba(195,169,112,0.15), 0 0 2px rgba(195,169,112,0.28)",
            letterSpacing: "0.04em",
          }}
        >
          焼鳥はくの想い
        </h2>

        <div className="leading-8 md:leading-9 text-[17px] md:text-[18px] text-white/90 font-[Noto_Serif_JP]">
          <p>炭の音、香り、そして静けさ。一本の串に宿るのは、素材と向き合う職人の時間。</p>
          <p className="mt-4">備長炭の遠赤外線で、鶏の旨みを芯まで引き出す。丁寧に、誠実に、そして美しく。</p>
          <p className="mt-4">川越の夜に灯る柔らかな炎の中で、特別なひとときをお過ごしください。</p>
        </div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-2"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <div className="w-16 h-px bg-kinpaku/40" />
          <div className="w-2 h-2 rounded-full bg-kinpaku/50" />
          <div className="w-16 h-px bg-kinpaku/40" />
        </motion.div>
      </motion.div>

      {/* 炭火の残光（点） */}
      <motion.div
        className="pointer-events-none absolute bottom-[12vh] right-[12vw] w-[6px] h-[6px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,120,80,0.75) 0%, rgba(138,59,38,0.0) 70%)",
          filter: "blur(1px)",
        }}
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.section>
  );
};