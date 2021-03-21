var mainCondition = false;
var numbers =[0, 12, 98];
var inputNumber = []
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var largest = -Infinity;
var smallest = Infinity;

do {
    let inputNumber = Number(prompt(`Masukkan angka`));
    if (inputNumber = alphabet)  {
        mainCondition = true;
    }

    for (var i = 0; i < inputNumber.length; i++) {
        if (inputNumber[i] > largest) {
            largest = inputNumber[i];
        }
    }
    
    for (var i = 0; i < inputNumber.length; i++) {
        if (inputNumber[i] < smallest) {
            smallest = inputNumber[i];
        } mainCondition = true;
    } 
} while (mainCondition);

     
console.log(largest);
console.log(smallest);
