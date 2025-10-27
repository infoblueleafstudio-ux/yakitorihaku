"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-6 md:px-16 py-4">
        {/* 左：ハンバーガーメニュー */}
        <motion.button
          className="flex items-center gap-2 text-[#c3a970] hover:text-white transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
          <span 
            className="text-sm md:text-base font-medium"
            style={{ fontFamily: "Noto Serif, serif" }}
          >
            Menu
          </span>
        </motion.button>

        {/* 中央：空白（Heroに集中） */}
        <div className="flex-1" />

        {/* 右：予約リンク */}
        <motion.button
          className="text-[#c3a970] hover:text-white transition-colors duration-300 border border-[#c3a970]/30 hover:border-[#c3a970] px-4 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span 
            className="text-sm md:text-base font-medium"
            style={{ fontFamily: "Noto Serif, serif" }}
          >
            Reserve - ご予約
          </span>
        </motion.button>
      </div>

      {/* メニューオーバーレイ */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex items-center justify-center h-full">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2
                className="text-4xl md:text-6xl font-bold text-[#c3a970] mb-8"
                style={{ fontFamily: "Zen Old Mincho, serif" }}
              >
                メニュー
              </h2>
              <div className="space-y-4 text-[#c3a970]/80">
                <p className="text-lg">焼鳥</p>
                <p className="text-lg">一品料理</p>
                <p className="text-lg">お酒</p>
                <p className="text-lg">デザート</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
