

function showPersegi() {
  let inputPola = document.getElementById("inputPersegi").value;
  let data = [];

  for (let i = 0; i < inputPola; i++) {
    let row = "";
    for (let l = 0; l <= inputPola; l++) {
      row += "* ";
    }
    data.push(row);
  }
  let listElement = data.map((el) => {
    return `
      <p>${el}</p>
    `;
  });

  document.getElementById("resultPattern").innerHTML = listElement.join("");
}

function showSegitigaSatu() {
  for (let i = 0; i < inputPola; i++)
  { let text = "" ;
    for (let l = 0; l <= inputPola; l++) {
      text += "* ";
    }
    array.push(text);
  }
  let listElement = array.map((el) => {
    return `
    <p>${el}</p>
  `;
  });
  document.getElementById("resultPattern").innerHTML = listElement.join("");
}

function showSegitigaDua() {
  for (let i = 0; i < inputPola; i++) {
    let text = "";
    for (let j = inputPola - i - 1; j > 0; j--) {
      text += " ";
    }
    for (let k = 0; k < i; k++) {
      text += "*";
    }
    array.push(text);
  }
  let listElement = array.map((el) => {
    return `
  <p>${el}</p>
`;
  });
  document.getElementById("resultPattern").innerHTML = listElement.join("");
}
