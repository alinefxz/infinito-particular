<?php
$destinatario = "seuemail@exemplo.com"; // Substitua pelo seu e-mail real
$assunto = "Mensagem enviada pelo site Infinito Particular";
$sucesso = false;
$erro = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = htmlspecialchars(trim($_POST["nome"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));
    $mensagem = htmlspecialchars(trim($_POST["mensagem"] ?? ""));

    if (!empty($nome) && !empty($email) && !empty($mensagem) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $conteudo = "Nova mensagem enviada pelo site:\n\n";
        $conteudo .= "Nome: $nome\n";
        $conteudo .= "E-mail: $email\n";
        $conteudo .= "Mensagem:\n$mensagem\n";

        $headers = "From: $nome <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($destinatario, $assunto, $conteudo, $headers)) {
            $sucesso = true;
        } else {
            $erro = true;
        }
    } else {
        $erro = true;
    }
}
?>

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

  <header class="topo">
    <div class="logo">
      <img src="../imagens/logo.png" alt="Logo Infinito Particular">
      <h1>Infinito<br><span>Particular</span></h1>
    </div>
    <nav id="menu">
      <ul>
        <li><a href="../html/index.html">Início</a></li>
        <li><a href="../html/sobre.html">Sobre</a></li>
      </ul>
    </nav>
  </header>

  <main class="conteudo-principal">
    <section class="intro">
      <h2>Resultado do envio</h2>

      <?php if($sucesso): ?>
        <p class="mensagem-status sucesso">🎉 Sua mensagem foi enviada com sucesso! Obrigado pelo contato.</p>
        <a href="../html/contato.html" class="botao">Voltar</a>
      <?php elseif($erro): ?>
        <p class="mensagem-status erro">❌ Ocorreu um erro ao enviar. Tente novamente mais tarde.</p>
        <a href="../html/contato.html" class="botao">Voltar</a>
      <?php else: ?>
        <p class="mensagem-status erro">Acesso inválido. Por favor, envie o formulário novamente.</p>
        <a href="../html/contato.html" class="botao">Voltar</a>
      <?php endif; ?>
    </section>
  </main>

  <footer>
    <div class="rodape-info">
      <p>"Só não se perca ao entrar, no nosso infinito particular."</p>
      <small>Infinito Particular © 2025 — feito com amor e música brasileira</small>
    </div>
  </footer>

  <div class="back-to-top" id="backToTop" title="Voltar ao topo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 8l6 6H6z"/>
    </svg>
  </div>

  <script src="../js/scriptcontato.js"></script>
</body>
</html>