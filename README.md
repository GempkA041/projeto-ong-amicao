# 🐶 Projeto ONG AmiCão - Trabalho de Faculdade

Site institucional fictício de 3 páginas para a "ONG AmiCão", desenvolvido como projeto prático para a disciplina de Desenvolvimento Front-End para Web. O projeto abrange a criação da estrutura HTML semântica, estilização completa com CSS3 (incluindo responsividade e modo escuro) e implementação de interatividade com JavaScript avançado (validação de formulário, SPA básica e templates).

**Aluno:** Nicollas Gempka Carvalho

**Link do Projeto (GitHub Pages):** [https://gempka041.github.io/projeto-ong-amicao](https://gempka041.github.io/projeto-ong-amicao)

---

## ✨ Funcionalidades Implementadas

### 1. Estrutura e Conteúdo (HTML5)
* **Páginas:** Início (`index.html`), Projetos (`projetos.html`), Cadastro (`cadastro.html`).
* **Semântica:** Uso correto de tags HTML5 para estrutura e acessibilidade.
* **Formulário:** Formulário de cadastro completo com tipos de input modernos e validação nativa básica.
* **Validação W3C:** Código HTML validado.
* **Favicon:** Ícone personalizado na aba do navegador.

### 2. Estilização e Responsividade (CSS3)
* **Sistema de Design:** Baseado em Variáveis CSS (`:root`) para fácil manutenção de cores, fontes e espaçamentos.
* **Layout Responsivo:** Abordagem "Mobile First" com 5 breakpoints (`xs`, `sm`, `md`, `lg`, `xl`) adaptando o layout para diferentes tamanhos de tela.
* **Grid e Flexbox:** Utilização combinada para estrutura geral, alinhamento de componentes e criação de grids customizados (ex: cards de projeto, layout da página inicial).
* **Navegação:** Menu principal interativo com submenu dropdown no desktop e menu hambúrguer funcional no mobile.
* **Componentes:** Estilos consistentes para Cards, Botões (com estados `:hover`, `:focus`, `:active`, `:disabled`), Formulários, Badges/Tags e Alertas de feedback.
* **Acessibilidade Visual:** Cores com contraste mínimo de 4.5:1 (WCAG AA) e implementação de **Modo Escuro (Dark Mode)** com toggle (botão 🌙/☀️).

### 3. Interatividade (JavaScript Avançado)
* **Validação de Formulário:** Validação robusta no lado do cliente (campo a campo no `blur` e validação completa no `submit`) com feedback visual claro para o usuário.
* **SPA (Single Page Application) Básica:** Sistema de navegação que carrega o conteúdo principal das páginas dinamicamente (usando `fetch` e `innerHTML`) sem recarregar a página, incluindo rolagem suave para âncoras (`#`).
* **Templates JavaScript:** Geração dinâmica do HTML dos cards de projeto usando Template Literals a partir de um array de dados.
* **Código Modular:** JavaScript organizado em arquivos por funcionalidade (`validacao-form.js`, `spa-navigation.js`, `project-cards.js`, `theme-toggle.js`).
* **Persistência:** Preferência de tema (claro/escuro) salva no `localStorage`.

## ♿ Acessibilidade (WCAG 2.1 Nível AA)
* **Navegação por Teclado:** Todos os elementos interativos são acessíveis e focáveis via teclado, com indicadores de foco visíveis.
* **Contraste:** As combinações de cores atendem aos requisitos mínimos de contraste.
* **Semântica:** HTML estruturado semanticamente para auxiliar leitores de tela.
* **Modo Escuro:** Oferece uma alternativa visual para usuários que preferem ou necessitam.

## ⚡ Otimização para Produção
* **Minificação:** Os arquivos CSS e JavaScript foram minificados para reduzir o tempo de carregamento.
* **Compressão de Imagens:** As imagens foram otimizadas para diminuir o tamanho dos arquivos (ex: usando TinyPNG).

## 📂 Estrutura Final do Projeto
/ ├── index.html ├── projetos.html ├── cadastro.html ├── css/ │ └── style.css (Versão minificada) ├── js/ │ ├── validacao-form.js (Versão minificada) │ ├── spa-navigation.js (Versão minificada) │ ├── project-cards.js (Versão minificada) │ └── theme-toggle.js (Versão minificada) ├── img/ │ └── (Imagens otimizadas) ├── favicon.png └── README.md

## 🚀 Como Executar/Visualizar

1.  **GitHub Pages (Recomendado):** Acesse o link: [https://gempka041.github.io/projeto-ong-amicao](https://gempka041.github.io/projeto-ong-amicao)
2.  **Localmente (com Servidor):** Para que a funcionalidade SPA (`fetch`) funcione corretamente, abra o `index.html` através de um servidor local (ex: usando a extensão "Live Server" no VS Code). Abrir o `file:///` diretamente no navegador bloqueará o carregamento dinâmico de conteúdo devido à política CORS.

---

**Observação:** Este `README.md` detalha as funcionalidades implementadas conforme os requisitos de cada etapa do projeto.
