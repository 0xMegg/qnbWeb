"use client";

import Image from "next/image";
import { PROCESS_DATA } from "../data/partnerData";
import { SECTIONS } from "../data/sectionsData";
import SectionHeader from "./SectionHeader";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function PartnerSection() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <>
      <section
        ref={sectionRef}
        id={SECTIONS.partners.id}
        className={`mx-4 sm:mx-8 md:mx-16 py-16 md:py-24 transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeader sectionKey="partners" />
        <p className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          함께 성장하는 파트너들
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-left">
          {PROCESS_DATA.map((partner, index) => (
            <article
              key={index}
              className="flex flex-col border border-transparent transition-shadow transition-[border-color] duration-200 ease-out hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:border-white/20 rounded-lg p-2 -m-2 will-change-[shadow,border-color]"
            >
              <div
                className="relative w-full mb-3 md:mb-4"
                style={{ aspectRatio: "1/1" }}
              >
                <Image
                  src={partner.image}
                  alt={partner.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[18px] font-bold mb-1">
                {partner.title}
              </h3>
              <p className="text-[18px] leading-relaxed">
                &quot;{partner.question}&quot;
                <br />
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

