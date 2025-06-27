"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="w-full border-t border-gray-300 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="text-muted-foreground mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 py-6 text-center text-sm md:flex-row md:text-left">
        <motion.div
          className="flex flex-col items-center gap-2 md:flex-row md:gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span>© {new Date().getFullYear()} Dário Matias</span>

          <span className="hidden md:inline">|</span>

          <span>Todos os direitos reservados</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desenvolvido por{" "}
          <Link
            href="https://github.com/dariomatias-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-gray-900"
          >
            Dário Matias
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
};
