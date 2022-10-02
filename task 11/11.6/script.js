function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "**": (a, b) => a ** b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      s = split[1],
      b = +split[2]

    if (!this.methods[s] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[s](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

alert(calc.calculate("7 + 7"));
alert(calc.calculate("7 - 7")); 
alert(calc.calculate("7 / 7")); 
alert(calc.calculate("7 * 7")); 
alert(calc.calculate("7 ** 7"));