# Our first component

Components in React can be defined by just declaring a function that returns some HTML.

- Create a new file in `./src/components/button.js`

- Create your first component

```javascript
import React from 'react';

function Button() {
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

Parent or `container` components may have access to the data that they need in order to pass it on to multiple child components. These larger components often contain the actions (e.g. API calls) or data processing functions that their child components require and thus are referred to as `smart` components.

These components are usually defined using ES6 classes. So instead of returning the JSX directly, it's returned as part of a `render()` function. Here's how we would define the button component we created above using ES6 classes:

```javascript
class GameButton extends React.Components {

  render() {
    return <button> Awesome button! </button>;
  }
}
```

The above is an equivalent component to what we defined using the function. 

Child or "presentational" components are concerned with how things look. They contain very little logic. They are like a function: take some inputs, and return an element (and that's how they're usually written as well, as a function). They don't hold or remember any data: the element that they return is based only on the inputs they received, nothing else.

While functional components are a lot simpler to read and write, using ES6 classes allows us to create more powerful, smarter components.



JSX: Map Arrays to Components
---
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

