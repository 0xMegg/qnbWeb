"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "../data/sectionsData";

const SECTION_ORDER = [
  "why",
  "team",
  "process",
  "services",
  "partners",
  "makeItBang",
] as const;

export default function SectionNavigation() {
  const [currentSection, setCurrentSection] = useState<string>("why");
  const [isScrolling, setIsScrolling] = useState(false);

  // 현재 보이는 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = SECTION_ORDER.map((key) => {
        const element = document.getElementById(SECTIONS[key].id);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          id: SECTIONS[key].id,
          key,
          top: rect.top,
          bottom: rect.bottom,
          center: rect.top + rect.height / 2,
        };
      }).filter(Boolean) as Array<{
        id: string;
        key: string;
        top: number;
        bottom: number;
        center: number;
      }>;

      const viewportCenter = window.innerHeight / 2;

      // 뷰포트 중앙에 가장 가까운 섹션 찾기
      let closest = sections[0];
      let minDistance = Math.abs(sections[0].center - viewportCenter);

      for (const section of sections) {
        const distance = Math.abs(section.center - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closest = section;
        }
      }

      setCurrentSection(closest.key);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  // 섹션으로 스크롤
  const scrollToSection = (key: string) => {
    setIsScrolling(true);
    const element = document.getElementById(SECTIONS[key].id);
    if (element) {
      const offset = 80; // Navbar 높이 고려
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // 스크롤 완료 후 상태 업데이트
      setTimeout(() => {
        setIsScrolling(false);
        setCurrentSection(key);
      }, 1000);
    }
  };

  // 이전/다음 섹션으로 이동
  const goToPrevious = () => {
    const currentIndex = SECTION_ORDER.indexOf(
      currentSection as (typeof SECTION_ORDER)[number]
    );
    if (currentIndex > 0) {
      scrollToSection(SECTION_ORDER[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    const currentIndex = SECTION_ORDER.indexOf(
      currentSection as (typeof SECTION_ORDER)[number]
    );
    if (currentIndex < SECTION_ORDER.length - 1) {
      scrollToSection(SECTION_ORDER[currentIndex + 1]);
    }
  };

  const currentIndex = SECTION_ORDER.indexOf(
    currentSection as (typeof SECTION_ORDER)[number]
  );
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === SECTION_ORDER.length - 1;

  return (
    <>
      {/* 왼쪽 점 네비게이션 */}
      <div className="fixed left-3 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 md:gap-4">
        {SECTION_ORDER.map((key, index) => {
          const isActive = currentSection === key;
          return (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="group relative flex items-center transition-all duration-150 active:scale-90"
              aria-label={`${SECTIONS[key].title}로 이동`}
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3 h-3 md:w-4 md:h-4 bg-white"
                    : "w-2 h-2 md:w-2.5 md:h-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
              {/* 호버 시 섹션 이름 표시 */}
              <span className="absolute left-6 md:left-8 text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {SECTIONS[key].title}
              </span>
            </button>
          );
        })}
      </div>

      {/* 오른쪽 위/아래 버튼 */}
      <div className="fixed right-3 sm:right-5 md:right-8 bottom-24 md:top-1/2 md:bottom-auto translate-y-0 md:-translate-y-1/2 z-40 flex flex-col gap-2 md:gap-3">
        <button
          onClick={goToPrevious}
          disabled={isFirst}
          className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-1 border-white/50 rounded-full text-white transition-all duration-300 ${
            isFirst
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 hover:bg-white hover:text-[#211D1C] cursor-pointer active:scale-95"
          }`}
          aria-label="이전 섹션으로 이동"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          disabled={isLast}
          className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-1 border-white/50 rounded-full text-white transition-all duration-300 ${
            isLast
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 hover:bg-white hover:text-[#211D1C] cursor-pointer active:scale-95"
          }`}
          aria-label="다음 섹션으로 이동"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}

