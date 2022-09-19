// - Buscando o ID no HTML:
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
// - Adicionando o evento de clique no botão de ordenar por preço:
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

/* - Criando a função para ordenar os livros por preço e usando a variável 'livros'
que criamos no arquivo main.js */
function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}