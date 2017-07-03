React
---
[React](https://facebook.github.io/react/) is a library by Facebook.


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

- Many good Patterns: Single Responsibility, DRY, abstraction of state



Let's create an app!
---

```bash
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```
