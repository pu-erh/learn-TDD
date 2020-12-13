import { Computer } from './Computer'

describe("Computer", function () {
  describe("Sum", function () {
    test("it sums all params", function () {
      expect((new Computer).sum(1, 2, 3, 4)).toEqual(10)
    });

    test("it works when supplied decimals", function () {
      expect((new Computer).sum(4, 0.42)).toEqual(4.42)
    });

    test("it raises an error if less than 2 arguments", function () {
      expect(function () {
        (new Computer).sum(1)
      }).toThrow(new Error("You must provide at least 2 arguments."))
    });

    test("it raises an error if one of the argument is not an numeric number", function () {
      expect(function () {
        (new Computer).sum(1, "toto", 2)
      }).toThrow(new Error("Invalid argument detected."))
    });
  });

  describe("Subtract", function () {
    test("it subtract all params", function () {
      expect((new Computer).subtract(1, 2, 3, 4)).toEqual(-10)
    });
  });


});
