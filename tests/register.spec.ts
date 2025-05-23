import { test, expect } from '@playwright/test';
import { createUser } from './utils';

test.describe('Register User', () => {
  test('Create new user', async ({ page }) => {
    await createUser(page);
    await expect(await page.getByText('Registro exitoso')).toBeTruthy();
    await expect(page.url()).toContain('sign-up');
  })
});