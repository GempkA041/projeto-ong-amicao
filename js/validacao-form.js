document.addEventListener('DOMContentLoaded', function() {
    const campoNome = document.getElementById('nome');
    const campoEmail = document.getElementById('email');
    const campoNascimento = document.getElementById('nascimento');
    const campoTelefone = document.getElementById('telefone');
    const campoCep = document.getElementById('cep');
    const campoEndereco = document.getElementById('endereco');
    const campoCidade = document.getElementById('cidade');
    const campoEstado = document.getElementById('estado');
    const form = document.querySelector('form');

    if (campoNome) campoNome.addEventListener('blur', validarNome);
    if (campoEmail) campoEmail.addEventListener('blur', validarEmail);
    if (campoNascimento) campoNascimento.addEventListener('blur', validarNascimento);
    if (campoTelefone) campoTelefone.addEventListener('blur', validarTelefone);
    if (campoCep) campoCep.addEventListener('blur', validarCep);
    if (campoEndereco) campoEndereco.addEventListener('blur', validarEndereco);
    if (campoCidade) campoCidade.addEventListener('blur', validarCidade);
    if (campoEstado) campoEstado.addEventListener('blur', validarEstado);

    function validarNome() {
        console.log("Usuário saiu do campo Nome!");
        if (campoNome.value.trim() === '') {
            console.log("Nome está vazio!");
            mostrarErro(campoNome, "O nome completo é obrigatório.");
        } else {
            console.log("Nome está preenchido.");
            limparErro(campoNome);
        }
    }
    
    function validarEmail() {
        console.log("Usuário saiu do campo Email!");
        const valorEmail = campoEmail.value.trim();

        if (valorEmail === '') {
            console.log("Email está vazio!");
            mostrarErro(campoEmail, "O e-mail é obrigatório");
        } else if (!ehEmailValido(valorEmail)) {
            console.log("Email inválido!");
            mostrarErro(campoEmail, "Por favor, digite um e-mail válido (ex: nome@dominio.com).");
        } else {
            console.log("Email Válido");
            limparErro(campoEmail);
        }
    }

    function validarNascimento() {
        console.log("Usuário saiu do campo Nascimento!");
        const valorNascimento = campoNascimento.value;

        if (valorNascimento === '') {
            console.log("Nascimento está Vazio!");
            mostrarErro(campoNascimento, "A data de nascimento é obrigatória.");
        } else {
            console.log("Nascimento está preenchido.");
            limparErro(campoNascimento);
        }
    }

    function validarTelefone() {
        console.log("Usuário saiu do campo Telefone!");
        const valorTelefone = campoTelefone.value.trim();
        const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
  
        if (valorTelefone === '') {
            console.log("Telefone está vázio!");
            mostrarErro(campoTelefone, "O telefone é obrigatório.");
        } else if (!regexTelefone.test(valorTelefone)) {
            console.log("Telefone inválido.");
            mostrarErro(campoTelefone, "Formato inválido. Use: (XX) XXXXX-XXXX.");
        } else {
            console.log("Telefone válido,");
            limparErro(campoTelefone);
        }
    }

    function validarCep() {
        console.log("Usuário saiu do campo CEP.");
        const valorCep = campoCep.value.trim();

        const regexCep = /^\d{5}-\d{3}$/;

        if (valorCep === '') {
            console.log("CEP está vazio.");
            mostrarErro(campoCep, "O CEP é obrigatório.");
        } else if (!regexCep.test(valorCep)) {
            console.log("CEP inválido.");
            mostrarErro(campoCep, "Formato inválido. Use: XXXXX-XXX.");
        } else {
            console.log("CEP válido.");
            limparErro(campoCep);
        }
    }

    function validarEndereco() {
        console.log("Usuário saiu do campo Endereço!");
        if (campoEndereco.value.trim() === '') {
            console.log("Endereço está vazio!");
            mostrarErro(campoEndereco, "O endereço é obrigatório.");
        } else {
            console.log("Endereço está preenchido.");
            limparErro(campoEndereco);
        }
    }

    function validarCidade() {
        console.log("Usuário saiu do campo Cidade!");
        if (campoCidade.value.trim() === '') {
            console.log("Cidade está vazia!");
            mostrarErro(campoCidade, "A cidade é obrigatória.");
        } else {
            console.log("Cidade está preenchida.");
            limparErro(campoCidade);
        }
    }

    function validarEstado() {
        console.log("Usuário saiu do campo estado.");
        if (campoEstado.value === '') {
            console.log("Estado não selecionado.");
            mostrarErro(campoEstado, "Por favor, selecione um estado.");
        } else {
            console.log("Estado selecionado.");
            limparErro(campoEstado);
        }
    }

    function ehEmailValido(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    function mostrarErro(campo, mensagem) { 
        campo.classList.add('campo-invalido');
        
        const mensagemExistente = campo.parentNode.querySelector('.mensagem-erro');
        if (mensagemExistente) {
             mensagemExistente.remove();
        }

        const mensagemErro = document.createElement('p');
        mensagemErro.textContent = mensagem;
        mensagemErro.classList.add('mensagem-erro');

        campo.parentNode.appendChild(mensagemErro); 
    }

    function limparErro(campo) {
        campo.classList.remove('campo-invalido');
        const mensagemExistente = campo.parentNode.querySelector('.mensagem-erro');
        if (mensagemExistente) {
            mensagemExistente.remove();
        }
    }

    function validarFormularioCompleto(event) {
        console.log("Iniciando validação no submit");
        
        event.preventDefault(); 
        console.log("Prevenção padrão EXECUTADA.");

        validarNome();
        validarEmail();
        validarNascimento();
        validarTelefone();
        validarCep();
        validarEndereco();
        validarCidade();
        validarEstado();
        console.log("Validações individuais executadas.");

        const temErros = document.querySelector('.campo-invalido'); 
        console.log("Resultado da busca por '.campo-invalido':", temErros);

        if (temErros) {
            console.log("Condição 'temErros' é verdadeira.");
            console.log("Formulário inválido. Não enviado.");
            const primeiroErro = document.querySelector('.campo-invalido');
            if (primeiroErro) {
                primeiroErro.focus(); 
            }
        } else {
            console.log("Condição 'temErros' é falsa.");
            console.log("Formulário válido! Enviando...");
            alert("Cadastro enviado com sucesso! (Simulação)");
        }
        console.log("Fim da validação no submit");
    }
});