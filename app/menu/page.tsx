"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/** ───────── 設定（色・フォント） ───────── */
const KINPAKU = "#d8c289";

/** ───────── 型定義 ───────── */
type MenuItem = {
  name: string;
  price?: string;
  desc?: string;
  img?: string; // ある場合だけ表示
};

/** ───────── ダミーデータ（後で差し替えOK） ───────── */
// 参考：現サイトの並びに寄せた初期値（価格は仮含む）
const COURSES: MenuItem[] = [
  {
    name: "おまかせ8本",
    price: "2,420円",
    desc: "串8本 (1人前程度)",
    img: "/images/course1.jpg",
  },
  {
    name: "おまかせ14本",
    price: "3,850円",
    desc: "串14本 (2人前程度)",
    img: "/images/course2.jpg",
  },
];

const YAKITORI: MenuItem[] = [
  { name: "砂肝", price: "330円", desc: "歯ざわりと旨味" , img:"/images/menu1.jpg"},
  { name: "つくね（月見）", price: "380円", desc: "卵黄で濃厚に", img:"/images/menu2.jpg"},
  { name: "ささみ（わさび）", price: "330円", desc: "しっとり柔らか", img:"/images/menu3.jpg"},
  { name: "もも", price: "330円", img:"/images/menu4.jpg"},
  { name: "ねぎま", price: "330円", img:"/images/menu5.jpg"},
  { name: "せせり", price: "330円", img:"/images/menu6.jpg"},
];

const ROLLS_VEG: MenuItem[] = [
  { name: "しそ巻", price: "330円" },
  { name: "豚バラアスパラ", price: "380円" },
  { name: "しいたけ", price: "275円" },
  { name: "エリンギ", price: "280円" },
];

const SIDES: MenuItem[] = [
  { name: "だし巻き玉子", price: "550円", desc: "出汁の香りとやさしい甘さ" },
  { name: "冷やしトマト", price: "330円" },
  { name: "ポテトサラダ", price: "330円" },
];

const RICE_NOODLES: MenuItem[] = [
  { name: "親子丼", price: "880円" },
  { name: "お茶漬け（梅／鮭）", price: "550円" },
  { name: "鶏ガラらーめん", price: "660円" },
];

const DESSERTS: MenuItem[] = [
  { name: "抹茶アイス（黒蜜）", price: "462円" },
  { name: "柚子シャーベット", price: "462円" },
];

/** ───────── 共通コンポーネント ───────── */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-3xl md:text-4xl font-serif tracking-wide text-center mb-10 md:mb-12"
    style={{
      color: KINPAKU,
      fontFamily: "Zen Old Mincho, serif",
      textShadow: "0 0 16px rgba(216,194,137,0.18)",
    }}
  >
    {children}
  </h2>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

/** カード（画像ありのときに使用） */
const MenuCard = ({ item }: { item: MenuItem }) => (
  <motion.article
    className="group relative rounded-2xl overflow-hidden bg-[#161616]/60 backdrop-blur-sm shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 160, damping: 18 }}
  >
    {item.img && (
      <Image
        src={item.img}
        alt={item.name}
        width={800}
        height={800}
        className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
      />
    )}
    <div className="p-5 md:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3
          className="text-xl md:text-2xl font-serif"
          style={{ color: KINPAKU, fontFamily: "Zen Old Mincho, serif" }}
        >
          {item.name}
        </h3>
        {item.price && (
          <span className="text-sm md:text-base text-white/80">{item.price}</span>
        )}
      </div>
      {item.desc && (
        <p className="mt-2 text-sm md:text-[15px] leading-7 text-white/80">{item.desc}</p>
      )}
    </div>
  </motion.article>
);

/** テキスト行（画像なしのとき） */
const MenuRow = ({ item }: { item: MenuItem }) => (
  <div className="flex items-baseline justify-between py-3 border-b border-white/8">
    <span className="text-[15px] md:text-base text-white/90">{item.name}</span>
    {item.price && <span className="text-sm md:text-base text-white/70">{item.price}</span>}
  </div>
);

