const btnModal = document.getElementById('btn-modal');
const modal = document.getElementById('modal');
const btnFechar = document.getElementById('fechar-modal');

function abrirModal() {
  modal.classList.add('ativo');
  modal.setAttribute('aria-hidden', 'false');
  btnFechar.focus(); // Move o foco para o botão de fechar
}

function fecharModal() {
  modal.classList.remove('ativo');
  modal.setAttribute('aria-hidden', 'true');
  btnModal.focus(); // Retorna o foco ao botão que abriu
}

btnModal.addEventListener('click', abrirModal);
btnFechar.addEventListener('click', fecharModal);

// Fechar modal ao pressionar a tecla ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('ativo')) {
    fecharModal();
  }
});
