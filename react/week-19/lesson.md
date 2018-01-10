# React 1

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

- [What is React?](#what-is-react)
- [What is a component?](#what-is-a-component)

## What is React?

- Lib from Facebook
- Used for making complex user interfaces
- (What is a user interface?)
- Why?
    + Faster
    + Easier to understand & less verbose than vanilla JS api
    + Separate functionality into small, understandable pieces
- Virtual DOM

## Rendering with React

- Remember how annoying it was to manage the DOM yourself?
- Instead of manipulating each DOM element itself, you give React a "description" of the DOM that you want and it will do it for you
- React abstracts away the management of the DOM

We are going to walk through how to render a `<div>` and the text "Hello World" within it.

First, lets recap how we could do this using vanilla JS ([interactive version](http://jsbin.com/motorexehu/edit?html,output)):

```html
<!DOCTYPE html>
<html>
<body>
<div id="root"></div>

<script type="text/javascript">
    var divNode = document.createElement('div');
    var textNode = document.createTextNode('Hello World');
    divNode.appendChild(textNode);

    var rootElement = document.getElementById('root');
    rootElement.appendChild(divNode);
</script>
</body>
</html>
```

Now let's convert to using React ([interactive version](http://jsbin.com/recegadexu/edit?html,output)):

```html
<!DOCTYPE html>
<html>
<body>
<!-- Load React & ReactDOM scripts -->
<!-- Don't worry about how we're doing this yet! -->
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>

<!-- Root element -->
<div id="root"></div>

<script type="text/javascript">
    const element = React.createElement('div', {
        children: 'Hello World'
    })

    const rootElement = document.getElementById('root')
    ReactDOM.render(element, rootElement)
</script>
</body>
</html>
```

## JSX

As you can see, React is already helping us a bit by cleaning up some of the verbose vanilla JS APIs. However in a typical React application you would still use a *lot of the `React.createElement` function. To improve the developer experience the React team developed **JSX**.

JSX is a simple syntax "sugar" that *looks* like HTML, but is actually converted to the `React.createElement` function when you run it.

Using JSX ([interactive version](http://jsbin.com/gekahexige/edit?html,output)):

```html
<!DOCTYPE html>
<html>
<body>
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
<!-- Add Babel script, which compiles JSX to React.createElement -->
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>

<div id="root"></div>

<script type="text/babel">
    const element = <div>Hello World</div>

    const rootElement = document.getElementById('root')
    ReactDOM.render(element, rootElement)
</script>

</body>
</html>
```

As you can see, this is much easier to read than both the straight `React.createElement` API and the vanilla JS API. Most people using React use JSX to write their components.

> Exercise: TODO?????????

## What is a component?

- Look over https://github.com/CodeYourFuture/bikes-for-refugees/blob/master/index.html
    + Try to determine logical pieces of UI
    + Hard to understand
- Components are like Lego pieces
    + Can stick them together in reusable ways to make new UIs
    + Not restricted to React - a general principle in UI design/development
- Single responsibility principle
    + Each component should only have 1 "responsibility"
    + Should only do 1 thing
- Tree of components
    + Recap DOM tree
    + Like the DOM
- No hard & fast rules for making components
    + About judgement
    + Tips:
        - Good, explicit naming

> Exercise: Break down Thinking in React example into components

## Let's Create An App

- Create React App
- FB tool for setting up React applications

> Exercise: Install & set up a CRA

```
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

## React Components

React applications are built from components. Here's how you create a component in React:

```js
import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
    render() {
        return <div>Hello World</div>
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))
```

Components get more powerful when you combine (or "compose") several components together:

```js
class Greeting extends React.Component {
    render() {
        return <span>Hello</span>
    }
}
class Mentor extends React.Component {
    render() {
        return <span>Ali</span>
    }
}

class HelloWorld extends React.Component {
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

> Exercise: TODO?????????????

## Reacting to Changes

MOVE THIS TO STATE LESSON?
WANTED TO INCLUDE IT EARLY IF POSSIBLE BECAUSE IT DEMOS VIRTUAL DOM

Now let's write a more interesting app that responds to some user input. We'll see how React will take care of updating the DOM for you.

A counter is a common React example, showing the number of times a button has been clicked. First lets render a button and a counter which set to 0 clicks:

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

Now let's listen for clicks on the button and increment the counter ([interactive version](http://jsbin.com/nebatulaka/edit?js,output)):

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
