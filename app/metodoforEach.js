/* Criando uma constante que trás da id 'livros', na linha 32 do HMTL e trazendo para o JS */
const elementoParaInserirLivros = document.getElementById('livros')

/* Criando uma constante que trás da id 'valor_total_livros_disponiveis', na linha 252 do HMTL e trazendo para o JS */
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

/* ----- Pegando a lista de livros e fazendo o forEach dele ----- */

/* Aplicando o método forEach (definição: manipula os dados reais de um array) na função (function) e trazendo o HTML para o JS */
function exibirOsLivrosNaTela (listaDeLivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''

    listaDeLivros.forEach(livro => {
      /* Utilizando o Operador Ternário, que substitui a necessidade de criar uma function,
       para efetuar a verificação de disponibilidade dos livros: */
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        
      elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`        
    });
}