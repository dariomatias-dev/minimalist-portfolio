"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showToast, ToastType } from "@/lib/toastNotification";
import { SocialLinks } from "./SocialLinks";
import { ActionButton } from "../ActionButton";

const schema = z.object({
  subject: z.string().min(1, "O assunto é obrigatório."),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("Por favor, insira um e-mail válido."),
  message: z.string().min(1, "A mensagem é obrigatória."),
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
      className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 text-center sm:scroll-mt-24"
    >
      <h2 className="text-foreground text-4xl font-bold">Entre em Contato</h2>

      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        Estou à disposição para discutir possíveis colaborações, ideias de
        projeto ou quaisquer assuntos profissionais.
      </p>

      <div className="mt-12 text-left sm:mt-16">
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Assunto"
                        {...field}
                        className="border-gray-200 bg-white/50 focus-visible:ring-gray-400"
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
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Seu e-mail"
                        {...field}
                        className="border-gray-200 bg-white/50 focus-visible:ring-gray-400"
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
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Sua mensagem..."
                      {...field}
                      className="border-gray-200 bg-white/50 focus-visible:ring-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-4">
              <ActionButton
                type="submit"
                variant="outline"
                animation="invert"
                label={isSending ? "Enviando..." : "Enviar"}
                disabled={isSending}
              />
            </div>
          </form>
        </Form>
      </div>

      <div className="mx-auto my-12 h-px w-20 bg-gray-200 sm:my-16" />

      <SocialLinks />
    </section>
  );
};
