const esperar = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function fazerLogin(usuario: string): Promise<string> {
    console.log('digitando usuário...');
    await esperar(500);
    console.log('clicando em entrar...');
    await esperar(500);
    return ('logado: ' + usuario);
}

async function main() {
    const sinc = true;
    let result:string
    if (sinc) {
        const result_1 =  fazerLogin('lucca');
        const result_2 = fazerLogin('daniel');
        const r1 = await result_1;
        const r2 = await result_2;
        result = (r1 + r2);
    } else {
         result = await fazerLogin('lucca');
    
    }
   console.log(result);
}

main();