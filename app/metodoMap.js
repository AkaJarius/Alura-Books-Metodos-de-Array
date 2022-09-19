/* Aplicando o método Map (definição: executa uma função para cada elemento do array e devolve um novo array como resultado.)
No caso aqui é dar um desconto de 0.3 nos valores dos livros. */

function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })

    return livrosComDesconto
}