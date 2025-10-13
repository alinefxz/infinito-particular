<?php
// 1. Inicialização
$status_classe = '';
$status_mensagem = '';
$mostrar_resultado = false;
$nome_enviado = '';
$email_enviado = '';
$mensagem_enviada = '';

// 2. Verificação e validação
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mostrar_resultado = true;

    // E-mail do destinatário
    $destinatario = "seuemail@exemplo.com"; // <- Substitua pelo seu e-mail real
    $assunto = "Mensagem enviada pelo site Infinito Particular";

    // Sanitização dos campos (compatível com PHP 5.x+)
    $nome_raw = isset($_POST['nome']) ? $_POST['nome'] : '';
    $email_raw = isset($_POST['email']) ? $_POST['email'] : '';
    $mensagem_raw = isset($_POST['mensagem']) ? $_POST['mensagem'] : '';

    $nome_enviado = htmlspecialchars(trim($nome_raw));
    $email_enviado = filter_var(trim($email_raw), FILTER_SANITIZE_EMAIL);
    $mensagem_enviada = htmlspecialchars(trim($mensagem_raw));

    // Validação
    if (empty($nome_enviado) || empty($mensagem_enviada) || !filter_var($email_enviado, FILTER_VALIDATE_EMAIL)) {
        $status_classe = 'erro';
        $status_mensagem = 'Por favor, preencha todos os campos corretamente.';
    } else {
        // Monta o e-mail
        $conteudo = "Nome: $nome_enviado\n";
        $conteudo .= "E-mail: $email_enviado\n\n";
        $conteudo .= "Mensagem:\n$mensagem_enviada\n";

        $headers = "From: \"$nome_enviado\" <$email_enviado>\r\n";
        $headers .= "Reply-To: $email_enviado\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Tenta enviar o e-mail (silencia avisos com @)
        if (@mail($destinatario, $assunto, $conteudo, $headers)) {
            $status_classe = 'sucesso';
            $status_mensagem = ' Sua mensagem foi enviada com sucesso! Obrigado pelo contato.';
        } else {
            $status_classe = 'erro';
            $status_mensagem = 'Desculpe, ocorreu um erro no envio. Tente novamente mais tarde.';
        }
    }
} else {
    header("Location: ../html/contato.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultado do Envio | Infinito Particular</title>
  <link rel="icon" type="image/png" href="../imagens/logo.png">
  <link rel="stylesheet" href="../css/contato.css">
  <style>
    .mensagem-status {
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-weight: 600;
      animation: fadeIn 0.6s ease;
    }
    .mensagem-status.sucesso {
      background-color: #d4edda;
      color: #155724;
      border-left: 5px solid #28a745;
    }
    .mensagem-status.erro {
      background-color: #f8d7da;
      color: #721c24;
      border-left: 5px solid #dc3545;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .dados-enviados {
        background-color: #f3ede7;
        border: 1px solid #e0d9d1;
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 1.5rem;
        text-align: left;
    }
    .dados-enviados h4 {
        margin-top: 0;
        font-family: 'Libre Baskerville', serif;
    }
    .dados-enviados p {
        margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>

  <header class="topo">
    <div class="logo">
      <img src="../imagens/logo.png" alt="Logo Infinito Particular">
      <h1>Infinito <span>Particular</span></h1>
    </div>
  </header>

  <main class="conteudo-principal">
    <section class="intro">
      <h2>Resultado do Envio</h2>

      <?php if ($mostrar_resultado): ?>
        <p class="mensagem-status <?php echo $status_classe; ?>">
          <?php echo $status_mensagem; ?>
        </p>
      <?php endif; ?>

      <?php if ($status_classe === 'sucesso'): ?>
        <div class="dados-enviados">
          <h4>Resumo da sua mensagem:</h4>
          <p><strong>Nome:</strong> <?php echo $nome_enviado; ?></p>
          <p><strong>E-mail:</strong> <?php echo $email_enviado; ?></p>
          <p><strong>Mensagem:</strong><br><?php echo nl2br($mensagem_enviada); ?></p>
        </div>
      <?php endif; ?>

      <a href="../html/contato.html" class="botao" style="margin-top: 1.5rem;">Voltar</a>
    </section>
  </main>

  <footer>
    <div class="rodape-info">
      <p>"Só não se perca ao entrar, no nosso infinito particular."</p>
      <small>Infinito Particular © 2025 — feito com amor e música brasileira</small>
    </div>
  </footer>

</body>
</html>
