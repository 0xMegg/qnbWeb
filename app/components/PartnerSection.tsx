import Image from "next/image";
import { PROCESS_DATA } from "../data/partnerData";
import { SECTIONS } from "../data/sectionsData";
import SectionHeader from "./SectionHeader";

export default function PartnerSection() {
  return (
    <>
      <section id={SECTIONS.partners.id} className="mx-4 sm:mx-8 md:mx-16 text-left">
        <SectionHeader sectionKey="partners" />
        <p className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold">
          함께 성장하는 파트너들
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {PROCESS_DATA.map((partner, index) => (
            <article key={index} className="flex flex-col">
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
      <div className="w-full h-12 md:h-55" />
    </>
  );
}

