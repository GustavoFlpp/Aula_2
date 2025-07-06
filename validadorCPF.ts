function isValidCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  const calcDigit = (factor: number) =>
    cpf
      .slice(0, factor - 1)
      .split("")
      .reduce((sum, num, idx) => sum + Number(num) * (factor - idx), 0);

  const digit1 = ((calcDigit(10) * 10) % 11) % 10;
  const digit2 = ((calcDigit(11) * 10) % 11) % 10;

  return digit1 === Number(cpf[9]) && digit2 === Number(cpf[10]);
}

const input = process.argv[2];

if (!input) {
  console.log("Informe um CPF.");
  process.exit(1);
}

console.log(isValidCPF(input) ? "CPF válido" : "CPF inválido");
