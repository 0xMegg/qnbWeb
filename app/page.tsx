import WhySection from "./components/WhySection";
import TeamSection from "./components/TeamSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import PartnerSection from "./components/PartnerSection";
import MakeItBangSection from "./components/MakeItBangSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#211D1C] text-white m-0 p-0">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col text-center px-0 sm:px-4">
        <WhySection />
        <TeamSection />
        <ProcessSection />
        <ServicesSection />
        <PartnerSection />
        <MakeItBangSection />
      </div>
    </main>
  );
}
