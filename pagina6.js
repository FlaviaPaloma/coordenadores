document.getElementById('atualizar-btn').addEventListener('click', function () {
    // Exibir o modal de confirmação
    document.getElementById('confirmacao-modal').style.display = 'flex';
});

document.getElementById('nao-btn').addEventListener('click', function () {
    // Esconder o modal de confirmação se o usuário clicar em "Não"
    document.getElementById('confirmacao-modal').style.display = 'none';
});

document.getElementById('sim-btn').addEventListener('click', function () {
    // Submeter o formulário caso o usuário clique em "Sim"
    document.getElementById('form-coordenador').submit();
});
