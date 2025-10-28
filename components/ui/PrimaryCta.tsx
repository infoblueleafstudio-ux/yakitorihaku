"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  className?: string;
};

export default function PrimaryCta({ href, label, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={className}
    >
      <Link
        href={href}
        className="
          border border-[#d8c289]/60 text-[#d8c289]
          px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base
          bg-black/50 backdrop-blur-md tracking-[0.25em]
          hover:bg-[#d8c289]/20 hover:border-[#d8c289] transition-all
          shadow-[0_0_22px_rgba(216,194,137,0.25)]
          whitespace-nowrap
        "
        style={{ fontFamily: "Yuji Syuku, serif" }}
      >
        {label}
      </Link>
    </motion.div>
  );
}

