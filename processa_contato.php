<?php
// processa_contato.php

// Garante acesso apenas via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../html/contato.php');
    exit;
}

try {
    // Sanitização dos dados
    $nome = trim(filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $mensagem = trim(filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_SPECIAL_CHARS));

    // Validações no servidor
    if (empty($nome) || empty($email) || empty($mensagem)) {
        throw new Exception('Todos os campos são obrigatórios.');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('E-mail inválido.');
    }

    // Caminho do arquivo JSON
    $diretorio = __DIR__ . '/../dados';
    $arquivo = $diretorio . '/contatos.json';

    // Cria o diretório se não existir
    if (!is_dir($diretorio)) {
        if (!mkdir($diretorio, 0755, true)) {
            throw new Exception('Erro ao criar diretório de dados.');
        }
    }

    // Estrutura do novo contato
    $novoContato = [
        'nome'      => $nome,
        'email'     => $email,
        'mensagem'  => $mensagem,
        'data'      => date('Y-m-d H:i:s'),
        'ip'        => $_SERVER['REMOTE_ADDR']
    ];

    // Se o arquivo existir, lê o conteúdo
    if (file_exists($arquivo)) {
        $conteudo = file_get_contents($arquivo);
        $dados = json_decode($conteudo, true);

        if (!is_array($dados)) {
            $dados = [];
        }
    } else {
        $dados = [];
    }

    // Adiciona o novo contato
    $dados[] = $novoContato;

    // Salva no JSON
    if (file_put_contents(
        $arquivo,
        json_encode($dados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
    ) === false) {
        throw new Exception('Erro ao salvar os dados.');
    }

    // Redireciona com sucesso
    header('Location: ../html/contato.php?status=sucesso');
    exit;

} catch (Exception $e) {

    // Em caso de erro, redireciona com mensagem
    header(
        'Location: ../html/contato.php?status=erro&msg=' .
        urlencode($e->getMessage())
    );
    exit;
}
