# ⚙️ 焼鳥はく 川越 モバイルリニューアル 技術設計書

**制作：** Versea（かいが）  
**アシスタント：** アシスタ（GPT-5）  
**制作環境：** Next.js + Tailwind CSS + Framer Motion + SVG  
**対象：** モバイルファーストLP構成（Hero〜Access）

---

## 1️⃣ プロジェクト構成

### 📁 ディレクトリ構造（推奨）
yakitorihaku/
├── app/
│ ├── page.tsx # メインページ（LP構成）
│ ├── layout.tsx # 全体レイアウト（フォント・背景指定）
│ └── globals.css # 共通CSS
├── components/
│ ├── ui/ # ボタン・ヘッダーなどUIコンポーネント
│ ├── sections/ # Hero, Concept, Menu, Space, Access 各セクション
│ └── animations/ # motion variants
├── public/
│ ├── images/ # 炭火・店内などの実写素材
│ └── icons/ # SVG素材（煙・矢印など）
├── lib/
│ └── constants.ts # カラー・サイト設定共通化
├── hooks/
│ └── useScrollFade.ts # スクロールフェード専用カスタムフック
├── tailwind.config.ts
├── next.config.js
└── README.md

yaml
コードをコピーする

---

## 2️⃣ 技術スタックと目的

| 分類 | 使用技術 | 役割 |
|------|-----------|------|
| フレームワーク | Next.js 14（App Router） | ページ構成・画像最適化 |
| スタイリング | Tailwind CSS | 高速なUI構築 |
| アニメーション | Framer Motion | スクロール・フェード・ゆらぎ表現 |
| グラフィック | SVG（煙・矢印） | 装飾的な和の要素を軽量に表現 |
| デプロイ | Vercel | デモ・本番両対応 |
| コード管理 | GitHub | バージョン管理・チーム共有 |

---

## 3️⃣ カラー／フォント設定（lib/constants.ts）

```ts
export const COLORS = {
  charcoal: "#2B2B2B",     // 背景
  emberRed: "#B24A34",     // アクセント
  warmWhite: "#FAF8F5",    // 文字・背景差し色
  smokeGray: "#4A4A4A",    // 区切り線
};

export const FONTS = {
  title: "Zen Old Mincho, serif",
  body: "Noto Sans JP, sans-serif",
};
4️⃣ Tailwind設定（tailwind.config.ts）
ts
コードをコピーする
theme: {
  extend: {
    colors: {
      charcoal: "#2B2B2B",
      ember: "#B24A34",
      warmwhite: "#FAF8F5",
    },
    fontFamily: {
      serif: ["Zen Old Mincho", "serif"],
      sans: ["Noto Sans JP", "sans-serif"],
    },
    boxShadow: {
      soft: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
},
5️⃣ コンポーネント仕様
🏮 HeroSection
要素	内容
背景	店舗実写（炭火・店内）＋黒グラデーション
中央テキスト	「焼鳥はく 川越」「備長炭で焼く、静けさの一串」
CTA	今すぐ予約する（外部リンク／ホバーで赤強調）
モーション	フェードアップ＋微細なscale揺らぎ

🔥 ConceptSection
要素	内容
写真	職人・炭火の手元
テキスト	「香りが伝わる、静かな炎」＋こだわり文
アニメーション	スクロール時フェードイン＋y軸20px移動

🍢 MenuSection
要素	内容
レイアウト	横スクロール（overflow-x-auto flex gap-4）
カード	丸角＋シャドウ＋画像上に料理名
モーション	ホバー時 scale:1→1.04, easeOut

🏠 SpaceSection
要素	内容
写真	店内／照明／空間の奥行き
レイアウト	2カラムグリッド（grid-cols-2 gap-3）
アニメーション	スクロールフェード（opacity遅延）

📍 AccessSection
要素	内容
情報	営業時間・定休日・住所
地図	Google Map埋め込み or スクリーンショット
CTA	電話・予約・MAP（3分割ボタン）
配置	下部固定ナビに連動 (fixed bottom-0)

6️⃣ 共通アニメーション（hooks/useScrollFade.ts）
ts
コードをコピーする
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScrollFade = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return {
    ref,
    initial: { opacity: 0, y: 20 },
    animate: controls,
    transition: { duration: 1.0, ease: "easeOut" },
  };
};
7️⃣ ファイル命名規則
分類	命名例	備考
セクション	HeroSection.tsx	components/sections 内
UI要素	ButtonPrimary.tsx	components/ui 内
カスタムフック	useScrollFade.ts	hooks 内
定数・設定	constants.ts	lib 内

8️⃣ デプロイ設計
項目	設定内容
環境変数	.env.local（APIキー・URL）
デプロイ先	Vercel（自動デプロイ）
ブランチ	main
公開URL	https://versea-haku.vercel.app

9️⃣ 保守・拡張計画
メニューセクションのAPI化（Supabase連携で動的更新）

季節限定メニュー表示にタグ対応（例：冬季限定）

将来的にPCビュー対応を追加（共通デザイン流用）

「About」ページ追加でスタッフ紹介も可能に

💬 アシスタ補足
技術設計のキーワードは「構造の静けさ」。
コンポーネントを小さく保ち、TailwindとFramer Motionを分業させることで
読みやすく・壊れにくい設計にする。
静的な美しさ × 技術的安定性 = Versea品質。
