document.addEventListener('DOMContentLoaded', function() {
    console.log("SPA Navigation Script Loaded");
    const navLinks = document.querySelectorAll('header nav.menu ul li a');
    const mainContentArea = document.querySelector('main .container');

    async function loadContent(fullUrl) {
        const urlParts = fullUrl.split('#');
        const baseUrl = urlParts[0];
        const hash = urlParts.length > 1 ? '#' + urlParts[1] : null;

        console.log(`Tentando carregar base: ${baseUrl}, Âncora: ${hash}`);
        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error(`Erro ao buscar ${baseUrl}: ${response.statusText}`);
            }

            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const newContent = doc.querySelector('main .container');

            if (newContent) {
                mainContentArea.innerHTML = newContent.innerHTML;
                console.log("Conteúdo HTML injetado com sucesso!");

                if (baseUrl === 'projetos.html' && typeof gerarCardsDeProjetos === 'function') {
                    console.log("Chamando gerarCardsDeProjetos() após carregar projetos.html via SPA...");
                    gerarCardsDeProjetos();
                }

                if (hash) {
                    setTimeout(() => {
                        const targetElement = document.getElementById(hash.substring(1));
                        if (targetElement) {
                            console.log("Rolando para:", hash);
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            console.warn("Elemento com ID", hash, "não encontrado após carregar conteúdo.");
                        }
                    }, 100);
                }

            } else {
                console.error("Não foi possível encontrar 'main .container' no HTML buscado:", baseUrl);
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
            const fullUrl = link.getAttribute('href');
            console.log("Link clicado:", fullUrl);
            loadContent(fullUrl); 
        });
    });

});