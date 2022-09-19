/* --- AULA 03 - ATIVIDADE/VÍDEO 03:
Buscando o botão de FRONTEND através do ID do HTML:
const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');

--- Como é necessário o clique para acontecer o evento, 
será adicionando no clique do botão que uma função seja executada:
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros) */

/* MELHORANDO O CÓDIGO COM querySelectorAll() e forEach: */
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


/* --- Função que executa a filtragem do botão: */
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}