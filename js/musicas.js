const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const body = document.body;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('menu-open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

document.addEventListener('click', (e) => {
  if (body.classList.contains('menu-open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

const backToTop = document.getElementById('backToTop');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (window.scrollY > 300 && footerTop > windowHeight) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
  body.classList.add('fade-in');
});

const songsData = {
  1: {
    title: "Infinito Particular",
    artist: "Marisa Monte",
    album: "Memórias, Crônicas e Declarações de Amor",
    year: "2000",
    cover: "../imagens/infinito.jpg",
    description: "Uma das faixas mais icônicas de Marisa Monte, fala sobre emoções intensas e a complexidade dos sentimentos humanos."
  },
  2: {
    title: "Oceano",
    artist: "Djavan",
    album: "Djavan",
    year: "1981",
    cover: "../imagens/oceano.jpg",
    description: "Oceano é uma viagem poética pelas profundezas da emoção e do amor. A melodia suave e envolvente combina com letras que falam sobre intensidade, encontros e despedidas, transmitindo a sensação de flutuar entre sentimentos e lembranças."
  },
  3: {
    title: "Espatódea",
    artist: "Nando Reis",
    album: "Para Quando o Arco-Íris Encontrar o Pote de Ouro",
    year: "2001",
    cover: "../imagens/nando.jpg",
    description: "Uma melodia doce e introspectiva que mistura nostalgia e esperança, falando sobre conexões humanas e momentos que permanecem na memória."
  },
  4: {
    title: "Todo Amor Que Houver Nessa Vida",
    artist: "Cazuza",
    album: "O Poeta Está Vivo",
    year: "1988",
    cover: "../imagens/ca.jpg",
    description: "Uma balada intensa sobre a necessidade de viver e amar plenamente, sem medo das dores que o amor pode trazer."
  },
  5: {
    title: "Velha Infância",
    artist: "Tribalistas",
    album: "Tribalistas",
    year: "2002",
    cover: "../imagens/tribalistas.jpg",
    description: "Um clássico doce e delicado sobre cumplicidade e amor genuíno, retratando a intimidade afetiva de quem compartilha momentos eternos juntos."
  },
  6: {
  title: "Roda-Gigante",
  artist: "Biquini Cavadão",
  album: "Descivilizado",
  year: "1991",
  cover: "../imagens/roda-gigante.jpg",
  description: "Uma música animada que mistura rock e poesia, falando sobre a vida, suas voltas e altos e baixos, com um clima nostálgico e leve."
}

};

const modal = document.getElementById('songModal');
const modalCover = document.getElementById('modalCover');
const modalTitle = document.getElementById('modalTitle');
const modalArtist = document.getElementById('modalArtist');
const modalAlbum = document.getElementById('modalAlbum');
const modalYear = document.getElementById('modalYear');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = modal.querySelector('.close');

document.querySelectorAll('.song').forEach(song => {
  song.addEventListener('click', () => {
    const songId = song.dataset.song;
    const info = songsData[songId];

    if (info) {
      modalCover.src = info.cover;
      modalTitle.textContent = info.title;
      modalArtist.textContent = info.artist;
      modalAlbum.textContent = `Álbum: ${info.album}`;
      modalYear.textContent = `Ano: ${info.year}`;
      modalDescription.textContent = info.description;

      modal.style.display = 'flex';
      body.style.overflow = 'hidden';
    }
  });
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
}


const playlistLink = document.getElementById("playlistLink");
if (playlistLink) {
  playlistLink.addEventListener("click", (e) => {
    e.preventDefault();
    const playlistURL = "https://open.spotify.com/playlist/4KAY4lQ5eHGQxUSYUTMdFE?si=c281a3730291488d";
    window.open(playlistURL, "_blank");
  });
}
