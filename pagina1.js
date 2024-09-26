// Função para abrir o modal de confirmação
function confirmDelete() {
    // Exibe o modal
    document.getElementById("confirmModal").style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
    // Esconde o modal
    document.getElementById("confirmModal").style.display = "none";
}

// Função de exclusão (pode ser customizada para realmente deletar o item)
function deleteItem() {
    // Lógica para deletar o item (substitua com o código que realmente exclui o item)
    alert("Coordenador(a) deletado com sucesso!");
    // Fecha o modal após a exclusão
    closeModal();
}
