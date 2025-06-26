import { educations } from "@/constants/educations";
import { experiences } from "@/constants/experiences";
import { JourneyItem } from "./JourneyItem";
import { SectionTitle } from "./SectionTitle";
import { TimelineSpine } from "./TimelineSpine";

export const JourneySection = () => {
  const formatYear = (date: string) => {
    return new Date(date).getFullYear().toString();
  };

  return (
    <section
      id="journey"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 sm:scroll-mt-24"
    >
      <div className="text-center">
        <h2 className="text-foreground text-4xl font-bold tracking-tight">
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
