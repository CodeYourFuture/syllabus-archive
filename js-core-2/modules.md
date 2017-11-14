# Modules

> This is a bit of an advanced topic at this point. Don't worry if you don't understand all of it - we are going to pick up modules again in a later lesson!

So far, all our programs have been in their own single files. But JavaScript programs can become really large, and having all our code in only one file will not be maintainable.

We can therefore split our code into so-called *modules*. A module is basically a JavaScript file that makes its functionality available to other modules and programs.

## Creating modules, exporting code

It is really simple to take existing JavaScript code and turn it into a module by exporting its functionality:

```js
// In printName.js
function printName(name) {
  console.log("My name is " + name);
}

module.exports = printName;
```

The key here is the line containing `module.exports`. As you see, this is an assignment, and whatever is assigned to `module.exports` will be made available to other modules and program when this file is imported.

> *Together:* Let's do this: Edit the file `test/sum.test.js`, move the `sum()` function defined there and export it

## Using modules, importing code

But how do we make use of another module in our program? We need to *import* it, and this is done using a function called `require()`.

> There are different module formats for JavaScript. The one we are using here, which is natively supported by Node, is called **CommonJS**.

```js
// In a different file to printName.js
var printName = require('./printName.js');
```

> The string passed to the `require()` function is a _path_ to the file you are importing. `./` signifies the current directory, so the above command will import a file called "printName.js" that is in the same directory as our program.

Assuming our program is in the same folder as `printName.js`, we can use the above code to import the functionality provided by that module and store it in the `printName` variable.

We can then continue to use the `printName` function as if it we defined it in our own program!

```js
var printName = require('./printName.js');

printName();
```

> Modules can not only export functions, but all variable types you already learned about. Most commonly, they export a function or an object containing multiple functions.

> *Together:* Import `src/sum.js` into `test/sum.test.js` and run the test

## Separating code and tests

Exporting and importing modules is really useful for testing, too.

As a rule of thumb, we never want to mix our actual code with our tests. It is therefore common to put them in separate files. We are going to call the file containing the tests after the file containing the code to be tested, just appending `.test` at the end of the filename. Like so:

```
sum.js                # Our main program
sum.test.js           # Tests for our main program
someOtherCode.js      # A module called "someOtherCode"
someOtherCode.test.js # Tests for the "someOtherCode" module
```

> The naming is really up to convention - you can even put your tests in a different folder! However, for Jest it is important to call test files "\*.test.js".

> *Exercise:* Edit `test/sum.test.js`. Move the actual `sum` function to a different file (`src/sum.js`) and export it from there. The go back to your test file and import the sum function from `sum.js`.

> *Exercise:* Run `npm test function` inside `unit-testing-london`. We have 10 failing tests.
1. To begin with export the `functions` object from `src/functions.js` and import it into `test/functions.test.js`.
2. Implement all the functions in `src/functions.js` so all the unit test pass when you run `npm test function`. Do not make remove or change any tests in `test/functions.test.js`.
3. Create a function `src/functions.js` that accepts 2 arrays as arguments and returns a new array which contains all the items from the two inputs. Write a test for that function in `test/functions.test.js`.
