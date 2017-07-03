# ES6 - 'Fat arrow' functions
ES6 introduced a new way of structuring functions; the arrow function. Let's compare it against the ES5 syntax:

  ```js

  // ES5
  var multiply = function(x, y) {
    return x * y;
  };

  // ES6
  multiply = (x, y) => { return x * y };

  console.log(multiply(2, 3));

  ```

Arrow functions are quicker to write because they don't require variable assignment. Also, if you're only passing one argument into the arrow function, you don't need to use brackets around the parameter:

  ```js
  multiplyByTen = num => { return 10 * num };

  console.log(multiplyByTen(5));
  ```

If you're only going to `return` a single line in an arrow function, you don't even need the curly brackets (or the `return` keyword):

  ```js
  greet = name => `Hello, I am ${name}!`;

  console.log(greet('Ada Lovelace'));
  ```

However, there are some important differences between arrow functions and ES5 functions aside from syntax. Try the following exercise:

  ```js
  const ourClass = {
    members: ['Raymond', 'Adis', 'Flavia', 'Nabil', 'Kiya'],
    className: 'London Class 2',
    classSummary: function() {
      return this.members.map(function(member) {
        return `${member} is in ${this.className}`;
      });
    }
  };

  console.log(ourClass.classSummary());
  ```

The above code doesn't quite work. We've got an object, the `ourClass` object, and within it, and array, a string and a method. But `this.className` is returning as `undefined` - the code isn't seeing what we're trying to point it to.

Let's try with an arrow function:

  ```js
  const ourClass = {
    members: ['Raymond', 'Adis', 'Flavia', 'Nabil', 'Kia'],
    className: 'London Class 2',
    classSummary: function() {
      return this.members.map((member) => {
        return `${member} is in ${this.className}`;
      });
    }
  };

  console.log(ourClass.classSummary());
  ```

With that one little change, the function is now working. Why? Well, arrow functions differ to ES5 functions in that they make use of something called 'lexical `this`'. JavaScript is a 'lexical' programming language; this means that how the code behaves depends on the order or placement of each piece of code. When we use an arrow function, the value of `this` is bound to the surrounding context. So unlike when we used the anonymous function in the ES5 version(`this.members.map(function(member) {`), the arrow function lets the JavaScript engine know where `this` is pointing to.

If this is confusing, don't worry; we're going to move onto `this` in greater depth shortly. But first, let's do a few exercises with arrow functions.


> **Exercise**:
>
> Use [JSBin](https://jsbin.com/) for today's exercises.
>
> 1. Write an arrow function that returns the string, `Hello, I am ${name}, and I am ${age} years old.`
> 2. Write an arrow function that takes an array of integers, and returns the sum of the elements in the array. Google and use the built-in `reduce` array method for this.
> 3. The syntax of this function is wonky. Can you fix it to use the shortest arrow function possible?
> ```js
>  let eye = "eye";
>
>   const fire =
>  (
>
>  ) =
>  >
>   {
>     return `bulls-`;
>   }
>   ```
> 4. Refactor the following ES5 function to use an arrow function:
> ```js
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
