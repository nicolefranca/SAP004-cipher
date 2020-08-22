import cipher from "./cipher.js";

// Definição de variáveis e de eventos
const cifra = document.getElementById("btn-code");
const decifra = document.getElementById("btn-decode");
// Atribuindo eventos
cifra.addEventListener("click", printCode);
decifra.addEventListener("click", printDecode);
// Funções
function printCode() {
  let mensagem = document.getElementById("word").value;
  let offset = document.getElementById("desl").value;
  document.getElementById("finalWord").textContent = `Palavra cifrada: ${cipher.encode(offset, mensagem)}`;
}
function printDecode() {
  let mensagem = document.getElementById("word").value;
  let offset = document.getElementById("desl").value;
  document.getElementById(
    "finalWord"
  ).textContent = `Palavra decifrada: ${cipher.decode(offset, mensagem)}`;
}
