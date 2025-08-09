

const intrebari = [
  {
    intrebare: "Ce face comanda 'console.log()'?",
    optiuni: ["Afișează un mesaj în consolă", "Adaugă un element HTML", "Trimite un email"],
    corect: 0
  },
  {
    intrebare: "Cum declari o variabilă în JavaScript?",
    optiuni: ["int x = 5;", "let x = 5;", "dim x = 5;"],
    corect: 1
  },
  {
    intrebare: "Ce înseamnă DOM?",
    optiuni: ["Document Object Model", "Data Object Memory", "Design On Monitor"],
    corect: 0
  }
];

let indexIntrebare = 0;
let scor = 0;

function afiseazaIntrebare() {
  const intrebareEl = document.getElementById("intrebare");
  const raspunsuriEl = document.getElementById("raspunsuri");
  const btnUrmator = document.getElementById("urmatorul");
  const intrebareCurenta = intrebari[indexIntrebare];

  intrebareEl.textContent = intrebareCurenta.intrebare;
  raspunsuriEl.innerHTML = "";
  btnUrmator.style.display = "none";

  intrebareCurenta.optiuni.forEach((optiune, i) => {
    const btn = document.createElement("button");
    btn.textContent = optiune;
    btn.onclick = () => verificaRaspuns(i, btn);
    raspunsuriEl.appendChild(btn);
  });
}

function verificaRaspuns(indexRaspuns, buton) {
  const intrebareCurenta = intrebari[indexIntrebare];
  const toateButoanele = document.querySelectorAll("#raspunsuri button");

  toateButoanele.forEach(b => b.disabled = true);

  if (indexRaspuns === intrebareCurenta.corect) {
    buton.classList.add("corect");
    scor++;
  } else {
    buton.classList.add("gresit");
    toateButoanele[intrebareCurenta.corect].classList.add("corect");
  }

  document.getElementById("urmatorul").style.display = "block";
}

function urmatoareaIntrebare() {
  indexIntrebare++;

  if (indexIntrebare < intrebari.length) {
    afiseazaIntrebare();
  } else {
    arataRezultatulFinal();
  }
}

function arataRezultatulFinal() {
  document.getElementById("intrebare").style.display = "none";
  document.getElementById("raspunsuri").style.display = "none";
  document.getElementById("urmatorul").style.display = "none";
  document.getElementById("rezultat").textContent = `Ai răspuns corect la ${scor} din ${intrebari.length} întrebări!`;
}

afiseazaIntrebare();
