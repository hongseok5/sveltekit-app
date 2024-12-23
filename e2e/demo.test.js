import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('navigate to /quiz on play button click', async ({ page }) => {
	// 페이지 로드
	await page.goto('/'); // 홈 경로로 이동
  
	// 버튼을 `id`로 선택하고 클릭
	await page.locator('#play-button').click();
  
	// `/quiz` 경로로 이동했는지 확인
	await expect(page).toHaveURL('/quiz');
  });