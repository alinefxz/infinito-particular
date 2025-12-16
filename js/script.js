// Menu hambúrguer
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const body = document.body;

if(menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  // Fechar menu ao clicar em um link
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });

  // Fechar menu ao clicar no overlay
  body.addEventListener('click', (e) => {
    if (body.classList.contains('menu-open') && 
        !nav.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });
}

// Botão voltar ao topo
const backToTop = document.getElementById('backToTop');
const footer = document.querySelector('footer');

if(backToTop && footer) {
  window.addEventListener('scroll', () => {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (window.pageYOffset > 300) {
      if (footerRect.top < windowHeight) {
        backToTop.classList.remove('visible');
      } else {
        backToTop.classList.add('visible');
      }
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Efeito fade-in
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if(!href || href.startsWith("#")) return; // evita erros com links vazios ou anchors

      e.preventDefault(); 
      document.body.classList.remove("fade-in"); 
      setTimeout(() => {
        window.location.href = href; 
      }, 500); 
    });
  });
});