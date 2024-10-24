// Adicione funcionalidades aqui, como:
// - Validação de formulários
// - Animações
// - Interação com API

// Exemplo: Adicionar evento de clique ao botão "Comprar"
const comprarButtons = document.querySelectorAll('.produto button');
comprarButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Produto adicionado ao carrinho!');
  });
});

// Menu Hamburguer
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('change', () => {
  menu.classList.toggle('mostrar');
});

// Efeito de hover nos produtos
const produtos = document.querySelectorAll('.produto');
produtos.forEach((produto) => {
  produto.addEventListener('mouseover', () => {
    produto.classList.add('hover');
  });
  produto.addEventListener('mouseout', () => {
    produto.classList.remove('hover');
  });
});

// Carrinho de compras
const carrinho = [];
const botaoComprar = document.querySelectorAll('button');
botaoComprar.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    const produto = {
      nome: document.querySelectorAll('h2')[index + 1].textContent,
      preco: document.querySelectorAll('p')[index].textContent,
    };
    carrinho.push(produto);
    alert(`Produto adicionado ao carrinho: ${produto.nome}`);
    console.log(carrinho);
  });
});

// Busca de produtos
const busca = document.createElement('input');
busca.placeholder = 'Busque um produto';
busca.className = 'busca';
document.querySelector('main').insertBefore(busca, document.querySelector('h2'));
busca.addEventListener('input', () => {
  const termo = busca.value.toLowerCase();
  produtos.forEach((produto, index) => {
    const nome = document.querySelectorAll('h2')[index + 1].textContent.toLowerCase();
    if (nome.includes(termo)) {
      produto.classList.remove('esconder');
    } else {
      produto.classList.add('esconder');
    }
  });
});

// Paginação
const itensPorPagina = 4;
let paginaAtual = 1;
const paginacao = document.createElement('div');
paginacao.className = 'paginacao';
document.querySelector('section').appendChild(paginacao);
const quantidadePaginas = Math.ceil(produtos.length / itensPorPagina);

for (let i = 1; i <= quantidadePaginas; i++) {
  const pagina = document.createElement('button');
  pagina.textContent = i;
  paginacao.appendChild(pagina);
  pagina.addEventListener('click', () => {
    paginaAtual = i;
    mostrarProdutos();
  });
}

function mostrarProdutos() {
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  produtos.forEach((produto, index) => {
    if (index >= inicio && index < fim) {
      produto.classList.remove('esconder');
    } else {
      produto.classList.add('esconder');
    }
  });
}

mostrarProdutos();