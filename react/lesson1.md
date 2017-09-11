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

[React](https://facebook.github.io/react/) is a library by Facebook.

## Why React?
ToDo

## What is an SPA?
ToDo

## create-react-app

Let's create an app!

```bash
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```


# JSX
- Uses [JSX](https://facebook.github.io/react/docs/introducing-jsx.html)

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {

    return (
      <div className="App">
        Hello World!
      </div>
    );
  }
}

export default App;
```
# Components

React components are best understood in terms of parents and children.

Parent or `container` components may have access to the data that they need in order to pass on to multiple child components. These larger components often contain the actions (e.g. API calls) or data processing functions that their child components require and thus are referred to as `smart` components.

Example:
```jsx
import React, { Component } from 'react';
import Organisation from './Organisation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Organisation
            name="Refugee Support Network"
            website="http://www.refugeesupportnetwork.org"
        />
      </div>
    );
  }
}

export default App;

```

Child or `presentational` components are essentially smaller customisable to the data that they receive but usually do not have the data in themselves. These are often referred to as `dumb` components - because they do not process the data in themselves:

```jsx
import React, { Component } from 'react';

class Organisation extends Component {
  render() {
    const name = this.props.name;
    const website = this.props.website;
    return (
        <div>
            Name: {name} <br />
            Website: {website}
        </div>
    );
  }
}

export default Organisation;

```

- [Props exercise](https://jsfiddle.net/kabaros/1h9taf1e/)


## Thinking in React
In development you are often given specification of a piece work with example design and data:

![Inventory data table](https://facebook.github.io/react/img/blog/thinking-in-react-mock.png)

```json
[
  {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
  {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
  {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
  {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
  {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
  {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
];
```
Steps to conceptualise the solution with `React`:
- 1: [Break The UI Into A Component Hierarchy](https://facebook.github.io/react/img/blog/thinking-in-react-components.png)
- 2: Build A Static Version
- 3: Identify the State and where it should live

[Exercise: Code Review](http://codepen.io/lacker/pen/vXpAgj)

# JSX: Map Arrays to Components

When working with APIs we often have collections of things in `Arrays` which we want to map to components. This means we can loop through that data and display the customisable `dumb` component for each one.

```jsx

renderOrganisations() {
    const orgData = [{ name: 'Organisation 1', borough: 'Camden'}, {name: 'Organisation 2'}];
    return orgData.map(function renderData(organisation) {
        return (
            <Organisation
                name= {organisation.name}
                borough={organisation.borough ? organisation.borough : 'None'}
                website= {organisation.website}
            />
        )
    });
}
class App extends Component {
  render() {
      return (
        <div className="App">
          {this.renderOrganisations()}
        </div>
      );
  }
}

```

- [Mapping Exercise](https://codepen.io/kabaros/pen/BpLzzE?editors=0010#0)

State
---
Props are a Component's configuration, they are received from above and they don't usually change by the component itself.
State starts with a default value (set in the constructor typically) then it gets changed (mutated) by events of the application (user interactions, form input, API calls etc..)


Example:
```jsx
import React, { Component } from 'react';
import Organisation from './Organisation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        website: null
    }
  }

  handleChange(event) {
    this.setState({website: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <Organisation
            name="Refugee Support Network"
            website={this.state.website}
        />
        <input type="text" value={this.state.website} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default App;

```

- [State Exercise](https://codepen.io/kabaros/pen/NdRNmm?editors=0010#0)

# Resources

# Homework
- [Directory of services with components](Homework/Homework1.md)
