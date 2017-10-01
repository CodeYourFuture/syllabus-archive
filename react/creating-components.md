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

or using ES6 arrow functions

```javascript
import React from 'react';

const Button = () => <button> Awesome button! </button>;

export default GameButton;
```

- Switch back to `App.js` and use your new custom component!

```javascript
import GameButton from './components/gameButton';
// .........
<p className="App-intro">
  <GameButton />
</p>;
// .........
```

- Check your browser, it should have refreshed with the latest changes

