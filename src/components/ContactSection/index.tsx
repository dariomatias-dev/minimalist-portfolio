"use client";

import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showToast, ToastType } from "@/lib/toastNotification";
import { SocialLinks } from "./SocialLinks";

const schema = yup.object({
  subject: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Formato de e-mail inválido"),
  message: yup.string().required("Campo obrigatório"),
});

type FormData = yup.InferType<typeof schema>;

export const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSending(true);

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          subject: data.subject,
          message: data.message,
          email: data.email,
        },
        publicKey,
      );

      reset();

      showToast({
        type: ToastType.Success,
        message: "Email enviado com sucesso",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);

      showToast({ type: ToastType.Error, message: "Erro ao enviar email" });
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

      <form
        className="mb-12 grid gap-5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Input
              placeholder="Assunto"
              {...register("subject")}
              className="focus-visible:ring-0"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Seu e-mail"
              {...register("email")}
              className="focus-visible:ring-0"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Textarea
            placeholder="Sua mensagem"
            rows={6}
            {...register("message")}
            className="focus-visible:ring-0"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-fit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </form>

      <SocialLinks />
    </section>
  );
};
