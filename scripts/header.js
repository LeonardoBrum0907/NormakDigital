  const searchContainer = document.querySelector('.search-container');
  const searchIcon = searchContainer.querySelector('.search-icon');
  const searchInput = searchContainer.querySelector('input');
  const headerBox = document.querySelector('.site-header')

  const menuBtn = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.mobile-menu');

  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('navbar--open');
    menuBtn.classList.toggle('active')
  });

  searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('focus');
    searchInput.focus();
  });

  const currentPage = location.href;

  // Seleciona todos os links na navegação
  const navLinks = document.querySelectorAll('.mobile-menu a');

  // Itera sobre os links e adiciona a classe 'active' ao link correspondente à página atual
  navLinks.forEach(link => {
    if (link.href === currentPage) {
      link.classList.add('active');
    }
  });

  window.addEventListener('scroll', function() {
    if (this.window.scrollY >= 100) {
      headerBox.classList.add('fixed')
      console.log('relative')
    } else {
      headerBox.classList.remove('fixed')
      console.log('fixed')

    }
  });