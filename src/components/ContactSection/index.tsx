"use client";

import { motion } from "framer-motion";
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
    <motion.section
      id="contact"
      className="mx-auto w-full max-w-3xl scroll-mt-24 px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-foreground text-4xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Entre em Contato
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-400 mt-4 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Estou à disposição para discutir possíveis colaborações, ideias de
        projeto ou quaisquer assuntos profissionais.
      </motion.p>

      <motion.div
        className="mt-12 text-left sm:mt-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
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
                        className="border-input bg-background/80 focus-visible:ring-ring focus-visible:ring-0"
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
                        className="border-input bg-background/80 focus-visible:ring-ring focus-visible:ring-0"
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
                      className="border-input bg-background/80 focus-visible:ring-ring focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-4">
              <motion.div
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ActionButton
                  type="submit"
                  variant="outline"
                  animation="invert"
                  label={isSending ? "Enviando..." : "Enviar"}
                  disabled={isSending}
                />
              </motion.div>
            </div>
          </form>
        </Form>
      </motion.div>

      <motion.div
        className="bg-border mx-auto my-12 h-px w-20 sm:my-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      />

      <SocialLinks />
    </motion.section>
  );
};
