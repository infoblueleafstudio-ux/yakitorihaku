# UI実装ルール：ビューポート差対策

## 目的
モバイル実機とブラウザ検証画面での高さ・比率・表示のズレを最小限にし、
Heroなど全画面セクションを正確に再現する。

## 背景
DevToolsではCSSピクセル基準の表示であり、
実機ではデバイスピクセル密度やアドレスバーUIの影響を受けるため、
100vh指定の要素に高さ差が生じる。

## 実装ルール

### 1. **min-h / h の指定**
- Heroやファーストビューには `min-h-[100svh] md:min-h-screen` を使用
- 必要に応じてCSS側で `height: 100dvh` を追加（実機での差分吸収）

### 2. **Meta viewport の設定**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

### 3. **フォントとレンダリング**
- 明示的に font-family を指定（例: "Zen Old Mincho", serif）
- 字間・行間をTailwindで微調整：tracking-wide, leading-tight

### 4. **推奨確認環境**
- iPhone 12（Safari）と Android（Chrome）の実機で検証
- DevToolsではDPR=2に設定してプレビュー確認

## 備考

- **100svh** はスクロールバー領域を考慮し、アドレスバー非表示時の高さを基準にする
- **100dvh** はアドレスバー含む最大高さ（rarely used）
- **100lvh** は最小表示領域用（reserve for edge cases）

## Tailwind実装例

### HeroSection用の推奨クラス
```tsx
// 基本構成
className="relative min-h-[100svh] md:min-h-screen max-w-[420px] mx-auto"

// レスポンシブ対応
className="h-[90svh] md:h-screen lg:h-[100vh]"

// フォント指定
style={{ fontFamily: "Zen Old Mincho, serif" }}
className="font-serif tracking-wider leading-tight"
```

### 実機検証用のCSS追加
```css
/* 実機での高さ差吸収 */
.hero-section {
  height: 100dvh;
  min-height: 100svh;
}

/* アドレスバー対応 */
@media (max-height: 600px) {
  .hero-section {
    height: 100lvh;
  }
}
```

## 開発フロー

1. **開発時**: `min-h-[100svh]` で基本実装
2. **DevTools確認**: DPR=2で表示確認
3. **実機検証**: iPhone/Androidで実際の表示確認
4. **微調整**: 必要に応じてCSSで`100dvh`追加

## 注意事項

- 100vhは避ける（アドレスバー影響大）
- 100svhを基本とし、必要時のみ100dvh追加
- 実機での確認を必須とする
- フォント指定は明示的に行う

---

**目的**: 「レスポンシブ + 実機で破綻しない Hero構成」の統一ルール化
