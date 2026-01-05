import Image from "next/image";
import { TEAM_MEMBERS } from "../data/teamMembers";
import { SECTIONS } from "../data/sectionsData";
import SectionHeader from "./SectionHeader";

export default function TeamSection() {
  return (
    <>
      <section id={SECTIONS.team.id} className="mx-4 sm:mx-8 md:mx-16 py-16 md:py-24">
        <SectionHeader sectionKey="team" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name} className="flex flex-col h-full">
              <div className="relative w-full mb-3 md:mb-4 aspect-[701/934] flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base font-semibold mb-1 min-h-[2.5rem] flex items-start">
                  {member.name} | {member.role}
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] leading-relaxed mb-2 min-h-[3em] font-semibold">
                  &quot;{member.quote1Line1}
                  <br />
                  {member.quote1Line2}&quot;
                </p>
                <p className="text-base sm:text-lg md:text-[20px] leading-relaxed min-h-[6rem] flex-grow flex items-start text-left">
                  {member.quote2}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
