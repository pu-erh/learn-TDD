import { reverseString } from './reverse-string'

describe("reverseString", function () {
  test("It returns 'CBA' when I pass 'ABC' as param", function () {
    expect(reverseString("ABC")).toEqual("CBA")
  });

  test("It returns 'neB' when I pass 'Ben' as param", function () {
    expect(reverseString("Ben")).toEqual("neB")
  });

  test("It returns 'eoJ' when I pass 'Joe' as param", function () {
    expect(reverseString("Joe")).toEqual("eoJ")
  });

  describe("It handles exceptional cases", function () {
    test("It throws an Error exception if I pass an Integer", function () {
      expect(function () {
        reverseString(42)
      }).toThrow(Error)
    });

    test("It throws an Error exception if I pass a Boolean", function () {
      expect(function () {
        reverseString(true)
      }).toThrow(Error)
    })
  });
});
