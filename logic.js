const containerDiv = document.querySelector(".container");
for (let row = 1; row <= 10; row++) {
  const rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row");

  for (let coloum = 1; coloum <= 10; coloum++) {
    const coloumDiv = document.createElement("div");
    rowDiv.appendChild(coloumDiv);
    coloumDiv.setAttribute("class", "coloum");
  }
  containerDiv.appendChild(rowDiv);
}

const allDiv = document.querySelectorAll(".coloum");
const startButton = document.querySelector("#Start");
const eraseButton = document.querySelector("#Erase");
const rainbowButton = document.querySelector("#Rainbow");
const gridButton = document.querySelector("#Grid-size");

function paint() {
  allDiv.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "background-color:red;");
    });
  });
}

function erase() {
  allDiv.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "background-color:white;");
    });
  });
}

startButton.addEventListener("click", () => {
  paint();
});

eraseButton.addEventListener("click", () => {
  erase();
});

function deleteChild() {
  let nodeToDelete = containerDiv.firstChild;
  while (nodeToDelete) {
    containerDiv.removeChild(nodeToDelete);
    nodeToDelete = containerDiv.firstChild;
  }
}

gridButton.addEventListener("click", () => {
  let userInput = Number(prompt("Enter gird size between(1-100)", ""));
  deleteChild();
  for (let row = 1; row <= userInput; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");

    for (let coloum = 1; coloum <= userInput; coloum++) {
      const coloumDiv = document.createElement("div");
      rowDiv.appendChild(coloumDiv);
      coloumDiv.setAttribute("class", "coloum");
    }
    containerDiv.appendChild(rowDiv);
  }
});

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getCharacter(index) {
  return hexCharacters[index];
}

function generateNewColor() {
  let hexColorRep = "#";

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }

  return hexColorRep;
}

function rainbow() {
  allDiv.forEach((div) => {
    div.addEventListener("mouseover", () => {
      const color = generateNewColor();
      div.style.backgroundColor = color;
    });
  });
}
rainbowButton.addEventListener("click", () => {
  rainbow();
});
