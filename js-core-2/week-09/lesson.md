![](https://img.shields.io/badge/status-draft-darkred.svg)

# JavaScript Core 5
**What will we learn today?**
- Functions and  Good Design
---

# Functions
## Why Functions?

The function is considered one of the greatest inventions in computer science. It makes programs easier to read and to understand. It allows for us to more easily modify and extend code. It saves space and improves performance.

At the most basic level, a function is a series of instructions that can take an input and produce an output. Parameters dictate how the function behaves.


![Function Diagram](https://arthurleon.files.wordpress.com/2014/09/function_machine.png?w=240 "Function Diagram") ![Function & Parameters Diagram](https://i2.kknews.cc/large/19f00001508ee348ee0c "Function & Parameters Diagram")

We've used functions a bit, but now we need to know how to use them well.

There are many ways to write code that does the same thing. But are they all equal?


> Exercise: Let's look at a really obvious example of a function with redundant code. What could we do to improve it?

``js
function printHelloFiveTimes(){
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
  console.log("Hello");
}
```

Introducing a simple for loop makes our lives a lot easier. This way we can more easily see what the function does and make modifications.

``js
function printHelloFiveTimes(){
  for ( var i = 0; i < 5; i++ ){
    console.log("Hello");
}
```

> Exercise: Now, let's look at a different example. Let's say we wanted to welcome mentors:

``js
function welcomeMentors(){
  console.log("Hello Mozafar");
  console.log("Hello Rares");
  console.log("Hello Tim");
  console.log("Hello Ashleigh");
  console.log("Hello Gordon");
}
```

We could be lazy and change how we welcome the mentors.

``js
function welcomeMentors(){
  var mentorNames = "Mozafar, Rares, Tim, Ashleigh, Gordon";
  console.log("Hello " + mentorNames);
}
```

But it's not quite the output we wanted. And we can be smarter about it. Why not a loop?

``js
function welcomeMentors(){
  var mentorNames = ["Mozafar", "Rares", "Tim", "Ashleigh", "Gordon"];
  for ( var i = 0; i < mentorNames.length; i++ ){
    console.log("Hello " + mentorNames[i]);
  }
}
```

So functions help us to organise and enhance our code. But what makes good design? Is it just "shorter is always better"?

## Good Design

Design is important if we want our code to be understandable (both to other humans, but also to us in the future), to be easy to use and easy to expand.

There are three main principles you need to know now: clarity, reusability and extensibility. There are also others, but they are deeply related to these three.

To

- Ease of Maintenance / Clarity
    - Naming
    - Formatting
    - Commenting
    - Clear logic
    - Concise
    - Avoiding Redundancy

- Reusability
    - DRY
    - Single Reponsibility
        - Avoiding global state (scope)
        - Predictability and Ease of testing

- Extensibility
    - Avoiding being unnecessarily specific (e.g. magic numbers)

> Exercise: Find all the design issues with this function.

As an aside: if you try to run the code it won't work, but not because it's not correct. It's only because it is a fragment of a larger program and lacks some code such as the function updateCorpDatabase(), the initialisation of the global variables referenced (e.g. quarter, profit) and, of course, the HandlesStuff() function also hasn't been called.

``js
function HandlesStuff(inputRecord, savedrecord, income1, income2, expenseType, revenue, expense0, expense1, expense2, screenx, screeny, success){

  var i;
  for ( i = 0; i < 100; i++ ) {
    inputRecord[i] = 0;
    }

    updateCorpDatabase( savedrecord );
    income1 = income2 * 4.0 / quarter;

    if( expenseType == 0 ) {
      profit = revenue - expense0;
    }
    else if( expenseType == 1 ) {
      profit = revenue - expense1;
    }

    else if( expenseType == 2 ){
      profit = revenue - expense2;
    }
}
```

What is wrong with this function?

1. Naming: the function has a bad name, HandleStuff() tells you nothing about what the function does. It's also considered bad practice to name variables vaguely by separating them through numbers (debt1, expense1, etc). If you find yourself doing this then you should either use an array (such as expenses[]) or use a more specific name for each variable (such as pastIncome and currentIncome). There is also inconsistency in the use of camel casing (inputRecord versus savedrecord).

2. Commenting: the function isn't documented at all. It's very difficult to understand what the function's purpose is and how each part of the code contributes to it. By writing comments, the coder communicates their reasoning and helps the function be human readable.

3. Layout/ Formatting: the physical organisation of the code on the page gives few hints about its logical organisation. Layout strategies are used inconsistently throughout the code: incorrect indentation, unnecessary spacing (between the two else ifs) and the long list of parameters is unreadable. This makes the code look messy and confusing.

4. Input variables: the function's input variable, inputRecord, is set (hardcoded) within the function. If it's an input variable, its value should not be modified. If the value of the variable is supposed to be modified, then the variable should not be called inputRecord.

5. Global variables: the function reads and writes global variables - it reads from quarter and writes to profit. It should communicate with other functions more directly, rather than by reading and writing global variables.

6. Single Responsibility: the function does not have a single purpose. It initialises some variables, writes to a database, does some calculations - none of which seem to be related to each other in any way. A function should have a single, clearly defined purpose. This function looks like it needs restructuring: breaking it into multiple functions.

7. Data checks: the function doesn't defend itself against bad data. If quarter equals 0, the expression income2 * 4.0 / quarter causes a divide-by-zero error.

8. Magic numbers: the function uses several magic numbers: 100, 4.0, 1, 2 and 3. These are numbers that are used directly in an expression rather than saving them first in a variable. This is discouraged as it makes it more difficult to manipulate the values. If we were to save them in a variable they would be easier to find and modify.

``js
tenSquared =  10*10
tenCubed = 10*10*10

x = 10
xSquared =  x*x
xCubed = x*x*x
```

9. Useless parameters: some of the function's parameters are never used (screenx, screeny and success). They should be removed because they are confusing. It is tempting when you're starting to code a function to add more parameters thinking that you might need them, but it's important to remove them if you don't end up using them.

10. DRY principle: the function breaks the DRY (Don't Repeat Yourself) rule. The expression profit = revenue - expense0 is written 3 times unnecessarily, the only difference being whether it's the first, second or third expense. This variable can be restructured into an array.

``js
var expense = [expense1,expense2,expense3];
profit = revenue - expense[expenseType];
```

> Exercise: We have the following problem to solve, write really bad code that gives the right result. Tell us why it is bad.

Write a function that will print out the number of vowels that are in mentors' names.

> Exercise: Now, let's write it well together.

# Resources
1. [JavaScript: The Good Parts by Douglas Crockford, chapter 4 - Functions](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
2. [MDN Objects basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
3. [MDN OOP in JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)


