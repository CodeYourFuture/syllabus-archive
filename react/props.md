# Props
[Components and props (facebook)](https://reactjs.org/docs/components-and-props.html)

Components are usually built to be re-usable.
Sometimes you need to customise them, and you can do so via props.
Props act just like normal HTML tags, like `<input value="hello" />` where value is a prop.

To use a prop inside a functional component, they are passed in as the first arguments:

```javascript
import React from "react";

const MyComponent = (props) => (
  <div style={{backgroundColor: props.color}} />
)

...

<MyComponent color="red" />
```

For a class component, props are part of the class instance (or `this`)

```javascript
import React from 'react';

class MyComponent extends React.Component {
  render() {
  return <div style={{ backgroundColor: this.props.color }} />
  }
}
```


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

