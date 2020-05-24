# React - Week 2

![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

---

**Teaching this lesson?**

Read the Mentors Notes [here](./mentors.md)

---

**What will we learn today?**

- [React 2](#react-2)
  - [Recap](#recap)
  - [Class Components](#class-components)
    - [Class Methods](#class-methods)
  - [Passing Functions as Props](#passing-functions-as-props)
  - [Reacting to Changes](#reacting-to-changes)
  - [State](#state)
    - [When do you use Props or State?](#when-do-you-use-props-or-state)
    - [Container components](#container-components)
  - [React Hooks](#react-hooks)
    - [What are Hooks?](#what-are-hooks)
    - [What is State?](#what-is-state)
    - [How is state different to a variable?](#how-is-state-different-to-a-variable)
    - [Why are hooks important?](#why-are-hooks-important)
    - [Hooks - using state variables](#hooks---using-state-variables)
    - [Destructuring](#destructuring)
      - [Destructuring - Objects](#destructuring---objects)
      - [Destructuring - Arrays](#destructuring---arrays)
    - [Hooks - using State Hooks](#hooks---using-state-hooks)
    - [What component owns the state?](#what-component-owns-the-state)
      - [State is stored locally](#state-is-stored-locally)
      - [Setting Multiple States](#setting-multiple-states)
    - [State passed down as props](#state-passed-down-as-props)
  - [Further Reading](#further-reading)
  - [Glossary](#glossary)

---

{% include "./learning-objectives.md" %}

---

## Recap

Last week we looked at how to write a `HelloMentor` React component ([interactive example](https://codesandbox.io/s/react-2-recap-7zvk9n1950?file=/src/HelloMentor.js)):

```js
// Greeting.js
function Greeting() {
  return <span>Hello</span>;
}

// Mentor.js
function Mentor(props) {
  return <span>{props.name}</span>;
}

// index.js
import Greeting from './Greeting';
import Mentor from './Mentor';

function HelloMentor() {
  return (
    <div>
      <Greeting />
      <Mentor name="Ali" />
    </div>
  );
}
```

## Handling events

So far we have only looked at React apps that are "static": they don't respond to user input. This week we will look at making our apps *dynamic*.

### Recap: First Class Functions in JavaScript

Before we look more at React we need to recap a concept in JavaScript. You may remember that functions in JavaScript are "first class" - that means we can pass a *reference* to a function (as a variable) and then call it elsewhere. Let's look at an example ([interactive example](https://jsbin.com/xudukezaje/edit?js,console)):

```js
function hello() {
  return "Hello!";
}

console.log(hello);   // Logs: "ƒ hello() {}"
console.log(hello()); // Logs: "Hello!"
```

In the example above `hello` is a **reference** to a function. In the first `console.log` we log out the whole function. The function is **not called** until we use parentheses (`()`), so we only log the string `"Hello!"` in the second `console.log`.

This is a really important and useful in React, as we can make a function and pass it to React so that it can call it when a user interacts with our app.

### Event Handlers in Components

In previous lessons we learned how to attach event listeners with `addEventListener`:

```js
// Create an event handler
function logWhenClicked() {
  console.log('buttonElement was clicked!')
}

// Listen for events and call the event handler when triggered
buttonElement.addEventListener('click', logWhenClicked)
```

We still need to listen events in React, but event handlers are set up in a slightly different way ([interactive example](https://codesandbox.io/s/event-handlers-cc3h7?file=/src/ClickLogger.js)):

```js
function ClickLogger() {
  function logWhenClicked() {
    console.log("Button was clicked!")
  }

  return <button onClick={logWhenClicked}>Click me!</button>
}
```

You might find it a little strange that we have a function inside a function. But this is a normal thing to do in JavaScript! `logWhenClicked` is within the *scope* of our `ClickLogger` component.

Every element in React has some special props that start with `on` that can be assigned to a function which will be called when the event is triggered. In this example we are using `onClick`, but we'll also see `onSubmit` later in the module. A full list of special event handler props is available [here](https://reactjs.org/docs/events.html#reference).

Just like with `addEventListener` we pass the function reference to `onClick` instead of calling the function. Think of it like this: we give the function to React, so that React can call our function when the element is clicked.

| **Exercise** |
| :--- |
| 1. Open the `pokedex` React application from last week and open the `Logo.js` file. |
| 2. Add a function named `logWhenClicked` within the `Logo` component. (Hint: look at the example above). |
| 3. In the `logWhenClicked` function, `console.log` a message (it doesn't matter what the message is). |
| 4. Add an `onClick` handler to the `<img>` that will call `logWhenClicked`. (Hint: look at the `ClickLogger` component above). |
| 5. In your web browser, try clicking on the logo image. What do you see in the JavaScript console? |
| 6. In a group of 2 - 3 students, discuss what would happen if you changed your code to `onClick={logWhenClicked()}`. Can you explain why? |
| 7. Report your discussion back to the rest of the class. |

### Passing Functions as Props

Sometimes we need to pass a function to another component as a prop, so that it can handle the event.

A common example for this is a Button component. This component adds some styling to a normal `<button>`, but still needs to be able to pass an event handler function to `onClick`. Let's look at an example ([interactive example](https://codesandbox.io/s/passing-functions-as-props-zqlnmo16y3?file=/src/ClickLoggerApp.js)):

```js
function ClickLoggerApp() {
  function logWhenClicked() {
    console.log("Button was clicked");
  }

  return (
    <div>
      <FancyButton handleClick={logWhenClicked} />
      <p>Then look in the console.</p>
    </div>
  );
}

function FancyButton(props) {
  return (
    <button className="my-fancy-classname" onClick={props.handleClick}>
      Click Me!
    </button>
  );
}
```

Notice how this is very similar to the example above where we created the handler and used it in the same component? The only difference here is that we are passing the function reference through a prop. We could even pass it through multiple components as props.

| **Exercise** |
| :--- |
| 1. Open the `pokedex` React application and open the `Logo.js` file. |
| 2. Copy and paste the `logWhenClicked` function from the `Logo` component to the `App` component. |
| 3. Pass the `logWhenClicked` function **reference** as a prop to the `Logo` component. (Hint: look at the `ClickLoggerApp` component above for an example). |
| 4. In the `Logo` component change the `onClick` prop so that it passes `props.handleClick`. (Hint: look at the `FancyButton` component above for an example). |
| 5. In a group of 2 - 3 students, discuss what you think will happen when you click the logo image now. Can you explain why? |
| 6. Report back to the rest of the class what you thought was going to happen and why. |

## Re-Rendering Components

So far we've seen that when the page loads, React calls our function components. The JSX elements that are returned from the component functions are turned into the DOM for you by React.

To be able to react to changes, we need to *re-render* our function components to get different JSX elements. React can then update the DOM based on the new JSX elements.

Let's look at how a component is re-rendered ([interactive version](https://codesandbox.io/s/force-component-re-rendering-llow115pll?file=/src/Counter.js)):

```js
function Counter(props) {
  console.log(`Rendering. props.count is ${props.likeCount}`);

  return <button id="like-button">Likes: {props.likeCount}</button>;
}
```

If you look in the console, you'll see that the component is rendered once when the page loads. `props.likeCount` starts at 0, so React inserts "Count: 0" into the DOM.

But when you click the button, the function component is called again (or *re-rendered*). Don't worry about **how** this happens right now. This time `props.likeCount` is **1**. React now **updates** the DOM to make sure it shows the correct number. Every time we click the button, the function component is called and React updates the DOM for us.

We don't need to worry about changing the DOM ourselves! This is what makes React so powerful. Even better, React will figure out exactly the right bits of the DOM that need to be changed, a concept called the ["virtual DOM"](https://reactjs.org/docs/faq-internals.html). This makes it extremely efficient and fast.

## State

*State* a general concept in software engineering. It is used when part of your app needs to "remember" something that changes when people interact with it.

Let's make up an imaginary example, where we have a button that toggles state between `true` and `false`:

1. We'll set the initial state (before any interaction as happened):

  ```js
  state = {
    buttonPressed: false
  }
  ```

2. When the user presses the button, we need to *handle* the event by
3. Updating the state:

  ```js
  state = {
    buttonPressed: true
  }
  ```

This is a simple example, but if we had lots of bits of state, then we can make very complex apps.

### How is state different to a variable?

In the code above it looked like we were using a variable called `state`. What's wrong with just using a variable?

Unfortunately we learned earlier that every time our components re-render, the function is called again. That means that any variables inside our components will be re-created ([interactive example](https://codesandbox.io/s/component-variables-resetting-on-re-render-101h1?file=/src/Counter.js)):

```js
function Counter() {
  let count = 0;

  console.log(`Rendering. count is ${count}`);

  function incrementCount() {
    count = count + 1;
  }

  return (
    <div>
      Count is: {count}
      <button id="click-me" onClick={incrementCount}>
        Click me!
      </button>
    </div>
  );
}
```

This component doesn't work! Every time it re-renders, we reset the `count` variable back to 0. We need something to "remember" what the count value was before the re-render. Because of this, we need to use the method that React provides.

This **doesn't** mean that variables are useless. They are still useful for when we need to calculate a value during a render. State is a variable, but not all variables are state.

### Why are hooks important?

- Easier to Handle State - the code for hooks is more readable, makes it simpler for other developers to understand and less problems when making future changes
- Hooks are Reusable - custom hooks can be created and can be used elsewhere you in the code. Keeping your code DRY (Don't Repeat Yourself)

### Hooks - using state variables

```jsx static
import React, { useState } from 'react';

const Counter = () => {
  const [ count ] = useState(0); // 1)

  return <p>You clicked { count } times</p> // 2)
}
```

1\) `useState` is a React hook. In this example it [destructures](#destructuring) a variable called `count`. The number `0` is passed into `useState` and will be used as the *initial* value in `count`.

2\) Here we pass `count` the **state variable** into a set of curly braces to give `{ count }`. As no changes have been made to `count`, it will use the initial value `0`. To give us "You clicked 0 times".

### Destructuring

#### Destructuring - Objects

Another thing you've picked up is the special syntax `{ useState }`. This is known as **object destructuring**, or we can say the object **destructures**, where we grab the key of an object and declare it as variable/function. 

Normal access objects using dot notation.

```js static
const person = {
  name: "Jessica",
  age: 28,
  isDeveloper: true,
}

// Accessing with `dot` notation
const name = person.name
const age = person.age
const name = person.developer

console.log(name) // "Jessica"
console.log(age) // 28
console.log(developer) // true
```

With `object destructuring` keys are of the objects are variables.

```js static
const person = {
  name: "Jessica",
  age: 28,
  developer: true,
}

// Accessing with `object destructuring` notation
const { name, age, developer } = name

console.log(name) // "Jessica"
console.log(age) // 28
console.log(developer) // true
```

#### Destructuring - Arrays

The same concept applies to array, known as **array destructuring** and can be seen for the state variable `[count]`.However instead of grabbing the key. The first index of the array is the **state variable**.

```js static
const person = ["Jessica", 28, true]

// Accessing arrays with index notation
const name = person[0]
const age = person[1]
const name = person[2]

console.log(name) // "Jessica"
console.log(age) // 28
console.log(developer) // true
```
Below `array destructuring` is different from `object destructuring`, where the order of the destructed values or callback functions matter.

```js static
const person = ["Jessica", 28, true]

// Accessing with `array destructuring` notation
const [ name, age, developer ] = name

console.log(name) // "Jessica"
console.log(age) // 28
console.log(developer) // true
```

For more details on [destructuring](https://wesbos.com/destructuring-objects).

### Hooks - using State Hooks

```jsx static
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // 1)

  const incrementCount = () => setCount(count + 1) // 2a) 

  return (
    <div>
      <button onClick={incrementCount}> {/* 2b) */}
        Click me
      </button>
      <p>You clicked {count} times</p> {/* 3) */}
    </div>
  );
}
```

1\) From `useState` we can get a destructured function `setCount` called the **state method** - 1st index is the state variable, 2nd index is the state method.

2a\) We create a function called `incrementCount` that manipulates `setCount` to add `1` to the current `count` value.

2b\) Here `incrementCount` can be called whenever a *user* clicks on the button. The count variable will change from `0` to `1`.

3\) React will re-render the paragraph tag `<p>` and apply the changes made to `count`. This will change the paragraph text to change from "You clicked **0** times" to "You clicked **1** times".

You can continue to click on the button and each time it's been clicked, the count value is will increment by 1.

### What component owns the state?

#### State is stored locally

```jsx static
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1)

  return (
    <div>
      <button onClick={incrementCount}>
        Click me
      </button>
      <p>You clicked {count} times</p>
    </div>
  );
}

const App = () => (
  <div>
    <Counter /> {/* 1) */}
    <Counter />
    <Counter /> {/* 2) */}
  </div>
)
```

1\) When we click on the button "Click Me" of the 1st `Counter` component, you will notice that only that first `Counter` will increment to give a message "You clicked **1** times".

2\) The same behaviour occurs for the 3rd `Counter` component. It increments independently from the rest. Why is that? Remember that here we reusing the same component 3 times and that each `Counter` component has state locally scoped to the instance of that component - i.e. local state do not interfere does another component's state.

#### Setting Multiple States

```js
function ExampleWithManyStates() {
  const [age, setAge] = useState(0);
  const [fruit, setFruit] = useState('Oranges');

  const incrementAge = () => setAge(age + 1) 
  const giveFruit = name => setFruit(name) // 1)
  
  return (
    <div>
      <p> Hi! I am Alex </p>
      <p> I am {age} years old </p>
      <p> I prefer to eat {fruit} </p>      
      <button onClick={incrementAge}>Add 1 year</button>
      <button onClick={() => giveFruit('Apples')}>Change to Apples</button> {/* 2) */}
    </div>
  )
}
```

1\) This additional function now takes parameter `name`, and passes this onto the `setFruit` state method.

2\) Methods that require an argument, need to declare at the start with an anonymous function.

**✘ - Do not call functions too early**

```jsx
<button onClick={giveFruit('Apples')}>Change to Apples</button>
```

Note that calls the function too early, meaning the function is fired before any user interaction.

**✔ - Do return a callback of state method**

```jsx
<button onClick={() => giveFruit('Apples')}>Change to Apples</button>
```

Anonymous functions can be used to trigger state methods to fire upon user interaction.

### State passed down as props

```jsx static
import React, { useState } from 'react';

const MessageCount = number => (
  <p>You clicked {number} times</p>
)

const Counter = () => {
  const [count, setCount] = useState(0); // 1)

  const incrementCount = () => setCount(count + 1)

  return (
    <div>
      <MessageCount number={count} /> {/* 2) */}
      <button onClick={incrementCount}>
        Click me
      </button>
    </div>
  );
}
```

1\) `Counter` as the **parent** component that owns the state variable `count`, initially set at value `0`.

2\) `MessageCount` is the **child** component that receives value `0` to prop `number`.

### When do you use Props or State?

We've looked at the 2 main ways of managing data in our React components. But when should we use props and when should we use state?

Remember that props are like "arguments" to a component. It's good practice to make sure that you don't modify arguments after you receive them. In fact, React makes it impossible to modify (or *mutate*) props. Let's have a look at an example ([interactive example](https://codesandbox.io/s/9wl90npk4)):

```js
class Hello extends Component {
  render() {
    this.props.name = 'Ali';

    return (
      <p>Hello {this.props.name}</p>
    );
  }
}

render(<Hello name="Mona" />, document.getElementById('root'));
```

You'll see that we get an error. This is because React has made props *read-only*, which is a reminder to you that we shouldn't change props. If we were allowed to change props, React doesn't have a way of telling that you've changed the data. Our UI is now *stale* - not up-to-date with the latest data - and has no way of knowing that it has to re-render.

From this we can get a clue about when to use state. If data *changes over time*, then we need to use state. My rule of thumb is that I always use props until I know that it needs to change over time, then I convert it to state. As you get more experience with React, you'll know sooner what should be props and what should be state.

## Fetching data in React

Often when you create a React app, you will want to get data from an API, and display it inside your components.
How do we do this in React? Where does the API call go, and when should we trigger it?

**Where:** Usually in a parent component, at the top of the component tree (see the note about 'container' components above). You can then flow the data down into your child components as props.
**When:** When the component is first loaded into the DOM. We call this 'mounting'.
**How:** With a handy new hook called `useEffect`.

### The `useEffect` Hook

Just like `useState`, the `useEffect` hook is a special function that all function components can import and use as needed. This is the syntax to follow to fetch data when the component is first mounted:

```js
useEffect(() => {
  // Make your fetch API call here
}, []); // Don't forget the empty array here!
```

And here is a more complete example:

```js
import React, { useState, useEffect } from 'react'; // remember to import the Hook(s) you need!

function MartianPhotoFetcher() {
  const [marsPhotos, setMarsPhotos] = useState();

  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`)
      .then(res => res.json())
      .then(data => setMarsPhotos(data));
    });
  }, []);

  return (
    <div>
      // TODO: update this example
    </div>
  );
};

export default MartianPhotoFetcher;
```

In the code above, we're saying to React “When this component is mounted, call the NASA photos API, and when you receive a response, save it inside of the 'marsPhotos' state”.

This is a very common pattern which will come in very useful!

| **Exercise** |
| :--- |
| 1. Open the `pokedex` React application again and open the `src/BestPokemon.js` file. |
| 2. Create a new component called `BestPokemonFetcher`. |
| 3. Change the `export default` to export `BestPokemonFetcher` instead of `BestPokemon`. We **don't** need to make any changes to the `BestPokemon` component. |
| 4. In the new `BestPokemonFetcher` component, create a new state variable called `pokemon` and initialise it to `null`. <details><summary>Click here if you are stuck.</summary>Look at the State section to see how to create state variables.</details> |
| 5. If there is no `pokemon` state (hint: `if (!pokemon) {}`), then return `null` so that the component renders nothing. |
| 6. If there is some `pokemon` state (`else {}`), then render the `BestPokemon` component and pass the `pokemon` state variable as the `pokemon` prop (hint: `<BestPokemon pokemon={pokemon} />`). |
| 7. Now add a `useEffect` to the `BestPokemonFetcher` component. Make sure you remember to add the empty array after the callback function. <details><summary>Click here if you are stuck.</summary>Look at the examples above to see how to add <code>useEffect</code>.</details> |
| 8. Inside the `useEffect` callback, call the `fetch` function with this URL: `https://pokeapi.co/api/v2/pokemon/1/`. |
| 9. Add a `.then` handler into the `fetch` function (remember this needs to come immediately after the `fetch` call) which converts the response from JSON (hint: `.then(res => res.json())`). |
| 10. Add a second `.then` handler after the one we just added, where the callback function will receive an argument called `data`. |
| 11. Within the second `.then` callback function, log out the data that we just received (hint: `console.log(data)`). Inspect the data in the dev tools console. Can you see any interesting values? (Hint: think about what the `BestPokemon` component expects as a prop) |
| 12. Still within the second `.then` callback function, update the `pokemon` state variable. <details><summary>Click here is you are stuck.</summary>:ppl at the State section again to see how to set state variables to new values.</details> |
| 13. What happens in your browser? Do you understand why? If not, discuss it with another student. If you are both stuck, ask a Teaching Assistant. |

### Container components

In real world applications, the things we want to remember in state follow the *business logic* required by our users. So for example the number of caught Pokemon in the exercise  increases when you click on the button *Catch Pokemon*. Most of the time, business logic is about figuring out when and how to change state.

To help us cleanly split up code that performs business logic from code that shows the user interface we split components into *presentational* and *container* components. Often we have components that don't do anything except manage state according to the business rules and render the right presentational components. On the other hand, we often have components that don't change any state, and just render using the provided props.

Container components usually have some state and handler methods. Because of this they must use the `class` syntax. Presentational components on the other hand don't require the more verbose syntax. Instead they usually use the functional syntax.

## Further Reading

What happens if you forget to pass a prop to a component? Or if you pass the wrong type of data to a component? Sometimes React will just render an empty element but sometimes it could throw an error! This is why `propTypes` are useful. [This page on the React documentation](https://reactjs.org/docs/typechecking-with-proptypes.html) describes how to use `propTypes` in more detail.

> **Exercise E**
> Complete the FreeCodeCamp [exercise](https://learn.freecodecamp.org/front-end-libraries/react/) on `propTypes`:
>
> 1. [Use PropTypes to Define the Props You Expect](https://learn.freecodecamp.org/front-end-libraries/react/use-proptypes-to-define-the-props-you-expect/)

## Glossary
- `prop`: is a value that is passed down from parent component to a child component, cannot be stored locally inside a react component
- `state`: is a variable that is stored inside a component

{% include "./homework.md" %}
