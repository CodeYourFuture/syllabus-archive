# Inheritance using Constructor.prototype

In the previous lesson we learnt how to write methods like this:

```
function Person(name) {
  this.name = name;
  this.greeting = function greeting() {
    alert('Hello my name is ' + this.name);
  }
}
```

Using this approach, every time that `Person` is instantiated, a new `greeting` function is created. If you create a `new Person()` 100 times, 100 `greeting` functions will be created for each one. This seems wasteful considering all the `greeting` functions are exactly the same.

One way to solve this is using _prototypal inheritance_. That sounds a bit scary so let's take it a step at a time.

We can say that a property is inherited when it is passed down from a parent. For example, perhaps one of the properties your parents passed to you was being really good looking. You might say that it's a family trait.

In JavaScript, there are 2 ways that a new objects receives properties. The first is _copying_, the way we've being doing it so far: inside the constructor function properties are added to the new object (`this`) when it is created. The properties are inherited from the (parent) constructor function, but once the object has been created the constructor function cannot change it.

### `prototype`

The other way that objects can receive properties from their constructor function is by _inheritance_. This happens via the constructor function's `prototype`, which is an object containing hidden properties and methods.

> Exercise

> Open up the console in your web browser and type in `String.prototype`. An object with will be returned. If you expand this object you'll see that it contains several hidden methods.

> You can also search on the internet for "String prototype", "Array prototype" etc. and find documentation for the associated methods.

When you create a new object, a hidden link is made between the new object and it's constructor function's `prototype`.

We can test that this link exists in our browser's console:

```js
function MyConstructor () {}
var myObj = new MyConstructor();
Object.getPrototypeOf(myObj) === MyConstructor.prototype; // true
```

Let's add a method to our constructor function's prototype:

```js
MyConstructor.prototype.greeting = function () {
  console.log('Hello');
}
```

The `greeting` method will now be inherited by objects created with `MyConstructor`.

```js
var myObj2 = new Constructor();
myObj2.greeting(); // Hello
```

Remember that when objects are created a link between them and their constructor is created? Well, even though `myObj` was created before we added the `greeting` method, `myObj` is linked to `MyConstructor.prototype`, so it will inherit the newly created method as well.

```js
myObj.greeting(); // Hello
```

Both `myObj` and `myObj2` inherit properties from `MyConstructor` via _prototypal inheritance_.

```js
Object.getPrototypeOf(myObj) === Object.getPrototypeOf(myObj2) === MyConstructor.prototype; // true
```

### The prototype chain

When you access a property of an object, JavaScript first checks if the object has such a property itself. If it does it will use that. If not, it will check the object's prototype.

```js
function Person (name, formal) {
  this.name = name;
  if (formal) {
    this.greeting = function () {
      console.log('Hello, my name is ' + this.name);
    }
  }
}

Person.prototype.greeting = function () {
  console.log('Hey, it\'s ' + this.name);
}

var alice = new Person('Alice');
// No greeting method on alice
console.log(alice); // { name: 'Alice' }
alice.greeting(); // Hey it's Alice

var bob = new Person('Bob', true);
// bob was instantiated with a greeting method
console.log(alice); // { name: 'Bob', greeting: function() {} }
bob.greeting(); // Hello, my name is Bob
```
