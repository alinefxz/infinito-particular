<?php
// Frases aleatórias para o rodapé/intro
$frases = [
  "“O cinema é a escrita moderna cuja tinta é a luz.” — Jean Cocteau",
  "“A arte é a mentira que nos permite conhecer a verdade.” — Pablo Picasso",
  "“O cinema é uma forma de sonhar acordado.” — Federico Fellini",
  "“O filme é um sonho que você nunca esquece.” — Martin Scorsese",
  "“O cinema é a maior máquina de empatia que já foi inventada.” — Roger Ebert",
  "“Só não se perca ao entrar, no nosso infinito particular.”"
];
$fraseAleatoria = $frases[array_rand($frases)];
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Infinito Particular</title>
  <link rel="icon" type="image/jpeg" href="../imagens/logo.png">
  <link rel="stylesheet" href="../css/cine.css">
</head>

<body>
  <?php include 'header2.php'; ?>

  <main>
    <section class="intro fade-in">
      <h2>Sua tela de grandes emoções.<br>Um convite à magia do cinema.</h2>
      <p><strong>Explore os universos</strong> que ganham vida na tela.</p>

      <!-- Frase aleatória (inserida via PHP) -->
      <p class="frase-aleatoria"><?php echo $fraseAleatoria; ?></p>

    </section>

    <div class="filmes-container">
      <div class="filmes-grid" id="filmesGrid"></div>
    </div>
  </main>

  <!-- Modal de Detalhes do Filme -->
  <div id="filmModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="modal-body">
        <img id="modalCover" src="" alt="Capa do Filme">
        <div class="modal-info">
          <h2 id="modalTitle"></h2>
          <p id="modalDirector"></p>
          <p id="modalYear"></p>
          <p id="modalDuration"></p>
          <p id="modalDescription"></p>
        </div>
      </div>
    </div>
  </div>

  <div class="back-to-top" id="backToTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 4l-8 8h5v8h6v-8h5z"/>
    </svg>
  </div>

  <footer>
    <div class="rodape-info">
      <p>"Só não se perca ao entrar, no nosso infinito particular."</p>
      <small>Infinito Particular © <?php echo date("Y"); ?> — feito com amor e música brasileira</small>
    </div>
  </footer>

  <script src="../js/cine.js"></script>
</body>
</html>
