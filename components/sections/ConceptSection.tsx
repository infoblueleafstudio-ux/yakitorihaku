"use client";
import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { useEffect } from "react";

export const ConceptSection = () => {
  const { scrollY } = useScroll();

  // スクロール追従（上昇方向）
  const glowY = useTransform(scrollY, [0, 400], [0, 20]);
  const glowOpacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  // 呼吸アニメーション（Heroと同期）
  const breathing = useSpring(0, { stiffness: 30, damping: 12, mass: 0.2 });
  useEffect(() => {
    const controls = animate(breathing, 1, {
      duration: 4.8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [breathing]);

  const breathOpacity = useTransform(breathing, [0, 1], [0.75, 1]);
  const breathY = useTransform(breathing, [0, 1], [0, 12]);

  // ✅ 合成：スクロール + 呼吸の動き
  const topLayerY = useTransform([glowY, breathY], (values: number[]) => values[0] + values[1]);

  return (
    <motion.section
      id="concept"
      className="relative w-full min-h-[100svh] pt-[16vh] md:pt-[18vh] pb-24 overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #0a0a0a 0%, #141414 60%, #0a0a0a 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 上端の金霞（呼吸連動・明るく補強） */}
      <motion.div
        className="pointer-events-none absolute top-[-2vh] left-0 w-full h-[46vh] z-0"
        style={{
          y: topLayerY,
          opacity: breathOpacity,
          background:
            "radial-gradient(140% 80% at 50% 0%, rgba(195,169,112,0.28) 0%, rgba(195,169,112,0.18) 35%, rgba(10,10,10,0.3) 60%, rgba(10,10,10,0.75) 95%)",
          filter: "blur(70px)",
          mixBlendMode: "overlay",
        }}
      />

      {/* 金箔層（Safari対策強化） */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url('/images/foil-light.png'), url('/images/foil-texture.png'), url('/images/6.svg')",
          backgroundSize: "cover, 800px auto, 1200px auto",
          backgroundPosition: "top center, center, 70% 20%",
          backgroundRepeat: "no-repeat, repeat, no-repeat",
          backgroundBlendMode: "soft-light, overlay, overlay",
          opacity: 0.24,
          mixBlendMode: "overlay",
        }}
      />

      {/* ビネット */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120rem 60rem at 50% 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* テキスト */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2
          className="text-4xl md:text-5xl font-serif mb-6 text-kinpaku"
          style={{
            fontFamily: "Yuji Syuku, serif",
            textShadow:
              "0 0 14px rgba(195,169,112,0.25), 0 0 2px rgba(0,0,0,0.4)",
            letterSpacing: "0.04em",
          }}
        >
          やきとり 箔の想い
        </h2>
        <div className="leading-8 md:leading-9 text-[17px] md:text-[18px] text-white/90" style={{ fontFamily: "Yuji Syuku, serif" }}>
          <p>炭の音、香り、そして静けさ。一本の串に宿るのは、素材と向き合う職人の時間。</p>
          <p className="mt-4">
            備長炭の遠赤外線で、鶏の旨みを芯まで引き出す。丁寧に、誠実に、そして美しく。
          </p>
          <p className="mt-4">
            川越の夜に灯る柔らかな炎の中で、特別なひとときをお過ごしください。
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};