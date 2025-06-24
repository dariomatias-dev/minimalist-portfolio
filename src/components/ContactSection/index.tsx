"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "./SocialLinks";

export const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          subject: form.subject,
          message: form.message,
          email: form.email,
        },
        publicKey,
      );

      setForm({
        subject: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSending(false);
    }
  };

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
      <form className="mb-12 grid gap-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            name="subject"
            placeholder="Assunto"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <Textarea
          name="message"
          placeholder="Sua mensagem"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button type="submit" className="w-fit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </form>

      <SocialLinks />
    </section>
  );
};
