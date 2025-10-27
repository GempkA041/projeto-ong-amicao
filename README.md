# 🐶 Projeto ONG AmiCão - Trabalho de Faculdade

Site institucional fictício de 3 páginas para a "ONG AmiCão", desenvolvido como projeto prático para a disciplina de Desenvolvimento Front-End para Web. O projeto abrange a criação da estrutura HTML, estilização com CSS3 e implementação de interatividade com JavaScript avançado.

**Aluno:** Nicollas Gempka Carvalho

---

## 🚀 Etapas do Projeto

Este projeto foi dividido em três entregas principais:

### 1. Estrutura HTML5 Semântica
* Criação das 3 páginas obrigatórias (`index.html`, `projetos.html`, `cadastro.html`).
* Utilização de HTML5 semântico (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, etc.).
* Implementação de formulário complexo com tipos de input HTML5 e validação nativa.
* Código validado pelo W3C Validator.

### 2. Estilização com CSS3
* **Sistema de Design:** Variáveis CSS (`:root`) para cores, fontes e espaçamentos.
* **Layout Responsivo:** Abordagem "Mobile First", CSS Grid e Flexbox.
* **Breakpoints:** 5 pontos de quebra (`xs`, `sm`, `md`, `lg`, `xl`).
* **Navegação Sofisticada:** Menu principal com submenu dropdown (desktop) e menu hambúrguer interativo (mobile).
* **Componentes:** Estilização de Cards, Botões (com estados `:hover`, `:focus`, `:active`, `:disabled`), Formulários, Badges e Alertas.
* **Favicon:** Adicionado ícone personalizado para a aba do navegador.

### 3. Interatividade com JavaScript Avançado
* **Validação de Formulário:** Implementação de validação de consistência dos dados no formulário de cadastro (campo a campo no `blur` e validação final no `submit`), com feedback visual para o usuário.
* **Manipulação do DOM:**
    * **SPA (Single Page Application) Básica:** Sistema que intercepta a navegação e carrega o conteúdo principal das páginas dinamicamente usando `fetch` e `innerHTML`, sem recarregar a página inteira (funciona quando hospedado em servidor HTTP/HTTPS, como GitHub Pages).
    * **Templates JavaScript:** Geração dinâmica do HTML dos cards de projeto usando Template Literals e dados de um array de objetos.
* **Código Modular:** Organização do código JavaScript em arquivos separados por funcionalidade (`validacao-form.js`, `spa-navigation.js`, `project-cards.js`).

## 📂 Estrutura Final do Projeto

/ ├── index.html ├── projetos.html ├── cadastro.html ├── css/ │ └── style.css ├── js/ │ ├── validacao-form.js │ ├── spa-navigation.js │ └── project-cards.js ├── img/ │ └── (imagens do projeto) ├── favicon.png └── README.md
