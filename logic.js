const containerDiv = document.querySelector(".container");
for (let row = 1; row <= 16; row++) {
  const rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row");

  for (let coloum = 1; coloum <= 16; coloum++) {
    const coloumDiv = document.createElement("div");
    rowDiv.appendChild(coloumDiv);
    coloumDiv.setAttribute("class", "coloum");
  }
  containerDiv.appendChild(rowDiv);
}
