document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const backToTopButton = document.getElementById("backToTop");
  const filmGrid = document.getElementById("filmesGrid");
  const filmModal = document.getElementById("filmModal");
  const closeModal = filmModal ? filmModal.querySelector(".close") : null;

  
  if (menuToggle && nav) {
    // Função reutilizável para fechar o menu
    const closeMenu = () => {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
    };

    // Função reutilizável para abrir o menu
    const openMenu = () => {
      nav.classList.add("active");
      menuToggle.classList.add("active");
      document.body.classList.add("menu-open");
    };

    // 1. Alterna o estado do menu ao clicar no ícone
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede que o clique se propague para o document
      if (nav.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // 2. Fecha o menu ao clicar em um dos links
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // 3. Fecha o menu ao clicar fora dele (na área cinza)
    document.addEventListener("click", (e) => {
      // Verifica se o menu está ativo e se o clique foi FORA do menu e FORA do ícone que o abre
      if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }


  // Back to Top Button
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Fade-in effect for body
  document.body.classList.add("fade-in");

  // Film Data
  const films = [
    {
      id: "amenina",
      title: "A Menina que Roubava Livros",
      cover: "../imagens/amenina.jpg",
      director: "Brian Percival",
      year: "2013",
      duration: "2h 11m",
      description: "Durante a Segunda Guerra Mundial, uma jovem garota encontra consolo roubando livros e compartilhando-os com outras pessoas.",
    },
    {
      id: "hp",
      title: "Harry Potter e o Prisioneiro de Azkaban",
      cover: "../imagens/hp.jpg",
      director: "Alfonso Cuarón",
      year: "2004",
      duration: "2h 22m",
      description: "Harry, Ron e Hermione retornam a Hogwarts para seu terceiro ano, onde descobrem que um perigoso prisioneiro fugiu de Azkaban e está atrás de Harry.",
    },
    {
      id: "indianajones",
      title: "Indiana Jones e os Caçadores da Arca Perdida",
      cover: "../imagens/indianajones.jpg",
      director: "Steven Spielberg",
      year: "1981",
      duration: "1h 55m",
      description: "Em 1936, o arqueólogo e aventureiro Indiana Jones é contratado pelo governo dos EUA para encontrar a Arca da Aliança antes que os nazistas a consigam.",
    },
    {
      id: "invocacaodomal",
      title: "Invocação do Mal",
      cover: "../imagens/invocação.jpg",
      director: "James Wan",
      year: "2013",
      duration: "1h 52m",
      description: "Investigadores paranormais Ed e Lorraine Warren trabalham para ajudar uma família aterrorizada por uma presença sombria em sua casa de fazenda.",
    },
    {
      id: "mm",
      title: "Meninas Malvadas",
      cover: "../imagens/mm.jpg",
      director: "Mark Waters",
      year: "2004",
      duration: "1h 37m",
      description: "Cady Heron, uma garota que cresceu na África, tem seu primeiro contato com a escola pública e o mundo das 'Patricinhas'.",
    },
    {
      id: "opcupido",
      title: "Operação Cupido",
      cover: "../imagens/opcupido.jpg",
      director: "Nancy Meyers",
      year: "1998",
      duration: "2h 8m",
      description: "Duas gêmeas idênticas separadas no nascimento se encontram em um acampamento de verão e planejam reunir seus pais.",
    },
    {
      id: "rh",
      title: "Robin Hood",
      cover: "../imagens/rh.jpg",
      director: "Wolfgang Reitherman",
      year: "1973",
      duration: "1h 23m",
      description: "A clássica história de Robin Hood, um fora da lei que rouba dos ricos para dar aos pobres, em uma versão animada da Disney.",
    },
    {
      id: "wedding",
      title: "Muito Bem Acompanhada",
      cover: "../imagens/wedding.jpg",
      director: "Clare Kilner",
      year: "2005",
      duration: "1h 43m",
      description: "Uma mulher solteira contrata um acompanhante masculino para levá-la aos casamentos de sua irmã, mas acaba se apaixonando por ele.",
    },
    {
      id: "cinderela",
      title: "Cinderela",
      cover: "../imagens/cinderela.jpg",
      director: "Clyde Geronimi, Hamilton Luske, Wilfred Jackson",
      year: "1950",
      duration: "1h 15m",
      description: "Maltratada pela madrasta e suas filhas, a jovem Cinderela vê sua sorte mudar com a ajuda de uma Fada Madrinha, que a permite ir ao baile real.",
    },
    {
      id: "comoperder",
      title: "Como Perder um Homem em 10 Dias",
      cover: "../imagens/comoperderumhomem.jpg",
      director: "Donald Petrie",
      year: "2003",
      duration: "1h 56m",
      description: "Uma jornalista precisa escrever um artigo sobre como 'livrar-se' de um namorado em dez dias, enquanto um publicitário aposta que pode fazer qualquer mulher se apaixonar por ele no mesmo período.",
    },
    {
      id: "narnia",
      title: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
      cover: "../imagens/nárnia.jpg",
      director: "Andrew Adamson",
      year: "2005",
      duration: "2h 23m",
      description: "Quatro irmãos descobrem um guarda-roupa mágico que os leva ao mundo de Nárnia, um lugar amaldiçoado com um inverno eterno pela Feiticeira Branca.",
    },
    {
      id: "espada",
      title: "A Espada Era a Lei",
      cover: "../imagens/reiarthur.jpg",
      director: "Wolfgang Reitherman",
      year: "1963",
      duration: "1h 29m",
      description: "O jovem Arthur, um cavalariço, recebe lições do Mago Merlin, que o prepara para seu destino de se tornar o lendário Rei da Inglaterra ao retirar uma espada mágica de uma pedra.",
    },
  ];

  // Render Films
  if (filmGrid) {
    films.forEach((film) => {
      const filmElement = document.createElement("div");
      filmElement.classList.add("filme");
      filmElement.dataset.id = film.id;
      filmElement.innerHTML = `
        <img src="${film.cover}" alt="${film.title}">
        <div class="filme-titulo">${film.title}</div>
      `;
      filmGrid.appendChild(filmElement);
    });
  }

  // Modal Logic
  if (filmGrid && filmModal) {
    filmGrid.addEventListener("click", (e) => {
      const filmElement = e.target.closest(".filme");
      if (filmElement) {
        const filmId = filmElement.dataset.id;
        const film = films.find((f) => f.id === filmId);

        document.getElementById("modalCover").src = film.cover;
        document.getElementById("modalCover").alt = film.title;
        document.getElementById("modalTitle").textContent = film.title;
        document.getElementById("modalDirector").textContent = `Diretor: ${film.director}`;
        document.getElementById("modalYear").textContent = `Ano: ${film.year}`;
        document.getElementById("modalDuration").textContent = `Duração: ${film.duration}`;
        document.getElementById("modalDescription").textContent = film.description;

        filmModal.style.display = "block";
      }
    });

    if (closeModal) {
      closeModal.addEventListener("click", () => {
        filmModal.style.display = "none";
      });
    }

    window.addEventListener("click", (e) => {
      if (e.target == filmModal) {
        filmModal.style.display = "none";
      }
    });
  }
});

