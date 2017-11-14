# Unit testing
Start by cloning the repo at `https://github.com/codeyourfuture/unit-testing-london`. Once the repo is cloned run `npm install` from inside it to install the dependencies.

Unit testing is a substantial topic. There are many books written about it and many in-depth discussions online. Here we try to focus on the some of the core aspects, but please note that there will be more content than we may not cover here.

What are some of the aspects of unit tests
* Unit tests should ensure the correct behaviour or a small unit of code. In JavaScript that usually refers to a single function.
* Unit tests should be automated.
* Unit tests should be fast to run. That enables them to be run by developers in the background or before each commit and pick up any errors as early as possible. This can hugely speed up software development by correcting issues as soon as they are detected rather than wait until a tester or even worse, a customer, finds them.
* Unit tests should mock any external dependencies such as database calls or network access. This is because those operations can be slow, require a lot of effort to be put into the right state or produce non-deterministic results. For example, your code may be correct but if your test requires internet access and the network is down the test will fail, thus creating a false error.
* Unit tests should be easy to maintain. Because they cover only small parts of the code, they should not be affected by code changes outside of the segment being test.

It brings a number of benefits to your code
* Having unit tests allows us to make changes to our application with a high degree of confidence. The unit tests should tell us if we broke anything.
* Unit tests make it easy for us to notice when we have broken something in our code. Because each unit test covers a small piece of code, it makes it easy to spot where we broke the code.
* Writing testable code forces us to write small functions, with a clear purpose. That also makes our code easy to understand both by ourselves in future as well as other developers. It results in simpler, cleaner design.

Another approach to testing is end-to-end. Here you would want to test a whole feature of user journey from start to finish. Starting with a click, it may involve an API call over the internet and make changes in database. While they do provide a value and knowledge that your code is running correct, they also have some drawbacks.
* End-to-end tests can be slow. It can difficult to keep all layers of the test in sync and as a result the tests may end up being run in series rather than parallel.
* They can break easily because they cover a large number of steps and may be affected by any changes even if those changes are valid.
* They can be costly to maintain because any changes in application code may require changes in all tests.
* Putting dependencies such as the database into a known state for each test can be tricky.

## Jest
We will be writing our unit tests using a framework called [Jest](https://facebook.github.io/jest/). It's created by Facebook and useful for all kinds of unit testing (especially testing React, which we will do in a later lesson).

## How do we write unit tests
Let's look at the anatomy of a unit test.
```js
function sum(a, b){
    return a + b;
}

test('adds', () => {
  const result = sum(1, 2);

  expect( result ).toBe( 3 );
});
```


Each unit test will have the following parts.

### Code to be tested
This will usually be a function. Even if we are testing a large object we will usually do so one function at a time.

### test
This is a function which will carry out our test. It expects 2 parameters.
1. A string describing what we are testing
2. A `callback` that will contain the actual test code

### Assertion (matcher)
This is the part that compares the output of the function being tested with expected outcome. This is a series of chained function calls starting the function `expect` which takes the result of the execution as its parameter and returns an `expectation` object with lots of methods that we can use to validate our result.

The details of all of them are available at [https://facebook.github.io/jest/docs/expect.html]

`.toBe()` performs a `===` comparison. Works great for primitives such as `string`s, `number`s and `boolean`s. Fails when comparing `object`s and `array`s because `===` will check if they refer to the same memory location, not their actual values

```js
const a = {b: 'c'};
expect(a).toBe({b: 'c'}); // fails the test
```

To compare actual values of an object we need a function that will iterate over all of the values making sure they all match. This is what `.toEqual()` does:
```js
const a = {b: 'c'};
expect(a).toEqual({b: 'c'}); // passes the test
```

We can also check the opposite of a match by inserting a `.not` property into our call chain to invert the result of a matcher.

```js
const x = {y: 1};
expect(x).not.toBe({y: 1}); // passes the test
```

There are dozens of matching functions available. Please refer to the Jest documentation for details.

### Single test execution
You will often have fairly large test suites and you may want to isolate one specific test. You can do so by appending the `.only()` method to the `test` object. Hence your test will look something like

```js
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});
```

Remember to remove `.only` after you're finished focusing on this test, so that you are still testing the rest of the codebase!