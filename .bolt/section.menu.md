# MenuSection 設計定義書（Versea）

## 🎯 目的
厳選串メニューを "炭火の温もり" の中で魅せ、  
上品なトーンのまま「味への信頼感」を訴求する。

---

## 🧩 構成
| 要素 | 内容 | 備考 |
|------|------|------|
| セクションタイトル | おすすめの串 | Zen Old Mincho |
| メニューカード | 画像・商品名・説明 | 2〜3枚表示（スライド対応） |
| 背景 | Hero〜Concept同一のグラデーション | #2B2B2B〜#1A1A1A〜#B24A34 |
| アニメーション | Framer Motion（fade＋scale） | hover時に軽く持ち上げる |
| フォント | タイトル：Zen Old Mincho／本文：Noto Sans JP | |
| 光演出 | ember/10〜20 の赤光を下層に配置 | 暖かみと深みの演出 |

---

## ⚙️ 技術仕様
- 使用技術：Next.js + Tailwind CSS + Framer Motion  
- レイアウト：
  - モバイル：縦並び1列
  - PC：横並びグリッド or スライド式
- 背景：`linear-gradient(135deg, #2B2B2B 0%, #1A1A1A 50%, #B24A34 100%)`
- カード影：`shadow-[0_4px_20px_rgba(0,0,0,0.4)]`

---

## 🪶 デザインルール
- hover時：`scale: 1.03`／`shadow-lg`
- transition：`ease: "easeOut", duration: 0.6`
- モーション順：上からフェードイン（順次表示）
- カード角丸：`rounded-2xl`
- 各画像にemberグラデーションオーバーレイを適用

---

## ✅ 完成条件
- Hero〜Concept〜Menuの流れが連続し、色温度が一致  
- 画像・文字の余白に統一感  
- hover時の浮遊感と暖光の調和  
- 実機で違和感なく視差連携が成立
