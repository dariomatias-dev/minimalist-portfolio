"use client";

import Link from "next/link";
import { Mail, Linkedin, Instagram } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mx-auto mb-20 max-w-5xl leading-relaxed text-gray-800"
    >
      <h2 className="mb-6 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Contato
      </h2>

      <p className="text-gray-600">
        Estou sempre aberto a novas conexões, colaborações ou apenas um bom
        bate-papo sobre tecnologia.
      </p>

      <p className="mb-8 text-gray-600">
        Entre em contato pelos canais abaixo:
      </p>

      <div className="flex flex-col gap-5">
        {/* Email */}
        <Link
          href="mailto:matiasdario75@gmail.com"
          className="flex items-center gap-3 text-gray-800 transition-colors hover:text-black"
        >
          <Mail className="h-5 w-5 text-gray-600" />
          <span className="text-sm underline underline-offset-4 sm:text-base">
            matiasdario75@gmail.com
          </span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/dariomatias-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-800 transition-colors hover:text-black"
        >
          <Linkedin className="h-5 w-5 text-gray-600" />
          <span className="text-sm underline underline-offset-4 sm:text-base">
            linkedin.com/in/dariomatias
          </span>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/dariomatias_dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-800 transition-colors hover:text-black"
        >
          <Instagram className="h-5 w-5 text-gray-600" />
          <span className="text-sm underline underline-offset-4 sm:text-base">
            @dariomatias_dev
          </span>
        </Link>
      </div>
    </section>
  );
};
