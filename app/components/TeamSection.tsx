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
            <article key={member.name} className="flex flex-col">
              <div
                className="relative w-full mb-3 md:mb-4"
                style={{ aspectRatio: "701/934" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                {member.name} | {member.role}
              </h3>
              <p className="text-base sm:text-lg md:text-[20px] leading-relaxed">
                &quot;{member.quote1}&quot;
                <br />
                {member.quote2}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
