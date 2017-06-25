# Context
When a function is invoked, it receives the parameters that were passed in as well two other objects

1. `arguments` - an array-like object which lists all the parameters which were pass into function
2. `this` - is an object that refers to the current execution context

What the actual object `this` refers to will depend on how the function was called.

## constructor
A function called using `new` operator is called a `constructor`. It creates a new object inheriting from
its prototype and sets the value of `this` to the new object.

  ```js
  var Car = function(color){
    this.color = color;
  }

  var myCar = new Car('red');
  console.log(myCar.color) // red
  ```

## method
A function which is a property of an object is called a `method`. When a function is invoked as a method `this` will refer to the parent object.

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;
    }
  }

  library.addBooks(7);
  console.log(library.numberOfBooks) //7
  ```

## function
A function which does not belong to a method will have its context set to the global object, which is `window` in the browser and `global` in Node.

That causes several issues.

1. Inner functions cannot see the context of parent methods

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;

      function double(){
        this.numberOfBooks *= 2;
      }

      double();
    }
  }

  library.addBooks(5)// 5
  console.log(library.numberOfBooks);
  ```

This is because `double` is a function and it gets passed the `global` object as the value of `this`.

2. When a method is called a function we lose our original scope because `this` becomes `window` rather than the parent object.

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;
    }
  }

  var detached = library.addBooks;
  detached(7);
  console.log(library.numberOfBooks) // 0
  ```

Also, your global object has now acquired a `numberOfBooks` property which is not ideal :(

We can resolve this in two ways.

1. Use a temporary variable to capture `this` which will remain visible to the inner function

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      var that = this;
      this.numberOfBooks += books;

      function double(){
        that.numberOfBooks += books;
      }

      double();
    }
  }

  library.addBooks(5) // 10
  console.log(library.numberOfBooks);
  ```

2. `bind` the value of `this` so it is retained. `bind` is a method of `function` which returns a function that has `this` set to the value passed in as a param.

  ```js
  var library = {
    numberOfBooks: 0,
    addBooks: function(books){
      this.numberOfBooks += books;
    }
  }

  var detached = library.addBooks;
  detached = detached.bind(library);
  detached(7);
  console.log(library.numberOfBooks) // 7
  ```

## apply / call
Another way to invoke functions is using `apply` or `call` methods. They both accept the context, the value that will become this as their first param. The difference is that `apply` takes the params that will be passed into the method as an `array`, whereas `call` takes them as individual params.

  ```js
  var book = {
    author: 'JK Rowling'
  }

  function addTitle(title){
    this.title = title;
  }

  addTitle.call(book, 'Harry Potter');
  console.log(book.title) // Harry Potter
  ```

> **Exercise**

> Above we solved the issue 1. with internal method `double` using tempory variable `that` and we solved issue 2. with detached context using `bind`. Please solve issue 1. using `bind` instead and issue 2. using temporary variable `that`.

> Below we turn the `push` method of the array `films` into a standalone function and remove the `push` method from `films`. However, we still have both the array `films` and `push`, they are just separate entities now. Inside `addMissionImpossible` Calling `push('Mission Impossible')` throws an error because it no longer has a reference to its context. Also, calling `films.push('Mission Impossible')` beacuse films no longer has the method `push`. Use `call` or `apply` to invoke to function `push` with the context `films` to insert another film title into the array films.

> ```js
> function addMissionImpossible(films, push){
>   // push('Mission Impossible'); // throws error
>   // Array.prototype.push called on null or undefined
>   
>   // films.push('Mission Impossible'); // throws error
>   // films.push is not a function
> }

> var films = ['Batman', 'Wonder Woman'];

> var push = films.push;
> films.push = null;

> addMissionImpossible(films, push);

> console.log(films);
> ```
