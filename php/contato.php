<?php
session_start();

$status_classe = '';
$status_mensagem = '';
$mostrar_resultado = false;

$nome_enviado = '';
$email_enviado = '';
$mensagem_enviada = '';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $mostrar_resultado = true;

    // Captura dos dados
    $nome_raw = $_POST['nome'] ?? '';
    $email_raw = $_POST['email'] ?? '';
    $mensagem_raw = $_POST['mensagem'] ?? '';

    // Sanitização
    $nome_enviado = htmlspecialchars(trim($nome_raw));
    $email_enviado = filter_var(trim($email_raw), FILTER_SANITIZE_EMAIL);
    $mensagem_enviada = htmlspecialchars(trim($mensagem_raw));

    if (
        strlen($nome_enviado) < 3 ||
        strlen($mensagem_enviada) < 10 ||
        !filter_var($email_enviado, FILTER_VALIDATE_EMAIL)
    ) {
        $status_classe = 'erro';
        $status_mensagem = 'Preencha corretamente: nome (mín. 3 letras), e-mail válido e mensagem com pelo menos 10 caracteres.';
    } else {

        $pastaDados = "../dados";
        $arquivo = $pastaDados . "/contatos.json";

        $novoContato = [
            "nome" => $nome_enviado,
            "email" => $email_enviado,
            "mensagem" => $mensagem_enviada,
            "data" => date("Y-m-d H:i:s")
        ];

        try {
            // Cria a pasta se não existir
            if (!is_dir($pastaDados)) {
                mkdir($pastaDados, 0777, true);
            }

            // Cria o arquivo se não existir
            if (!file_exists($arquivo)) {
                file_put_contents($arquivo, json_encode([]));
            }

            // Lê o conteúdo do arquivo
            $conteudo = file_get_contents($arquivo);
            $dados = json_decode($conteudo, true);

            if (!is_array($dados)) {
                throw new Exception("JSON inválido");
            }

            // Adiciona o novo contato
            $dados[] = $novoContato;

            // Salva no arquivo
            file_put_contents(
                $arquivo,
                json_encode($dados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
            );

            $status_classe = 'sucesso';
            $status_mensagem = 'Mensagem enviada e salva com sucesso!';

        } catch (Exception $e) {
            $status_classe = 'erro';
            $status_mensagem = 'Erro ao salvar os dados.';
        }
    }

} else {
    header("Location: ../html/contato.php");
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

    <a href="../html/contato.php" class="botao" style="margin-top: 1.5rem;">Voltar</a>
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
