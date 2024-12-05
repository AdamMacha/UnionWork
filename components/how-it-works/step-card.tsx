"use client";

import { motion } from "framer-motion";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

export function StepCard({ number, title, description, delay, isLast }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center p-6"
    >
      <div className="w-14 h-14 rounded-2xl bg-secondary text-primary flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 left-[calc(100%-2rem)] w-[calc(4rem)] h-0.5 bg-secondary/20" />
      )}
    </motion.div>
  );
}