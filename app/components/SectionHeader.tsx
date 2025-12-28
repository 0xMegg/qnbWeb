import { SECTIONS } from "../data/sectionsData";

interface SectionHeaderProps {
  sectionKey: keyof typeof SECTIONS;
}

export default function SectionHeader({ sectionKey }: SectionHeaderProps) {
  const section = SECTIONS[sectionKey];

  return (
    <>
      <div className="flex justify-center items-center h-[31px]">
        <hr className="border-white w-13" />
      </div>
      <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold">
        {section.title}
      </h2>
    </>
  );
}
