"use client";

import { motion } from "framer-motion";

/**
 * 焼鳥はく 川越 空間紹介セクション
 * 静けさに包まれる高級空間を印象的に伝える
 */
export const SpaceSection = () => {
  const spaces = [
    {
      title: "カウンター席",
      description: "職人の手さばきを間近で感じる特等席。",
      image: "/images/space1.jpg",
    },
    {
      title: "個室",
      description: "静寂の中で、特別な時間をお過ごしください。",
      image: "/images/space2.jpg",
    },
    {
      title: "照明演出",
      description: "温かみのある光が空間に深みを与えます。",
      image: "/images/space3.jpg",
    },
  ];

  return (
    <motion.section
      id="space"
      className="relative w-full min-h-[80svh] py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* ヘッダー */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-warmwhite mb-16 tracking-wider"
          style={{ fontFamily: "Yuji Syuku, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          静けさに包まれる空間
        </motion.h2>

        {/* デスクトップ：グリッド表示 */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {spaces.map((space, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: i * 0.2, ease: "easeOut" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-serif text-warmwhite mb-2" style={{ fontFamily: "Zen Old Mincho, serif" }}>
                  {space.title}
                </h3>
                <p className="text-warmwhite/85 text-sm" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                  {space.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* モバイル：横スライド表示 */}
        <div className="md:hidden">
          <div
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
            {spaces.map((space, i) => (
              <motion.div
                key={i}
                className="
                  flex-shrink-0 snap-center w-[90%] h-[400px]
                  mx-[5%] flex flex-col
                "
                style={{ scrollSnapAlign: 'center' }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.0, delay: i * 0.2, ease: 'easeOut' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm flex-1">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-serif text-warmwhite mb-2" style={{ fontFamily: "Zen Old Mincho, serif" }}>
                    {space.title}
                  </h3>
                  <p className="text-warmwhite/85 text-sm" style={{ fontFamily: "Noto Sans JP, sans-serif" }}>
                    {space.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA（予約ボタン） */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          <motion.button
            className="
              bg-ember hover:bg-[#a13e2e] text-white rounded-full 
              px-10 py-4 md:px-12 md:py-5 
              text-base md:text-lg font-medium tracking-wide 
              transition-colors duration-300 shadow-lg
            "
            style={{ fontFamily: "Yuji Syuku, serif" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            ご予約はこちら
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
