"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import PrimaryCta from "@/components/ui/PrimaryCta";

/**
 * SpaceSection - 静けさに包まれる空間
 * 目的：黒の背景に柔らかい赤銅色の光が溶ける演出
 * 判断：光の外枠＋ぼかしで空間に包まれる感覚を表現
 */
export const SpaceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // ESCキーで閉じる機能
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeIndex !== null) {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeIndex]);

  // activeIndexが変更されたらcurrentSlideIndexも更新
  useEffect(() => {
    if (activeIndex !== null) {
      setCurrentSlideIndex(activeIndex);
    }
  }, [activeIndex]);
  
  const spaces = [
    {
      title: "カウンター席",
      description: "職人の手さばきを間近で感じる、特別な体験。",
      image: "/images/kata.jpg",
    },
    {
      title: "テーブル席",
      description: "落ち着いた雰囲気で食事を楽しめる空間。",
      image: "/images/mise3.jpg",
    },
    {
      title: "照明演出",
      description: "温かい灯りが、料理と空間に深みを与えます。",
      image: "/images/mise2.jpg",
    },
  ];

  return (
    <>
      {/* Swiper Pagination カスタムスタイル */}
      <style jsx global>{`
        .space-pagination .swiper-pagination-bullet {
          background: rgba(216, 194, 137, 0.4) !important;
          opacity: 1 !important;
          margin: 0 3px !important;
        }
        .space-pagination .swiper-pagination-bullet-active {
          background: #d8c289 !important;
        }
        .space-pagination .swiper-pagination {
          position: relative !important;
          bottom: auto !important;
          left: auto !important;
          transform: none !important;
        }

        /* ✅ Lightbox: 矢印デザイン */
        .lb-prev,
        .lb-next {
          cursor: pointer;
        }

        /* ✅ Lightbox: ドット（スマホ用） */
        .lb-pagination .swiper-pagination-bullet {
          background: rgba(216, 194, 137, 0.4) !important;
          opacity: 1 !important;
        }

        .lb-pagination .swiper-pagination-bullet-active {
          background: #d8c289 !important;
        }
      `}</style>

      <motion.section
        id="space"
        className="relative w-full min-h-[90svh] py-24 px-6 md:px-12 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* ✅ 背景画像（最背面） */}
        <Image
          src="/images/space1.jpg"
          alt="gold foil"
          fill
          priority
          className="object-cover object-center brightness-[0.75] pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* ✅ 黒オーバーレイ（強め） */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

        {/* ✅ 赤銅グラデーション（濃く） */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1817]/45 via-transparent to-[#1a1817]/75 pointer-events-none"></div>

        {/* 光のにじみ（blur） */}
        <div className="absolute inset-0 bg-[#a86b43]/20 blur-[140px] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-warmwhite mb-16 tracking-wider"
          style={{ fontFamily: "Zen Old Mincho, serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          静けさに包まれる空間
        </motion.h2>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {spaces.map((space, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.0, delay: i * 0.2, ease: "easeOut" }}
              className="relative group"
            >
              {/* ➕ Edge Glow（にじみ強化 / 下品にならない高級感） */}
              <motion.div
                className="absolute -inset-[4px] rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(216,194,137,0.45), rgba(216,194,137,0) 70%)",
                  filter: "blur(40px)",
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />

              {/* カード */}
              <div 
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm cursor-pointer group-hover:shadow-[0_0_24px_rgba(216,194,137,0.35)] transition-shadow duration-700"
                onClick={() => setActiveIndex(i)}
              >
                <div className="relative w-full h-72">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* テキスト */}
              <h3
                className="mt-6 text-xl font-serif text-warmwhite"
                style={{ fontFamily: "Zen Old Mincho, serif" }}
              >
                {space.title}
              </h3>
              <p className="text-warmwhite/70 text-sm mt-1">{space.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile（横スライド） */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              el: ".space-pagination",
            }}
          >
            {spaces.map((space, i) => (
              <SwiperSlide key={i}>
                <div className="relative group">
                  {/* ✅ スマホ常時エッジグロウ / PC は hover */}
                  <div
                    className="
                      absolute inset-[-3px] rounded-2xl
                      bg-[radial-gradient(ellipse_at_center,rgba(216,194,137,0.45),transparent)]
                      blur-[40px]
                      opacity-90
                      pointer-events-none
                      md:opacity-0 md:group-hover:opacity-100
                      transition-all duration-700 ease-out
                    "
                  />

                  <div 
                    className="relative z-10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                    onClick={() => setActiveIndex(i)}
                  >
                    <div className="relative w-full h-56">
                      <Image
                        src={space.image}
                        alt={space.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  <h3
                    className="mt-4 text-lg font-serif text-warmwhite"
                    style={{ fontFamily: "Zen Old Mincho, serif" }}
                  >
                    {space.title}
                  </h3>
                  <p className="text-warmwhite/70 text-xs mt-1">{space.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* カードの外に表示するインジケーター */}
          <div className="space-pagination flex justify-center mt-4 min-h-[20px]"></div>
        </div>

        {/* CTAボタン */}
        <PrimaryCta
          href="https://hotpepperリンクここに"
          label="ご予約はこちら"
          className="mt-12 md:mt-20 flex justify-center"
        />
      </div>

      {/* ✅ Lightbox モーダル */}
      {activeIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveIndex(null)}
        >
          {/* 画像カウンター */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-warmwhite text-sm md:text-base">
            {currentSlideIndex + 1} / {spaces.length}
          </div>

          {/* ✕ Close button */}
          <button
            className="absolute top-6 right-6 z-20 text-warmwhite text-3xl w-10 h-10 flex items-center justify-center bg-black/40 rounded-full hover:bg-black/60 transition"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          {/* Swiper */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* ✅ PC: 画像の外に表示する矢印 （金箔色） */}
            <button className="lb-prev hidden md:flex absolute left-12 text-5xl text-[#d8c289] hover:scale-110 transition z-30 w-12 h-12 items-center justify-center">
              ❮
            </button>
            <button className="lb-next hidden md:flex absolute right-12 text-5xl text-[#d8c289] hover:scale-110 transition z-30 w-12 h-12 items-center justify-center">
              ❯
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.lb-next',
                prevEl: '.lb-prev',
              }}
              pagination={{
                el: '.lb-pagination',
                clickable: true,
              }}
              initialSlide={activeIndex}
              onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
              className="w-[90vw] md:w-[70vw] lg:w-[50vw] h-[80vh] md:h-[70vh]"
            >
              {spaces.map((space, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ Mobile: ドットインジケータ */}
            <div className="lb-pagination md:hidden absolute bottom-8 flex justify-center"></div>
          </div>
        </motion.div>
      )}
    </motion.section>
    </>
  );
};
