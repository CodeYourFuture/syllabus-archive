# React 2

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

- [Recap](#recap)
- [Class Components](#class-components)
- [Passing Functions as Props](#passing-functions-as-props)
- [Reacting to Changes](#reacting-to-changes)
- [State](#state)

## Recap

Last week we looked at how to write a `HelloMentor` React component ([interactive example](https://stackblitz.com/edit/react-jnkuqk)):

```js
// Greeting.js
const Greeting = () => (
  <span>Hello</span>
)

// Mentor.js
const Mentor = (props) => (
  <span>{props.name}</span>
)

// index.js
import Greeting from './Greeting'
import Mentor from './Mentor'

const HelloMentor = () => (
  <div>
    <Greeting />
    <Mentor name="Ali" />
  </div>
)
```

## Class Components

So far we have looked at components which are just functions (which are sometimes called *stateless functional components*), but there is another way of creating React components using the `class` keyword. Let's look at an example ([interactive example](https://stackblitz.com/edit/react-esgmuh?file=Greeting.js)):

```js
import React, { Component } from 'react'

export default class Greeting extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}
```

Instead of getting props through the first argument of the component function, the class component gets props from `this.props`:

```js
class Mentor extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
```

So when do we use the `class` keyword and when do we use function components? Class components have special super powers called state and lifecycle (which we will look at later). The rule of thumb is to use functional components, unless you need to use the special super powers of state or lifecycle.

### Class Methods

One of the super powers that class components have is how we can add more functions within the class scope. These are sometimes called *methods*:

```js
import React, { Component } from 'react'

class Hello extends Component {
  sayHello = () => {
    console.log('Hello from Hello component!')
  }

  render() {
    return (
      <button onClick={this.sayHello}>Say hello</button>
    )
  }
}
```

> **Exercise:**
> Open the `my-hotel` React application that your created last week and convert the `BookingsMessage` component to a class component

## Passing Functions as Props

Remember that functions in JavaScript are "first class" - that means we can pass a *reference* to a function (as a variable) and then call it elsewhere.

```js
function hello() {
  return 'Hello!'
}
```

In the example above `hello` is a *reference* to a function. The functions are not called until we use parentheses:

```js
// Logs: "ƒ hello() {}"
console.log(hello)
// Logs: "Hello!"
console.log(hello())
```

This is important in React as we can pass the reference to the function as a prop, and then call the function from the child component ([interactive example](https://stackblitz.com/edit/react-zdeki8)):

```js
class App extends Component {
  logWhenClicked = () => {
    console.log('Button was clicked!')
  }

  render() {
    return (
      <div>
        <FancyButton handleClick={this.logWhenClicked} />
      </div>
    )
  }
}

const FancyButton = (props) => (
  <button
    className="my-fancy-classname"
    onClick={props.handleClick}
  >
    Click Me!
  </button>
)
```

> **Exercise:**
> Open the `my-hotel` React application once again
> 1. Add a `logWhenClicked` method to the `App` class component
> 2. Pass the `logWhenClicked` method as a prop to the `Logo` component
> 3. Call the function when the `<img>` is clicked (Hint: `onClick`)

## Reacting to Changes

Now let's write a more interesting app that responds to some user input. We'll see how React will take care of updating the DOM for you.

A counter is a common React example, showing the number of times a button has been clicked. First lets render a button and a counter which set to 0 clicks ([interactive example](https://stackblitz.com/edit/react-bb5vjg)):

```js
let count = 0

const Counter = (props) => (
  <div>
    Count: {props.count}
    <button id="click-me">Click me!</button>
  </div>
)

function renderCounter() {
  ReactDOM.render(<Counter count={count} />, document.getElementById('root'))
}

renderCounter(count)
```

Note that this example is simplified compared to your `my-hotel` application, because some parts are split into separate files to keep the code clean. You'll find the `ReactDOM.render` call in `index.js`

This example isn't very useful yet as it doesn't do anything when clicking the button. Now let's listen for clicks on the button and increment the counter ([interactive version](https://stackblitz.com/edit/react-bssdkj)):

```js
let count = 0

class Counter extends Component {
  // ...
}
function renderCounter(count) {
  // ...
}

renderCounter(count)

document.getElementById('click-me').addEventListener('click', () => {
  count = count + 1
  renderCounter(count)
})
```

As you can see, the DOM automatically updates when you render. This is an incredibly powerful feature of React. Even better, React will figure out exactly the right bits of the DOM that need to be changed. This makes it extremely efficient and fast. This is concept is called the ["virtual DOM"](https://reactjs.org/docs/faq-internals.html).

## State

Let's take another look at the the counter example. Our boss has asked us to create multiple counters on the same page. How would you add another counter?

You could add some more `count` global variables:

```js
let count1 = 0
let count2 = 0
let count3 = 0
```

What might be the problem here?

- It's quite verbose
- It's hard to make sure that you're updating the correct counter
- It's stuck at 3 counters - to add more, we'd have to do more work

What other approaches can we take?

The solution that React provides for us is called *state*. It allows a component to "remember" some variables. Let's take a look at how we could rewrite the counter with React state.

First we'll get rid of the global variables. **Generally having global variables is a bad idea**, since it is very easy to create a bug which affects the whole application. We can also get rid of the `renderCounter` function and just call `ReactDOM.render` directly:

```js
ReactDOM.render(<Counter count={0} />, document.getElementById('root'))
```

Now we need to use one of the class component super powers - state. That means we'll have to convert our `Counter` component to use a class ([interactive example](https://stackblitz.com/edit/react-b8zhqp)):

```js
class Counter extends Component {
  render() {
    return (
      <div>
        Count: {this.props.count}
        <button id="click-me">Click me!</button>
      </div>
    )
  }
}
```

Next we'll change the component to use the count from `this.state` instead of `this.props` ([interactive example](https://stackblitz.com/edit/react-8aumme)):

```js
class Counter extends Component {
  render() {
    return (
      <div>
        Count: {this.state.count}
        <button id="click-me">Click me!</button>
      </div>
    )
  }
}
```

This code has a bug! `this.state` is initialised as an empty object, and so `this.state.count` is undefined. We need to initialise it from props. We can do this in the class constructor ([interactive example](https://stackblitz.com/edit/react-ww2caz)):

```js
class Counter extends Component {
  constructor(props) {
    this.state = {
      count: props.count
    }
  }

  render() {
    // ...
  }
}
```

This is a common pattern in React. Props often act like "initial configuration" for a component which are copied to state. If state doesn't need to be configured through props, you can set it's initial value here too.

Now the counter component is "remembering" that it's count, however it is stuck at 0. Next we'll look at how we change what the component is remembering ([interactive example](https://stackblitz.com/edit/react-znvcmk)):

```js
class Counter extends Component {
  constructor(props) {
    // ...
  }

  increment = () => {
    let currentCount = this.state.count
    this.setState({
      count: ++currentCount
    })
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.increment}>Click me!</button>
      </div>
    )
  }
}
```

There's a couple of things happening here. We've added an click handler to the button, which will call the `increment` function when the button gets clicked. When the `increment` function is called, it gets the current value of the count from `this.state`. Then it calls `this.setState` function with an incremented count.

`this.setState` is a special function provided by React's `Component`, and it is used to change what the component is "remembering". It will also tell React that the old value that is still shown in the DOM is outdated and needs to be updated. This will trigger React to re-render, like we did manually with the `renderCounter` function.

Now that we have refactored to use React state, we can easily add multiple counters ([interactive example](https://stackblitz.com/edit/react-678rgd)):

```js
class App extends Component {
  render() {
    return (
      <div>
        <Counter count={0} />
        <Counter count={0} />
        <Counter count={0} />
      </div>
    )
  }
}
```

> **Exercise:**
> Open the `my-hotel` React application that your created last week
> 1. Set the initial state of the `BookingsMessage` component to have 0 bookings
> 2. Show the number of bookings from state in `BookingsMessage`
> 3. Add an "Add Booking" button to the `BookingsMessage` component
> 4. Create an `addBooking` function on the `BookingsMessage` component
> 5. Add a click handler to the button which calls the `addBooking` function
> 6. Use `this.setState` to increment the number of bookings in state

### When do you use Props or State?

We've looked at the 2 main ways of managing data in our React components. But when should we use props and when should we use state?

Remember that props are like "arguments" to a component. It's good practice to make sure that you don't modify arguments after you receive them. In fact, React makes it impossible to modify (or *mutate*) props. Let's have a look at an example ([interactive example](https://stackblitz.com/edit/react-c9dw8g)):

```js
class Hello extends Component {
  render() {
    this.props.name = 'Mona'

    return (
      <p>Hello {this.props.name}</p>
    );
  }
}
```

You'll see that we get an error. This is because React has made props *read-only*, which is a reminder to you that we shouldn't change props. If we were allowed to change props, React doesn't have a way of telling that you've changed the data. Our UI is now *stale* - not up-to-date with the latest data - and has no way of knowing that it has to re-render.

From this we can get a clue about when to use state. If data *changes over time*, then we need to use state. My rule of thumb is that I always use props until I know that it needs to change over time, then I convert it to state. As you get more experience with React, you'll know sooner what should be props and what should be state.

### Container components

In real world applications, the things we want to remember in state follow the *business logic* required by our users. So for example the number of bookings in the exercise above increases when you add a booking. Most of the time, business logic is about figuring out when and how to change state.

To help us cleanly split up code that performs business logic from code that shows the user interface we split components into *presentational* and *container* components. Often we have components that don't do anything except manage state according to the business rules and render the right presentational components. On the other hand, we often have components that don't change any state, and just render using the provided props.

Container components usually have some state and handler methods. Because of this they must use the `class` syntax. presentational components on the other hand don't require the more verbose syntax. Instead they usually use the functional syntax.

## Further Reading

Fed up of having to provide a prop for every component? Do you want to make your component use a value most of the time, but it can be overriden with a prop? This is a good time to use `defaultProps`. [This page on the React documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values) describes in more detail.

# Homework

{% include "./homework.md" %}
