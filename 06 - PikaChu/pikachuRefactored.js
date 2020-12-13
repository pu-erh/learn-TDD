export const pikachu = function (number) {
  let divisibleByThree = number % 3 === 0;
  let divisbleByFive = number % 5 === 0;

  if (divisibleByThree) {
    return whenDivisibleByThree(divisbleByFive)
  }

  return whenNotDivisbleByThree(divisbleByFive)
};

function whenDivisibleByThree(divisbleByFive) {
  if (divisbleByFive) {
    return "PikaChu";
  }

  return "Pika";
}

function whenNotDivisbleByThree(divisbleByFive) {
  if (divisbleByFive) {
    return "Chu";
  }

  return number;
}

import { pikachu } from './pikachu'

describe("pikachu()", function () {
  test("returns Pika when divisible by 3", function () {
    expect(pikachu(3)).toEqual('Pika');
  });

  test("returns Chu when divisible by 5", function () {
    expect(pikachu(5)).toEqual('Chu');
  });

  test("returns PikaChu when divisible by 5 and 3", function () {
    expect(pikachu(15)).toEqual('PikaChu');
  });

  test("returns the number when not divisible by 5 or 3", function () {
    expect(pikachu(1)).toEqual(1);
  });
});
