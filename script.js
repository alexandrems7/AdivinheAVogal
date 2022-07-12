document.querySelector(".detalhes").textContent = "Tenta aí! 😉";
let vogal = (document.querySelector(".vogal-secreta").textContent = "?");

let pontuacao = Number(document.getElementById("pontuacao").textContent);

console.log(pontuacao, typeof pontuacao);

let maiorPontuacao = (document.getElementById(
  "maior-pontuacao"
).textContent = 0);

let pontuacaoMaior = function () {
  if (pontuacao > maiorPontuacao) {
    maiorPontuacao = pontuacao;
    document.getElementById("maior-pontuacao").textContent = maiorPontuacao;
  }
};

let numJogos = (document.getElementById("num-jogos").textContent = 0);

let numeroJogos = function () {
  numJogos += 1;
  document.getElementById("num-jogos").textContent = numJogos;
};

let vogais, localizacaoVogal;

let vogalAleatoria = function () {
  vogais = ["A", "E", "I", "O", "U"];
  localizacaoVogal = Math.trunc(Math.random() * 5);
  return vogais[`${localizacaoVogal}`];
};

let vogalA = vogalAleatoria();
console.log(vogalA);

const termometro = function () {
  if (pontuacao === 15) {
    document.querySelector(".vinte").classList.add("oculto");
  } else if (pontuacao === 10) {
    document.querySelector(".vinte").classList.add("oculto");
    document.querySelector(".quinze").classList.add("oculto");
  } else if (pontuacao === 5) {
    document.querySelector(".vinte").classList.add("oculto");
    document.querySelector(".quinze").classList.add("oculto");
    document.querySelector(".dez").classList.add("oculto");
  } else if (pontuacao < 5) {
    document.querySelector(".vinte").classList.add("oculto");
    document.querySelector(".quinze").classList.add("oculto");
    document.querySelector(".dez").classList.add("oculto");
    document.querySelector(".cinco").classList.add("oculto");
    document.querySelector(".perdeu").classList.remove("oculto");
    vogalA = vogalAleatoria();
    console.log(vogalA);
    numeroJogos();
    pontuacaoMaior();
    document.getElementById("input").value = "";
    document.querySelector(".tenteNovamente").textContent =
      "Tente novamente 😎";
  }
};

let jogo = function () {
  document
    .querySelector(".botao-entrada")
    .addEventListener("click", function () {
      let campoEntrada = String(
        document.querySelector(".campo-entrada").value.toUpperCase()
      );
      console.log(campoEntrada, typeof campoEntrada);

      if (
        (campoEntrada !== vogalA) &
        (campoEntrada === "A" ||
          campoEntrada === "E" ||
          campoEntrada === "I" ||
          campoEntrada === "O" ||
          campoEntrada === "U")
      ) {
        if (pontuacao >= 5) {
          pontuacao -= 5;
          document.getElementById("pontuacao").textContent = pontuacao;
          termometro();
        } else {
          pontuacao = 0;
          document.getElementById("pontuacao").textContent = pontuacao;
        }

        document.querySelector(".detalhes").textContent = "Ainda não. 😐";
      } else if (campoEntrada === vogalA) {
        document.querySelector(".detalhes").textContent = "Parabéns! 😀";

        document.getElementById("input").value = "";
        numeroJogos();
        pontuacaoMaior();
        document.querySelector(".tenteNovamente").textContent =
          "Jogar novamente 😎";
        document.querySelector(".acertou").classList.remove("oculto");
        document.querySelector(".vogal-secreta").textContent = vogalA;
        vogalA = vogalAleatoria();
        console.log(vogalA);
        document
          .querySelector(".tenteNovamente")
          .addEventListener("click", function () {
            pontuacao = 20;
            document.getElementById("pontuacao").textContent = pontuacao;
            document.querySelector(".tenteNovamente").textContent =
              "Reiniciar este jogo ↩️";
            document.querySelector(".acertou").classList.add("oculto");
            document.querySelector(".vinte").classList.remove("oculto");
            document.querySelector(".quinze").classList.remove("oculto");
            document.querySelector(".dez").classList.remove("oculto");
            document.querySelector(".cinco").classList.remove("oculto");
            document.querySelector(".vogal-secreta").textContent = "?";
            document.querySelector(".detalhes").textContent = "Tenta aí! 😉";
          });
      } else if (
        (campoEntrada !== "A") &
        (campoEntrada !== "E") &
        (campoEntrada !== "I") &
        (campoEntrada !== "O") &
        (campoEntrada !== "U")
      ) {
        document.querySelector(".detalhes").textContent = "Inválido. 😞";
      }
      console.log(`Número de jogos: ${numJogos}`);
      console.log(`Pontuacao: ${pontuacao}`);

      document
        .querySelector(".tenteNovamente")
        .addEventListener("click", function () {
          pontuacao = 20;
          document.getElementById("pontuacao").textContent = pontuacao;
          console.log(`Número de jogos: ${numJogos}`);
          document.querySelector(".tenteNovamente").textContent =
            "Reiniciar este jogo ↩️";
          document.querySelector(".perdeu").classList.add("oculto");
          document.querySelector(".acertou").classList.add("oculto");
          document.querySelector(".vinte").classList.remove("oculto");
          document.querySelector(".quinze").classList.remove("oculto");
          document.querySelector(".dez").classList.remove("oculto");
          document.querySelector(".cinco").classList.remove("oculto");
          document.querySelector(".detalhes").textContent = "Tenta aí! 😉";
        });
    });
};
jogo();

// document.querySelector(".vinte").classList.remove("oculto");
// document.querySelector(".quinze").classList.remove("oculto");
// document.querySelector(".dez").classList.remove("oculto");
// document.querySelector(".cinco").classList.remove("oculto");
// document.querySelector(".perdeu").classList.add("oculto");
// document.querySelector(".tenteNovamente").classList.add("oculto");
// document.getElementById("maior-pontuacao").textContent = pontuacao;
// pontuacao.textContent = 20;
