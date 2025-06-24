"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "./SocialLinks";

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
