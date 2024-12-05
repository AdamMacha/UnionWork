"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-10 h-10"
    >
      <div className="absolute inset-0 gold-gradient rounded-xl shadow-lg" />
      <div className="relative w-full h-full flex items-center justify-center">
        <span className="text-primary font-bold text-xl">UW</span>
      </div>
    </motion.div>
  );
}