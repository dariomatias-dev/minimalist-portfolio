const highlightWords = [
  "Flutter",
  "Next.js",
  "React",
  "TypeScript",
  "Go",
  "Full Stack",
];

export const highlightText = (text: string) => {
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
