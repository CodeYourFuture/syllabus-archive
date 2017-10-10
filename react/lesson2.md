# React Lesson 2

In this lesson we're going to go through a recap of props and state, then we'll hand out a set of small tasks/apps to build in the browser with `create-react-app`. Most of them should take anywhere from 30 mins to an hour, you won't be expected to finish them all but you will not be given much starting code - they aim is for you to get a good grasp of solving problems in React.

## Recap

### Component

At the highest level in React - you have components. These are created usually with 1 per file using the `class` syntax, like this:

```jsx
import React, { Component } from 'react'

class MyComponent extends Component {
  render() {
    return <div>Hello World!</div>
  }
}

export default MyComponent
```

All components declared with this syntax **must** have a `render` method. To this component, you need to import it into where you want to render from (so from a different file, in the same directory as the above file):

```jsx
import MyComponent from './MyComponent.js'
```

Then, inside of this file you can write `<MyComponent />` inside your JSX to render it out. Like so:

```jsx
class ParentComponent extends Component {
  render() {
    return <div><MyComponent /></div>
  }
}

export default ParentComponent
```

### Props

Props are passed in when you render a component. They always come from a parent component, and when they are passed down into a child they cannot be changed after that point.

In this example, we are rendering a `Profile` component by passing it a person's `name` and `age` as `props`.

```jsx
import React, { Component } from 'react'
import Profile from './Profile'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Profile name="Scott" age={24} />
      </div>
    )
  }
}

export default MyComponent
```

Now, if we go take a look at the `Profile` component we can see how those props actually appear on the page:

```jsx
import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <div>
        Name: {this.props.name}
        Age: {this.props.age}
      </div>
    )
  }
}

export default Profile
```

Notice how to get access to those props we ask for them off of `this`, and then we wrap them inside curly braces `{}` to tell jsx that we want it to actually evaluate those javascript variables.

The above component could have also been written as a functional component, both are valid but we'll be sticking to the `class` syntax for the rest of the examples. Here is the same component defined using the function syntax:

```jsx
import React from 'react' // don't need to import Component

function Profile(props) {
  return (
    <div>
      Name: {props.name}
      Age: {props.age}
    </div>
  )
}

export default Profile
```

### State

To manage values that can change in your application - you store those values in a component's state. We **must** use class components if we want to store state, and to update the state we need to use `this.setState`, passing it the new object to put in our state. If we use this method to update our state - react will magically handle updating the html/output for us.

[Click here](https://csb-vmxpvp07k0-xxlmpfwqxt.now.sh/) to view the next example in a browser. Try it out and understand what it's doing before we take a look at the code for it.

Once you've done that - take a look at the implementation:

```jsx
import React, { Component } from 'react'

class Counter extends Component {

  // To initialise our state, we create a constructor and
  // directly set the state.
  // This is the **only** place we should ever write "this.state ="
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  // this function will increase the number we have
  // in our counter by 1 each time it is called
  incrementCounter = () => {
    // we're calling a React-provided method
    // here to update our state
    this.setState({
      counter: this.state.counter + 1
    })
  }

  // this function does the same as the above except it will
  // reduce the number we have in the state by 1
  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    // here we render out the current counter with
    // two buttons, with onClicks that reference
    // the functions we created above
    return (
      <div>
        <br/>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }
}
```

That's almost it for the recap, before we jump into the next part - have a go at trying to extend this counter example. Here's a few ideas that you could try:

1. Change the colour of the counter, based on whether or not it's an even number ([demo here](https://csb-jopk2757y-mkxkadmfba.now.sh/))
2. Add another button that multiplies the number by 2 ([demo here](https://multiply-counter.surge.sh))
3. Add a slider that modifies that multiplier ([demo here](https://csb-l4kk6zn4kz-ypkmbtwnxy.now.sh/))
  * So moving the slider to the left makes the multiplier 2, but moving it further to the right will increase the multiplier to 2,3,4 etc.
4. Make the number of counters dynamic ([demo here](https://csb-nr8nvm9k70-fdvdaqcbst.now.sh/))
  * So you have a remove counter button next to each counter, and an "add new counter" button at which will add a new counter
  * Each counter should have it's own value
5. Have a go at implementing #4 using a second component


Further Examples:

* Guess Who [example](guess-who.surge.sh)
* TODO App [example](http://todomvc.com/examples/react/#/)
* Checkboxes [example](checkboxes.surge.sh)

# Talking to an API

Up until this point we've been building things that are entirely inside our browser - we've never really spoken to another API. We're now going to look into how we would do that.

First of all, it's important to remember that as soon as we start to talk to another service then we have to start thinking about things happening asynchronously (remember callbacks?). React gives you access to a group of things called [lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle) to be able to do this.

The most commonly used lifecycle methods (other than `render` and a `constructor`) are `componentDidMount` and `componentShouldUpdate`.

`componentDidMount` is the place where you'd want to make things like API calls and setup. It gets called after `render`.

`componentShouldUpdate` is typically used for performance - if you've got state changing a lot and you're making React re-render things really often then you can use this method to control whether or not it should.

In this example, we're going to load in a list of countries to display them on a page, let's walk through an example of doing that:

```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    // we're going to store our list of countries in the state as an array
    this.state = {
      countries: []
    }
  }

  // This is our Lifecycle Method
  componentDidMount() {
    // here we can pass a url to fetch() and it will return a promise
    fetch('https://restcountries.eu/rest/v2/all')
    // then we parse the JSON response from the API
      .then(response => response.json())
    // we pass the parsed json into a method on our component
      .then(this.updateWithCountries)
  }

  updateWithCountries = (countryList) => {
    // we call this method when we've finished fetching the countries
    this.setState({
      countries: countryList
    })
  }

  renderCountry = (country, idx) => {
    // in our render method we pass this in to the map to create multiple children
    return (
      <div key={idx}>
        <p>Name: {country.name}</p>
        <p>Population: {country.population}</p>
        <hr/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.countries.map(this.renderCountry)}
      </div>
    );
  }
}

export default App;
```

## Homework

Using React:

* Render list of cakes using this [json url](https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json)
* Add ability to search cakes
* (Optional) Add basic ability to edit/add cakes
