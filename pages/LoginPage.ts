import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // os elementos da tela, guardados uma vez só
  readonly campoUsuario: Locator;
  readonly campoSenha: Locator;
  readonly botaoLogin: Locator;
  readonly mensagemErro: Locator;

  constructor(private page: Page) {
    this.campoUsuario = page.getByPlaceholder('Username');
    this.campoSenha   = page.getByPlaceholder('Password');
    this.botaoLogin   = page.getByRole('button', { name: 'Login' });
    this.mensagemErro = page.locator('[data-test="error"]');
  }

  async abrir() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(usuario: string, senha: string) {
    await this.campoUsuario.fill(usuario);
    await this.campoSenha.fill(senha);
    await this.botaoLogin.click();
  }
}