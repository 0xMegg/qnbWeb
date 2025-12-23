export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        {/* Why Qn! 섹션 */}
        <section className="mb-16">
          <p className="mb-4 text-xs uppercase">Why Qn!</p>
          <h1 className="mb-6 text-2xl font-semibold leading-relaxed sm:text-3xl">
            머리 아픈 고민은
            <br />
            저희에게 맡겨주세요
          </h1>
          <p className="mb-4 text-sm leading-relaxed">
            디자인, 마케팅, 브랜딩... 큐앤뱅에게 이것들은 목적이 아니라 문제
            해결을 위한 &apos;도구&apos;일 뿐입니다.
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            실력 있는 의사가 환자에게 꼭 필요한 처방만 내리듯, 과잉 진단 없이
            문제 해결에 딱 필요한 도구만을 꺼내어 사용합니다.
          </p>
          <p className="text-sm leading-relaxed">
            고민의 시작부터 느낌표를 찍는 그 순간까지, 각 분야 전문가들이 하나의
            팀으로 움직이며 비즈니스에 최적화된 해답을 제시합니다.
          </p>
        </section>

        {/* Team Q&Bang */}
        <section className="mb-16">
          <h2 className="mb-2 text-xs uppercase">Team Q&amp;Bang</h2>
          <p className="mb-8 text-base font-medium">
            답을 찾는 사람들, Team Q&amp;Bang
          </p>

          <div>
            {[
              {
                name: "신종호",
                role: "Brand Director",
                quote:
                  "방향을 잃은 브랜드에게 나침반이 됩니다. 총괄 디렉터로서 현상 이면의 본질을 꿰뚫어 보고, 흔들리지 않는 전략을 설계합니다.",
              },
              {
                name: "김지영",
                role: "Creative Director",
                quote:
                  "보이지 않는 가치를 보이는 경험으로 만듭니다. 전략을 가장 매력적인 시각 언어로 통역합니다. 소비자 마음을 움직이는 비주얼 솔루션을 총괄합니다.",
              },
              {
                name: "배상원",
                role: "Content PD",
                quote:
                  "터지는 콘텐츠의 문법을 만듭니다. 현직 숏폼 크리에이터로서 소비자가 반응할 수밖에 없는 트렌디한 영상 콘텐츠를 제작합니다.",
              },
              {
                name: "송차은",
                role: "Growth Marketer",
                quote:
                  "직감이 아닌 데이터로 결과를 증명합니다. 냉철한 데이터 분석을 통해 우리가 만든 브랜드와 콘텐츠가 실제 매출로 이어지도록 만듭니다.",
              },
              {
                name: "남은비",
                role: "Lead Designer",
                quote:
                  "감도높은 미학으로 브랜드의 결을 빚어냅니다. 정립된 시각 언어를 감각적인 비주얼로 구현하여 브랜드만의 선명한 인상을 구축합니다.",
              },
              {
                name: "목현수",
                role: "Space Director",
                quote:
                  "고유한 서사가 살아 숨 쉬는 공간을 만듭니다. 평면적인 아이디어를 입체적 경험으로. 고객을 만나는 모든 공간의 경험을 설계합니다.",
              },
              {
                name: "최재욱",
                role: "Output Specialist",
                quote:
                  "선명한 결과물로 실력을 증명합니다. 매체별 최적화를 통해, 상상 속의 비주얼을 오차 없는 정교한 결과물로 빚어냅니다.",
              },
            ].map((member) => (
              <article
                key={member.name}
                className="mb-8 text-sm leading-relaxed"
              >
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-xs mb-1">{member.role}</p>
                <p>{member.quote}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-16">
          <h2 className="mb-2 text-xs uppercase">Our Process</h2>
          <div className="space-y-8 text-sm leading-relaxed">
            <div>
              <div className="mb-1 text-sm font-semibold">
                Q (Question : 본질적 문제 정의)
              </div>
              <p className="mb-2">&quot;진짜 문제가 무엇인가?&quot;</p>
              <p>
                겉으로 드러난 현상이 아닌, 그 이면에 숨겨진 문제의 근본
                원인(Root Cause)을 찾아냅니다.
              </p>
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold">
                N (Navigation : 최적의 솔루션 설계)
              </div>
              <p className="mb-2">&quot;어떻게 해결할 것인가?&quot;</p>
              <p>
                로고의 &apos;N&apos;은 질문과 답을 잇는 길잡이입니다. 가장
                적합한 전략과 도구를 설계합니다.
              </p>
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold">
                ! (Bang : 임팩트 있는 결과)
              </div>
              <p className="mb-2">&quot;확실한 변화를 만드는가?&quot;</p>
              <p>
                설계된 솔루션을 빈틈없이 실행하여, 느낌표처럼 명쾌하고 실질적인
                성과를 터뜨립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-16">
          <h2 className="mb-2 text-xs uppercase">Our Services</h2>
          <p className="mb-8 text-sm leading-relaxed">
            비즈니스의 시작부터 성장의 순간까지, 당신의 모든 문제를 해결합니다.
          </p>

          <div className="space-y-10 text-sm leading-relaxed">
            <div>
              <h3 className="mb-2 text-base font-semibold">
                01. Brand Strategy
              </h3>
              <p className="mb-4">
                브랜드의 탄생부터 운영 전략까지, 흔들리지 않는 기준을 세웁니다.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">
                    Brand Consulting (브랜드 전략)
                  </div>
                  <p>
                    시장 환경 분석 및 포지셔닝, 브랜드 미션/비전/핵심가치 정의,
                    페르소나 및 톤앤매너 설정
                  </p>
                </div>
                <div>
                  <div className="font-medium">
                    Verbal Identity (버벌 브랜딩)
                  </div>
                  <p>
                    브랜드 네이밍, 태그라인(Tagline) 및 슬로건 개발, 브랜드
                    스토리텔링 및 메시지 전략
                  </p>
                </div>
                <div>
                  <div className="font-medium">
                    F&amp;B Consulting (F&amp;B 특화 기획)
                  </div>
                  <p>
                    시그니처 메뉴 기획 및 구성, 매장 운영 동선 및 홀 서비스
                    매뉴얼, 고객 응대(CS) 가이드라인
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold">
                02. Creative Design
              </h3>
              <p className="mb-4">
                비즈니스의 가치를 시각적으로 구체화하여 고객의 경험을
                설계합니다.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">
                    Visual Identity (시각 디자인)
                  </div>
                  <p>
                    로고 디자인 (CI/BI) 및 가이드, 패키지/라벨/단상자 디자인,
                    굿즈 및 인쇄물 디자인
                  </p>
                </div>
                <div>
                  <div className="font-medium">Space Design (공간 디자인)</div>
                  <p>
                    인테리어 컨셉 및 3D 모델링, 공간 브랜딩 (내외부 사인,
                    그래픽), VMD 및 팝업스토어 연출
                  </p>
                </div>
                <div>
                  <div className="font-medium">
                    Content Production (콘텐츠 제작)
                  </div>
                  <p>
                    사진/영상 촬영 및 기획, SNS 콘텐츠 및 상세페이지 디자인, AI
                    활용 이미지/영상 생성
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold">
                03. Integrated Marketing
              </h3>
              <p className="mb-4">
                매체별 정교한 타겟팅과 온드미디어 육성을 통해 매출을 견인합니다.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="font-medium">
                    Performance &amp; Media (퍼포먼스 및 매체 운영)
                  </div>
                  <p>
                    미디어 믹스 전략 수립 및 매체 핸들링, 주요 매체 광고 집행
                    (네이버, 구글, 메타, 카카오 등), 버티컬 매체 및 타겟 매체
                    발굴/운영, 광고 성과 추적 및 데이터 분석 리포팅
                  </p>
                </div>
                <div>
                  <div className="font-medium">
                    Viral &amp; Channel (바이럴 및 채널 관리)
                  </div>
                  <p>
                    브랜드 블로그 기획 및 운영 대행, 인플루언서 및 체험단 마케팅
                    (블로그/인스타/유튜브), 바이럴 마케팅 (카페, 커뮤니티 침투),
                    SNS 공식 채널 운영 관리
                  </p>
                </div>
                <div>
                  <div className="font-medium">
                    Promotion &amp; Campaign (프로모션 기획)
                  </div>
                  <p>
                    온/오프라인 통합 캠페인 기획, 팝업스토어/이벤트 기획 및
                    운영, 유튜브 쇼츠 등 미디어 콘텐츠 광고
                  </p>
                </div>
                <div>
                  <div className="font-medium">
                    Digital Development (웹 구축)
                  </div>
                  <p>
                    브랜드 웹사이트 구축, 캠페인/광고용 랜딩페이지 개발, 반응형
                    웹 구현
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-auto pt-8 text-sm leading-relaxed">
          <h2 className="mb-2 text-base font-semibold">Make it Bang!</h2>
          <p className="mb-2">당신의 질문을 들려주세요.</p>
          <p className="mb-2">
            비즈니스를 시작하는 설렘의 순간부터, 성장이 정체된 답답한 시기까지.
            그 모든 순간 마주하게 되는 수많은 물음표들, 확신에 찬 느낌표로
            바꿔드립니다.
          </p>
          <p className="mb-4">
            당신의 고민이 무엇이든 큐앤뱅은 가장 정확한 길을 안내할 준비가 되어
            있습니다.
          </p>
          <p className="mb-6 font-medium">READY TO QUESTION?</p>
          <a
            href="http://pf.kakao.com/_TxdDQn/chat"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium underline"
          >
            Let&apos;s make it Bang!
          </a>
        </section>
      </div>
    </main>
  );
}
