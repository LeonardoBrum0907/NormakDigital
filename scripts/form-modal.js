const abrirModal = document.getElementById('abrir-modal');
const modal = document.getElementById('modal-form');
const fecharModal = document.getElementById('fechar-modal-form');

abrirModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});