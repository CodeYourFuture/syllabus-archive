# Props
[Components and props (facebook)](https://reactjs.org/docs/components-and-props.html)

Components are usually built to be re-usable.
Sometimes you need to customise them, and you can do so via props.
Props act just like normal HTML tags, like `<input value="hello" />` where value is a prop.
They can be thought of as the configuration of a component.

Props are read only. Whether you declare a component as a function or a class, it must never modify its own props.

To use a prop inside a functional component, they are passed in as the first arguments:

```javascript
import React from "react";

const Welcome = (props) => (
  <h1>Hello, {props.name}</h1>
)

...

<Welcome name="CodeYourFuture" />
```

For a class component, props are part of the class instance (or `this`)

```javascript
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

<Welcome name="CodeYourFuture" />;
```

You can pass more than just strings to props, such as numbers or other Javascript objects as follows:

```javascript
<MyComponent aPropGoesHere={12345} />
<MyComponent something={{ key: "value", otherKey: "value2" }} />
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

