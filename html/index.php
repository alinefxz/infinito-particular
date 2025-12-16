<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Infinito Particular</title>
  <link rel="icon" type="image/png" href="../imagens/logo.png">
  <link rel="stylesheet" href="../css/style.css">
</head>

<body>
  <?php include 'header.php'; ?>

  <main>
    <section class="intro fade-in">
      <h2>Seu universo de descobertas.<br>Um convite à curiosidade.</h2>
      <p><strong>Explore os universos</strong> que habitam aqui.</p>
    </section>

    <div class="conteudo-principal">
      <section class="mundos" id="mundos">
        <h3>Mundos para explorar</h3>
        <div class="cards">
          
          <a href="livros.php" target="_blank" rel="noopener noreferrer">
            <div class="card">
              <div class="icone">
                <img src="../imagens/cardlivros.png" alt="Ícone de livros">
              </div>
              <h4>Mundos Escritos</h4>
              <p>O cheiro de livro novo e o conforto de ter um infinito só para si.</p>
            </div>
          </a>

          <a href="cine.php" target="_blank" rel="noopener noreferrer">
            <div class="card">
              <div class="icone">
                <img src="../imagens/cinema_logo.png" alt="Ícone de tela e pipoca">
              </div>
              <h4>Tela e Pipoca</h4>
              <p>Histórias que ganham vida no brilho da tela.</p>
            </div>
          </a>
          
          <a href="musicas.php" target="_blank" rel="noopener noreferrer">
            <div class="card">
              <div class="icone">
                <img src="../imagens/pngtree-colorful-musical-note-on-a-paper-vector-png-image_12229917.png" alt="Ícone de nota musical">
              </div>
              <h4>Músicas</h4>
              <p>Melodias que ecoam no infinito do sentir.</p>
            </div>
          </a>

        </div>
      </section>

      <aside class="sobre">
        <h3>Sobre o Infinito Particular</h3>
        <p>Este é um pedaço de nós, e agora pode ser um pedaço seu. Bem-vindo ao nosso <b>infinito particular</b>. Um convite para se perder no encanto da descoberta. Sinta-se em casa, este refúgio também te pertence.</p>
        <a href="sobre.php" class="botao-sobre">Saiba mais</a>
      </aside>
    </div>
  </main>

  <div class="back-to-top" id="backToTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 4l-8 8h5v8h6v-8h5z"/>
    </svg>
  </div>

  <?php include_once 'footer.php'; ?>

  <script src="../js/script.js"></script>
</body>
</html>