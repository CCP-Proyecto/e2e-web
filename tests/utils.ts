export const createUser = async (page) => {
    await page.goto('http://localhost:3000/login');
    await page.getByRole('banner').getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('link', { name: 'Regístrate' }).click();
    await page.getByRole('textbox', { name: 'Nombre' }).click();
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Camilo Romero');
    await page.getByRole('textbox', { name: 'Nombre' }).press('Tab');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('camiloaromero23@gmail.com');
    await page.getByRole('textbox', { name: 'Contraseña' }).click();
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('Tempo123');
    await page.locator('div').filter({ hasText: 'Empezar ahoraRegistrarte es' }).first().click();
    await page.getByRole('combobox', { name: 'Tipo de ID' }).click();
    await page.getByLabel('Cédula de ciudadanía').getByText('Cédula de ciudadanía').click();
    await page.getByRole('textbox', { name: 'Número de identificación' }).click();
    await page.getByRole('textbox', { name: 'Número de identificación' }).fill('1020844233');
    await page.getByRole('textbox', { name: 'Teléfono' }).click();
    await page.getByRole('textbox', { name: 'Teléfono' }).fill('1234567890');
    await page.locator('div').filter({ hasText: 'Empezar ahoraRegistrarte es' }).first().click();
    await page.getByRole('button', { name: 'Regístrate' }).click();
}
