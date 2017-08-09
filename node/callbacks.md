# Callbacks
In JavaScript, functions are first-class objects. That means they can be used in a first class manner like any other object since they are objects themselves. We can pass them as arguments to functions which is common technique in JavaScript for dealing with **asynchronous** behaviour. We have in fact already encountered callbacks when we looked at array methods such as `.forEach()`, `.map()` and `.filter`.

```js
const evenNumbers = [2, 4, 6, 8];
evenNumbers.forEach(function( num ) {
    console.log(num);
});
```

Here we are passing the `function( num ) {console.log(num);}` function as an argument to `.forEach()` to execute with each item in the array `evenNumbers`.

The above example is **synchronous** which means that code the callback is executed immediately. Let's look at an example where the code is executed **asynchronously**. We will use a `setTimeout` function to delay execution here. In most JavaScript applications asynchronous code execution could be in response to an event such as mouse click or data coming back from a server. We will look at both of those cases in detail in a future class.

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
* Functions that are passed as arguments are called **callbacks**
* Callbacks may be executed immediately or later
* If a callback is executed later, its return value is lost

> **Exercise**: What other Asynchronous operations have we recently used in the Node code we've written?

> **Exercise**: On the CV page, there is a button, **Get Repos List**, that doesn't work. There is code to make it work at `js\github-client.js`. Add `js\github-client.js` to your pages.

The **client-side code** in *github-client.js* should look familiar.

> **Exercise**: Identify all the callbacks in this code. Refactor the **anonymous functions** to their own variables and use the variables instead. (Bonus point if you use arrow functions)

## Callback hell
In the code where we retrieve the repos data from Github, imagine if we had a requirement, that for each repo retrieved, we have to make another API call to retrieve all the available branches (there is a property called *branches_url* that we can use to get that info). And then, once we have all the branches, make _another_ API call to get the info for each branch.

The code to do so, will look something similar to this:
```js
var oReq = new XMLHttpRequest();
oReq.addEventListener('load', function() {
    var oReq2 = new XMLHttpRequest();
    oReq2.addEventListener('load', function() {
        var oReq3 = new XMLHttpRequest();
        oReq2.addEventListener('load', function() {
            // 4. Now we finally have all the info we need and we can the info we retrieved from the three API calls.

        });
        oReq3.open('GET', url); // 3. third url for branch info
        oReq3.send();
    });
    oReq.open('GET', url); // 2. second url for branches
    oReq.send();
});
oReq.open('GET', url); // 1. first url for Repo
oReq.send();
```

The code above is very hard to understand and follow. Notice the pyramid shape `})` - This is often called the **callback hell**.
