# Built in constructor functions and methods

In the first lesson we learnt about some of the data types available in JavaScript: 'String', 'Boolean', 'Array', 'Object' and 'Number'.

So far we've learnt how to create data using literal syntax. For example to create a string you can write


```js
var myString = 'Hello';
```

And to create an array:

```js
var myArray = ['hello', 1, 2];
```

And an object, just for fun:

```js
var myObject = {
  name: 'Daniel',
  age: 10,
  interests: ['JavaScript', 'Cycling']
};
```

This is the best way to create new data, but it's helpful to know that you can also create new data using the `new` operator and a built in constructor function.

For example, you _could_ also create a new string like this:

```js
var myString = new String('Hello');
```

Or an array:

```js
var myArray = new Array(1,2,3);
```

> Do not actually create data using this approach in practice. These examples are for learning purposes only!

`String` is a constructor function just like the constructor functions we learnt to write in the previous session, and `myString` is an instance of `String`. (Kinda cool how JavaScript is built on JavaScript, huh?!)

When you check what a string looks like created in this way, things get a bit weird though:

```js
var myString = new String('Hello');
console.log(myString);
```

Will log:

```js
String {
  0: "h",
  1: "e",
  2: "l",
  3: "l",
  4: "o",
  length: 5,
  [[PrimitiveValue]]: "hello"
}
```

Whoa! What happened to my string?! Why does this happen? Why isn't `myString` just `'hello'`?

The first reason is that, if you remember back to the previous session, constructor functions create objects. Calling `new <Constructor>` always returns an object.

The second reason is that any objects a constructor creates can be given methods, and methods for built in data types turn out to be extremely useful.

> Recap: methods are functions that belong to an object

We can try calling some of the methods given to strings.

```js
myString.toUpperCase(); // hello
myString.split(''); // ['h', 'e', 'l', 'l', 'o']
myString.endsWith('o'); // true
```

You might also have noticed that our instance of `String` also has a `length` property, so we can go ahead and find out the length of our string:

```js
myString.length; // 5
```

Before we move onto the next section, just remember that the purpose of this lesson was to improve our understanding of how JavaScript work. You don't need to actually create data using `new String()` to get access to all the methods provided by `String` (JavaScript does this for you behind the scenes).


**Exercises**:

- Create a string using literal syntax and call the `.toUpperCase()` method on it
- Create an array and call the `.push()` method on it
- Create a string using the built in `String` constructor function and note any differences from using literal syntax
- Call a method e.g. `.toUpperCase()` on a string you created using the `String` constructor function

Learn about split and join
