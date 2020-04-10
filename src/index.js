import cipher from './cipher.js';

 console.log(cipher);
  // Definição de variáveis e de eventos
   let cifra = document.getElementById("btnCode")
   let decifra = document.getElementById("btnDecode")
  // Atribuindo eventos 
    cifra.addEventListener("click", printCode)
     decifra.addEventListener("click", printDecode)
   // Funções
  function printCode() {
    let mensagem = document.getElementById("word").value
    let offset = document.getElementById("desl").value 
    document.getElementById("finalWord").innerHTML = `Palavra cifrada: ${cipher.encode(offset,mensagem)}`
  }
  function printDecode() {
    let mensagem = document.getElementById("word").value
    let offset = document.getElementById("desl").value 
      document.getElementById("finalWord").innerHTML = `Palavra decifrada: ${cipher.decode(offset,mensagem)}`
  }