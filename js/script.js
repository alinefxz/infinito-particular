// Script do menu hambúrguer
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const body = document.body;

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Fechar menu ao clicar em um link
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Fechar menu ao clicar no overlay
body.addEventListener('click', function(e) {
  if (body.classList.contains('menu-open') && 
      !nav.contains(e.target) && 
      !menuToggle.contains(e.target)) {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

// Script do botão voltar ao início
const backToTop = document.getElementById('backToTop');
const footer = document.querySelector('footer');

// Mostrar/esconder botão baseado no scroll e posição do rodapé
window.addEventListener('scroll', function() {
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Mostrar botão se rolou mais de 300px
  if (window.pageYOffset > 300) {
    // Verificar se o rodapé está visível na tela
    if (footerRect.top < windowHeight) {
      // Rodapé está visível, esconder botão
      backToTop.classList.remove('visible');
    } else {
      // Rodapé não está visível, mostrar botão
      backToTop.classList.add('visible');
    }
  } else {
    backToTop.classList.remove('visible');
  }
});

// Voltar ao topo ao clicar
backToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});