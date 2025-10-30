"use client";
import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { useEffect } from "react";

export const ConceptSection = () => {
  const { scrollY } = useScroll();

  // 微ゆらぎ + スクロール追従
  const glowY = useTransform(scrollY, [0, 400], [0, 18]);
  const breathing = useSpring(0, { stiffness: 25, damping: 10 });

  useEffect(() => {
    const controls = animate(breathing, 1, {
      duration: 4.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [breathing]);

  const breathOpacity = useTransform(breathing, [0, 1], [0.6, 1]);
  const breathY = useTransform(breathing, [0, 1], [0, 6]);
  const topLayerY = useTransform([glowY, breathY], (values: number[]) => values[0] + values[1]);

  return (
    <motion.section
      id="concept"
      className="relative w-full min-h-[100svh] pt-[16vh] md:pt-[18vh] pb-28 overflow-hidden flex items-center justify-center"
      style={{
        // 滑らかな金→闇のグラデーション（2レイヤーで階調をきれいに）
        background: `
          radial-gradient(circle at 50% 0%, rgba(233, 197, 118, 0.60) 0%, rgba(171, 133, 67, 0.45) 24%),
          linear-gradient(to bottom, rgba(171, 133, 67, 0.32) 0%, rgba(22, 14, 10, 1) 100%)
        `,
      }}
    >
      {/* 最背面：金箔テクスチャ（固定背景の代替。必ず見える・安全） */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1, // ← class の -z-* 依存をやめる
          backgroundImage: "url('/images/kin.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "soft-light",
          opacity: 0.35,  // ✅ kin.pngが見えるようにopacityを調整
          filter: "brightness(1.1) contrast(1.15) saturate(1.1)",  // ✅ kin.pngが映えるように調整
        }}
      />

      {/* ふわっと上に漂う金の霞 */}
      <motion.div
        className="pointer-events-none absolute left-0 w-full h-[46vh]"
        style={{
          top: 0,
          zIndex:-1,
          y: topLayerY,
          opacity: breathOpacity,
          background:
            "linear-gradient(90deg, rgba(195,169,112,0.45) 0%, rgba(195,169,112,0.15) 35%, rgba(10,10,10,0.7) 100%)",
          filter: "blur(18px)",
          mixBlendMode: "screen",
        }}
      />

      {/* 降り注ぐ金箔（5.svg と 4.svg）。背景位置はまとめてアニメーション */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/5.svg'), url('/images/4.svg')",
          backgroundSize: "auto 1450px, auto 1800px",
          backgroundRepeat: "repeat-y, repeat-y",
          // 初期位置は下側（画面外）から
          backgroundPosition: "center 140%, center 160%",
          mixBlendMode: "overlay",
          opacity: 0.30,
          filter: "brightness(0.97) contrast(1.08) saturate(1.08)",
          willChange: "background-position",
        }}
        animate={{
          // 2レイヤーを同時に上方向へ：文字列補間なら環境差で落ちない
          backgroundPosition: [
            "center 140%, center 200%",
            "center -20%, center 50%"
          ],
        }}
        transition={{
          duration: 60,      // 高級感のため長め
          repeat: Infinity,
          ease: "linear",
        }}
      />

{/* テキスト */}
<motion.div
  className="relative z-10 max-w-3xl mx-auto px-6 text-center"
  initial={{ opacity: 0, y: 36 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>

  {/* タイトル：光の縁取り + シャドウで視認性UP */}
  <h2
    className="text-4xl md:text-6xl font-serif mb-6 text-kinpaku"
    style={{
      fontFamily: "Yuji Syuku, serif",
      letterSpacing: "0.08em",

      /* ✅ 光の縁取り（外側の発光）*/
      textShadow: `
        0 0 12px rgba(255, 220, 160, 0.55),
        0 0 32px rgba(255, 220, 160, 0.30)
      `,

      /* ✅ 内側の立体感（ほんのり暗くなる） */
      WebkitTextStroke: "0.55px rgba(90, 60, 20, 0.4)",
    }}
  >
    やきとり 箔の想い
  </h2>

  {/* 本文：薄いアウトライン + 影で視認性UP */}
  <div
    className="leading-8 md:leading-9 text-[17px] md:text-[19px] text-[#ffffc6]"
    style={{
      fontFamily: "Yuji Syuku, serif",

      /* ✅ テキストを読みやすくする影（控えめ） */
      textShadow: "0 0 5px rgba(104, 102, 102, 0.6)",

      /* ✅ 白文字を背景から浮かせるアウトライン */
      WebkitTextStroke: "0.4px rgba(148, 148, 148, 0.35)",
    }}
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