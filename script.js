console.log("O script foi carregado com sucesso!");

document.getElementById('formInscricao').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Inscrição enviada com sucesso!');
});