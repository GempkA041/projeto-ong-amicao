document.addEventListener('DOMContentLoaded', function() {
    console.log("SPA Navigation Script Loaded");
    const navLinks = document.querySelectorAll('header nav.menu ul li a');
    const mainContentArea = document.querySelector('main .container');

    async function loadContent(url) {
        console.log("Tentando carregar:", url);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro ao buscar ${url}: ${response.statusText}`);
            }

            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const newContent = doc.querySelector('main .container');

            if (newContent) {
                mainContentArea.innerHTML = newContent.innerHTML;
                console.log("Conteúdo HTML injetado com sucesso!");

                if (url === 'projetos.html' && typeof gerarCardsDeProjetos === 'function') {
                    console.log("Chamando gerarCardsDeProjetos() após carregar projetos.html via SPA...");
                    gerarCardsDeProjetos();
                } 

            } else {
                console.error("Não foi possível encontrar 'main .container' no HTML buscado:", url);
                mainContentArea.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
            }
        } catch (error) {
            console.error("Falha ao carregar conteúdo:", error);
            mainContentArea.innerHTML = "<p>Erro ao carregar a página. Tente novamente.</p>";
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Link clicado:", link.href);
            const url = link.getAttribute('href');
            loadContent(url);
        });
    });
});