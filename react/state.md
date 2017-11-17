State
---
Sometimes a component needs to react to data that doesn't come from a parent component. This is where the component's State comes in.

Props are a Compenent's configuration, they are received from above and they don't usually change by the component itself.
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
    };
  }

  handleChange(event) {
    this.setState({ website: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <Organisation
          name="Refugee Support Network"
          website={this.state.website}
        />
        <input
          type="text"
          value={this.state.website}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
```

- [State Exercise](https://codepen.io/kabaros/pen/NdRNmm?editors=0010#0)


Note: different states sometimes missed in designs