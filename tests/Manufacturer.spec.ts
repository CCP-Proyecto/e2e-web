import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('camiloaromero23@gmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('Tempo123');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
});

test.describe('Create Manufacturer', async () => {
    test('test', async ({ page }) => {
        await page.getByText('CCPCOMPRAS FÁCILES, ENVÍOS RÁPIDOSEspañolBienvenido¡Bienvenido al módulo de').press('ControlOrMeta+r');
        await page.getByRole('link', { name: 'CUENTAS/FABRICANTES Gestione' }).click();
        await page.getByRole('textbox', { name: 'Nombre cuenta' }).click();
        await page.getByRole('textbox', { name: 'Nombre cuenta' }).fill('Fabricante1');
        await page.getByRole('combobox', { name: 'Tipo de ID' }).click();
        await page.getByRole('option', { name: 'NIT' }).click();
        await page.getByRole('textbox', { name: 'Número de ID' }).click();
        await page.getByRole('textbox', { name: 'Número de ID' }).fill('123456');
        await page.getByRole('textbox', { name: 'Teléfono' }).click();
        await page.getByRole('textbox', { name: 'Teléfono' }).fill('123456789');
        await page.getByRole('button', { name: 'Registrar' }).click();
        await expect(await page.getByText('El número de teléfono es demasiado corto').innerText()).toBeTruthy();

        await page.getByRole('textbox', { name: 'Dirección' }).click();
        await page.getByRole('textbox', { name: 'Dirección' }).fill('CL 123 567');
        await page.getByRole('textbox', { name: 'Correo electrónico' }).click();
        await page.getByRole('textbox', { name: 'Correo electrónico' }).fill('proveedor123@gmail.com');
        await page.locator('html').click();
        await page.locator('html').click();
        await page.getByRole('button', { name: 'Registrar' }).click();
        await page.getByRole('button', { name: 'Registrar' }).click();
        await page.getByRole('textbox', { name: 'Teléfono' }).fill('12345678910');

        await page.getByRole('button', { name: 'Registrar' }).click();
        await page.getByRole('listitem').click();
        
        await expect(page.url()).toBe('http://localhost:3000/manufacturers');

      });
});