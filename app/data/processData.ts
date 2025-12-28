export interface ProcessItem {
  image: string;
  title: string;
  question: string;
  description: string;
}

export const PROCESS_DATA: ProcessItem[] = [
  {
    image: "/q.png",
    title: "Q (Question : 본질적 문제 정의)",
    question: "진짜 문제가 무엇인가?",
    description:
      "겉으로 드러난 현상이 아닌, 그 이면에 숨겨진 문제의 근본 원인(Root Cause)을 찾아냅니다.",
  },
  {
    image: "/n.png",
    title: "N (Navigation : 최적의 솔루션 설계)",
    question: "어떻게 해결할 것인가?",
    description:
      "로고의 'N'은 질문과 답을 잇는 길잡이입니다. 가장 적합한 전략과 도구를 설계합니다.",
  },
  {
    image: "/!.png",
    title: "! (Bang : 임팩트 있는 결과)",
    question: "확실한 변화를 만드는가?",
    description:
      "설계된 솔루션을 빈틈없이 실행하여, 느낌표처럼 명쾌하고 실질적인 성과를 터뜨립니다.",
  },
];
