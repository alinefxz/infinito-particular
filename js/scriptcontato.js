document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      // Adiciona/remove a classe 'active' para mostrar/esconder o menu
      nav.classList.toggle('active');
      // Adiciona/remove a classe para a animação do ícone (X)
      menuToggle.classList.toggle('active');
      // Adiciona/remove uma classe no body para evitar scroll da página
      body.classList.toggle('menu-open');
    });
  }

  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    // Otimização: Mostra/esconde o botão com base no scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // Ação de clique para rolar suavemente para o topo
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
