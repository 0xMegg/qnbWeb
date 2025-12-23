import { test, expect } from "@playwright/test";

const ORIGIN = process.env.ORIGIN_BASE_URL!;
const CLONE = process.env.CLONE_BASE_URL!;

// 비교 대상 경로 리스트(클론 외주에서는 이 리스트가 곧 작업 보드가 됩니다)
const PATHS = ["/", "/pricing", "/about"];

async function stabilize(page: any) {
  // 폰트 로딩 대기
  await page.waitForLoadState("networkidle");
  await page.evaluate(async () => {
    // @ts-ignore
    await document.fonts?.ready;
  });

  // 애니메이션/트랜지션 제거 (시각 회귀 흔들림 방지)
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
        caret-color: transparent !important;
      }
    `,
  });
}

for (const path of PATHS) {
  test(`visual diff: ${path}`, async ({ page }, testInfo) => {
    if (!ORIGIN || !CLONE)
      test.skip(true, "Missing ORIGIN_BASE_URL / CLONE_BASE_URL");

    // 1) 원본 캡처
    await page.goto(new URL(path, ORIGIN).toString(), {
      waitUntil: "domcontentloaded",
    });
    await stabilize(page);
    const originShot = await page.screenshot({ fullPage: true });

    // 2) 클론 캡처
    await page.goto(new URL(path, CLONE).toString(), {
      waitUntil: "domcontentloaded",
    });
    await stabilize(page);
    const cloneShot = await page.screenshot({ fullPage: true });

    // 3) “같은 test에서 두 장”을 비교하려면: cloneShot을 baseline으로 쓰는 방식이 아니라,
    //    originShot을 파일로 저장하고 비교하거나, 아래처럼 snapshot을 2개로 관리합니다.
    //    가장 빠른 운영 방식: origin을 'expected'로 저장하고, clone을 스냅샷 비교 대상으로 둡니다.

    // origin을 스냅샷(expected)으로 저장
    await expect(originShot).toMatchSnapshot([
      `origin${path.replaceAll("/", "_")}.png`,
    ]);

    // clone이 origin 스냅샷과 동일한지 확인
    await expect(cloneShot).toMatchSnapshot([
      `origin${path.replaceAll("/", "_")}.png`,
    ]);
  });
}
