/**
 * Tests for the theme switcher toggle in 
 */
import { expect, test } from '@playwright/test';

test('make sure theme actually changes when toggle is clicked', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});

test('make sure theme stays toggled on refresh', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to SvelteKit');
});