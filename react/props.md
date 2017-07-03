Props
---
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

