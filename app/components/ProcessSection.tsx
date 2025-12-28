import Image from "next/image";
import { PROCESS_DATA } from "../data/processData";
import { SECTIONS } from "../data/sectionsData";
import SectionHeader from "./SectionHeader";

export default function ProcessSection() {
  return (
    <>
      <section id={SECTIONS.process.id} className="mx-4 sm:mx-8 md:mx-16">
        <SectionHeader sectionKey="process" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {PROCESS_DATA.map((process, index) => (
            <div
              key={index}
              className="border border-white p-4 sm:p-6 lg:p-8 text-sm leading-relaxed flex flex-col items-start text-left"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
                <Image
                  src={process.image}
                  alt="process"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-[20px] font-bold mb-3 sm:mb-4">
                {process.title}
              </h3>
              <p className="text-base sm:text-lg md:text-[20px] leading-relaxed mb-2">
                &quot;{process.question}&quot;
              </p>
              <p className="text-base sm:text-lg md:text-[20px] leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full h-12 md:h-55" />
    </>
  );
}
