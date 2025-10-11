// Dados dos livros
const booksData = {
  1: {
    title: "1984",
    author: "George Orwell",
    year: "1949",
    pages: "416",
    cover: "https://m.media-amazon.com/images/I/819js3EQwbL._SY466_.jpg",
    description: "Uma distopia clássica que retrata um futuro totalitário onde o governo controla todos os aspectos da vida dos cidadãos. Winston Smith trabalha no Ministério da Verdade, reescrevendo a história para se adequar à narrativa do Partido. O romance explora temas como vigilância, manipulação da verdade, controle mental e a perda da liberdade individual. A obra cunhou termos como 'Big Brother' e 'duplipensar', tornando-se uma referência fundamental para discussões sobre autoritarismo e privacidade."
  },
  2: {
    title: "O Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925",
    pages: "208",
    cover: "https://m.media-amazon.com/images/I/71V1H2fNGJL._SY466_.jpg",
    description: "Ambientado na Era do Jazz dos anos 1920, o romance narra a história de Jay Gatsby, um misterioso milionário obcecado por reconquistar seu amor perdido, Daisy Buchanan. Através dos olhos do narrador Nick Carraway, somos apresentados a um mundo de luxo, festas extravagantes e sonhos desfeitos. A obra é uma crítica profunda ao sonho americano, explorando temas como ambição, decadência moral, ilusão e a impossibilidade de reviver o passado."
  },
  3: {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    year: "1899",
    pages: "256",
    cover: "https://m.media-amazon.com/images/I/71dW1K3XPJL._SY466_.jpg",
    description: "Narrado por Bentinho, o romance conta a história de seu amor por Capitu desde a infância até o casamento. A narrativa é marcada pelo ciúme obsessivo do protagonista, que passa a suspeitar de uma traição entre sua esposa e seu melhor amigo, Escobar. A genialidade de Machado está na ambiguidade: o leitor nunca sabe se a traição realmente ocorreu ou se é fruto da imaginação doentia de Bentinho. Uma obra-prima da literatura brasileira que explora a natureza humana, o ciúme e a memória."
  },
  4: {
    title: "A Metamorfose",
    author: "Franz Kafka",
    year: "1915",
    pages: "96",
    cover: "https://m.media-amazon.com/images/I/71c5rYWfwYL._SY466_.jpg",
    description: "Gregor Samsa acorda uma manhã transformado em um inseto gigante. Esta premissa absurda serve de base para uma profunda reflexão sobre alienação, identidade e relações familiares. Kafka explora como a transformação física de Gregor afeta sua família, que gradualmente o rejeita e o trata como um fardo. A novela é uma alegoria poderosa sobre a desumanização no mundo moderno, a perda de dignidade e o isolamento social. Sua narrativa direta e perturbadora continua impactando leitores mais de um século depois."
  },
  5: {
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    year: "1943",
    pages: "96",
    cover: "https://m.media-amazon.com/images/I/61AYW+DKZIL._SY466_.jpg",
    description: "Um piloto cai no deserto do Saara e encontra um pequeno príncipe vindo de um asteroide distante. Através de suas conversas e das histórias sobre as pessoas que o príncipe encontrou em sua jornada, o livro explora temas profundos sobre amor, amizade, perda e o significado da vida. Com sua linguagem simples e ilustrações encantadoras, a obra transcende a literatura infantil, oferecendo reflexões filosóficas sobre a natureza humana. Frases como 'o essencial é invisível aos olhos' tornaram-se parte da cultura popular mundial."
  },
  6: {
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    year: "1945",
    pages: "152",
    cover: "https://m.media-amazon.com/images/I/91Kpwb9vKcL._SY466_.jpg",
    description: "Uma fábula política que narra a revolta dos animais de uma fazenda contra seus donos humanos. Liderados pelos porcos, os animais estabelecem uma sociedade igualitária baseada no princípio de que 'todos os animais são iguais'. Porém, gradualmente, os porcos assumem o controle e se tornam tão opressores quanto os humanos. A obra é uma sátira devastadora do totalitarismo soviético e uma reflexão atemporal sobre como revoluções podem ser corrompidas. Orwell demonstra como o poder corrompe e como ideais nobres podem ser distorcidos."
  },
  7: {
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    year: "1967",
    pages: "432",
    cover: "https://m.media-amazon.com/images/I/81MI6A+WOTL._SY466_.jpg",
    description: "A saga da família Buendía ao longo de sete gerações na cidade fictícia de Macondo. Márquez mescla realidade e fantasia em uma narrativa épica que se tornou o exemplo máximo do realismo mágico. A obra explora temas como solidão, destino, amor, guerra e o ciclo repetitivo da história. Eventos extraordinários são narrados com naturalidade, enquanto a história da família reflete a história da América Latina. Um romance monumental que revolucionou a literatura latino-americana e conquistou leitores em todo o mundo."
  },
  8: {
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    year: "1977",
    pages: "88",
    cover: "https://m.media-amazon.com/images/I/71VJQvXMbQL._SY466_.jpg",
    description: "A última obra de Clarice Lispector narra a história de Macabéa, uma jovem nordestina que vive na pobreza no Rio de Janeiro. Através de um narrador masculino, Rodrigo S.M., acompanhamos a vida simples e alienada da protagonista, que mal tem consciência de sua própria miséria. A narrativa é uma reflexão sobre a condição humana, a invisibilidade social e a busca por identidade. Clarice explora a linguagem de forma inovadora, questionando o próprio ato de escrever e representar a realidade. Uma obra comovente e profundamente filosófica."
  },
  9: {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    year: "1953",
    pages: "256",
    cover: "https://m.media-amazon.com/images/I/71OFqSRFDgL._SY466_.jpg",
    description: "Em uma sociedade futurista, os livros são proibidos e queimados por bombeiros especializados. Guy Montag é um desses bombeiros que começa a questionar seu papel após conhecer Clarisse, uma jovem que o faz refletir sobre o mundo ao seu redor. O romance é uma defesa apaixonada da literatura e do pensamento crítico, alertando sobre os perigos da censura, do conformismo e do entretenimento superficial. Bradbury criou uma distopia que permanece relevante, especialmente em tempos de desinformação e polarização."
  },
  10: {
    title: "A Sombra do Vento",
    author: "Carlos Ruiz Zafón",
    year: "2001",
    pages: "576",
    cover: "https://m.media-amazon.com/images/I/71fhHYPYZqL._SY466_.jpg",
    description: "Barcelona, 1945. Daniel Sempere descobre um livro misterioso no Cemitério dos Livros Esquecidos e sua vida muda para sempre. Ao tentar descobrir mais sobre o autor, Julián Carax, Daniel se vê envolvido em uma trama de amor, mistério e tragédia que atravessa décadas. Zafón criou uma narrativa envolvente que é ao mesmo tempo um romance gótico, um mistério policial e uma carta de amor aos livros e à leitura. A obra celebra o poder transformador da literatura e explora temas como memória, obsessão e redenção."
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