/** ───────── ページ本体 ───────── */
export default function MenuPage() {
  const [activeSection, setActiveSection] = useState<string>("courses");
  const navRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // navクリック時に activeSection を更新する
  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  // スクロール検知（ヘッダーの非表示/表示）- スクロール方向検知対応
  useEffect(() => {
    let lastScrollTop = 0;
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // 下スクロール → 隠す
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        navRef.current?.classList.add("hide");
      } else {
        // 上スクロール → 表示
        navRef.current?.classList.remove("hide");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

      // スクロール停止 → 表示
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        navRef.current?.classList.remove("hide");
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  // IntersectionObserver（アクティブセクション検知）
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    // セクション登録
    const sections = ["courses", "yakitori", "rolls-veg", "sides", "rice-noodles", "salad", "desserts"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionRefs.current[id] = section;
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = sectionRefs.current[id];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Swiper Pagination カスタムスタイル */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(216, 194, 137, 0.4) !important;
          opacity: 1 !important;
          margin: 0 3px !important; /* インジケーター間隔を広げる */
        }
        .swiper-pagination-bullet-active {
          background: #d8c289 !important;
        }
        /* 外部pagination用のスタイル */
        .course-pagination .swiper-pagination,
        .yakitori-pagination .swiper-pagination {
          position: relative !important;
          bottom: auto !important;
          left: auto !important;
          transform: none !important;
        }
        /* ナビゲーション用のスタイル */
        .menu-nav {
          color: #d8c289;
          transition: color 0.3s ease;
        }
        .menu-nav:hover {
          color: white;
        }
        /* ✅ アンカーリンク押下時にタイトルが隠れないように調整 */
        section[id] {
          scroll-margin-top: 160px;
        }
        /* アクティブメニュー用のスタイル */
        .active a {
          color: #d8c289;
          text-shadow: 0 0 10px rgba(216,194,137,0.4);
        }
        /* ヘッダーのスクロール非表示用 */
        nav {
          transition: transform 0.35s ease-in-out;
        }
        nav.hide {
          transform: translateY(-100%);
        }
        /* ✅ スマホヘッダーナビ（横スクロール感を出す） */
        nav ul {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }
        nav ul::-webkit-scrollbar {
          height: 4px;
        }
        nav ul::-webkit-scrollbar-thumb {
          background: rgba(216, 194, 137, 0.5);
          border-radius: 2px;
        }
      `}</style>

      {/* 背景の微金箔ノイズ（任意） */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, rgba(195,169,112,0.18), transparent 60%)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Hero */}
      <section className="relative pt-[calc(14vh+56px)] pb-[6vh] md:pt-[calc(16vh+56px)] md:pb-[6vh] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/mise1.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.28, filter: "blur(2px) brightness(0.9) contrast(1.08)" }}
            priority
          />
        </div>

        <motion.div
          className="container mx-auto px-6 md:px-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <h1
            className="text-4xl md:text-6xl mb-4 font-serif tracking-[0.12em]"
            style={{ color: KINPAKU, fontFamily: "Yuji Syuku, serif" }}
          >
            お品書き
          </h1>
          <p
            className="text-sm md:text-base text-white/80 tracking-[0.18em]"
            style={{ fontFamily: "Yuji Syuku, serif" }}
          >
            Yakitori / Course & A la carte
          </p>
          <p className="mt-6 text-white/70 text-xs md:text-sm">
            ※ 仕入れ状況により内容・価格が変更になる場合がございます。
          </p>
        </motion.div>
      </section>

      {/* ───────── Navigation Menu（固定ヘッダー）───────── */}
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-30 bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10">
        <ul className="flex overflow-x-auto whitespace-nowrap px-6 py-3 md:justify-center gap-6 md:gap-10 text-sm md:text-base">
          <li className={activeSection === "courses" ? "active" : ""}><a href="#courses" className="menu-nav" onClick={() => handleNavClick("courses")}>コース</a></li>
          <li className={activeSection === "yakitori" ? "active" : ""}><a href="#yakitori" className="menu-nav" onClick={() => handleNavClick("yakitori")}>串焼き</a></li>
          <li className={activeSection === "rolls-veg" ? "active" : ""}><a href="#rolls-veg" className="menu-nav" onClick={() => handleNavClick("rolls-veg")}>巻き物・野菜焼き</a></li>
          <li className={activeSection === "sides" ? "active" : ""}><a href="#sides" className="menu-nav" onClick={() => handleNavClick("sides")}>一品料理</a></li>
          <li className={activeSection === "rice-noodles" ? "active" : ""}><a href="#rice-noodles" className="menu-nav" onClick={() => handleNavClick("rice-noodles")}>飯物・〆</a></li>
          <li className={activeSection === "salad" ? "active" : ""}><a href="#salad" className="menu-nav" onClick={() => handleNavClick("salad")}>サラダ</a></li>
          <li className={activeSection === "desserts" ? "active" : ""}><a href="#desserts" className="menu-nav" onClick={() => handleNavClick("desserts")}>甘味</a></li>
        </ul>
      </nav>

      {/* Courses */}
      <section id="courses" className="container mx-auto px-6 md:px-10 pt-10 md:pt-12 pb-16 md:pb-24">
        <SectionTitle>コース</SectionTitle>

        {/* ✅ PC：グリッド / スマホ：Swiper */}
        <FadeIn>

          {/* ✅ PC（md以上） */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {COURSES.map((c, i) => <MenuCard key={i} item={c} />)}
          </div>

          {/* ✅ SP（Swiper: 横スライド） */}
          <div className="md:hidden">
            {/* インジケーターをカード外に配置するため、elプロパティで外部divを指定 */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.1}
              centeredSlides={true}
              pagination={{
                clickable: true,
                dynamicBullets: false,
                el: ".course-pagination", // 外部divを指定
              }}
              onSlideChange={() => {}}
            >
              {COURSES.map((c, i) => (
                <SwiperSlide key={i}>
                  <MenuCard item={c} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* ✅ カードの外に表示するインジケーター（カードとドットの間に16pxの余白） */}
            <div className="course-pagination flex justify-center mt-4 min-h-[20px]"></div>
          </div>

        </FadeIn>
      </section>

      {/* Yakitori */}
      <section id="yakitori" className="container mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <SectionTitle>串焼き</SectionTitle>

        {/* ✅ PC：グリッド / スマホ：Swiper */}
        <FadeIn>

          {/* ✅ PC（md以上） */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {YAKITORI.map((m, i) => <MenuCard key={i} item={m} />)}
          </div>

          {/* ✅ SP（Swiper: 横スライド） */}
          <div className="md:hidden">
            {/* インジケーターをカード外に配置するため、elプロパティで外部divを指定 */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.1}
              centeredSlides={true}
              pagination={{
                clickable: true,
                dynamicBullets: false,
                el: ".yakitori-pagination", // 外部divを指定
              }}
              onSlideChange={() => {}}
            >
              {YAKITORI.map((m, i) => (
                <SwiperSlide key={i}>
                  <MenuCard item={m} />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* ✅ カードの外に表示するインジケーター（カードとドットの間に16pxの余白） */}
            <div className="yakitori-pagination flex justify-center mt-4 min-h-[20px]"></div>
          </div>

        </FadeIn>
      </section>

      {/* Rolls & Veg */}
      <section id="rolls-veg" className="container mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <SectionTitle>巻き物・野菜焼き</SectionTitle>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {ROLLS_VEG.map((m, i) => (
              <MenuRow key={i} item={m} />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Sides */}
      <section id="sides" className="container mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <SectionTitle>一品料理</SectionTitle>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {SIDES.map((m, i) => (
              <MenuRow key={i} item={m} />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Rice / Noodles */}
      <section id="rice-noodles" className="container mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <SectionTitle>飯物・〆</SectionTitle>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {RICE_NOODLES.map((m, i) => (
              <MenuRow key={i} item={m} />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Salad / サラダ */}
      <section id="salad" className="container mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <SectionTitle>サラダ</SectionTitle>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <MenuRow item={{ name: "いぶりがっこポテトサラダ", price: "638円" }} />
            <MenuRow item={{ name: "冷やしトマトサラダ", price: "682円" }} />
            <MenuRow item={{ name: "シーザーサラダ ベーコン＆キノコ", price: "792円" }} />
            <MenuRow item={{ name: "和風海藻サラダ", price: "759円" }} />
          </div>
        </FadeIn>
      </section>

      {/* Desserts */}
      <section id="desserts" className="container mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <SectionTitle>甘味</SectionTitle>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {DESSERTS.map((m, i) => (
              <MenuRow key={i} item={m} />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="relative pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div
            className="mx-auto w-full md:w-auto flex justify-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <a
              href="/#reservation" // 予約導線に合わせて変更
              className="inline-flex items-center gap-2 border rounded-full px-7 py-3 md:px-9 md:py-4 text-sm md:text-base tracking-[0.18em] bg-black/50 backdrop-blur-md border-[#d8c289]/60 text-[#d8c289] hover:bg-[#d8c289]/15 hover:border-[#d8c289] transition-all shadow-[0_0_22px_rgba(216,194,137,0.25)]"
              style={{ fontFamily: "Yuji Syuku, serif" }}
            >
              ご予約はこちら
            </a>
          </motion.div>
          <p className="mt-4 text-center text-xs md:text-sm text-white/60">
            ※ アレルギー・苦手食材がある場合はご予約時にお知らせください。
          </p>
        </div>
      </section>
    </main>
  );
}