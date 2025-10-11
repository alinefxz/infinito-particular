document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // --- LÓGICA DO MENU HAMBÚRGUER ---
  // CORREÇÃO: Selecionando o elemento pelo ID correto 'menu-toggle'
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      // Adiciona/remove a classe 'active' para mostrar/esconder o menu
      nav.classList.toggle('active');
      // Adiciona/remove a classe para a animação do ícone (X)
      menuToggle.classList.toggle('active');
      // Adiciona/remove uma classe no body para evitar scroll da página
      body.classList.toggle('menu-open');
    });
  }

  // --- LÓGICA DO FORMULÁRIO DE CONTATO (AJAX) ---
  const formContato = document.getElementById('formContato');
  const formStatus = document.getElementById('form-status');

  if (formContato && formStatus) {
    formContato.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede o envio padrão do formulário

      const botao = formContato.querySelector('.botao');
      const formData = new FormData(formContato);

      // Desabilita o botão para evitar múltiplos envios
      botao.disabled = true;
      botao.textContent = 'Enviando...';

      fetch('../php/contato.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json()) // Espera uma resposta em formato JSON do PHP
      .then(data => {
        // Mostra a mensagem de sucesso ou erro
        formStatus.textContent = data.message;
        formStatus.className = data.status; // Adiciona a classe 'sucesso' ou 'erro'

        if (data.status === 'sucesso') {
          formContato.reset(); // Limpa o formulário
        }
      })
      .catch(() => {
        // Mensagem para erros de conexão/servidor
        formStatus.textContent = 'Ocorreu um erro de conexão. Tente novamente.';
        formStatus.className = 'erro';
      })
      .finally(() => {
        // Reabilita o botão após o fim da requisição
        botao.disabled = false;
        botao.textContent = 'Enviar Mensagem';
      });
    });
  }

  // --- LÓGICA DO BOTÃO VOLTAR AO TOPO ---
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    // Otimização: Mostra/esconde o botão com base no scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // Ação de clique para rolar suavemente para o topo
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
