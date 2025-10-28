"use client";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * MenuSection - 高級感のあるメニューギャラリー
 * 目的：巴里夕顔のような非日常感を演出
 * 判断：店内写真を背景に、料理カードを浮かせる構成
 * 理由：静＞動、金箔優先で品格を統一
 */
export const MenuSection = () => {
  // 料理データ - 作品ギャラリーとして構成
  const menuItems = [
    { name: "砂肝", img: "/images/menu1.jpg" },
    { name: "つくね", img: "/images/menu2.jpg" },
    { name: "ささみ", img: "/images/menu3.jpg" },
    { name: "もも", img: "/images/menu4.jpg" },
    { name: "ねぎま", img: "/images/menu5.jpg" },
    { name: "せせり", img: "/images/menu7.jpg" },
  ];

  return (
    <motion.section
      id="menu"
      className="relative w-full min-h-screen pt-14 pb-5 md:py-24 px-6 md:px-12 overflow-hidden bg-onyx"
      initial={{ opacity: 0.95 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 背景：店内写真（暗く・ぼかし） */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mise1.jpg"
          alt="店内の様子"
          fill
          className="object-cover"
          style={{
            opacity: 0.32,
            filter: "blur(2px) brightness(0.8) contrast(1.1)",
          }}
          priority={false}
        />
      </div>

      {/* 装飾SVG - 背景アクセント */}
      <div className="absolute top-20 right-0 w-48 h-48 md:w-64 md:h-64 opacity-[0.35] mix-blend-soft-light z-[1]">
        <div className="relative w-full h-full">
          <Image src="/images/6.svg" alt="" fill className="object-contain" />
        </div>
      </div>
      <div className="absolute bottom-20 left-0 w-40 h-40 md:w-52 md:h-52 opacity-[0.4] mix-blend-soft-light z-[1]">
        <div className="relative w-full h-full">
          <Image src="/images/4.svg" alt="" fill className="object-contain" />
        </div>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 md:w-40 md:h-40 opacity-[0.3] mix-blend-overlay z-[1]">
        <div className="relative w-full h-full">
          <Image src="/images/5.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* タイトル */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-kinpaku text-center mb-20 md:mb-24 tracking-wider"
          style={{
            fontFamily: "Zen Old Mincho, serif",
            textShadow: "0 0 20px rgba(195,169,112,0.15)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          おすすめの串
        </motion.h2>

        {/* 料理カードグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-[420px] md:max-w-none mx-auto">
          {menuItems.map((item, i) => (
            <MenuItemCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* ▶ お品書きページへ遷移ボタン */}
      <motion.div
        className="
          absolute
          z-20

          /* ✅ SP（中央下） */
          bottom-8 left-[30%] -translate-x-1/2

          /* ✅ PC（右下に寄せる） */
          md:bottom-12 md:right-12 md:left-auto md:-translate-x-0
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        <a
          href="/menu"
          className="
            border border-[#d8c289]/60 text-[#d8c289]
            px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base
            tracking-[0.25em]

            bg-black/50 backdrop-blur-md
            hover:bg-[#d8c289]/20 hover:border-[#d8c289] transition-all
            shadow-[0_0_22px_rgba(216,194,137,0.25)]
          "
          style={{ fontFamily: "Yuji Syuku, serif" }}
        >
          お品書きを見る
        </a>
      </motion.div>
    </motion.section>
  );
};

/**
 * MenuItemCard - 料理カード（1:1正方形）
 * 目的：料理写真を美しく浮かせて見せる
 * 判断：ホバーで僅かにスケール、影で浮遊感
 */
const MenuItemCard = ({
  item,
  index,
}: {
  item: { name: string; img: string };
  index: number;
}) => {
  return (
    <motion.div
      className="group relative aspect-square rounded-2xl overflow-hidden bg-onyx/40 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
      }}
    >
      {/* 料理画像 */}
      <Image
        src={item.img}
        alt={item.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* オーバーレイ（下からのグラデーション） */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* 料理名（金箔色） */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3
          className="text-xl md:text-2xl font-serif text-kinpaku"
          style={{
            fontFamily: "Zen Old Mincho, serif",
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          {item.name}
        </h3>
      </div>
    </motion.div>
  );
};
