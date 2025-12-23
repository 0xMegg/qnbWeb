"use client";

import Image from "next/image";
import { useState } from "react";

// 팀 멤버 데이터
const TEAM_MEMBERS = [
  {
    name: "신종호",
    role: "Brand Director",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "방향을 잃은 브랜드에게 나침반이 됩니다. ",
    quote2:
      "총괄 디렉터로서 현상 이면의 본질을 꿰뚫어 보고, 흔들리지 않는 전략을 설계합니다.",
  },
  {
    name: "김지영",
    role: "Creative Director",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "보이지 않는 가치를 보이는 경험으로 만듭니다. ",
    quote2:
      "전략을 가장 매력적인 시각 언어로 통역합니다. 소비자 마음을 움직이는 비주얼 솔루션을 총괄합니다.",
  },
  {
    name: "배상원",
    role: "Content PD",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "터지는 콘텐츠의 문법을 만듭니다. ",
    quote2:
      "현직 숏폼 크리에이터로서 소비자가 반응할 수밖에 없는 트렌디한 영상 콘텐츠를 제작합니다.",
  },
  {
    name: "송차은",
    role: "Growth Marketer",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "직감이 아닌 데이터로 결과를 증명합니다. ",
    quote2:
      "냉철한 데이터 분석을 통해 우리가 만든 브랜드와 콘텐츠가 실제 매출로 이어지도록 만듭니다.",
  },
  {
    name: "남은비",
    role: "Lead Designer",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "감도높은 미학으로 브랜드의 결을 빚어냅니다. ",
    quote2:
      "정립된 시각 언어를 감각적인 비주얼로 구현하여 브랜드만의 선명한 인상을 구축합니다.",
  },
  {
    name: "목현수",
    role: "Space Director",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "고유한 서사가 살아 숨 쉬는 공간을 만듭니다. ",
    quote2:
      "평면적인 아이디어를 입체적 경험으로. 고객을 만나는 모든 공간의 경험을 설계합니다.",
  },
  {
    name: "최재욱",
    role: "Output Specialist",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "선명한 결과물로 실력을 증명합니다. ",
    quote2:
      "매체별 최적화를 통해, 상상 속의 비주얼을 오차 없는 정교한 결과물로 빚어냅니다.",
  },
  {
    name: "최재욱",
    role: "Output Specialist",
    image: "https://cdn.imweb.me/thumbnail/20251219/d9a4f4b2ed1f5.png", // 이미지 경로를 실제 경로로 변경해주세요
    quote1: "선명한 결과물로 실력을 증명합니다. ",
    quote2:
      "매체별 최적화를 통해, 상상 속의 비주얼을 오차 없는 정교한 결과물로 빚어냅니다.",
  },
];

// Our Process 데이터
const PROCESS_DATA = [
  {
    image: "/q.png", // 이미지 경로를 실제 경로로 변경해주세요
    title: "Q (Question : 본질적 문제 정의)",
    question: "진짜 문제가 무엇인가?",
    description:
      "겉으로 드러난 현상이 아닌, 그 이면에 숨겨진 문제의 근본 원인(Root Cause)을 찾아냅니다.",
  },
  {
    image: "/n.png", // 이미지 경로를 실제 경로로 변경해주세요
    title: "N (Navigation : 최적의 솔루션 설계)",
    question: "어떻게 해결할 것인가?",
    description:
      "로고의 'N'은 질문과 답을 잇는 길잡이입니다. 가장 적합한 전략과 도구를 설계합니다.",
  },
  {
    image: "/!.png", // 이미지 경로를 실제 경로로 변경해주세요
    title: "! (Bang : 임팩트 있는 결과)",
    question: "확실한 변화를 만드는가?",
    description:
      "설계된 솔루션을 빈틈없이 실행하여, 느낌표처럼 명쾌하고 실질적인 성과를 터뜨립니다.",
  },
];

