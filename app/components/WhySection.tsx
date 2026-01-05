"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { SECTIONS } from "../data/sectionsData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function WhySection() {
  const [sectionRef1, isVisible1] = useIntersectionObserver();
  const [sectionRef2, isVisible2] = useIntersectionObserver();

  return (
    <>
      <section
        ref={sectionRef1}
        id={SECTIONS.why.id}
        className={`py-16 md:py-24 h-100 flex justify-center items-center transition-all duration-700 ease-out ${
          isVisible1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <Image
            src="/logo.png"
            alt="Navbar"
            width={240}
            height={48}
            className="h-full object-contain w-40 md:w-60"
          />
        </div>
      </section>
      <div className="flex justify-center">
        <button className="px-4 py-2 border-2 border-white w-30 h-10 md:h-12 border-solid text-lg md:text-xl inline-flex items-center justify-center">
          무료상담
        </button>
      </div>
      <section
        ref={sectionRef2}
        className={`mx-4 sm:mx-8 md:mx-16 py-16 md:py-24 transition-all duration-700 ease-out ${
          isVisible2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeader sectionKey="why" />
        <h1 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed">
          &quot;머리 아픈 고민은<br className="md:hidden" />저희에게 맡겨주세요&quot;
        </h1>
        <p className="mb-4 text-base sm:text-lg md:text-[20px] leading-relaxed">
          <b>디자인, 마케팅, 브랜딩...</b> 큐앤뱅에게 이것들은 목적이 아니라
          문제 해결을 위한 &apos;도구&apos;일 뿐입니다.
          <br />
          실력 있는 의사가 환자에게 꼭 필요한 처방만 내리듯, 과잉 진단 없이 문제
          해결에 딱 필요한 도구만을 꺼내어 사용합니다.
        </p>
        <p className="text-base sm:text-lg md:text-[20px] leading-relaxed">
          고민의 시작부터 느낌표를 찍는 그 순간까지,
          <br />각 분야 전문가들이 하나의 팀으로 움직이며 비즈니스에 최적화된
          해답을 제시합니다.
        </p>
      </section>
    </>
  );
}
