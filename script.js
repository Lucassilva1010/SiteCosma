// Função para adicionar comportamento de rolagem suave
function configurarRolagemSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(ancora => {
        ancora.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Função para adicionar classe ativa ao item do menu atual
function atualizarMenuAtivo() {
    const secoes = document.querySelectorAll('main section');
    const itensMenu = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let atual = '';

        secoes.forEach(secao => {
            const secaoTopo = secao.offsetTop;
            const secaoAltura = secao.clientHeight;
            if (pageYOffset >= secaoTopo - secaoAltura / 3) {
                atual = secao.getAttribute('id');
            }
        });

        itensMenu.forEach(item => {
            item.classList.remove('ativo');
            if (item.getAttribute('href').slice(1) === atual) {
                item.classList.add('ativo');
            }
        });
    });
}

// Inicializar funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    configurarRolagemSuave();
    atualizarMenuAtivo();
});