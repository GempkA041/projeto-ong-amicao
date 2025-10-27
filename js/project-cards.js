document.addEventListener('DOMContentLoaded', function() {
    console.log("Project Cards Script Loaded");

    const projetos = [
        {
            id: "voluntariado",
            titulo: "Seja um Voluntário",
            imagem: "img/voluntario-brincando.png",
            altImagem: "Voluntário brincando com um cachorro resgatado",
            descricao: "O voluntariado é a alma da nossa ONG. Precisamos de ajuda em diversas frentes:",
            itensLista: [
                "Passear e socializar com os cães.",
                "Ajudar na limpeza e organização do abrigo.",
                "Ser lar temporário para animais em recuperação.",
                "Ajudar em feiras de adoção."
            ],
            linkBotao: "cadastro.html",
            textoBotao: "Quero ser voluntário"
        },
        {
            id: "doacao",
            titulo: "Como Doar",
            imagem: null,
            altImagem: "",
            descricao: "Manter o abrigo tem um custo alto. Sua doação é fundamental para comprarmos ração, medicamentos e pagarmos custos veterinários. Formas de doar:",
            itensLista: [
                "<strong>PIX (CNPJ):</strong> 12.345.678/0001-99",
                "<strong>Depósito Bancário</strong> Banco X, Agência 0001, Conta 12345-6",
                "<strong>Doação de Itens:</strong> Aceitamos ração (fechada), cobertores e medicamentos na nossa sede"
            ],
            linkBotao: null,
            textoBotao: ""
        }
    ];
    const gridProjetos = document.querySelector('.grid-projetos');
    
    function criarCardHTML(projeto) {
        let listaItensHTML = '';
        if (projeto.itensLista && projeto.itensLista.length > 0) {
            listaItensHTML = `<ul>${projeto.itensLista.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }

        let botaoHTML = '';
        if (projeto.linkBotao && projeto.textoBotao) {
            botaoHTML = `<p><a href="${projeto.linkBotao}" class="btn">${projeto.textoBotao}</a></p>`;
        }
        
        let imagemHTML = '';
        if (projeto.imagem) {
            imagemHTML = `<img src="${projeto.imagem}" alt="${projeto.altImagem}">`;
        }

        return `
            <article id="${projeto.id}" class="card">
                <h3>${projeto.titulo}</h3>
                ${imagemHTML} 
                <p>${projeto.descricao}</p>
                ${listaItensHTML}
                ${botaoHTML}
            </article>
        `;
    }

    if (gridProjetos) {
        let cardsHTML = '';
        projetos.forEach(projeto => {
            cardsHTML += criarCardHTML(projeto);
        });
        gridProjetos.innerHTML = cardsHTML;
        console.log("Cards gerados via template JS!");
    } else {
        console.error("Elemento .grid-projetos não encontrado!");
    }
});