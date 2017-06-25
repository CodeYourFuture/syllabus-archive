# Callbacks
In JavaScript, functions are first-class objects. That means they can be used in a first class manner like any other object since they are objects themselves. We have seen how to assign a function to a variable and return a function from a function. Now we will look at passing functions into other functions and executing them. This is common technique in JavaScript for dealing with asynchronous behaviour. We have in fact already encountered callbacks when we looked at array methods such as `.forEach()`, `.map()` or `.filter`

```js
const evenNumbers = [2, 4, 6, 8];
evenNumbers.forEach(function( num ) {
    console.log(num);
});
```

Here we are passing the `function( num ) {console.log(num);}` function as an argument to `.forEach()` to execute with each item in the array `evenNumbers`.

```js
function x(y){
    return y + 1;
}

function z(a, callback){
    return callback(a);
}

const out = z(57, x);
console.log(out);
```

The above example is synchronous which means that code the callback is executed immediately. Let's look at an example where the code is executed asynchronously. We will use a `setTimeout` function to delay execution here. In most JavaScript applications asynchronous code execution could be in response to an event such as mouse click or data coming back from a server. We will at both of those cases in detail at a future class.

```js
function delay(callback){
    setTimeout( callback, 2000 );
}

function logRandom(){
    const value = Math.round( Math.random() * 10);
    console.log( value );
    return value;
}

delay(logRandom);
```

**Key points**
* Functions can be passed as arguments to other other function
* Functions that are passed as arguments are called callbacks
* Callbacks may be executed immediately or later
* If callback is executed later, its return value is lost

> **Exercise**
> Create a function called `double` which will accept one number as its input parameter, multiply it by 2 and return the result. Pass the `double` function as an argument to the `.map()` method of `numbers` below to multiply apply function to each item in the `number` array.

> ```js
> const numbers = [ 6, 8, 18, 10 ];
>
> function double /* create rest of the function */
>
> const output = numbers.map(/* pass the double function here*/);
>
> console.log( output );
> ```

## Pure functions
A function is considered a pure function if it does not depend on or modify state outside of its scope. In other words, it will always output the same result given same inputs and will not produce any side effects.

```js
// Pure function
function( a, b ){
    return a + b;
}
```

```js
// Not a pure function since output value will vary with each call
function( a, b ){
    return b * Math.random() + a ;
}
```

```js
// Not a pure function because it has changed the value outside its scope
function double( in ){
    in.value *= 2;
}

const myObject = {value: 10};

double(myObject);
```

**Why is this important?**
* The result of pure functions can be cached. This is especially important if we have calculations that may take up a lot of time and resources to compute.
* Pure functions are easy to test. Because we know what output we will get for a set of inputs.

> *Together:* Let's rewrite the above code snippet to make `double` a pure function and have the same change be applied to the `value` of `myObject`.
