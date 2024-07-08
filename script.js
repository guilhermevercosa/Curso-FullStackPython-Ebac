// Seleciona o formulário e o elemento de mensagem
const formulario = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento de submissão ao formulário
formulario.addEventListener('submit', function(event) {
    // Impede o envio do formulário
    event.preventDefault();

    // Obtém os valores dos campos A e B
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    // Valida se o campo B é maior que o campo A
    if (campoB > campoA) {
        // Exibe uma mensagem positiva
        mensagem.textContent = 'Formulário válido: O número B é maior que o número A.';
        mensagem.style.color = 'green';
    } else {
        // Exibe uma mensagem negativa
        mensagem.textContent = 'Formulário inválido: O número B deve ser maior que o número A.';
        mensagem.style.color = 'red';
    }
});