// Our Services 데이터
const SERVICES_DATA = [
  {
    id: 1,
    title: "01. Brand Strategy",
    description1: "브랜드의 탄생부터 운영 전략까지,",
    description2: "흔들리지 않는 기준을 세웁니다.",
    items: [
      {
        title: "Brand Consulting (브랜드 전략)",
        description:
          "시장 환경 분석 및 포지셔닝, 브랜드 미션/비전/핵심가치 정의, 페르소나 및 톤앤매너 설정",
      },
      {
        title: "Verbal Identity (버벌 브랜딩)",
        description:
          "브랜드 네이밍, 태그라인(Tagline) 및 슬로건 개발, 브랜드 스토리텔링 및 메시지 전략",
      },
      {
        title: "F&B Consulting (F&B 특화 기획)",
        description:
          "시그니처 메뉴 기획 및 구성, 매장 운영 동선 및 홀 서비스 매뉴얼, 고객 응대(CS) 가이드라인",
      },
    ],
  },
  {
    id: 2,
    title: "02. Creative Design",
    description1: "비즈니스의 가치를 시각적으로 구체화하여",
    description2: "고객의 경험을 설계합니다.",
    items: [
      {
        title: "Visual Identity (시각 디자인)",
        description:
          "로고 디자인 (CI/BI) 및 가이드, 패키지/라벨/단상자 디자인, 굿즈 및 인쇄물 디자인",
      },
      {
        title: "Space Design (공간 디자인)",
        description:
          "인테리어 컨셉 및 3D 모델링, 공간 브랜딩 (내외부 사인, 그래픽), VMD 및 팝업스토어 연출",
      },
      {
        title: "Content Production (콘텐츠 제작)",
        description:
          "사진/영상 촬영 및 기획, SNS 콘텐츠 및 상세페이지 디자인, AI 활용 이미지/영상 생성",
      },
    ],
  },
  {
    id: 3,
    title: "03. Integrated Marketing",
    description1: "매체별 정교한 타겟팅과 블로그 등",
    description2: " 온드미디어 육성을 통해 매출을 견인합니다.",
    items: [
      {
        title: "Performance & Media (퍼포먼스 및 매체 운영)",
        description:
          "미디어 믹스 전략 수립 및 매체 핸들링, 주요 매체 광고 집행 (네이버, 구글, 메타, 카카오 등), 버티컬 매체 및 타겟 매체 발굴/운영, 광고 성과 추적 및 데이터 분석 리포팅",
      },
      {
        title: "Viral & Channel (바이럴 및 채널 관리)",
        description:
          "브랜드 블로그 기획 및 운영 대행, 인플루언서 및 체험단 마케팅 (블로그/인스타/유튜브), 바이럴 마케팅 (카페, 커뮤니티 침투), SNS 공식 채널 운영 관리",
      },
      {
        title: "Promotion & Campaign (프로모션 기획)",
        description:
          "온/오프라인 통합 캠페인 기획, 팝업스토어/이벤트 기획 및 운영, 유튜브 쇼츠 등 미디어 콘텐츠 광고",
      },
      {
        title: "Digital Development (웹 구축)",
        description:
          "브랜드 웹사이트 구축, 캠페인/광고용 랜딩페이지 개발, 반응형 웹 구현",
      },
    ],
  },
];

