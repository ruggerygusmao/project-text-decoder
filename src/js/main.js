function accentCheck(frase) {
  const words = frase.split(/\s+/);
  const expressaoRegularAcento = /[áàâãéèêíïóôõöúçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]/;
  const expressaoRegularEspeciais = /[\W_]/;

  for (const word of words) {
    if (
      expressaoRegularAcento.test(word) ||
      expressaoRegularEspeciais.test(word)
    ) {
      return true;
    }
  }

  return false;
}

function textToHtml(text) {
  const containerResult = document.getElementById("container__result");
  const elementResult = document.getElementById("result");
  const elementImage = document.getElementById("section__image");
  containerResult.style.display = "flex";
  elementImage.style.display = "none";
  elementResult.style.display = "block";

  return (elementResult.innerHTML = text.join(" "));
}

function decryptText() {
  let text = document.querySelector("textarea").value;
  let elemetHtml = document.querySelector("p");
  let wordArray = text.split(" ");
  let newWordArray = [];

  if (accentCheck(text) || text === text.toUpperCase()) {
    const elementResult = document.getElementById("result");
    const elementImage = document.getElementById("section__image");
    elementImage.style.display = "flex";
    elementResult.style.display = "none";
    return (elemetHtml.innerHTML =
      "<span style='color: #f3aeae;'>O texto não deve conter letras maiúsculas, acentos e caracteres especiais.</span>");
  }

  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];

    while (word.includes("ai")) {
      word = word.replace("ai", "a");
    }
    while (word.includes("enter")) {
      word = word.replace("enter", "e");
    }
    while (word.includes("imes")) {
      word = word.replace("imes", "i");
    }
    while (word.includes("ober")) {
      word = word.replace("ober", "o");
    }
    while (word.includes("ufat")) {
      word = word.replace("ufat", "u");
    }
    newWordArray.push(word);
  }
  return textToHtml(newWordArray);
}

function encryptedText() {
  let text = document.querySelector("textarea").value;
  let elemetHtml = document.querySelector("p");
  let wordArray = text.split(" ");
  let newWordArray = [];

  if (accentCheck(text) || text === text.toUpperCase()) {
    const elementResult = document.getElementById("result");
    const elementImage = document.getElementById("section__image");
    elementImage.style.display = "flex";
    elementResult.style.display = "none";
    elemetHtml.style.color = "#f3aeae";
    return (elemetHtml.innerHTML =
      "O texto não deve conter letras maiúsculas, acentos e caracteres especiais.");
  }

  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    let newLetterArray = [];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === "a") {
        newLetterArray.push("ai");
      } else if (word[j] === "e") {
        newLetterArray.push("enter");
      } else if (word[j] === "i") {
        newLetterArray.push("imes");
      } else if (word[j] === "o") {
        newLetterArray.push("ober");
      } else if (word[j] === "u") {
        newLetterArray.push("ufat");
      } else {
        newLetterArray.push(word[j]);
      }
    }
    newWordArray.push(newLetterArray.join(""));
  }

  return textToHtml(newWordArray);
}

function myClear() {
  var elementTextarea = document.getElementById("text").value;
  let elemetHtml = document.querySelector("p");
  const containerResult = document.getElementById("container__result");

  if (elementTextarea.length == 0) {
    elemetHtml.innerHTML =
      "Digite um texto que você deseja criptografar ou descriptografar.";
    elemetHtml.style.color = "#ebfcff";
    const elementResult = document.getElementById("result");
    const elementImage = document.getElementById("section__image");
    elementImage.style.display = "flex";
    elementResult.style.display = "none";
    containerResult.style.display = "none";
  }
}

function copyText() {
  var elementoDiv = document.getElementById("result");

  var range = document.createRange();
  range.selectNode(elementoDiv);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();

  var button = document.getElementById("button__copy");
  button.innerText = "Copiado";
  button.disabled = true;
  button.classList.add("button__copied");

  /* Reverter o texto do botão após alguns segundos (opcional) */
  setTimeout(function () {
    button.innerText = "Copiar";
    button.disabled = false;
    button.classList.remove("button__copied");
  }, 5000); // Reverter após 2 segundos (ajuste conforme necessário)
}
