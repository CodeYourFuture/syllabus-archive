React
---
[React](https://facebook.github.io/react/) is a library by Facebook for building user interfaces. 

Today, the focus is on component based architectures. React provides a thin layer on top of JavaScript and HTML to allow you to build custom components. These components can encapsulate (hide within them) behavior and style and can be re-used throughout your application and even exported for others to use. 

We already have some existing components in HTML. When you write this:

```html
<input type="number" name="age" value="5">
```

..it generates this: 

![HTML input of Yaktocat](assets/html_input.png)

An "input" box, that only supports numbers, with a set of up/down arrows for changing the value, and a pre-defined value of 5. So the **element tag** tells the browser which element to render, and the attributes specify the settings for that element and any information we want to pass into it.

## Why React?

Besides providing the tools to build powerful and well encapsulated components, React also takes care of updating the HTML code to match our data.

Suppose you make an HTTP GET request to "http://blog.com/post?id=123" and you store the result in a variable:

```javascript
var post = { id: '123', title: 'Post 1', content: 'Lorem ipsum 1' };
```

And our HTML looks like this:

```html
<h1 id="title"></h1>
<p id="content"></p>
```

As we've learned, we can dynamically insert content into our HTML using JavaScript:

```javascript
document.querySelector('#title').innerText = post.title;
document.querySelector('#content').innerText = post.content;
```

So every time our `post` variable changes, we have to manually call the above to update our HTML, so the user can actually see the new post.

However, with React, you can just set up your component once:

```html
<h1 id="title">{post.title}</h1>
<p id="content">{post.content}</p>
```

And then whenever there's a change to `post`, React will take care of changing the DOM to match our new data.

> **Exercise:** 
>
> What does the above HTML remind you of? Any similar technology we studied recently that does something similar?


## JSX
[JSX](https://facebook.github.io/react/docs/introducing-jsx.html)

```jsx
import React from 'react';

const Button = () =>
  <button>
    Click me!
  </button>;

export default Button;
```

Note:

- Components are Capitalised, HTML tags are lowercase
- Many good Patterns: Single Responsibility, DRY, abstraction of state


Let's create an app!
---

```bash
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start
```
