# JavaScript Core 2
** What we will learn today?**
- Functions
- More Arrays and loops
  - Functional utils (map, foreach, filter)
- Objects
- Callbacks

---

## Functions
Functions are "self contained" modules of code that accomplish a specific task. Functions usually "take in" data, process 
it, and "return" a result. Once a function is written, it can be used over and over and over again. (Utah University)


```javascript

//Function declarations

function sayHello() {
    console.log("hello");
}

function square(number) {
    return number*number;
}

square(5); // returns 25

//Function expressions

var addTen = function(number) { 
    return number + 10;
};

addTen(5); // return 15

```


> **Exercise**:
> Open [this CodePen](http://codepen.io/rarmatei/pen/jBpdzx?editors=0012) and follow the instructions there

## Callbacks

You probably noticed in last few exercises that JavaScript functions can be passed
as arguments to other functions.
 
Callbacks are JavaScript functions that are passed as arguments to other functions
so they can be executed inside those functions once they're finished.
 
Example:

```javascript

function a(callback) {
    var x = 1000;
    if(callback) {
        callback();
    }
    return x;
} 
 
```

> **Exercise**:
> - Look up the global `setTimeout` function
> - Write a function that takes a string as a parameter, waits 2 seconds, and then logs out the string


## More arrays and loops + tests

Before we dive into the exercises, a word on testing:
- All of us write buggy code. Thinking about what inputs our software is supposed to handle
and writing tests to verify that it behaves as expected for those inputs helps us
prevent most of those bugs.
- By writing good tests for our pieces of functionality helps ensure that no one else can
break it by mistake in the future
- Sometimes, just by thinking about what tests to write might bring up big flaws in our
initial logic

Testing example; consider the following code:

```javascript
function containsBob(a) {
    return a.includes("bob");
}
```

How might we test the above? Some example inputs we can test with:

```javascript
containsBob("aabobaa"); // expected: true, actual: true
containsBob("hello"); // expected: false, actual: false
containsBob("bob"); // expected: true, actual: true
containsBob("b ob"); // expected: false, actual: false
containsBob(""); // expected: false, actual: false

containsBob(1); // expected: false, actual: TypeError
```

> **Exercise**:
> Open [this CodePen](http://codepen.io/rarmatei/pen/EWJjrZ?editors=0012) and follow the instructions there

## A taster of functional programming - forEach, map, filter

Consider the following code:

```javascript

var numbers = [1,2,3];

function addTwo(number) {
    return number + 2;
}
```

We have an array of numbers and a function that returns its argument after adding 2 to it.

How would you write a program that adds 2 to each number in the initial array and returns
the result as a new array?

You could do something like this:

```javascript
var result = [];

for(var i=0; i<numbers.length; i++) {
    
  var current = numbers[i];
  var transformed = addTwo(current);
  result.push(transformed);
}

console.log(result);
```

There is a term for the operation of applying a function to a value and creating a new
value: projection. And it turns out JavaScript arrays come with a simple function to project
them to a new array: the `map` operator.

Let's see how we can re-write the above program using the map function:

```javascript
var result = numbers.map(addTwo);

console.log(result);
```

That's it! We use the map operator on an array and pass to it the function we want
applied to each element in that array. The function can take two parameters: one is the value
that will be transformed, and the second one is the index of the item in the array.

The function passed into is also a..callback!

> **Exercise**:

## More on objects

todo:
the new keyword, creating objects with constructor functions, primitive types vs reference types

## Pass by value / reference

Consider the example below.

```javascript

function addFive(value) {
    value = value + 5;
}

var ten = 10;
addFive(ten);
console.log(ten);

```

We have a function that accepts a value as an argument. The function then adds five to the
argument and logs the value.
After invoking the function with the variable `ten`, the variable is logged.

What will be the values logged?
Answer: 10 (not 15)

Explanation:
In JavaScript, variables are always passed to function by value. That means only the value
the variables was holding is passed to the function, and not a reference to the variable's
location in memory. That means that inside a function call, any changes we make to its
arguments will only apply inside the function (as seen in the previous example).
 
**Be careful though**, as the value of an argument might be a reference to a JavaScript
object, in which case, changing a property on that object will also reflect everywhere
else we use a reference to that object.

For example:

```javascript

function a(primitive, object) {
    primitive = primitive + 5;
    object.greeting = "how are you?";
    object = {
      greeting: "holla!"  
    };
}
var primitive = 10;
var object = {
  greeting: 'hello'  
};
a(primitive, object);
console.log(primitive); // 10
console.log(object.greeting); // "how are you?" 
```


# Resources
1. [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
1. [Pass by value/reference](http://docstore.mik.ua/orelly/webprog/jscript/ch11_02.htm)
1. [Callbacks](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)

# Homework

1. First part of Homework - Easy

2. Second part of Homework - Intermediate/Hard
http://reactivex.io/learnrx/ - first 8 exercises from here

3. **[Bonus/Optional]** Third part/optional - Hardest
finish as many exercises from the second exercise link as you can

4. **Research:**

## Prepare for the next class
1. Read this [Some Tutorial or Video etc...](https://google.com)
