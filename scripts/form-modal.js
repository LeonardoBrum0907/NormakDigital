const abrirModal = document.getElementsByClassName('abrir-modal');
const modal = document.getElementById('modal-form');
const fecharModal = document.getElementById('fechar-modal-form');

for (let i = 0; i < abrirModal.length; i++) {
  abrirModal[i].addEventListener('click', () => {
    modal.style.display = 'flex';
  });
}

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});