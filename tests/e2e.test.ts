import { test, expect } from "@playwright/test";

test("doesn't show before scrolled down", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");

  const hidden = await page.locator('[aria-label="Scroll to top"]').isHidden();
  expect(hidden).toBeTruthy();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const n = await page.locator('[aria-label="Scroll to top"]').isHidden();

  //  expect(n).toBeFalsy();
});

test("shows before scrolled if top < 0", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/onmount");
  const button = await page.locator('[aria-label="Scroll to top"]').isVisible();
  expect(button).toBeTruthy();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test("happy path", async ({ page }) => {
  // Go to http://127.0.0.1:5173/
  await page.goto("http://127.0.0.1:5173/");

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  // Click [aria-label="Scroll to top"]
  await page.locator('[aria-label="Scroll to top"]').click();
  await new Promise((r) => setTimeout(r, 1000));
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toEqual(0);
});

test.skip("fixed position", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  // Click [aria-label="Scroll to top"]
  page.click("e", { position: { x: -40, y: -40 } });
  await new Promise((r) => setTimeout(r, 1000));
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toEqual(0);
});

test("style object override", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/style");

  const element = await page.waitForSelector('[aria-label="Scroll to top"]');
  const color = await element.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });

  expect(color).toBe("rgb(0, 0, 255)");
});

test("classname override", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/classname");

  const element = await page.waitForSelector('[aria-label="Scroll to top"]');
  const color = await element.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });

  expect(color).toBe("rgb(255, 0, 0)");
});
