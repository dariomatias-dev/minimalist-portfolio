interface BlockquoteProps {
  quote: string;
  author: string;
}

export const Blockquote = ({ quote, author }: BlockquoteProps) => {
  return (
    <section className="my-36 sm:my-40 md:my-48">
      <div className="mx-auto max-w-3xl px-6">
        <blockquote className="text-center">
          <hr className="mx-auto mb-12 h-px w-24 border-0 bg-gray-300" />

          <p className="text-4xl font-extrabold italic tracking-tight text-gray-900 lg:text-[2.625rem] lg:leading-tight">
            “{quote}”
          </p>

          <footer className="mt-8 text-lg text-gray-600">
            — {author}
          </footer>

          <hr className="mx-auto mt-12 h-px w-24 border-0 bg-gray-300" />
        </blockquote>
      </div>
    </section>
  );
};
