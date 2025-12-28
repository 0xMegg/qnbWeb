import SectionHeader from "./SectionHeader";

export default function MakeItBangSection() {
  return (
    <>
      <div className="w-full h-16 sm:h-32 md:h-[250px]" />
      <section className="mx-4 sm:mx-8 md:mx-16 mt-auto pt-6 sm:pt-8 text-sm leading-relaxed">
        <SectionHeader sectionKey="makeItBang" />
        <p className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold">
          당신의 질문을 들려주세요.
        </p>
        <p className="mb-2 text-base sm:text-lg md:text-xl">
          비즈니스를 시작하는 설렘의 순간부터, 성장이 정체된 답답한 시기까지.
          <br />그 모든 순간 마주하게 되는 수많은 물음표들, 확신에 찬 느낌표로
          바꿔드립니다.
        </p>
        <div className="w-full h-4 sm:h-6" />
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          당신의 고민이 무엇이든 큐앤뱅은
          <br />
          가장 정확한 길을 안내할 준비가 되어 있습니다.
        </p>
        <div className="w-full h-4 sm:h-6" />

        <div className="bg-white w-full sm:w-[90%] md:w-160 mx-auto py-6 sm:py-8 px-4 sm:px-6 mb-6">
          <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
            READY TO QUESTION?
          </p>
          <a
            href="http://pf.kakao.com/_TxdDQn/chat"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#211D1C] border-2 border-white px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg md:text-xl hover:bg-white hover:text-[#211D1C] transition-colors w-full sm:w-auto text-center"
          >
            Let&apos;s make it Bang!
          </a>
        </div>
      </section>

      <div className="w-full h-12 md:h-60" />
    </>
  );
}
