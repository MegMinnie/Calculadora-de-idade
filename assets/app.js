const botao = document.querySelector("button");
const paragrafo = document.querySelector(".p");
let input = document.querySelector('input[type="date"]');

botao.addEventListener("click", function aniversario() {
  let agora = new Date();
  let ano = agora.getFullYear();
  let mes = agora.getMonth();
  let dia = agora.getDate();

  const nasc = new Date(input.value);

  if (isNaN(nasc)) {
    paragrafo.innerHTML = "Por favor, insira uma data válida.";
    return;
  }

  let nascAno = nasc.getFullYear();
  let nascMes = nasc.getMonth();
  let nascDia = nasc.getDate();

  let idade = ano - nascAno;

  if (mes < nascMes || (mes === nascMes && dia < nascDia)) {
    idade--;
  }

  paragrafo.innerHTML = `Sua idade é ${idade} anos`;
  return idade;
});
