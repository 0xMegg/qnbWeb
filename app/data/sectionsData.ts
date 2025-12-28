export interface SectionMetadata {
  id: string;
  title: string;
}

export const SECTIONS: Record<string, SectionMetadata> = {
  why: {
    id: "why",
    title: "Why Qn! ?",
  },
  team: {
    id: "team",
    title: "답을 찾는 사람들, Team Q&Bang",
  },
  process: {
    id: "process",
    title: "Our Process",
  },
  services: {
    id: "services",
    title: "Our Services",
  },
  partners: {
    id: "partners",
    title: "Our Partners",
  },
  makeItBang: {
    id: "make-it-bang",
    title: "Make it Bang!",
  },
};

