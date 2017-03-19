Using Libraries
---
Using good libraries is encourages where it makes sense. There are many of these which make your life easier, such as jQuery, Angular and others.

- Don’t Reinvent The Wheel (solve problems already solved)
- Good Libraries solve browser compatibility issues
- Shared knowledge, reusable skills


- Compare code across libraries - [TodoMVC](http://todomvc.com/)

In this course we will be using React by Facebook.


Node and NPM
---
[Node](https://nodejs.org/en/) is a runtime for Javascript which allows you to run Javascript code on your computer and servers, in addition to the client side/browser.


In order to install it you need to get the installer [Node](https://nodejs.org/en/) and then you will have access to thousands of libraries on [npm](https://www.npmjs.com/).


Once it is installed you can use it like this:
```sh
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start

```


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

ES6
---
ES6 is a new standard for Javascript (ECMAScript). It is already supported in many browsers (check compatibility [here](https://kangax.github.io/compat-table/es6/)).

Some useful features:

- Let / Const
- Classes
- Export Modules / Importing
- Arrow functions / scope

Some features and their ES5 compatible code can be found [here](http://es6-features.org/)

[Resource list](https://github.com/ericdouglas/ES6-Learning/blob/master/README.md)


Homework
---
- [Directory of services with components](Homework/Homework1.md)
