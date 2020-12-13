import { hello } from './HelloWorld'

describe("hello", function () {
  test("it says Hello, World!", function() {
    expect(hello()).toEqual('Hello, World!');
  });

  test("it says Hello, Ben! when passed 'Ben' as first param", function(){
    expect(hello("Ben")).toEqual('Hello, Ben!');
  });

  test("it says Hello, Joe! when passed 'Joe' as first param", function(){
    expect(hello("Joe")).toEqual('Hello, Joe!');
  })
});
