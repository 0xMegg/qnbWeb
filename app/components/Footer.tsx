import { SECTIONS } from "../data/sectionsData";

const SECTION_ORDER = [
  "why",
  "team",
  "process",
  "services",
  "partners",
  "makeItBang",
] as const;

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/60 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-zinc-300">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-zinc-100">Q&amp;Bang</p>
            <p className="max-w-md leading-relaxed text-zinc-200">
              비즈니스 곳곳에 흩어져 있는 물음표들을
              <br />
              전략과 실행으로 연결해 확신의 느낌표로 바꾸는 파트너입니다.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wide">
              Contact
            </p>
            <ul className="space-y-1">
              <li>
                <a
                  href="http://pf.kakao.com/_TxdDQn/chat"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-300 hover:text-white underline underline-offset-4"
                >
                  카카오 채널로 상담하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-800/80 pt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[11px] text-zinc-500">
          <span>© {new Date().getFullYear()} QNB. All rights reserved.</span>
          <span className="text-zinc-500">
            마지막까지 같이 고민하는 파트너가 필요하다면, 언제든 편하게
            질문해 주세요.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
