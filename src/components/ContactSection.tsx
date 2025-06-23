"use client";

import Link from "next/link";
import { FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mx-auto mb-20 max-w-5xl scroll-mt-24 leading-relaxed text-gray-800"
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
          className="flex items-center gap-3 text-gray-600 underline transition-colors hover:text-gray-900"
        >
          <FiMail className="h-5 w-5" />
          <span className="text-sm sm:text-base">matiasdario75@gmail.com</span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/dariomatias-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-600 underline transition-colors hover:text-gray-900"
        >
          <FiLinkedin className="h-5 w-5" />
          <span className="text-sm sm:text-base">
            linkedin.com/in/dariomatias
          </span>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/dariomatias_dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-600 underline transition-colors hover:text-gray-900"
        >
          <FiInstagram className="h-5 w-5" />
          <span className="text-sm sm:text-base">@dariomatias_dev</span>
        </Link>
      </div>
    </section>
  );
};
