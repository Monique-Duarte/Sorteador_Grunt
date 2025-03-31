document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede a atualização do formulário
    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo);

    let numroAleatorio = Math.random() * numeroMaximo;

    document.getElementById('resultado-valor').innerText = `O número sorteado foi: ${Math.floor(numroAleatorio)}`;
    document.querySelector('.resultado').style.display = 'block';
  })
})