export interface ServiceItem {
  title: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description1: string;
  description2: string;
  items: ServiceItem[];
}

export const SERVICES_DATA: Service[] = [
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
