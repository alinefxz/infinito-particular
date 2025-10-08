<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nome = htmlspecialchars(trim($_POST["nome"] ?? ""));
  $email = htmlspecialchars(trim($_POST["email"] ?? ""));
  $mensagem = htmlspecialchars(trim($_POST["mensagem"] ?? ""));

  if ($nome && $email && $mensagem) {
    $resposta = "<p class='sucesso'>✅ Obrigado, <strong>$nome</strong>! Sua mensagem foi enviada com sucesso.</p>";
  } else {
    $resposta = "<p class='erro'>⚠️ Por favor, preencha todos os campos.</p>";
  }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contato | Infinito Particular</title>
  <link rel="icon" type="image/png" href="imagens/logo.png">
  <link rel="stylesheet" href="css/contato.css">
</head>
<body>

  <header class="topo">
    <div class="logo">
      <img src="imagens/logo.png" alt="Logo Infinito Particular">
      <h1>Infinito <span>Particular</span></h1>
    </div>
  </header>

  <main class="conteudo-principal">
    <h2>Contato</h2>

    <?php if (!empty($resposta)) echo $resposta; ?>

    <form action="contato.php" method="post" class="form-contato">
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" placeholder="Seu nome completo">

      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com">

      <label for="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" rows="6" placeholder="Escreva sua mensagem aqui..."></textarea>

      <button type="submit" class="botao">Enviar</button>
    </form>
  </main>

  <footer>
    <div class="rodape-info">
      <p>© 2025 Infinito Particular. Todos os direitos reservados.</p>
    </div>
  </footer>
</body>
</html>
