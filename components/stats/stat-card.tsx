"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

export function StatCard({ value, label, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold mb-2 text-primary-foreground">{value}</h3>
      <p className="text-primary-foreground/80">{label}</p>
    </motion.div>
  );
}