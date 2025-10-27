let campoNome, campoEmail, campoNascimento, campoTelefone, campoCep, campoEndereco, campoCidade, campoEstado, form;

function validarNome() {
    if (!campoNome) return true;
    if (campoNome.value.trim() === '') {
        mostrarErro(campoNome, "O nome completo é obrigatório.");
        return false; 
    } else {
        limparErro(campoNome);
        return true; 
    }
}

function validarEmail() {
    if (!campoEmail) return true;
    const valorEmail = campoEmail.value.trim();
    if (valorEmail === '') {
        mostrarErro(campoEmail, "O e-mail é obrigatório");
        return false;
    } else if (!ehEmailValido(valorEmail)) {
        mostrarErro(campoEmail, "Por favor, digite um e-mail válido (ex: nome@dominio.com).");
        return false;
    } else {
        limparErro(campoEmail);
        return true;
    }
}

function validarNascimento() {
    if (!campoNascimento) return true;
    if (campoNascimento.value === '') {
        mostrarErro(campoNascimento, "A data de nascimento é obrigatória.");
        return false;
    } else {
        limparErro(campoNascimento);
        return true;
    }
}

function validarTelefone() {
    if (!campoTelefone) return true;
    const valorTelefone = campoTelefone.value.trim();
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (valorTelefone === '') {
        mostrarErro(campoTelefone, "O telefone é obrigatório.");
        return false;
    } else if (!regexTelefone.test(valorTelefone)) {
        mostrarErro(campoTelefone, "Formato inválido. Use: (XX) XXXXX-XXXX.");
        return false;
    } else {
        limparErro(campoTelefone);
        return true;
    }
}

function validarCep() {
    if (!campoCep) return true;
    const valorCep = campoCep.value.trim();
    const regexCep = /^\d{5}-\d{3}$/; 
    if (valorCep === '') {
        mostrarErro(campoCep, "O CEP é obrigatório.");
        return false;
    } else if (!regexCep.test(valorCep)) {
        mostrarErro(campoCep, "Formato inválido. Use XXXXX-XXX.");
        return false;
    } else {
        limparErro(campoCep);
        return true;
    }
}

function validarEndereco() {
    if (!campoEndereco) return true;
    if (campoEndereco.value.trim() === '') {
        mostrarErro(campoEndereco, "O endereço é obrigatório.");
        return false;
    } else {
        limparErro(campoEndereco);
        return true;
    }
}

function validarCidade() {
    if (!campoCidade) return true;
    if (campoCidade.value.trim() === '') {
        mostrarErro(campoCidade, "A cidade é obrigatória.");
        return false;
    } else {
        limparErro(campoCidade);
        return true;
    }
}

function validarEstado() {
    if (!campoEstado) return true;
    if (campoEstado.value === '') { 
        mostrarErro(campoEstado, "Por favor, selecione um estado.");
        return false;
    } else {
        limparErro(campoEstado);
        return true;
    }
}

function ehEmailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function mostrarErro(campo, mensagem) { 
    if (!campo) return;
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
    if (!campo) return;
    campo.classList.remove('campo-invalido');
    const mensagemExistente = campo.parentNode.querySelector('.mensagem-erro');
    if (mensagemExistente) {
        mensagemExistente.remove();
    }
}

function validarFormularioCompleto(event) {
    if (event) event.preventDefault(); 
    console.log("--- Iniciando validação COMPLETA ---"); 

    let isFormValid = true; 
    
    if (!validarNome()) isFormValid = false; 
    if (!validarEmail()) isFormValid = false;
    if (!validarNascimento()) isFormValid = false;
    if (!validarTelefone()) isFormValid = false;
    if (!validarCep()) isFormValid = false;
    if (!validarEndereco()) isFormValid = false;
    if (!validarCidade()) isFormValid = false;
    if (!validarEstado()) isFormValid = false;

    console.log("Validações individuais EXECUTADAS. Formulário é válido?", isFormValid);

    if (!isFormValid) { 
        console.log("Formulário inválido. Não enviado.");
        const primeiroErro = document.querySelector('.campo-invalido');
        if (primeiroErro) {
            primeiroErro.focus(); 
        }
    } else { 
        console.log("Formulário VÁLIDO! Enviando...");
        alert("Cadastro enviado com sucesso! (Simulação)"); 
    }
    console.log("--- Fim da validação COMPLETA ---"); 
    return isFormValid;
}

function inicializarValidacaoFormulario() {
    console.log("Inicializando validação do formulário...");

    campoNome = document.getElementById('nome');
    campoEmail = document.getElementById('email');
    campoNascimento = document.getElementById('nascimento');
    campoTelefone = document.getElementById('telefone');
    campoCep = document.getElementById('cep');
    campoEndereco = document.getElementById('endereco');
    campoCidade = document.getElementById('cidade');
    campoEstado = document.getElementById('estado');
    form = document.querySelector('form'); 

    if (campoNome) campoNome.addEventListener('blur', validarNome);
    if (campoEmail) campoEmail.addEventListener('blur', validarEmail);
    if (campoNascimento) campoNascimento.addEventListener('blur', validarNascimento);
    if (campoTelefone) campoTelefone.addEventListener('blur', validarTelefone);
    if (campoCep) campoCep.addEventListener('blur', validarCep);
    if (campoEndereco) campoEndereco.addEventListener('blur', validarEndereco);
    if (campoCidade) campoCidade.addEventListener('blur', validarCidade);
    if (campoEstado) campoEstado.addEventListener('blur', validarEstado);     
    if (form) form.addEventListener('submit', validarFormularioCompleto); 

    console.log("Listeners de validação adicionados (se os elementos foram encontrados).");
}
document.addEventListener('DOMContentLoaded', inicializarValidacaoFormulario);