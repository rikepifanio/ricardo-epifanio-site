// Adiciona funcionalidade ao formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que a página recarregue

  // Coleta os dados inseridos
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Mostra uma mensagem de confirmação
  const resposta = document.getElementById('resposta');
  resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

  // (Opcional) limpar campos
  this.reset();
});
