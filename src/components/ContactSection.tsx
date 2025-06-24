"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/constants/socialLinks";

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

      <p className="mb-6 text-gray-600">
        Envie uma mensagem diretamente ou entre em contato pelas redes sociais.
      </p>

      {/* Contact Form */}
      <form className="mb-12 grid gap-5" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu e-mail" type="email" />
        </div>
        <Textarea
          placeholder="Sua mensagem"
          rows={4}
          className="min-h-[160px]"
        />

        <Button type="submit" className="w-fit">
          Enviar mensagem
        </Button>
      </form>

      <SocialLinks />
    </section>
  );
};

export const SocialLinks = () => {
  return (
    <section aria-labelledby="social-section">
      <h3
        id="social-section"
        className="mb-6 text-xl font-semibold tracking-tight text-gray-900"
      >
        Redes Sociais
      </h3>

      <p className="mb-10 max-w-lg text-gray-600">
        Me acompanhe e fique por dentro dos meus projetos e atualizações.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {socialLinks.map(({ href, label, subLabel, icon }) => (
          <li key={href}>
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-6 py-7 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            >
              <div className="text-gray-900">{icon}</div>
              <span className="text-sm font-semibold text-gray-900">
                {label}
              </span>
              <span className="text-xs text-gray-500">{subLabel}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
