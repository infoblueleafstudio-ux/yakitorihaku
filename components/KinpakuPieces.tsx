"use client";
import { motion } from "framer-motion";

type Piece = {
  id: string;
  src: string; // "/images/4.svg" | "/images/5.svg" | "/images/6.svg" など
  w: string;   // width (e.g. "clamp(90px, 12vw, 180px)")
  h: string;   // height
  right: string; // e.g. "2vw"
  bottom: string; // e.g. "6vh"
  rotate: number;
  z: number;
  opacity: number;
  delay: number; // アニメ開始オフセット
  drift?: { x: number; y: number; r: number }; // ドリフト幅
  clip?: string; // CSS clip-path（多角形で破片の形を整える）
};

/** 
 * 破片の形は clip-path で"アート寄り"に整え、テクスチャは 4/5/6.svg を混在使用。
 * 雑に置かず、右下→中央への対角線構図に沿って配置。
 */
const PIECES: Piece[] = [
  // 主役（右下寄り・大きめ）: 6.svgベース
  {
    id: "p1",
    src: "/images/6.svg",
    w: "clamp(140px, 18vw, 300px)",
    h: "clamp(140px, 18vw, 300px)",
    right: "-4vw",
    bottom: "6vh",
    rotate: -20,
    z: 3,
    opacity: 0.78,
    delay: 0.2,
    drift: { x: 6, y: 8, r: 4 },
    clip:
      "polygon(8% 22%, 22% 10%, 52% 6%, 82% 18%, 94% 48%, 86% 74%, 58% 90%, 30% 86%, 10% 64%)",
  },
  // 副主役（主役の内側・斜めに流す）: 5.svgベース
  {
    id: "p2",
    src: "/images/5.svg",
    w: "clamp(90px, 12vw, 200px)",
    h: "clamp(90px, 12vw, 200px)",
    right: "6vw",
    bottom: "14vh",
    rotate: -12,
    z: 2,
    opacity: 0.72,
    delay: 0.6,
    drift: { x: 5, y: 6, r: 6 },
    clip:
      "polygon(14% 18%, 40% 6%, 74% 18%, 90% 46%, 78% 78%, 46% 90%, 16% 70%)",
  },
  // 反復（小さめでリズム）: 4.svgベース
  {
    id: "p3",
    src: "/images/4.svg",
    w: "clamp(72px, 9vw, 140px)",
    h: "clamp(72px, 9vw, 140px)",
    right: "14vw",
    bottom: "22vh",
    rotate: -8,
    z: 2,
    opacity: 0.66,
    delay: 1.1,
    drift: { x: 4, y: 5, r: 8 },
    clip:
      "polygon(18% 28%, 44% 12%, 76% 26%, 86% 52%, 68% 80%, 34% 86%, 16% 60%)",
  },
  // さらに上へ視線誘導: 6.svgベース
  {
    id: "p4",
    src: "/images/6.svg",
    w: "clamp(64px, 8vw, 120px)",
    h: "clamp(64px, 8vw, 120px)",
    right: "22vw",
    bottom: "30vh",
    rotate: -16,
    z: 2,
    opacity: 0.6,
    delay: 1.6,
    drift: { x: 3, y: 4, r: 10 },
    clip:
      "polygon(20% 30%, 48% 16%, 76% 32%, 80% 54%, 62% 76%, 36% 80%, 22% 58%)",
  },
  // 微細な粒（彩り・奥行き）: 5.svgベース
  {
    id: "p5",
    src: "/images/5.svg",
    w: "clamp(44px, 6vw, 90px)",
    h: "clamp(44px, 6vw, 90px)",
    right: "28vw",
    bottom: "38vh",
    rotate: -6,
    z: 1,
    opacity: 0.55,
    delay: 2.1,
    drift: { x: 3, y: 3, r: 12 },
    clip:
      "polygon(24% 34%, 50% 20%, 74% 34%, 74% 56%, 56% 72%, 36% 72%, 26% 54%)",
  },
  // 6ピース目（任意）：最小粒でリズム
  {
    id: "p6",
    src: "/images/4.svg",
    w: "clamp(32px, 5vw, 72px)",
    h: "clamp(32px, 5vw, 72px)",
    right: "34vw",
    bottom: "46vh",
    rotate: -4,
    z: 1,
    opacity: 0.5,
    delay: 2.6,
    drift: { x: 2, y: 3, r: 14 },
    clip:
      "polygon(30% 36%, 54% 26%, 70% 38%, 68% 56%, 52% 66%, 36% 62%, 28% 50%)",
  },
];

export default function KinpakuPieces() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      {PIECES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            right: p.right,
            bottom: p.bottom,
            width: p.w,
            height: p.h,
            backgroundImage: `url('${p.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: p.opacity,
            zIndex: p.z,
            // 破片の形を整える（重要：画像を"ただ置かない"）
            clipPath: p.clip,
            // ブレンド：Chromeなら plus-lighter も可
            mixBlendMode: ("plus-lighter" as any) || "lighten",
            // 少し金感を増す
            filter: "brightness(118%) contrast(106%) saturate(112%)",
            transform: `rotate(${p.rotate}deg)`,
            transformOrigin: "center",
          }}
          animate={{
            x: [0, (p.drift?.x ?? 4), 0, -(p.drift?.x ?? 4), 0],
            y: [0, -(p.drift?.y ?? 6), 0],
            rotate: [p.rotate, p.rotate + (p.drift?.r ?? 6), p.rotate],
            opacity: [p.opacity * 0.95, p.opacity, p.opacity * 0.98],
          }}
          transition={{
            duration: 7.2,
            times: [0, 0.5, 0.8],
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

