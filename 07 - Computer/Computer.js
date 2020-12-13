export class Computer {
  sum() {
    return this.operation("+", ...arguments)
  }

  subtract() {
    return this.operation("-", ...arguments)
  }

  operation() {
    let opType = arguments[0];

    if (arguments.length < 3) {
      throw new Error("You must provide at least 2 arguments.")
    }
    let result = 0;

    for (let i = 1; i < arguments.length; i++) {
      let argument = arguments[i];
      if (! validArgument(argument)) {
        throw new Error("Invalid argument detected.")
      }
      if (opType === "+")
        result += argument;
      else if (opType === "-")
        result -= argument;
    }

    return result;
  }
}

function validArgument(argument) {
  return typeof argument === "number";
}
