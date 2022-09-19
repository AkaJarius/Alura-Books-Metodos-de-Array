let livros = []

/* TRAZENDO AS REQUISIÇÕES PARA NOSSO CÓDIGO JS (APLICAÇÃO) */
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

// Função assíncrona, que faz a busca das informações contidas na API:
async function getBuscarLivrosDaAPI() {
    //Requisitando abribuição na constante criada para a API:
    const res = await fetch(endpointDaAPI)
    // Resposta da atribuição e assim, atribui na variável 'livros':
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}