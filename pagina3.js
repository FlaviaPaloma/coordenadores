// Get the modal elements
const modal = document.getElementById('confirmation-modal');
const saveBtn = document.getElementById('salvar-btn');
const cancelBtn = document.getElementById('cancelar-btn');
const confirmBtn = document.getElementById('confirmar-btn');

// When the save button is clicked, display the modal
saveBtn.addEventListener('click', function() {
    modal.style.display = 'block'; // Show the modal
});

// When the cancel button is clicked, hide the modal
cancelBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

// When the confirm button is clicked, submit the form or proceed
confirmBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
    alert("Dados salvos com sucesso!"); // You can change this to submit the form
});
