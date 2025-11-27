let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe menu-fechado
    // menu.classList.toggle("menu-fechado")


    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // Esconder icone barras
        iconeBarras.style.display = "none"

        // Mostrar o icone do X
        iconeX.style.display = "inline"

    }

    else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // Esconder icone do X
        iconeX.style.display = "none"

        // Mostrar o icone barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    // Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // Esconder icone barras
    iconeBarras.style.display = "none"

    // Mostrar o icone do X
    iconeX.style.display = "inline"
}


function alternarTema() {
    const body = document.body;
    
    // Alterna a classe 'dark-mode' no body
    body.classList.toggle('dark-mode');
    
    // (Opcional) Salva a preferência no navegador
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('tema', isDarkMode ? 'dark' : 'light');
}

// Verifica a preferência salva ao carregar a página
window.onload = function() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        document.body.classList.add('dark-mode');
    }
}




function Contatar(event) {
    // 1. Previne o recarregamento da página
    event.preventDefault();

    // 2. Feedback visual no botão
    const btn = event.target.querySelector('button');
    const textoOriginal = btn.innerText;
    btn.innerText = 'Enviando...';

    // 3. Captura os dados do formulário
    const templateParams = {
        nome: document.getElementById('campo-nome').value,
        email: document.getElementById('campo-email').value,
        telefone: `(${document.getElementById('ddd').value}) ${document.getElementById('telefone').value}`,
        mensagem: document.getElementById('campo-texto').value
    };

    // 4. IDs de configuração do EmailJS
    const serviceID = 'service_hmfbmmb';
    const templateID = 'template_hl0mhn3'; // <--- ID Aplicado aqui

    // 5. Envia o email
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('SUCESSO!', response.status, response.text);
            alert('Mensagem enviada com sucesso!');
            
            // Limpa o formulário e restaura o botão
            event.target.reset();
            btn.innerText = textoOriginal;
            
        }, function(error) {
            console.log('FALHA...', error);
            alert('Ocorreu um erro ao enviar. Verifique o console para detalhes.');
            btn.innerText = textoOriginal;
        });
}