# Scope

Before we get into what scope is, let's try a little exercise.

Open up jsbin and write the following:

  ```js
  var firstFunction = function() {
    var a = 10;

    var secondFunction = function() {
      console.log(a);
    }

    secondFunction();
  };

  firstFunction();
  ```

This should work fine, and the console should print `10`. But what if we swap the positions of `var a` and the `console.log()`?

  ```js
  var firstFunction = function() {
    console.log(a);

    var secondFunction = function() {
      var a = 10;
    }

    secondFunction();
  };

  firstFunction();
  ```

This returns an error: `ReferenceError: a is not defined`. You might think that the problem is that we're trying to console log `a` before it's declared in the code order. So let's try putting the `console.log(a)` after `secondFunction`, where `a` is assigned:

  ```js
  var firstFunction = function() {

    var secondFunction = function() {
      var a = 10;
    }

    console.log(a);

    secondFunction();
  };

  firstFunction();
  ```

Wait, we're still getting the `ReferenceError`! Even if we move the `console.log(a)` underneath where `secondFunction` is called, we _still_ get the error. What's going on?

What we're seeing here is the effect of **scope**. Take a look at the following diagram:

![Scope](./assets/scope_bubbles.png)


We can see from this picture that each function is like a 'bubble', and it has access to the variable assigned within it, and the variables assigned 'above' it, in it's surrounding function. But note that the 'global' scope doesn't have access to `var o`, and `function outer()` doesn't have access to `var i`. So each function can access the variables in its **parent scope**, and in it's **own, immediate scope**, but it cannot see the variables in its **child scope**.

If a variable is declared outside of a function, in the 'window', it has *'global' scope*. The scope within a function is *'local' scope*:

  ```js
  var test = "I'm global";

  function testScope() {
    var test = "I'm local";

    console.log (test);     
  }

  testScope();           // output: I'm local

  console.log(test);     // output: I'm global
  ```
