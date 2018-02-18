# React 2

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

- [Recap](#recap)
- [Making an Argument for Props](#making-an-argument-for-props)
- [What are props](#what-are-props)
- Reacting to Changes
- State

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

## Making an Argument for Props

What's the problem with this component? Hint: imagine what a user story might look like for this small application. How might changes to the user story affect changes to the code?

Our components are very inflexible. They cannot say hello to other mentors, and they can only say hello. If our user stories change, for example if we wanted to say hello to s different mentor, we would have to to change the code too. This is easy in our tiny application but for "real" applications this might be more difficult.

Instead wouldn't it be good if we could change which mentor we are saying hello to every time we render the component? This is what "props" are for.

## What are props?

Props are what we use in React to pass "arguments" to components. They are very similar to arguments in functions - you can "pass" props to components, and you can use those props in a component.

First let's look at passing props to your components ([interactive example](https://stackblitz.com/edit/react-ketrwi?file=index.js)):

```js
<Mentor mentor="Kash" />
```

As you can see props are key-value pairs, in this example the key is `mentor` and the value is the string `'Kash'`. We don't have to use strings, we can use any valid JavaScript data like numbers, arrays and objects. Remember that in JSX you can use curly braces (`{` & `}`) to inject data that is not a string:

```js
<HotelRoomPrice price={123}>
```

Now let's take a look at using props that we have passed to a component ([interactive example](https://stackblitz.com/edit/react-ketrwi?file=Mentor.js)):

```js
<span>{this.props.mentor}</span>
```

React gives you access to props via the `this.props` object. We can then inject into our component using curly braces. Because `this.props` is just a regular object, you can also inject into DOM attributes:

```js
<div id={'my-id-' + this.props.id}>{this.props.content}</div>
```

> **Exercise:**
> Open the `my-hotel` React application that your created last week
> 1. Edit the `Header` component so that the hotel name in the welcome message is passed as a prop
> 2. Edit the `SpecialDeals` component so that the array is passed as a prop

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

Note that this example is simplified from your `my-hotel` application, because some parts are split into separate files to keep the code clean. You'll find the `ReactDOM.render` call in `index.js`

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

As you can see, the DOM automatically updates when you render. This is an incredibly powerful feature of React. Even better, React will figure out exactly the right bits of the DOM that need to be changed. This makes it extremely efficient and fast. This is concept is called the "virtual DOM".

> **Exercise:**
> 1. 

### State

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
