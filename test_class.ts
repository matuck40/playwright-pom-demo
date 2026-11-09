class Usuario {
  nome: string;
  tentativas: number = 0;

  constructor(nome: string) {
    this.nome = nome;
  }

  errarSenha(): void {
    this.tentativas++;
  }

  bloqueado(): boolean {
    return this.tentativas >= 3;
  }
}

const lucca = new Usuario('lucca');

const voltas = Math.floor(Math.random() * 4) + 1;        // 1
console.log('vai errar', voltas, 'vezes');               // 2

for (let i = 0; i < voltas; i++) {                       // 3
  if (!lucca.bloqueado()) {                              // 4
    lucca.errarSenha();
  }
}

console.log('tentativas:', lucca.tentativas, '| bloqueado:', lucca.bloqueado());  // 5