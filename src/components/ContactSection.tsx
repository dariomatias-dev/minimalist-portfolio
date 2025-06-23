export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mx-auto mb-20 max-w-5xl leading-relaxed text-gray-800"
    >
      <h2 className="mb-6 border-b border-gray-300 pb-2 text-3xl font-semibold">
        Contato
      </h2>
      <p>
        Me envie um email para{" "}
        <a
          href="mailto:dario@example.com"
          className="text-gray-900 underline transition-colors hover:text-black"
        >
          dario@example.com
        </a>{" "}
        ou me ache no{" "}
        <a
          href="https://linkedin.com/in/dariomatias"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline transition-colors hover:text-black"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
};
