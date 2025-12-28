"use client";

import { useState } from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { SECTIONS } from "../data/sectionsData";
import SectionHeader from "./SectionHeader";

export default function ServicesSection() {
  const [openSections, setOpenSections] = useState<number[]>([]); // 모든 섹션 기본적으로 접힘

  const toggleSection = (id: number) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <section id={SECTIONS.services.id} className="mx-4 sm:mx-8 md:mx-16">
        <SectionHeader sectionKey="services" />
        <p className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold">
          비즈니스의 시작부터 성장의 순간까지,
          <br />
          당신의 모든 문제를 해결합니다.
        </p>

        <div className="space-y-0 text-sm leading-relaxed text-left">
          <hr className="border-white mb-0" />
          {SERVICES_DATA.map((service) => {
            const isOpen = openSections.includes(service.id);
            return (
              <div key={service.id}>
                <button
                  onClick={() => toggleSection(service.id)}
                  className="w-full flex items-center justify-between py-3 sm:py-4 text-left"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl my-2 sm:my-4 pr-2">
                    {service.title}
                  </h3>
                  <span className="text-lg sm:text-xl transition-transform duration-300 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <hr className="border-white mb-0" />
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-bold text-base sm:text-lg md:text-xl mt-4">
                      {service.description1}
                      <br />
                      {service.description2}
                    </p>
                    <div className="w-full h-6 sm:h-12" />
                    <div className="space-y-3 sm:space-y-4 pb-3 sm:pb-4">
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {itemIndex > 0 && (
                            <hr className="border-white/20 my-3 sm:my-4" />
                          )}
                          <div className="font-bold mb-2 text-base sm:text-[18px]">
                            {item.title}
                          </div>
                          <p className="text-sm sm:text-base md:text-[18px]">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="w-full h-6 sm:h-12" />
                  </div>
                </div>
                <hr className="border-white/20 mt-0" />
              </div>
            );
          })}
        </div>
      </section>
      <div className="w-full h-12 md:h-55" />
    </>
  );
}
