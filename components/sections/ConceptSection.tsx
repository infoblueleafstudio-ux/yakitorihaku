"use client";
import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { useEffect } from "react";
import KinpakuPieces from "../KinpakuPieces";

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
  const topLayerY = useTransform([glowY, breathY], (values: number[]) => values[0] + values[1]);

  return (
    <motion.section
      id="concept"
      className="relative w-full min-h-[100svh] pt-[16vh] md:pt-[18vh] pb-24 overflow-hidden flex items-center justify-center"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(206, 159, 63, 0.55) 0%,   /* ✨ 店舗照明に近い明るい黄金 */
            rgba(149, 112, 44, 0.45) 24%,  /* 黄金ブラウン */
            rgba(94, 64, 31, 0.38) 48%,    /* 徐々に落ち着いたブラウン */
            rgba(36, 25, 17, 0.82) 82%,    /* 深い焦げ茶 */
            rgba(14, 10, 8, 1) 100%        /* 足元が暗く締まる */
          )
        `,
        backgroundBlendMode: "multiply",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 金霞 */}
      <motion.div
        className="pointer-events-none absolute top-[-2vh] left-0 w-full h-[46vh] z-0"
        style={{
          y: topLayerY,
          opacity: breathOpacity,
          background:
            "linear-gradient(90% 55% at 50% 0%, rgba(195,169,112,0.55) 0%, rgba(195,169,112,0.25) 35%, rgba(15,10,5,0.3) 70%, rgba(10,10,10,0.85) 100%)",
          filter: "blur(18px)",
          mixBlendMode: "screen",
        }}
      />

      {/* 金箔層 */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url('/images/foil-light.png'), url('/images/foil-texture.png')",
          backgroundSize: "cover, 900px auto",
          backgroundPosition: "top center, center",
          backgroundRepeat: "no-repeat, repeat",
          backgroundBlendMode: "soft-light, soft-light",
          opacity: 0.38,
          filter: "contrast(110%) brightness(95%) saturate(105%)",
          mixBlendMode: "overlay",
        }}
      />

      {/* 金箔破片 */}
      <KinpakuPieces />

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
              "0 0 14px rgba(195,169,112,0.35), 0 0 3px rgba(0,0,0,0.5)",
            letterSpacing: "0.04em",
          }}
        >
          やきとり 箔の想い
        </h2>
        <div
          className="leading-8 md:leading-9 text-[17px] md:text-[18px] text-white/90"
          style={{ fontFamily: "Yuji Syuku, serif" }}
        >
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
