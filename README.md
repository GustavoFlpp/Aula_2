# Validador de CPF — Aula 2: Pensando em Lógica

Este é um script simples em TypeScript desenvolvido como exercício da **Aula 2** do curso, com foco em **lógica de programação pura** e **resolução de problemas no terminal**.

---

## 📌 Objetivo

Criar um script que valide se um número de CPF informado pelo usuário é **válido ou inválido**, seguindo a regra dos dígitos verificadores.

---

## 🧠 Regras do exercício

- O script deve rodar no terminal via Node.js.
- Deve receber o CPF como argumento.
- Implementar a lógica de cálculo dos dígitos verificadores.
- Exibir o resultado no terminal.
- Máximo de 30 linhas de código.
- Código com boa organização e clareza.

---

## 🚀 Como usar

### 1. Instale as dependências:

```bash
npm install
```

### 2. Execute o script com um CPF:

```bash
npm start -- 52998224725
```

> O `--` é necessário para passar argumentos ao script.

---

## 🧪 Exemplos de uso

```bash
npm start -- 52998224725
# → CPF válido

npm start -- 12345678909
# → CPF inválido
```

---

## 🛠️ Tecnologias usadas

- TypeScript
- Node.js

---

## 📁 Estrutura do projeto

```
.
├── dist/               # Arquivos compilados
├── validadorCPF.ts     # Script fonte
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## ✍️ Autor

Gustavo Felippe — desenvolvido como parte da disciplina.
