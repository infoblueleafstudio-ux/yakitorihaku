"use client";

import { motion } from "framer-motion";

/**
 * 煙のSVGアニメーションコンポーネント
 * 炭火の余韻を表現する上昇する煙のアニメーション
 */
export const SmokeSVG = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 overflow-hidden pointer-events-none">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 200 120"
        className="opacity-40"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.4, 0.2, 0.4],
          y: [0, -20, -40, -60]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* 煙のパス1 - 左側 */}
        <motion.path
          d="M50 120 Q60 100 70 80 Q80 60 90 40 Q100 20 110 0"
          stroke="#DCD8D4"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* 煙のパス2 - 中央 */}
        <motion.path
          d="M90 120 Q100 100 110 80 Q120 60 130 40 Q140 20 150 0"
          stroke="#DCD8D4"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* 煙のパス3 - 右側 */}
        <motion.path
          d="M130 120 Q140 100 150 80 Q160 60 170 40 Q180 20 190 0"
          stroke="#DCD8D4"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* 微細な煙の粒子 */}
        <motion.circle
          cx="70"
          cy="100"
          r="1"
          fill="#DCD8D4"
          opacity="0.5"
          animate={{
            y: [0, -30, -60],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        
        <motion.circle
          cx="120"
          cy="110"
          r="1.5"
          fill="#DCD8D4"
          opacity="0.4"
          animate={{
            y: [0, -35, -70],
            opacity: [0, 0.4, 0],
            scale: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.8
          }}
        />
        
        <motion.circle
          cx="150"
          cy="105"
          r="1"
          fill="#DCD8D4"
          opacity="0.3"
          animate={{
            y: [0, -25, -50],
            opacity: [0, 0.3, 0],
            scale: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.5
          }}
        />
      </motion.svg>
    </div>
  );
};
