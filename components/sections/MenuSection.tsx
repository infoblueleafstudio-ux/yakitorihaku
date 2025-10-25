"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

/**
 * 焼鳥はく 川越 メニューセクション（Versea統一トーン）
 * モバイル：横スライド／PC：クリック拡大表示
 */
export const MenuSection = () => {
  const menus = [
    {
      title: "白レバー",
      desc: "希少部位の白レバー。クリーミーで濃厚な味わいが特徴です。",
      img: "/images/menu1.jpg",
    },
    {
      title: "ねぎま",
      desc: "ジューシーなもも肉と香ばしいねぎの定番串。",
      img: "/images/menu2.jpg",
    },
    {
      title: "つくね",
      desc: "秘伝のたれで香ばしく焼き上げた逸品。",
      img: "/images/menu3.jpg",
    },
  ];

  const [active, setActive] = useState<null | number>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // スクロール位置を監視して現在のスライドを更新
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.scrollWidth / menus.length;
        const newSlide = Math.round(scrollLeft / cardWidth);
        setCurrentSlide(newSlide);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.section
      id="menu"
      className="relative w-full min-h-[80svh] py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* 背景光 → 削除 */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* タイトル */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-warmwhite mb-16 tracking-wider"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          おすすめの串
        </motion.h2>

        {/* ✅ PC：クリック拡大付きグリッド */}
        <div className="hidden md:grid grid-cols-3 gap-8 md:justify-items-center">
          {menus.map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-black/30 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm w-full max-w-sm cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(178,74,52,0.25)",
              }}
              onClick={() => setActive(i)}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* ✅ モバイルスライド（中央揃え + スクロールバー非表示） */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="
              flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 scrollbar-none
              [-webkit-overflow-scrolling:touch] relative
            "
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {menus.map((item, i) => (
              <motion.div
                key={i}
                className="
                  flex-shrink-0 snap-center w-[90%] h-[380px]
                  bg-black/30 rounded-2xl overflow-hidden
                  shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm
                  mx-[5%] flex flex-col justify-center
                "
                style={{ scrollSnapAlign: 'center' }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.0, delay: i * 0.2, ease: 'easeOut' }}
                whileTap={{ scale: 0.98 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ドットインジケーター（琥珀色＋光るアニメーション） */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
        {menus.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? 'w-3 h-3 bg-[#B24A34]'
                : 'bg-[#B24A34]/30'
            }`}
            animate={
              i === currentSlide
                ? { scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }
                : {}
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* ✅ 拡大モーダル（PC横長レイアウト + 外層矢印） */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative bg-black/60 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 左：画像 */}
              <div className="w-2/3 aspect-[4/3] overflow-hidden">
                <img
                  src={menus[active].img}
                  alt={menus[active].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 右：テキスト */}
              <div className="w-1/3 p-8 text-left text-warmwhite flex flex-col justify-center">
                <h3 className="text-3xl font-serif mb-4">
                  {menus[active].title}
                </h3>
                <p className="text-base text-warmwhite/80 leading-relaxed">
                  {menus[active].desc}
                </p>
              </div>
            </motion.div>

            {/* 左右矢印ボタン（外層配置・確実表示） */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-6xl text-warmwhite/80 hover:text-ember transition-all duration-300 z-[100]"
              onClick={(e) => {
                e.stopPropagation();
                setActive(active === 0 ? menus.length - 1 : active - 1);
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-6xl text-warmwhite/80 hover:text-ember transition-all duration-300 z-[100]"
              onClick={(e) => {
                e.stopPropagation();
                setActive(active === menus.length - 1 ? 0 : active + 1);
              }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

/* サブコンポーネント */
const MenuCard = ({ item }: { item: { title: string; desc: string; img: string } }) => (
  <div className="relative">
    <div className="relative w-full h-56 md:h-72">
      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
    <div className="p-6 text-left">
      <h3
        className="text-xl font-serif text-warmwhite mb-2"
        style={{ fontFamily: "Zen Old Mincho, serif" }}
      >
        {item.title}
      </h3>
      <p
        className="text-warmwhite/85 text-sm leading-relaxed"
        style={{ fontFamily: "Noto Sans JP, sans-serif" }}
      >
        {item.desc}
      </p>
    </div>
  </div>
);
