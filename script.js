// Užduotis:

// 1. Sukurti HTML elementą, kurio id „numbers"

// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus

// 3. h3 elemento tekstas turėtų būti „5"

// 4. Mygtukų tekstas turėtų būti „+" ir „-"

// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.

// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')

// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)

let div = document.getElementById("numbers");

let h3 = document.createElement("h3");
h3.textContent = 5;

let plusBtn = document.createElement("button");
plusBtn.textContent = "+";

let minusBtn = document.createElement("button");
minusBtn.textContent = "-";

div.append(h3, plusBtn, minusBtn);

plusBtn.addEventListener("click", function () {
  h3.textContent++;
  if (h3.textContent >= 10) {
    console.log(h3.textContent);
    plusBtn.setAttribute("disabled", true);
  }
  if (h3.textContent >= 2) {
    console.log(h3.textContent);
    minusBtn.removeAttribute("disabled");
  }
});

minusBtn.addEventListener("click", function () {
  h3.textContent--;
  if (h3.textContent < 2) {
    console.log(h3.textContent);
    minusBtn.setAttribute("disabled", true);
  }
  if (h3.textContent <= 9) {
    console.log(h3.textContent);
    plusBtn.removeAttribute("disabled");
  }
});
