# Our first component

Components in React can be defined by just declaring a function that returns some HTML.

- Create a new file in `./src/components/button.js`

- Create your first component

```javascript
import React from 'react';

function Button() {
  return <button> Awesome button! </button>;
}

export default Button;
```

or using ES6 arrow functions

```javascript
import React from 'react';

const Button = () => <button> Awesome button! </button>;

export default Button;
```

- Switch back to `App.js` and use your new custom component!

```javascript
import Button from './components/Button';
// .........
<p className="App-intro">
  <Button />
</p>;
// .........
```

- Check your browser, it should have refreshed with the latest changes

