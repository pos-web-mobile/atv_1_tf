# Context Flow — Apresentação de TCC

> **Disciplina:** Tecnologias Front-End  
> **Curso:** Pós-Graduação em Desenvolvimento Web e Mobile  
> **Instituição:** IFSULDESTEMG — Campus Rio Pomba  
> **Estudante:** Gabriel Barros Anjos  
> **E-mail:** gabrielbarrosba@gmail.com  

---

## 📺 Vídeo de Apresentação

[![Assistir no YouTube](https://img.shields.io/badge/YouTube-Assistir%20Apresentação-red?style=for-the-badge&logo=youtube)](https://youtu.be/8CETs6ofgWI)

---

## 🔗 Página Publicada

[Link da Página](https://pos-web-mobile.github.io/atv_1_tf/) 

---

## 📄 Sobre o Projeto

Esta é a **página de apresentação do TCC** intitulado:

> *"O papel da Engenharia de Software no uso de Inteligência Artificial Generativa para o Desenvolvimento de Sistemas: a Metodologia Context Flow"*

A página foi desenvolvida como atividade avaliativa da disciplina de **Tecnologias Front-End**, utilizando **HTML**, **Bootstrap 5** e **TypeScript**, seguindo os requisitos da tarefa.

---

## 🎯 Funcionalidades TypeScript

O arquivo `src/index.ts` implementa três funcionalidades com tipagem explícita:

| # | Funcionalidade | Descrição |
|---|---------------|-----------|
| 1 | **Exibição da Data Atual** | Formata e exibe a data de hoje em português do Brasil |
| 2 | **Contador de Dias Restantes** | Calcula matematicamente os dias até o prazo de entrega (30/11/2026) |
| 3 | **Alternador de Tema** | Alterna entre o modo claro e escuro usando o atributo `data-bs-theme` do Bootstrap 5 |

---

## 🏗️ Estrutura do Projeto

```
atividade_1_gabrielbarros/
├── index.html          # Página principal (Bootstrap 5 + Semântica HTML)
├── src/
│   └── index.ts        # Código-fonte TypeScript
├── dist/
│   └── js/
│       └── index.js    # JavaScript compilado (gerado pelo tsc)
├── assets/
│   └── img/
│       └── context_flow_banner.png  # Imagem ilustrativa do projeto
├── tsconfig.json       # Configuração do compilador TypeScript
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este arquivo
```

---

## ⚙️ Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado

### Passos

**1. Instale as dependências:**
```bash
npm install
```

**2. Compile o TypeScript:**
```bash
npm run build
```

**3. Inicie o servidor local e abra no navegador:**
```bash
npx serve
```

> O comando `npx serve` inicia um servidor local. Acesse o endereço indicado no terminal no navegador.

> ⚠️ **Atenção:** Abrir o `index.html` diretamente pelo sistema de arquivos (`file://`) pode bloquear o carregamento do módulo TypeScript compilado. Use sempre o servidor local.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica da página
- **Bootstrap 5.3** — Layout responsivo (Grid, Navbar, Cards, Utilitários)
- **Bootstrap Icons 1.11** — Ícones vetoriais
- **TypeScript** — Lógica interativa com tipagem estática

---

## 📋 Requisitos Atendidos

- [x] Navbar com pelo menos três seções
- [x] Seção de apresentação com título, subtítulo, descrição e imagem
- [x] Grid com 3 Cards (Funcionalidades, Tecnologias e Benefícios)
- [x] Rodapé com nome, semestre, curso, e-mail e redes sociais
- [x] Funcionalidade em TypeScript (data formatada + contador de dias + tema claro/escuro)
