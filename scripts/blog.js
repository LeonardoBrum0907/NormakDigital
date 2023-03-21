const postsPopulares = document.querySelector('.populares');
const postsRecentes = document.querySelector('.recentes');
const btnPostsPopulares = document.querySelector('.btn-posts-populares');
const btnPostsRecentes = document.querySelector('.btn-ultimas-postagens');

btnPostsRecentes.classList.add('active')
postsPopulares.style.display = 'none';

// função para exibir apenas a lista de posts populares
function exibirPostsPopulares() {
  postsPopulares.style.display = 'flex';
  postsRecentes.style.display = 'none';
  btnPostsRecentes.classList.remove('active')
  btnPostsPopulares.classList.add('active')
}

// função para exibir apenas a lista de posts recentes
function exibirPostsRecentes() {
  postsPopulares.style.display = 'none';
  postsRecentes.style.display = 'flex';
  btnPostsPopulares.classList.remove('active')
  btnPostsRecentes.classList.add('active')
}

// evento de clique no botão de posts populares
btnPostsPopulares.addEventListener('click', exibirPostsPopulares);

// evento de clique no botão de posts recentes
btnPostsRecentes.addEventListener('click', exibirPostsRecentes);

const filters = document.querySelectorAll('.btn-filter');
const posts = document.querySelectorAll('.preview-post-recente');

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', function () {
    const category = this.getAttribute('data-category');

    for (let j = 0; j < posts.length; j++) {
      if (category === 'all') {
        posts[j].style.display = 'flex';
      } else if (
        posts[j].getAttribute('data-category') === category
      ) {
        posts[j].style.display = 'flex';
      } else {
        posts[j].style.display = 'none';
      }
    }

    for (let k = 0; k < filters.length; k++) {
      filters[k].classList.remove('active');
    }

    this.classList.add('active');
  });
}

const previewPosts = document.querySelectorAll('.preview-post-recente');
const pagination = document.querySelector('.pagination');
const postsPerPage = 2;
let paginaAtual = 1;

function mostrarPosts(previewPosts, paginaAtual, postsPerPage) {
  const inicio = (paginaAtual - 1) * postsPerPage;
  const fim = inicio + postsPerPage;

  previewPosts.forEach((post, index) => {
    if (index >= inicio && index < fim) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
}

function adicionarBotoes() {
  const quantidadePaginas = Math.ceil(previewPosts.length / postsPerPage);

  for (let i = 1; i <= quantidadePaginas; i++) {
    const btn = document.createElement('button');
    btn.classList.add('btn-pagination');
    btn.textContent = i;

    if (i === paginaAtual) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', (event) => {
      paginaAtual = parseInt(event.target.textContent);
      atualizarPosts();
    });

    pagination.appendChild(btn);
  }
}

function atualizarPosts() {
  mostrarPosts(previewPosts, paginaAtual, postsPerPage);
  const botoes = document.querySelectorAll('.btn-pagination');

  botoes.forEach((btn) => {
    btn.classList.remove('active');
    if (parseInt(btn.textContent) === paginaAtual) {
      btn.classList.add('active');
    }
  });
}

mostrarPosts(previewPosts, paginaAtual, postsPerPage);
adicionarBotoes();