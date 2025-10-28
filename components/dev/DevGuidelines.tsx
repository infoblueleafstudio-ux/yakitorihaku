"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const DevGuidelines = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);

  useEffect(() => {
    // 開発環境でのみ表示
    if (process.env.NODE_ENV === "development") {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* トグルボタン */}
      <button
        onClick={() => setShowGuidelines(!showGuidelines)}
        className="fixed top-4 right-4 z-[1000] px-3 py-1.5 text-xs font-medium text-[#c3a970] border border-[#c3a970]/50 rounded-md bg-black/60 backdrop-blur-sm hover:bg-[#c3a970]/10 transition"
      >
        {showGuidelines ? "Hide Dev Guidelines" : "Show Dev Guidelines"}
      </button>

      {/* ガイドライン＆説明 */}
      {showGuidelines && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* ===== ガイドライン（縦・横） ===== */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-red-500 z-[10000]"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-500 z-[10000]"></div>

          {/* Hero Section 境界（固定位置・より見やすく） */}
          <div className="absolute top-[140vh] left-0 right-0 h-3 bg-yellow-500 z-[10000] shadow-2xl"></div>

          {/* Concept Section 境界（実際の高さに合わせて調整） */}
          <div className="absolute top-[200vh] left-0 right-0 h-3 bg-green-500 z-[10000] shadow-2xl"></div>

          {/* デバッグ用：現在のビューポート境界 */}
          <div className="absolute top-[100vh] left-0 right-0 h-2 bg-purple-500 z-[10000] shadow-xl"></div>

          {/* デバッグ用：より低い位置の境界線 */}
          <div className="absolute top-[120vh] left-0 right-0 h-2 bg-orange-500 z-[10000] shadow-xl"></div>
          <div className="absolute top-[160vh] left-0 right-0 h-2 bg-pink-500 z-[10000] shadow-xl"></div>

          {/* ===== 説明タブ ===== */}
          <motion.div
            className="absolute top-4 left-4 bg-black/90 text-[#f3f3f3] text-xs px-3 py-2 rounded-md backdrop-blur-sm border border-[#c3a970]/30 pointer-events-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="font-semibold text-[#c3a970] mb-1">Dev Guidelines</p>
            <ul className="space-y-[2px] text-[11px] leading-tight">
              <li><span className="text-red-400">■</span> 縦中心線</li>
              <li><span className="text-blue-400">■</span> 水平中心線</li>
              <li><span className="text-yellow-400">■</span> Hero Section (140vh)</li>
              <li><span className="text-green-400">■</span> Concept Section (200vh)</li>
              <li><span className="text-purple-400">■</span> ビューポート境界 (100vh)</li>
              <li><span className="text-orange-400">■</span> デバッグ線 (120vh)</li>
              <li><span className="text-pink-400">■</span> デバッグ線 (160vh)</li>
              <li className="mt-1 opacity-70">※ 開発時のみ表示</li>
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
};
