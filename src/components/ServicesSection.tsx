"use client";

import { Monitor, Smartphone, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="mx-auto mb-20 max-w-5xl scroll-mt-24 leading-relaxed text-gray-800"
    >
      <h2 className="mb-8 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Serviços
      </h2>

      <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Card className="shadow-sm transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold text-gray-900">
              Criação de Sites
            </CardTitle>
            <Monitor className="h-5 w-5 text-gray-700" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              Desenvolvimento de websites responsivos, modernos e otimizados para SEO.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold text-gray-900">
              Criação de Aplicativos
            </CardTitle>
            <Smartphone className="h-5 w-5 text-gray-700" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              Desenvolvimento de apps nativos e multiplataforma com ótima experiência do usuário.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm transition-shadow hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold text-gray-900">
              Criação de Servidores
            </CardTitle>
            <Server className="h-5 w-5 text-gray-700" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              APIs e sistemas backend seguros, robustos e escaláveis com boas práticas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
