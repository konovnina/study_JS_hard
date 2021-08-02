//Усложненное задание к уроку 2
let num = 266219;
num = num.toString(); 

let mult = 1;
for (let i = 0; i < num.length; i++) {
  mult *= +num[i];
}
console.log(mult);

let powResult = mult ** 3;

console.log(powResult.toString().substring(0, 2));