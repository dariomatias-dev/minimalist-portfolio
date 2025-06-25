"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showToast, ToastType } from "@/lib/toastNotification";
import { SocialLinks } from "./SocialLinks";

const schema = z.object({
  subject: z.string().min(1, "Campo obrigatório"),
  email: z
    .string()
    .min(1, "Campo obrigatório")
    .email("Formato de e-mail inválido"),
  message: z.string().min(1, "Campo obrigatório"),
});

type FormData = z.infer<typeof schema>;

export const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      subject: "",
      email: "",
      message: "",
    },
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

      form.reset();

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
      className="mx-auto mb-16 max-w-5xl scroll-mt-24 leading-relaxed text-gray-800 sm:mb-20"
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

      <Form {...form}>
        <form
          className="mb-12 grid gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
        >
          <div className="grid items-start gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o assunto"
                      {...field}
                      className="focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu e-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="exemplo@email.com"
                      {...field}
                      className="focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    placeholder="Escreva sua mensagem aqui..."
                    {...field}
                    className="focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-fit" disabled={isSending}>
            {isSending ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>
      </Form>

      <SocialLinks />
    </section>
  );
};
