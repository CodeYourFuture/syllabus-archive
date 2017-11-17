# Objects Again
## Objects vs Arrays
A data structure is a specialized format for organizing and storing data. General data structure types include the array, the file, the record, the table, the tree, and so on.

We have been dealing mainly with two types of data structures so far - *Arrays* and *Objects*.

When we are you solving a problem, one of your main decisions as a developer is to choose the data structures you will use to solve it. So when do you use an Array and when do you use an Object.

> "Bad programmers worry about the code. Good programmers worry about data structures and their relationships."
> Linus Torvalds

> Let's talk about the differences between Arrays and Objects - when can you use or the other. As a general rule of thumb:

1. Does the order of data matter? Then use Arrays.
2. Can the data be organised by a label? Then use Objects.

> Exercise: Let's say we're writing a program to model and display a Newspaper: what data structure would you use to model the different sections of the newspaper (sports, politics etc..)? Write a data structure in JavaScript to represent your newspaper

> Exercise: Now if we're going to model a Book with different chapters - what data strucuture would we use?

> Exercise: Think of a scenario where we might need to combine both?

## Object Exercises

>Exercise
>Write a function "printProperties" that takes an object and prints its properties

```js
var student = {
    name: "Simon",
    age: "21",
    interests : ["javascript", "react"]
};

printProperties(student);
// Output in this case should be name, age, interests
```

>Exercise
>Write a function called hasProperty that takes an object and a property. The function should return true if the property exists, false if it doesn't

```js
var student = {
    name: "Simon",
    age: "21",
    interests : ["javascript", "react"]
};

hasProperty(student, 'age'); // should return true
hasProperty(student, 'job'); // should return false
```

>Exercise: compare that to how you find an element in array?


>Exercise
>Write a function called ownProperty that takes an object which has a prototype, and a field. The function should return true only if the property exists on the object (and *not* it's prototype)
```js
var person = {
    name: "Simon"
}

var student = {
    interests: ["javascript", "react"]
}

student.__proto__ = person // this is setting the prototype of student to be person

ownProperty(student, "name") // should return false
ownProperty(student, "interests") // should return true
```

>Exercise
>Write a function called printObject that takes an object and iterates through all its properties and prints a string formatted property: value
>Bonus points if you can format the list of interests properly

```js
var student = {
    name: "Simon",
    age: "21",
    interests : ["javascript", "react"]
};

printObject(student); //output: "name is Simon, age is 21, interests are ["javascript", "react"]
```

>Exercise
>Write a function called "printArray" that use the previous function "printObject". It should loop through the array of students and print each item

```js
var students = [{
    name: "Etza",
    age: "21",
    interests : ["javascript", "css"]
}, {
    name: 'Mohamed',
    age: 22,
    interests: ["javascript", "c#"]
}];

printArray(student);
// output:
// "name is Simon, age is 21, interests are ["javascript", "react"]"
// "name is Mohamed, age is 22, interests are ["javascript", "c#"]"
```

## More advanced working with objects

Let's say you have the following object in javascript, where each key/property is the type of note (£5, £10 and £20 note), and the value is the number of notes in the wallet.

```js
var wallet = {
  5: 3,
  10: 7,
  20: 2
}
```

>Exercise
>Write a function that takes in the wallet as an argument, and returns the total money in the wallet.

Next you're given another wallet, and it's put in an array with the first:

```js
var walletA = { // our original wallet
  5: 3,
  10: 7,
  20: 2
}

var walletB = {
  5: 6,
  10: 0,
  20: 1
}

var wallets = [walletA, walletB]
```

>Exercises
>1. Write a function - `sumWallets` - that takes the array `wallets` and returns the total amount of money for all of the wallets.

>2. Write another function - `combineWallets` - that takes the array of wallets and combines all of the notes in each of them, returning a single wallet with all of the other wallets' notes.

>3. See if you can write a function - `sumDynamicWallet` - that will sum up and return the total amount in a single wallet, but it could have any number of different notes inside it (£7 note or a £13 or any other number).

>4. See if you can write a function that takes in any number of wallets, which could contain any denomination/type of notes inside them (each being different). Tip: have a think about if you could re-use a function from a previous example...
