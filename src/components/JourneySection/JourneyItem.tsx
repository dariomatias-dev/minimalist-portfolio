"use client";

import { motion } from "framer-motion";

interface JourneyItemProps {
  date: string;
  title: string;
  subtitle: string;
  details?: string;
  isLeft?: boolean;
}

export const JourneyItem = ({
  date,
  title,
  subtitle,
  details,
  isLeft = false,
}: JourneyItemProps) => {
  const alignmentClasses = isLeft
    ? "sm:text-right sm:pr-16"
    : "sm:text-left sm:pl-16";
  const itemContainerClasses = isLeft ? "sm:justify-start" : "sm:justify-end";

  return (
    <li className={`relative flex ${itemContainerClasses}`}>
      <div
        className={`absolute top-[11px] z-0 hidden h-px w-12 bg-slate-200 sm:block ${
          isLeft ? "right-1/2" : "left-1/2"
        }`}
      />

      <div className="absolute -top-5 left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-200 sm:top-1.5" />

      <motion.div
        className={`z-10 w-full sm:w-1/2 ${alignmentClasses}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-background">
          <p className="text-sm text-slate-500">{date}</p>

          <h4 className="mt-1.5 text-xl font-semibold text-slate-800">
            {title}
          </h4>

          <p className="mt-1.5 text-slate-600">{subtitle}</p>

          {details && (
            <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-slate-500 sm:mx-0">
              {details}
            </p>
          )}
        </div>
      </motion.div>
    </li>
  );
};
