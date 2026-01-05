import { SECTIONS } from "../data/sectionsData";

interface SectionHeaderProps {
  sectionKey: keyof typeof SECTIONS;
}

export default function SectionHeader({ sectionKey }: SectionHeaderProps) {
  const section = SECTIONS[sectionKey];

  return (
    <>
      <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
        {section.title}
      </h2>
      <div className="flex justify-center items-center mb-6 md:mb-8">
        <hr className="border-white w-13" />
      </div>
    </>
  );
}
