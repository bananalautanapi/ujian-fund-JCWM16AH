var inputPersegi = 5

for (let i = 0; i < inputPersegi; i++) {
  let persegi = "";
  for (let l = 0; l <= inputPersegi; l++) {
    persegi += "* ";
  }
}

console.log(persegi);

var inputSegitigaSatu = 5

for (let i = 0; i < inputSegitigaSatu; i++) {
let segitigaSatu = ""
  for (let l = 0; l <= inputSegitigaSatu; l++) {
    segitigaSatu += "* ";
  }
}

console.log(segitigaSatu);

var inputSegitigaDua = 5
for (let i = 0; i < inputSegitigaDua; i++) {
    let segitigaDua = ""
  for (let j = inputSegitigaDua - i - 1; j > 0; j--) {
    segitigaDua += " ";
  }
  for (let k = 0; k < i; k++) {
    segitigaDua += "*";
  }
}
console.log(segitigaDua);