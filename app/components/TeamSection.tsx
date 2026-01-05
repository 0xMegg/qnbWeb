"use client";

import Image from "next/image";
import { TEAM_MEMBERS } from "../data/teamMembers";
import { SECTIONS } from "../data/sectionsData";
import SectionHeader from "./SectionHeader";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function TeamSection() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <>
      <section
        ref={sectionRef}
        id={SECTIONS.team.id}
        className={`mx-4 sm:mx-8 md:mx-16 py-16 md:py-24 transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeader sectionKey="team" />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="flex flex-col h-full border border-transparent transition-shadow transition-[border-color] duration-200 ease-out hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:border-white/20 active:shadow-[0_8px_30px_rgba(255,255,255,0.12)] active:border-white/20 rounded-lg p-2 -m-2 will-change-[shadow,border-color]"
            >
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
                <p className="text-base sm:text-lg md:text-[20px] leading-relaxed min-h-[8rem] sm:min-h-[7rem] md:min-h-[8rem] flex-grow flex items-start text-left">
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
