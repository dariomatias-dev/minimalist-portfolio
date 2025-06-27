export const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-4 text-center scroll-mt-24"
    >
      <h2 className="text-foreground text-4xl font-bold">Sobre Mim</h2>

      <div className="text-muted-foreground mt-8 space-y-6 text-base leading-relaxed text-balance sm:text-lg">
        <p>
          Sou um desenvolvedor{" "}
          <strong className="text-foreground">Full Stack</strong> com
          experiência na criação de soluções completas — de interfaces modernas
          e acessíveis a integrações com sistemas robustos de backend.
        </p>

        <p>
          No frontend, utilizo{" "}
          <strong className="text-foreground">React</strong> e{" "}
          <strong className="text-foreground">Next.js</strong> para desenvolver
          aplicações responsivas, performáticas e com excelente experiência do
          usuário. Também atuo com{" "}
          <strong className="text-foreground">Flutter</strong> no
          desenvolvimento mobile, criando apps nativos e multiplataforma.
        </p>

        <p>
          No backend, trabalho com{" "}
          <strong className="text-foreground">TypeScript</strong> (Node.js) e{" "}
          <strong className="text-foreground">Go</strong>, construindo APIs
          escaláveis, seguras e de alta performance, com foco em boas práticas,
          testes e manutenção.
        </p>

        <p>
          Tenho compromisso com a qualidade técnica e estou em constante
          evolução, buscando entregar soluções bem estruturadas, eficientes e
          sustentáveis — seja em projetos pessoais ou profissionais.
        </p>
      </div>
    </section>
  );
};
