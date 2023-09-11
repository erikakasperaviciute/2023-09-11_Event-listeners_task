// Užduotis:

// 1. Sukurti HTML elementą, kurio id „numbers"

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus

// 3. h3 elemento tekstas turėtų būti „5"

// 4. Mygtukų tekstas turėtų būti „+" ir „-"

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.

// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')

// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti du naujus mygtukus, kurie:
// 11.1. Prideda dvejetą prie esamos h3 elemento reikšmės.
// 11.2. Atima dvejetą iš esamos h3 elemento reikšmės.

// 12. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį prepend'inti prie ul elemento.

// 15. Į li elementą įrašytas balas turi būti tos pačios spalvos kaip ir h3 elemente.

// 16.1. Sukurti mygtuką ir jį įdėti į li elementą.
// 16.2. Paspaudus šį mygtuką, li elementas su balu turi būti ištrintas.
let initialNumber = 5;
let number = initialNumber;
let div = document.getElementById("numbers");

let h3 = document.createElement("h3");
h3.textContent = number;

let plusBtn = document.createElement("button");
plusBtn.textContent = "+";

let minusBtn = document.createElement("button");
minusBtn.textContent = "-";

let resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

let minus2Btn = document.createElement("button");
minus2Btn.textContent = "-2";

let plus2Btn = document.createElement("button");
plus2Btn.textContent = "+2";

let inputElement = document.createElement("input");
inputElement.setAttribute("type", "number");
inputElement.setAttribute("min", "1");
inputElement.setAttribute("max", "10");
inputElement.setAttribute("value", number);

let h4 = document.createElement("h4");
h4.textContent = "Balai:";

let scoreList = document.createElement("ul");

let addScoreBtn = document.createElement("button");
addScoreBtn.textContent = "Įrašyti balą";

div.append(
  inputElement,
  h3,
  minus2Btn,
  minusBtn,
  resetBtn,
  plusBtn,
  plus2Btn,
  addScoreBtn,
  h4,
  scoreList
);

addScoreBtn.addEventListener("click", function () {
  let scoreItem = document.createElement("li");
  scoreItem.textContent = h3.textContent;
  scoreItem.style.color = h3.style.color;
  scoreList.prepend(scoreItem);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.color = "red";

  deleteBtn.addEventListener("click", function () {
    scoreItem.remove();
  });
  scoreItem.append(deleteBtn);
});

function colorChange() {
  if (h3.textContent >= 5) {
    h3.style.color = "green";
  }
  if (h3.textContent < 5) {
    h3.style.color = "red";
  }
}
colorChange();

plusBtn.addEventListener("click", function () {
  h3.textContent = Number(h3.textContent) + 1;
  btnAttribute();
});

minusBtn.addEventListener("click", function () {
  h3.textContent = Number(h3.textContent) - 1;
  btnAttribute();
});

function btnAttribute() {
  inputElement.value = h3.textContent;
  colorChange();
  if (h3.textContent < 3) {
    minus2Btn.setAttribute("disabled", true);
  } else {
    minus2Btn.removeAttribute("disabled");
  }
  if (h3.textContent < 2) {
    minusBtn.setAttribute("disabled", true);
  } else {
    minusBtn.removeAttribute("disabled");
  }
  if (h3.textContent >= 9) {
    plus2Btn.setAttribute("disabled", true);
  } else {
    plus2Btn.removeAttribute("disabled");
  }
  if (h3.textContent >= 10) {
    plusBtn.setAttribute("disabled", true);
  } else {
    plusBtn.removeAttribute("disabled");
  }
}

function resetCounter() {
  h3.textContent = initialNumber;
  inputElement.value = initialNumber;
  plusBtn.removeAttribute("disabled");
  plus2Btn.removeAttribute("disabled");
  minusBtn.removeAttribute("disabled");
  minus2Btn.removeAttribute("disabled");
  colorChange();
}

resetBtn.addEventListener("click", function () {
  resetCounter();
});

plus2Btn.addEventListener("click", function () {
  h3.textContent = Number(h3.textContent) + 2;
  btnAttribute();
});

minus2Btn.addEventListener("click", function () {
  h3.textContent = Number(h3.textContent) - 2;
  btnAttribute();
});

function updateValue(e) {
  h3.textContent = e.target.value;
  colorChange();
  if (h3.textContent < 3) {
    minus2Btn.setAttribute("disabled", true);
  } else {
    minus2Btn.removeAttribute("disabled");
  }
  if (h3.textContent < 2) {
    minusBtn.setAttribute("disabled", true);
  } else {
    minusBtn.removeAttribute("disabled");
  }
  if (h3.textContent >= 9) {
    plus2Btn.setAttribute("disabled", true);
  } else {
    plus2Btn.removeAttribute("disabled");
  }
  if (h3.textContent >= 10) {
    plusBtn.setAttribute("disabled", true);
  } else {
    plusBtn.removeAttribute("disabled");
  }
}

inputElement.addEventListener("input", updateValue);
