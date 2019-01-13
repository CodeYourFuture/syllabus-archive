# React 2

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

- [Recap](#recap)
- [Reacting to Changes](#reacting-to-changes)
- [State](#state)
- [Functional Components](#functional-components)
- [Passing Functions as Props](#passing-functions-as-props)

## Recap

Last week we looked at how to write a `HelloMentor` React component ([interactive example](https://stackblitz.com/edit/react-jnkuqk)):


```js
// Mentor.js
class Mentor extends React.Component {
    render() {
        return <span>Ali</span>
    }
}

// index.js
import Greeting from './Greeting'
import Mentor from './Mentor'

class HelloMentor extends React.Component {
    render() {
        return (
            <div>
                <Greeting />
                <Mentor />
            </div>
        )
    }
}
```

## Reacting to Changes

Now let's write a more interesting app that responds to some user input. We'll see how React will take care of updating the DOM for you.

A counter is a common React example, showing the number of times a button has been clicked. First lets render a button and a counter which set to 0 clicks ([interactive example](https://stackblitz.com/edit/react-bb5vjg)):

```js
let count = 0

class Counter extends React.Component {
    render() {
        return (
            <div>
                Count: {this.props.count}
                <button id="click-me">Click me!</button>
            </div>
        )
    }
}
function renderCounter() {
    ReactDOM.render(<Counter count={count} />, document.getElementById('root'))
}

renderCounter(count)
```

Note that this example is simplified compared to your `my-hotel` application, because some parts are split into separate files to keep the code clean. You'll find the `ReactDOM.render` call in `index.js`

This example isn't very useful yet as it doesn't do anything when clicking the button. Now let's listen for clicks on the button and increment the counter ([interactive version](https://stackblitz.com/edit/react-tghfje)):

```js
let count = 0

class Counter extends React.Component {
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

Let's take another look at the the counter example. A new user story has been created to show multiple counters. How would you add another counter?

You could add some more `count` global variables:

```js
let count1 = 0
let count2 = 0
let count3 = 0
```

What might be the problem here?

- It's quite verbose
- It's hard to make sure that you're updating the correct counter
- It's stuck at 3 counters - to add more, a new user story would have to be created

What other approaches can we take?

The solution that React provides for us is called "state". It allows a component to "remember" some variables. Let's take a look at how we could rewrite the counter with React state.

First we'll get rid of the global variables. **Generally having global variables is a bad idea**, since it is very easy to create a bug which affects the whole application. We can also get rid of the `renderCounter` function and just call `ReactDOM.render` directly:

```js
ReactDOM.render(<Counter count={0} />, document.getElementById('root'))
```

Next we'll change the component to use the count from `this.state` instead of `this.props`:

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

This code has a bug! `this.state` is initialised as an empty object, and so `this.state.count` is undefined. We need to initialise it from props. We can do this in the class constructor:

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

`this.setState` is a special function provided by React, and it is used to change what the component is "remembering". It will also tell React that the old value that is still shown in the DOM is outdated and needs to be updated. This will trigger React to re-render, like we did manually with the `renderCounter` function.

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

# Homework

{% include "./homework.md" %}
