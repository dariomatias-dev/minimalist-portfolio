"use client";

import { motion } from "framer-motion";

interface BlockquoteProps {
  quote: string;
  author: string;
}

export const Blockquote = ({ quote, author }: BlockquoteProps) => {
  return (
    <section className="my-24 sm:my-32 md:my-40">
      <div className="mx-auto max-w-3xl px-6">
        <blockquote className="text-center">
          <motion.hr
            className="mx-auto mb-12 h-px w-24 border-0 bg-gray-300"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "center" }}
          />

          <motion.p
            className="text-4xl font-extrabold tracking-tight text-gray-900 italic lg:text-[2.625rem] lg:leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            “{quote}”
          </motion.p>

          <motion.footer
            className="mt-8 text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            — {author}
          </motion.footer>

          <motion.hr
            className="mx-auto mt-12 h-px w-24 border-0 bg-gray-300"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "center" }}
          />
        </blockquote>
      </div>
    </section>
  );
};
