import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login certo leva aos produtos', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.abrir();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('senha errada mostra erro', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.abrir();
  await loginPage.login('standard_user', 'senhaerrada');
  await expect(loginPage.mensagemErro).toBeVisible();
  await expect(loginPage.mensagemErro).toContainText('do not match');
});