import { test, expect } from '@playwright/test';


const screens = {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 834, height: 817 },
    mobile: { width: 320, height: 540 },
    desktopCart: { width: 1920, height: 1152 },
}

const screenshotOptions = {
    fullPage: true,
    maxDiffPixelRatio: 0.5,
    maxDiffPixels: 100,
    // animations: 'disabled',
    // threshold: 0.1,
};

async function runCondition(page, size) {
    await page.goto('/');
    await page.setViewportSize(size);
    await page.locator('footer').scrollIntoViewIfNeeded({ timeout: 1000 });
    await page.locator('body').scrollIntoViewIfNeeded({ timeout: 1000 });
}

async function runConditionCart(page, size) {
    await page.goto('/', { waitUntil: 'load' });
    await page.setViewportSize(size);
    await page.locator('data-test-id=add-to-cart-button').nth(0).click();
    await page.locator('data-test-id=add-to-cart-button').nth(1).click();
    await page.locator('data-test-id=add-to-cart-button').nth(2).click();
    await page.locator('data-test-id=cart-button').click()
}

test('desktop-cart-test', async ({ page }) => {
    await runConditionCart(page, screens.desktopCart);
    await expect(page).toHaveScreenshot('desktop-cart.png', {...screenshotOptions, fullPage: false});
});

test('desktop-test', async ({ page }) => {
    await runCondition(page, screens.desktop);
    await expect(page).toHaveScreenshot('desktop.png', screenshotOptions);
});

test('tablet-test', async ({ page }) => {
    await runCondition(page, screens.tablet);
    await expect(page).toHaveScreenshot('tablet.png', screenshotOptions);
});

test('mobile-test', async ({ page }) => {
    await runCondition(page, screens.mobile);
    await expect(page).toHaveScreenshot('mobile.png', screenshotOptions);
});
