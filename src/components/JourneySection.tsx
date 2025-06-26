import { educations } from "@/constants/educations";
import { experiences } from "@/constants/experiences";

const TimelineSpine = () => (
  <div
    className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, #cbd5e1 60%, transparent 40%)",
      backgroundSize: "1px 10px",
      backgroundRepeat: "repeat-y",
    }}
  />
);

interface JourneyItemProps {
  date: string;
  title: string;
  subtitle: string;
  details?: string;
  isLeft?: boolean;
}

const JourneyItem = ({
  date,
  title,
  subtitle,
  details,
  isLeft = false,
}: JourneyItemProps) => {
  const alignmentClasses = isLeft
    ? "sm:text-right sm:pr-16"
    : "sm:text-left sm:pl-16";
  const itemContainerClasses = isLeft ? "sm:justify-start" : "sm:justify-end";

  return (
    <li className={`relative flex ${itemContainerClasses}`}>
      <div
        className={`absolute top-[11px] hidden h-px w-12 bg-slate-200 sm:block ${
          isLeft ? "right-1/2" : "left-1/2"
        }`}
      />
      <div className="absolute top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-300" />
      <div className={`w-full sm:w-1/2 ${alignmentClasses}`}>
        <p className="text-sm text-slate-500">{date}</p>
        <h4 className="mt-1.5 text-xl font-semibold text-slate-800">{title}</h4>
        <p className="mt-1.5 text-slate-600">{subtitle}</p>

        {details && (
          <p className="mx-auto mt-4 max-w-prose text-sm leading-relaxed text-slate-500 sm:mx-0">
            {details}
          </p>
        )}
      </div>
    </li>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h3 className="text-center text-2xl font-semibold text-slate-800">
    {children}
  </h3>
);

const formatYear = (date: string) => {
  return new Date(date).getFullYear().toString();
};

export const JourneySection = () => {
  return (
    <section id="journey" className="mx-auto max-w-5xl scroll-mt-24 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Trajetória
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Minha jornada profissional e acadêmica, onde cada passo foi uma
          oportunidade de crescimento e aprendizado.
        </p>
      </div>

      <div className="mt-20 space-y-20">
        <div>
          <SectionTitle>Carreira</SectionTitle>

          <div className="relative mt-12">
            <TimelineSpine />

            <ul
              role="list"
              className="space-y-12 text-center sm:space-y-16 sm:text-left"
            >
              {experiences.map((exp, index) => (
                <JourneyItem
                  key={`${exp.company}-${exp.role} - ${index}`}
                  isLeft={index % 2 === 0}
                  date={`${formatYear(exp.startDate)} - ${
                    exp.endDate ? formatYear(exp.endDate) : "Atual"
                  }`}
                  title={exp.role}
                  subtitle={`${exp.company}${exp.type ? ` · ${exp.type}` : ""}`}
                  details={exp.description}
                />
              ))}
            </ul>
          </div>
        </div>

        <div>
          <SectionTitle>Educação</SectionTitle>

          <div className="relative mt-12">
            <TimelineSpine />

            <ul
              role="list"
              className="space-y-12 text-center sm:space-y-16 sm:text-left"
            >
              {educations.map((edu, index) => (
                <JourneyItem
                  key={`${edu.institution}-${edu.degree} - ${index}`}
                  isLeft={index % 2 !== 0}
                  date={edu.period}
                  title={edu.degree}
                  subtitle={`${edu.institution} — ${edu.campus}${
                    edu.status ? ` · ${edu.status}` : ""
                  }`}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
