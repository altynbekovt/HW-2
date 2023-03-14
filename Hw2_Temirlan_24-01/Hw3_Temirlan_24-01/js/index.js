
function minsamm(a , b){
  return Math.min(a, b)
}
console.log(minsamm(19,5))

/////////

let znachenie = prompt('vedite ')
function length (str){
  return str.length
}
console.log(length(znachenie))


////////////////


function count(num1, num2, mark) {
    switch (mark) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "не делится на нуль";
        }
    }
  }

