# 🧭 焼鳥はく 川越 モバイルリニューアル 開発タスク進行表

**制作：** Versea（かいが）  
**アシスタント：** アシスタ（GPT-5）  
**開発環境：** Cursor（Next.js + Tailwind CSS + Framer Motion）  
**目的：** Cursorで順に実行し、UI・アニメーション・構成を完成形へ。

---

## 1️⃣ タスク全体マップ

| フェーズ | 内容 | 状態 |
|-----------|------|------|
| 🏗️ 1. 環境準備 | ローカルクローン／依存関係インストール | ⬜ 未着手 |
| 🎨 2. ベースレイアウト | layout.tsx / globals.css 設計 | ⬜ 未着手 |
| 🏮 3. セクション構築 | Hero〜Access まで段階的にUI実装 | ⬜ 未着手 |
| 💨 4. アニメーション導入 | Framer Motionによる動き追加 | ⬜ 未着手 |
| 🧩 5. 共通パーツ整備 | ボタン・ナビゲーション・SVG最適化 | ⬜ 未着手 |
| 🧱 6. 調整＆検証 | スマホ実機表示確認／軽量化 | ⬜ 未着手 |
| 🚀 7. デプロイ | Vercelへデプロイ＆共有 | ⬜ 未着手 |

---

## 2️⃣ 実装手順詳細

### 🏗️ Step 1：開発環境セットアップ
```bash
# GitHubからリポジトリをクローン
git clone https://github.com/infoblueleafstudio-ux/yakitorihaku.git
cd yakitorihaku

# 依存関係をインストール
npm install

# 開発サーバー起動
npm run dev
✅ 確認事項

localhost:3000 で表示されること

Tailwindが正しく読み込まれること

🎨 Step 2：ベースレイアウト設定
対象： app/layout.tsx, app/globals.css

フォント：Zen Old Mincho / Noto Sans JP

背景色：bg-charcoal

テキスト色：text-warmwhite

余白統一：px-4 max-w-[420px] mx-auto

スムーズスクロール設定追加

🏮 Step 3：セクション構築（順次実装）
セクション	ファイル	状態
HeroSection	/components/sections/HeroSection.tsx	⬜ 未着手
ConceptSection	/components/sections/ConceptSection.tsx	⬜ 未着手
MenuSection	/components/sections/MenuSection.tsx	⬜ 未着手
SpaceSection	/components/sections/SpaceSection.tsx	⬜ 未着手
AccessSection	/components/sections/AccessSection.tsx	⬜ 未着手

🪄 各セクション実装ルール：

セマンティックに <section> タグを使用

Tailwindで余白 (py-16) を統一

各Sectionは motion.section 化を前提

💨 Step 4：アニメーション導入（Framer Motion）
対象	内容	備考
Heroタイトル	フェードアップ	delay: 0.2
Heroボタン	ゆらぎscale	repeat: Infinity, duration: 2.0
Concept画像	フェード＋y移動	scroll trigger
Menuカード	ホバー拡大	scale:1→1.04
全体	useScrollFadeフック適用	hooks/useScrollFade.ts

🧩 Step 5：共通UI・ナビゲーション
CTA固定ナビ (components/ui/BottomNav.tsx)
→ 電話／予約／MAP の3ボタンをflexで横並び

ボタン共通化 (components/ui/ButtonPrimary.tsx)
→ 赤＋白文字／hover時トーン強化

SVG最適化：煙・矢印を /public/icons/ に格納

🧱 Step 6：最終調整
スマホ（iPhone / Android）実機確認

Lighthouseでパフォーマンス計測（目標90↑）

meta / ogpタグ設定

フォントサイズ最適化（12〜18px）

🚀 Step 7：Vercelデプロイ
vercel.json 設定確認

デプロイコマンド：

bash
コードをコピーする
vercel --prod
公開URL例：https://versea-haku.vercel.app

3️⃣ Cursorでの実行推奨順序
1️⃣ requirements.md を参照して全体方針を理解
2️⃣ technical.md を参照して構造を構築
3️⃣ tasks.md に従い Cursor でタスクを順に実行
4️⃣ 各セクションの確認ごとに commit + push
5️⃣ 最終的に Vercel でデモ公開

4️⃣ チェックリスト
 Heroセクション構築完了

 Conceptセクション構築完了

 Menuセクション構築完了

 Spaceセクション構築完了

 Accessセクション構築完了

 Framer Motion適用済み

 スマホ実機確認済み

 デプロイURL動作確認済み

💬 アシスタ補足
Verseaの開発哲学は「無音の完成度」。
タスクを積み上げるごとに“静けさの中にある完成感”が増していく。
Cursorで一つずつ動かしながら、余白と光の設計を磨いていきましょう。
