<?php session_start(); ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contato | Infinito Particular</title>
  <link rel="icon" type="image/png" href="../imagens/logo.png">
  <link rel="stylesheet" href="../css/contato.css">
</head>
<body>

<!-- Overlay para menu mobile -->
<div class="overlay"></div>

<header class="topo" id="topo">
    <div class="logo">
      <img src="../imagens/logo.png" alt="Logo Infinito Particular">
      <h1>Infinito<br><span>Particular</span></h1>
    </div>

    <div class="menu-toggle" id="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <nav id="nav">
      <ul>
        <li><a href="index.php">Início</a></li>
        <li><a href="sobre.php">Sobre</a></li>
      </ul>
    </nav>
  </header>

<main class="conteudo-principal">

  <section class="intro">
    <h2>Fale Conosco</h2>
    <p>Tem alguma dúvida, sugestão ou apenas quer mandar um oi?
       Preencha o formulário abaixo e entraremos em contato.</p>
  </section>

  <section class="container-form">
  <form 
    action="../php/processa_contato.php" 
    method="POST"
    class="form-contato"
    id="formContato"
  >

      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" required>

      <label for="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" rows="6" required></textarea>

      <button type="submit" class="botao">Enviar Mensagem</button>
    </form>
  </section>

</main>

<!-- Botão Voltar ao Topo -->
<div class="back-to-top" id="backToTop">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  </svg>
</div>

<?php include_once '1footer.php'; ?>

<script src="../js/scriptcontato.js"></script>
</body>
</html>
