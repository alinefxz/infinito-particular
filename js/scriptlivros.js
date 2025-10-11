// Dados dos livros
// Dados dos livros
const booksData = {
  1: {
    title: "Academia dos Casos Arquivados",
    author: "Jennifer Lynn Barnes",
    year: "2024",
    pages: "264",
    cover: "../imagens/academia.jpeg",
    description: "Uma distopia clássica que retrata um futuro totalitário onde o governo controla todos os aspectos da vida dos cidadãos. Winston Smith trabalha no Ministério da Verdade, reescrevendo a história para se adequar à narrativa do Partido. O romance explora temas como vigilância, manipulação da verdade, controle mental e a perda da liberdade individual. A obra cunhou termos como 'Big Brother' e 'duplipensar', tornando-se uma referência fundamental para discussões sobre autoritarismo e privacidade."
  },
  2: {
    title: "Amor, Teoricamente",
    author: "Ali Hazelwood",
    year: "2023",
    pages: "368",
    cover: "../imagens/amorteoricamente.jpeg",
    description: "Um romance jovem adulto que explora os desafios do amor na adolescência, as expectativas sociais e os dilemas de crescer em meio a sentimentos complexos e inesperados."
  },
  3: {
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    year: "1977",
    pages: "88",
    cover: "../imagens/horadaestrela.jpeg",
    description: "A última obra de Clarice Lispector narra a história de Macabéa, uma jovem nordestina que vive na pobreza no Rio de Janeiro. A narrativa é uma reflexão sobre a condição humana e a busca por identidade."
  },
  4: {
    title: "Jantar Secreto",
    author: "Raphael Montes",
    year: "2016",
    pages: "368",
    cover: "../imagens/jantarsecreto.jpeg",
    description: "Um thriller intrigante que mistura mistério e suspense durante um jantar aparentemente inocente que se transforma em um jogo mortal."
  },
  5: {
    title: "Manual de Assassinato Para Boas Garotas",
    author: "Holly Jackson",
    year: "2022",
    pages: "448",
    cover: "../imagens/manualdeassassinato.jpeg",
    description: "Uma jovem herda um manual de assassinatos e se envolve em mistérios, aprendendo a lidar com segredos, estratégias e desafios inesperados."
  },
  6: {
    title: "Morando Com Um Vampiro",
    author: "Jenna Levine",
    year: "2024",
    pages: "303",
    cover: "../imagens/morando.jpeg",
    description: "Uma história sobrenatural divertida e romântica, onde a protagonista precisa se adaptar a dividir a casa com um vampiro charmoso e complicado."
  },
  7: {
    title: "Nunca Minta",
    author: "Freida McFadden",
    year: "2025",
    pages: "280",
    cover: "../imagens/nuncaminta.jpeg",
    description: "Um suspense psicológico que envolve mentiras, enganos e reviravoltas inesperadas."
  },
  8: {
    title: "Pequena Coreografia do Adeus",
    author: "Aline Bei",
    year: "2021",
    pages: "264",
    cover: "../imagens/pequenacoregografia.jpeg",
    description: "Um romance sensível e poético sobre despedidas, memórias e relações humanas profundas."
  },
  9: {
    title: "O Peso do Pássaro Morto",
    author: "Aline Bei",
    year: "2017",
    pages: "168",
    cover: "../imagens/pesodopassaro.jpeg",
    description: "Uma narrativa intensa sobre a memória, traumas e o peso das experiências vividas."
  },
  10: {
    title: "Um Amor Problemático de Verão",
    author: "Ali Hazelwood",
    year: "2025",
    pages: "368",
    cover: "../imagens/umamor.jpeg",
    description: "Uma comédia romântica leve sobre encontros, desencontros e as complicações do amor jovem durante o verão."
  }
};


document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('fade-in');
  
  // Menu hambúrguer
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const body = document.body;

  if (menuToggle && nav) {
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

    // Fechar menu ao clicar no overlay (fora do menu e do botão)
    body.addEventListener('click', function(e) {
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
  const main = document.querySelector('main');

  if (backToTop && footer && main) {
    window.addEventListener('scroll', function() {
      const footerRect = footer.getBoundingClientRect();
      const mainRect = main.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollThreshold = 300; // Quantidade de scroll para aparecer o botão
      const buttonHeight = backToTop.offsetHeight; // Altura do botão
      const footerOffset = 20; // Espaçamento do rodapé

      if (window.pageYOffset > scrollThreshold) {
        // Calcula a posição máxima que o botão pode ter para não sobrepor o rodapé
        const maxBottom = windowHeight - footerRect.height - footerOffset;
        const currentBottom = windowHeight - (backToTop.getBoundingClientRect().top + buttonHeight);

        if (footerRect.top < windowHeight) { // Se o rodapé está visível na tela
          // Ajusta a posição do botão para que ele não sobreponha o rodapé
          const newBottom = Math.max(footerRect.height + footerOffset, 20); // 20px é o bottom padrão
          backToTop.style.bottom = `${newBottom}px`;
        } else {
          backToTop.style.bottom = '20px'; // Posição padrão quando o rodapé não está visível
        }
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Funcionalidade do Modal
  const modal = document.getElementById("bookModal");
  console.log("Modal element:", modal);
  const closeBtn = document.querySelector(".modal .close"); // Seletor mais específico
  const books = document.querySelectorAll(".book");
  console.log("Close button element:", closeBtn);
  console.log("Book elements:", books);

  // Abrir modal ao clicar em um livro
  books.forEach(book => {
    book.addEventListener('click', function(e) {
      console.log('Book clicked!', e.target);
      const bookId = this.getAttribute('data-book');
      console.log('Book ID:', bookId);
      const bookInfo = booksData[bookId];
      console.log('Book Info:', bookInfo);
      
      if (bookInfo && modal) {
        document.getElementById('modalCover').src = bookInfo.cover;
        document.getElementById('modalTitle').textContent = bookInfo.title;
        document.getElementById('modalAuthor').textContent = bookInfo.author;
        document.getElementById('modalYear').textContent = bookInfo.year;
        document.getElementById('modalPages').textContent = bookInfo.pages;
        document.getElementById('modalDescription').textContent = bookInfo.description;
        
        console.log('Opening modal...');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log('Modal display:', modal.style.display);
      } else {
        console.log('Modal or bookInfo not found!', modal, bookInfo);
      }
    });
  });

  // Fechar modal ao clicar no X
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  // Fechar modal ao clicar fora do conteúdo
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Fechar modal com a tecla ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Transição de fade-in para links
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      // Verifica se o link não é um âncora interna ou um link de modal
      if (this.getAttribute('href').startsWith('#') || this.closest('.modal')) {
        return; // Não aplica a transição para âncoras ou links dentro do modal
      }
      e.preventDefault(); 
      let href = this.getAttribute("href");

      document.body.classList.remove("fade-in"); 
      setTimeout(() => {
        window.location.href = href; 
      }, 500); 
    });
  });
});





books.forEach(book => {
  book.addEventListener('click', function() {
    const bookId = this.getAttribute('data-book');
    const bookInfo = booksData[bookId];
    console.log("Abrindo modal para:", bookInfo.title, "| Imagem:", bookInfo.cover);
    document.getElementById('modalCover').src = bookInfo.cover;
    modal.style.display = 'block';
  });
});