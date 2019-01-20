# React 2

![](https://img.shields.io/badge/status-draft-darkred.svg)

**What will we learn today?**

- [Recap](#recap)
- [A simple counter application](#a-simple-counter-application)
- [Introduction to state](#introduction-to-state)
- [More advanced use cases: user input in forms](#more-advanced-use-cases)

## Recap

In the first lesson of React, we defined a React component, we learned to create and compose components together but also to pass properties, called "props", to a component. Do you remember the `HelloMentor` component we wrote last week? ([interactive example](https://stackblitz.com/edit/react-jnkuqk)):

**TODO Update the component below with a more sensible example to recap previous lesson**

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

However, modern web applications need to do more than just displaying data. Users can interact with an application, they can press buttons, input text in a form, click links etc... In this lesson, we are going to learn to handle changes in a React application.

## A simple counter application

Let's write a more interesting application that responds to a user input. The counter below is a common React example. It shows the number of times a button has been clicked by a user. Initially, the counter displays 0 but every time the user clicks on the button, this number will increment by 1.

First of all, let's create a new React component. It should display a button and the initial value of 0 for the counter ([interactive example](https://stackblitz.com/edit/react-bb5vjg)):

```js
class Counter extends React.Component {
    render() {
        return (
            <div>
                Count: {this.props.count}
                <button>Click me!</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={0} />, document.getElementById('root'))
```

**Exercice 1:** Create a Counter component as the above example, passing 0 as a props to the Counter component. Verify that you can display the initial value of 0 and the button on the screen. Then try to change the value props to 10 and make sure your component initial count changes.

Currently, this counter is not very useful as it doesn't do anything when the user clicks the button. So, how do we make sure that when the user clicks on the button, the counter increments by 1 and the user sees the result on the page?

## Introduction to state

There are 2 very main concepts in React: the concept of `props` that you learned in the first class, and the concept of `state`. Making the difference between these 2 concepts is critical to design correctly a React application. While props can be used to pass parameters to a component, state is used to record the **changes** in your application. In our counter application, what can change and where does the change come from? Answer: the value of the count can change and that change comes after the user clicks on the button.

Let's see below how to do this in React.

### 1. Define the application state

First, as we know that the value of the count can change, we need to define *count* as a state of our application. We do this in the constructor of the component, by initializing the special React variable `this.state`. The initial value of the count state is set to the value of the count props of the component. 

This is a common pattern in React. If a state doesn't need to be necessarily configured using props, props can sometimes act like "initial configuration" for the state of a component.

Note in the render() function that we are using `this.state.count` instead of `this.props.count` previously, meaning that we now display whatever the count state value is. If you display this in a browser, you should not see any differences... yet!

```js
class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: props.count
        };
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button>Click me!</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={0} />, document.getElementById('root'))
```

**Exercice 2:** Reproduce the above example, initialize the state with the props and display the content of the count state in the render function. 

### 2. Update the state

So far, we have defined a count state, but we have no ways to change it. What's next? We need to increment the count state when the user clicks on the button. React provides predefined functions to handle various kind of events. Here, we associate a click event on the button with a function `incrementCount` using the `onClick` handler on the button, meaning that when the user clicks on the button, the function `incrementCount` will be called.

The function `incrementCount` is responsible to update the count state. When it is called, it first gets the current value of the count from the state, then it calls `this.setState` to update the state of the component. `this.setState` is a special function provided by React and is used to change what the component is remembering in its state. It will also tell React that the old value that is shown in the DOM is outdated and needs to be updated. As a result, a call to this.setState will trigger React to re-render the component, which will effectively displays the new value of the state on the screen.

```js
class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: props.count
        };
        this.incrementCount = this.incrementCount.bind(this);
    }
    
    incrementCount() {
        const currentCount = this.state.count;
        this.setState({count: currentCount + 1});
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={this.incrementCount}>Click me!</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={0} />, document.getElementById('root'))
```

**Exercice 3:** Add a click handler on the button and create the incrementCount function to increment the count state. Try it your browser. You should now be able to see the count value change when you click on the button.

As you can see, the DOM automatically updates when you click on the button. This is an incredibly powerful feature of React. Even better, React will figure out exactly the right bits of the DOM that need to be changed. This makes it extremely efficient and fast. This is concept is called the ["virtual DOM"](https://reactjs.org/docs/faq-internals.html).

## More advanced use cases: user input in forms

In the previous part, we have seen how to handle a simple user interaction: a click on a button. However, modern web applications often rely on more complex interactions such as input text in a form, select options in a dropdown menu, submit a form etc... Now that you know how to use React state, let's use it to learn how to handle user input!

In the following, we are going to build a more advanced *hello world* example, where the user can type their name in an input field which is used to display a greeting message on the screen.

### 1. Create the component

Let's create the *SmartGreeting* component first and display what we need on the screen. What is the state of the component here? Remember to ask yourself, what can change in this component? The name can change as it depends on what the user chooses to type in the input field. Consequently, name is a state of the component. Let's initialize the name state as an empty string.

```js
class SmartGreeting extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

    render() {
        return (
              <h1>Hello {this.state.name}!</h1>
            <div>
                Enter your name: <input type="text" />
            </div>
        );
    }
}

ReactDOM.render(<SmartGreeting />, document.getElementById('root'))
```

**Exercice 4:** Reproduce the code above and verify that you can display the world *Hello !* as well as an input field on the screen.

### 2. Handle user input

Now, let's wire the input field with the state of the component. Below, we added an `onChange` event handler, which calls the function `handleInput` every time the input field changes, i.e. every time the user is going to type something in this field. 

In the `handleInput` function, the `event` variable is automatically passed by React and contains all the information associated with the event of typing something in the input field. It also contains what is typed in the field under `event.target.value`... which is exactly what we need to record in the name state! We then call `this.setState` to update the name state.

As we call `this.setState`, React re-renders the component with the new value of the name state, so you can now see a greeting message which is updated with whatever you type in the input field. Note also that the `value` of the input field is also set to the the name state to keep it in sync with the name state of the component.

```js
class SmartGreeting extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
              <h1>Hello {this.state.name}!</h1>
            <div>
                Enter your name: <input type="text" onChange={this.handleInput} value={this.state.name} />
            </div>
        );
    }
}

ReactDOM.render(<SmartGreeting />, document.getElementById('root'))
```
**Exercice 5**: Time to practice! Reproduce the code above and make sure the greeting message is updated as you type your name in the input field.

**TODO: review the exercices below**
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
