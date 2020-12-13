import { pikachu } from "./pikachu";

describe("pikachu()", function () {

  describe("When I pass a number divisible by three", function () {

    describe("And divisible by five", function () {
      test("when I pass 0 it returns PikaChu", function () {
        expect(pikachu(0)).toEqual("PikaChu");
      });
    });

    describe("And NOT divisible by five", function () {
      test("when I pass 3 it returns Pika", function () {
        expect(pikachu(3)).toEqual("Pika");
      });
    });

  });

  describe("When I pass a number NOT divisible by three", function () {
    describe("And divisible by five", function () {
      test("when I pass 5 it returns Chu", function () {
        expect(pikachu(5)).toEqual("Chu");
      });
    });

    describe("And NOT divisible by five", function () {
      test("when I pass 1 it returns 1", function () {
        expect(pikachu(1)).toEqual(1);
      });

      test("when I pass 2 it returns 2", function () {
        expect(pikachu(2)).toEqual(2);
      });

      test("when I pass 4 it returns 4", function () {
        expect(pikachu(4)).toEqual(4);
      });
    })
  });
});