export default function Home() {
  const [openSections, setOpenSections] = useState<number[]>([]); // 모든 섹션 기본적으로 닫힘

  const toggleSection = (id: number) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((sectionId) => sectionId !== id)
        : [...prev, id]
    );
  };
  return (
    <main className="min-h-screen bg-[#211D1C] text-white m-0 p-0">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col text-center ">
        {/* Why Qn! 섹션 */}
        <div className="h-6 w-full" />
        <section className="h-100 pt-15 flex justify-center items-center">
          <div>
            <Image
              src="/logo.png"
              alt="Navbar"
              width={240}
              height={48}
              className="h-full object-contain"
            />
          </div>
        </section>
        <div>
          <button className="px-4 py-2 border-2 border-white w-30 h-12 border-solid text-xl">
            무료상담
          </button>
        </div>
        <div className="h-65" />
        <section className="mx-16">
          <div className="flex justify-center items-center h-[31px]">
            <hr className="border-white w-13" />
          </div>
          <p className="mb-4 text-3xl font-bold">Why Qn! ?</p>
          <h1 className="mb-6 text-[54px] font-bold leading-relaxed">
            &quot;머리 아픈 고민은 저희에게 맡겨주세요&quot;
          </h1>
          <p className="mb-4 text-[20px] leading-relaxed">
            <b>디자인, 마케팅, 브랜딩...</b> 큐앤뱅에게 이것들은 목적이 아니라
            문제 해결을 위한 &apos;도구&apos;일 뿐입니다.
            <br />
            실력 있는 의사가 환자에게 꼭 필요한 처방만 내리듯, 과잉 진단 없이
            문제 해결에 딱 필요한 도구만을 꺼내어 사용합니다.
          </p>
          <p className="text-[20px] leading-relaxed">
            고민의 시작부터 느낌표를 찍는 그 순간까지,
            <br />각 분야 전문가들이 하나의 팀으로 움직이며 비즈니스에 최적화된
            해답을 제시합니다.
          </p>
        </section>
        <div className="h-60" />
        {/* Team Q&Bang */}
        <section id="team" className="mx-16">
          <div className="flex justify-center items-center h-[31px]">
            <hr className="border-white w-13" />
          </div>
          <p className="mb-8 text-3xl font-bold">
            답을 찾는 사람들, Team Q&amp;Bang
          </p>

          <div className="grid grid-cols-4 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.name} className="flex flex-col">
                <div
                  className="relative w-full mb-4"
                  style={{ aspectRatio: "701/934" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold mb-1">
                  {member.name} | {member.role}
                </h3>
                <p className="text-[20px] leading-relaxed">
                  &quot;{member.quote1}&quot;
                  <br />
                  {member.quote2}
                </p>
              </article>
            ))}
          </div>
        </section>
        <div className="h-55" />

        {/* Our Process */}
        <section id="process" className="mx-16">
          <div className="flex justify-center items-center h-[31px]">
            <hr className="border-white w-13" />
          </div>
          <p className="mb-8 text-3xl font-bold">Our Process</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_DATA.map((process, index) => (
              <div
                key={index}
                className="border border-white p-6 lg:p-8 text-sm leading-relaxed flex flex-col items-start text-left"
              >
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={process.image}
                    alt="process"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[20px] font-bold mb-4">{process.title}</h3>
                <p className="text-[20px] leading-relaxed">
                  &quot;{process.question}&quot;
                </p>
                <p className="text-[20px] leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full h-55" />
        {/* Our Services */}
        <section id="services" className="mx-16">
          <div className="flex justify-center items-center h-[31px]">
            <hr className="border-white w-13" />
          </div>
          <h2 className="mb-8 text-3xl font-bold">Our Services</h2>
          <p className="mb-8 text-[56px] font-bold">
            비즈니스의 시작부터 성장의 순간까지,
            <br />
            당신의 모든 문제를 해결합니다.
          </p>

          <div className="space-y-0 text-sm leading-relaxed text-left">
            <hr className="border-white/20 mb-0" />
            {SERVICES_DATA.map((service) => {
              const isOpen = openSections.includes(service.id);
              return (
                <div key={service.id}>
                  <button
                    onClick={() => toggleSection(service.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <h3 className="text-3xl my-4">{service.title}</h3>
                    <span className="text-xl transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <hr className="border-white/20 mb-0" />
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-bold text-xl">
                        {service.description1}
                        <br />
                        {service.description2}
                      </p>
                      <div className="w-full h-12" />
                      <div className="space-y-4 pb-4">
                        {service.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            {itemIndex > 0 && (
                              <hr className="border-white/20 my-4" />
                            )}
                            <div className="font-bold mb-2 text-[18px]">
                              {item.title}
                            </div>
                            <p className="text-[18px]">{item.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="w-full h-12" />
                    </div>
                  </div>
                  <hr className="border-white/20 mt-0" />
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="w-full h-[250px]" />
        <section className="mt-auto pt-8 text-sm leading-relaxed">
          <div className="flex justify-center items-center h-[31px]">
            <hr className="border-white w-13" />
          </div>
          <h2 className="mb-8 text-3xl font-bold">Make it Bang!</h2>
          <p className="mb-8 text-[56px] font-bold">
            당신의 질문을 들려주세요.
          </p>
          <p className="mb-2 text-xl">
            비즈니스를 시작하는 설렘의 순간부터, 성장이 정체된 답답한 시기까지.
            <br />그 모든 순간 마주하게 되는 수많은 물음표들, 확신에 찬 느낌표로
            바꿔드립니다.
          </p>
          <div className="w-full h-6" />
          <p className="mb-4 text-xl">
            당신의 고민이 무엇이든 큐앤뱅은
            <br />
            가장 정확한 길을 안내할 준비가 되어 있습니다.
          </p>
          <div className="w-full h-6" />

          <div className="bg-white w-160 mx-auto py-8 px-6 mb-6">
            <p className="text-black font-bold text-4xl mb-6">
              READY TO QUESTION?
            </p>
            <a
              href="http://pf.kakao.com/_TxdDQn/chat"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#211D1C] border-2 border-white px-16 py-3 text-white font-bold text-xl hover:bg-white hover:text-[#211D1C] transition-colors"
            >
              Let&apos;s make it Bang!
            </a>
          </div>
        </section>

        <div className="w-full h-60" />
      </div>
    </main>
  );
}
