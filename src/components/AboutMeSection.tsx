"use client";

import { motion } from "framer-motion";

const aboutTexts = [
  `Sou um desenvolvedor Full Stack com experiência na criação de soluções completas — de interfaces modernas e acessíveis a integrações com sistemas robustos de backend.`,
  `No frontend, utilizo React e Next.js para desenvolver aplicações responsivas, performáticas e com excelente experiência do usuário. Também atuo com Flutter no desenvolvimento mobile, criando apps nativos e multiplataforma.`,
  `No backend, trabalho com TypeScript (Node.js) e Go, construindo APIs escaláveis, seguras e de alta performance, com foco em boas práticas, testes e manutenção.`,
  `Tenho compromisso com a qualidade técnica e estou em constante evolução, buscando entregar soluções bem estruturadas, eficientes e sustentáveis — seja em projetos pessoais ou profissionais.`,
];

const highlightWords = [
  "Flutter",
  "Next.js",
  "React",
  "TypeScript",
  "Go",
  "Full Stack",
];

const highlightText = (text: string) => {
  return text
    .split(new RegExp(`(${highlightWords.join("|")})`, "g"))
    .map((part, i) =>
      highlightWords.includes(part) ? (
        <strong key={i} className="text-foreground dark:text-white">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
};

export const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl scroll-mt-24 px-4 text-center"
    >
      <motion.h2
        className="text-foreground text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Sobre Mim
      </motion.h2>

      <motion.div
        className="text-muted-foreground mt-8 space-y-6 text-base leading-relaxed text-balance sm:text-lg"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: {} }}
      >
        {aboutTexts.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {highlightText(paragraph)}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};
