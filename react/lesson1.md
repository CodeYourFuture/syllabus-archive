# React 1

**What we will learn today?**
- React
  - What is an SPA?
  - create-react-app
- Components
  - JSX
  - ES6 classes
  - Thinking in React
- JSX Patterns
  - Mapping Arrays
  - Conditionals
  - Embedding code
- props and state

# React

[React](https://facebook.github.io/react/) is a library by Facebook for building user interfaces. 

Today, the focus is on component based architectures, and React provides a thin layer on top of JavaScript and HTML to allow you to build custom components that can encapsulate behavior and style and can be re-used throughout your application and even exported for others to use.

We already have some existing components in HTML. When you write this:

```html
<input type="number" name="age" value="5">
```

..it generates this: 

<img src="assets/html_input.png" width="150">

An "input" box, that only supports numbers, with a set of up/down arrows for changing the value, and a pre-defined value of 5. So the **element tag** tells the browser which element to render, and the attributes specify the settings for that element and any information we want to pass into it.

## Why React?

Besides providing the tools to build powerful and well encapsulated components, React also takes care of updating the view to match our data.

Suppose you make an HTTP GET request to "http://blog.com/post?id=123" and you store the result in a variable:

```javascript
var post = {id: '123', title: 'Post 1', content: 'Lorem ipsum 1'};
```

And our HTML looks like this:

```html
<h1 id="title"> </h1>
<p id="content"> </p>
```

As we've learned, we can dinamically insert content into our HTML using JavaScript:

```javascript
document.querySelector('#title').innerText = post.title;
document.querySelector('#content').innerText = post.content;
```

So everytime our `post` variable changes, we have to manually call the above to update our HTML, so the user can actually see the new post.

However, with React, you can just setup your template once:

```html
<h1 id="title"> {post.title} </h1>
<p id="content"> {post.content} </p>
```

And then whenever there's a change to `post`, React will take care of changing the DOM to match our new data.

> **Exercise:** 
>
> What does the above HTML remind you of? Any similar technology we studied recently that does something similar?

## What is an SPA?

With these features in mind, it suddenly becomes a lot easier to build Single Page Applications (SPA). 

SPAs are web pages fit in a single web page, providing a similar experience to desktop applications. All the content a page requires is usually downloaded at once (HTML, JavaScript and CSS), in the first initial request, or loaded dinamically as the user is clicking around the page. There are no reloads as you click from one section to the next.

Let's build an SPA!

## create-react-app

create-react-app is a handy command line tool from Facebook that takes care of setting up the skeleton of your app, so you can start writing React code immediately, without having to worry about the setup.

```bash
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```

# Our first component

Components in React can be defined by just declaring a function that return some JSX.

- Create a new file in `./src/components/button.js`

- Create your first component

```javascript
import React from 'react';

function GameButton() {
    return <button> Awesome button! </button>;
}

export default GameButton;
```

- Switch back to `App.js` and use your new custom component!

```javascript
import GameButton from './components/gameButton';
// .........
  <p className="App-intro">
    <GameButton/>
  </p>
// .........
```

- Check your browser, it should have refreshed with the latest changes

# Class components

React components are best understood in terms of parents and children.

Parent or `container` components may have access to the data that they need in order to pass on to multiple child components. These larger components often contain the actions (e.g. API calls) or data processing functions that their child components require and thus are referred to as `smart` components.

These components are usually defined using ES6 classes. So instead of returning the JSX directly, it's returned as part of a `render()` function. Here's how we would define the button component we created above using ES6 classes:

```javascript
class GameButton extends React.Components {

  render() {
    return <button> Awesome button! </button>;
  }
}
```

The above is the exact same component we defined using the function. 

Child or `presentational` components are essentially smaller customisable to the data that they receive but usually do not have the data in themselves. These are often referred to as `dumb` components - because they do not process the data in themselves:

While function components are a lot simpler to read and write, using ES6 classes allows us to create more powerful, smarter components.

# JSX

You might have noticed something weird: we were returning some HTML-like code in our components.

That is called JSX, and it's a compromise to allows us to use the HTML we are so familiar inside our JavaScript components. 

Since it's not exactly HTML, there are some gotchas, of which you'll need to be aware of:

- event handlers are capitalized

HTML: `<button onclick="myFunction()"/>` 
JSX: `button onClick="myFunction()"/>`

- `className` instead of `class`

HTML: `<button class="myButton"/>`
JSX: `<button className="myButton"/>`

- must always have one child element

Won't work:

```javascript
return (
  <p> Hello! </p>
  <p> This is my blog. </p>
);
```

Will work:

```javascript
return (
  <div>
    <p> Hello! </p>
    <p> This is my blog. </p>
  </div>
);
```

## Thinking in React

Let's go over some examples and discuss how we would break everything up into smart and dumb components.

# Event handlers

Time to handle a few user events. We'll add a "difficulty setting" input. For now, whenever the user changes that input, we will `console.log` the result.

```javascript

difficultyChange = (event) => {
  console.log(event.target.value);
};

//inside render()
<input type="number" onChange={this.difficultyChange}/>
```

3 things to notice:

- the curly brackets after `onChange`: surrounding something by two curly brackets is a way to use JavaScript inside JSX
- `difficultyChange` is written as an arrow function: this is a good way to avoid issues with the `this` context in React. You can read more about it here: https://facebook.github.io/react/docs/handling-events.html
- the `event` object: this is a special object passed to all event handlers in React. In our case we can use it to access the target DOM element of that event, and more specifically, its value.

# JSX: Map Arrays to Components

Because works so well with JavaScript, we can even it in for loops and build JS arrays that contain JSX elements.

Adding more game buttons would be easy, we can just copy-paste them one after another. But what if need a lot of them? Or what if we want to make their number dynamic, chosen by the user?

Let's create a function that returns us an array of game buttons:

```javascript
buildGame() {
  let buttons =  [];
  for(var i=0; i<10; i++) {
    buttons.push(<GameButton />)
  }
  return buttons;
}
```

And then call it in our `render()` function:

```javascript
<p className="App-intro">
  <input type="number" onChange={this.difficultyChange}/>
  <br/>
  {this.buildGame()}
</p>
```

# State

A component's internal state represents all the information that a components "knows" about itself. 
State can only exist on `class` components. That is why they're also called `statefull` components.
State can be accessed anywhere in the components using `this.state.myName` and can be set using `this.setState({myName: "hello"})`. 

`setState` also tells React that our data has changed, so it can go ahead and re-render our view. Hence, it's very important that you never change state directly, and you only modify using `setState`:

```javascript
//WRONG
this.state.myName = "hello";

//CORRECT
this.setState({
  myName: "hello"
});
```

Remember the change handler we added for our difficulty setting? And the array that builds our buttons array? Time to connect those two using state!

Start by defining the initial state in the constructor:

```javascript
constructor() {
  super();
  this.state = {
    difficulty: 10
  };
}
```

Notice the call to `super()`. We always need to call that before referencing the `this` keyword in the constructor. In this case it calls the `constructor()` of the parent class `React.Component`. `super` is not a React function, it's an ES6 keyword used in class inherritence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

```javascript
  difficultyChange = (event) => {
    this.setState({
      difficulty: event.target.value
    });
  };

  buildGame() {
    let buttons =  [];
    for(var i=0; i<this.state.difficulty; i++) {
      buttons.push(<GameButton />)
    }
    return buttons;
  }

  <input value={this.state.difficulty} type="number" onChange={this.difficultyChange}/>
```

Notice I'm also passing the state difficulty to our input through the `value` attribute.

Now go ahead and change the difficulty level in your input, and see the number of buttons update in real time. Try to keep it under 100 to avoid your browser freezing.

# Props

Remember HTML attributes? 

`<input value="Hervin" class="nameInput" />`

Props are the inputs sent from the parent to child component via its attributes. So for our `GameButton` we could send it a prop that would specify what text it should display on the button:

`<GameButton btnText="First button" />`

But how do we access this "btnText" attribute internally and display it?

```javascript
function GameButton(props) {
    return <button> {props.btnText} </button>;
}
```

All the props get passed as properties of the "props" object, as the first argument of our component function.

For class components, props can be accessed via the `this.props` object:

```javascript
class GameButton extends React.Component {
  render() {
    return <button>{this.props.btnText}</button>
  }
}
```

### Let's pass some props in our game!

Add a selected attribute to the button:

```javascript
<GameButton selected={false}/>
```

Then let's give a different css class to our button depending on whether it's selected or not:

```javascript
import './gameButton.css';

function GameButton(props) {
    let className = "neutral";
    if(props.selected === true) {
        className = "selected";
    }
    return <button className={className}> Awesome button! </button>;
}
```

Create the `gameButton.css` file and defined your rules:

```css
.neutral {
    background: lightgrey;
}

.selected {
    background: red;
}
```

Now try changing the `selected` attribute on your `GameButton`. It should change color depending on whether it's true or false.

# Recap

Now you know enough React to build the rest of the game!
Let's quickly recap some of the topics we learned:
- Why React?
- SPA?
- what are smart and dumb components?
- what's a class components vs a function components?
- JSX?
- event handlers?
- state?
- props?

# Selecting a button

Currently, we have to manually send true/false to select a button. Let's change our logic so buttons our selected at random.

Add a `selectedButton` property to our state: 

```javascript
  constructor() {
    super();
    this.state = {
      difficulty: 10,
      selectedButton: -1
    };
  }
```

Add a function that generates a random number between zero and the number of buttons we have and stores that on the state: 

```javascript
  selectRandomButton = () => {
    const randomIndex = this.getRandomInt(0, this.state.difficulty);
    this.setState({
      selectedButton: randomIndex
    })
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
```

Modify the `buildGame()` function so it only selects the button that's been marked on the state:

```javascript
buttons.push(<GameButton selected={this.state.selectedButton === i}/>)
```

# Add a timer

Let's a delay between the time we press "Start game" and one of the buttons getting selected:

```javascript
  startGame = () => {
    setTimeout(this.selectRandomButton, 2000);
  }

  ///render()
  <button onClick={this.startGame}>Start game</button> 
```

# Add a click handler to our buttons

```javascript
<GameButton onClick={this.gameButtonClick} selected={this.state.selectedButton === i}/>
```

And our click handler:

```javascript
gameButtonClick = (event) => {
  const className = event.target.className;
  if(className.includes('selected')) {
    alert("GOOD JOB");
  }
};
```

Click on "Start game" and wait for one of the buttons to become selected. Once a button becomes selected, click on it. Hmm, it still doesn't work.

That's because inside our `GameButton` component, we are doing nothing to handle the `onClick` prop we're sending in. Let's change that!

Inside `gameButton.js`:

```javascript
<button onClick={props.onClick}...
```

# Calculate how fast you click on a button

This is the point where we add a challenge and turn our app into a game. We need to calculate how fast the user reacts to a button being selected. 

Add a start and end time to the state:

```javascript
  constructor() {
    super();
    this.state = {
      difficulty: 10,
      selectedButton: -1,
      startTime: 0
    };
  }

  // When a random gets selected set the START TIME
  selectRandomButton = () => {
    const randomIndex = this.getRandomInt(0, this.state.difficulty);
    this.setState({
      selectedButton: randomIndex,
      startTime: new Date().getTime()
    })
  }

  // When the user manages to click on the selected button, display the time passed start and end
  gameButtonClick = (event) => {
    const className = event.target.className;
    if(className.includes('selected')) {
      const currTime = new Date().getTime();
      alert(currTime - this.state.startTime);
    }
  };
```

# Instead of alerting the time, display it on the screen

Add an `endTime` property to the state, initialized with 0.

Modify you game button click function so that it stores the time it was clicked on the state (and remove the alert):

```javascript
gameButtonClick = (event) => {
  const className = event.target.className;
  if(className.includes('selected')) {
    this.setState({
      endTime: new Date().getTime() 
    });
  }
};
```

In your render function, print out the final value:

```javascript
Score: {
  this.state.endTime > 0
    ? this.state.endTime - this.state.startTime
    : "Not yet started.."
}
```

# Resources

# Homework
- Display the last 10 scores
- Display the overall top score
- Once you click the "Start game" button, make the button flash after a random number of seconds
- Etc.
