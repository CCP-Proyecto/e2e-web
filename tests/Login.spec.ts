import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.getByRole('textbox', { name: 'Email' }).fill('camiloaromero23@gmail.com');
    await page.getByRole('textbox', { name: 'Contraseña' }).click();
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('Tempo123');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(await page.getByRole('heading', { name: 'Bienvenido al módulo de' })).toBeTruthy();
  });
});