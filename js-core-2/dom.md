## The DOM

Your webpages are made up of a bunch of HTML elements, nested within each other (parents and children). In JavaScript we have access to this "DOM" object (Document Object Model) which is actually a representation of our webpage that JavaScript can work with.

Here are two examples, HTML and then JavaScript, of how the DOM might look like:

```html
<html>
    <body>
        <h1> Welcome! </h1>
        <p> Hello world! </p>
    </body>
</html>
```

```javascript
var document = {
    body: {
        h1: "Welcome",
        p: "Hello world!"
    }
};
```

In the browser the DOM is represented by the `window.document` object, which can also be accessed directly using `document`. We can use it to get information about the page loaded into the browser, query the content of the page and edit it. You can see full details of the functionality at https://developer.mozilla.org/en-US/docs/Web/API/Document .

### Querying

The DOM offers a lot of useful functions we can use to find elements on the page. Here are some we'll be using today:

```js
element = document.getElementById(id);
```
`getElementById` accepts an id string as argument and returns an `Element` from the document with a matching id. If no matching `Element` is found the function returns `null`.

```js
elements = document.getElementsByClassName(names); // or:
elements = rootElement.getElementsByClassName(names);
```

`getElementsByClassName` takes a string containing one or more classes and returns an `HTMLCollection`, which is an array-like object containing all elements whose class attributes match the string. We can pass multiple classes as an argument to query for elements matching all classes.

```js
getElementsByClassName('green bike')
```

Above call will return elements that have both the `green` and `bike` classes.

`getElementsByClassName` can be called on individual `elements` as well as the top-level `document` object. When calling `getElementsByClassName` on an `element`, the method will query only the children of the `element` rather than the entire `document`

```js
elements = document.getElementsByTagName(name); // or:
elements = rootElement.getElementsByTagName(name);
```

Much like `getElementsByClassName`, `getElementsByTagName` allows us to query for elements using the tag name. `getElementsByTagName` also returns `HTMLCollection` and can be called on `element`s as well as `document`.

All of the above calls return a live reference, which means that the objects will be automatically updated with all changes since the query.

> **Exercise**:
> - Clone the repo from HTML and CSS class into new `bikes` directory.  `git clone git@github.com:CodeYourFuture/bikes-for-refugees.git bikes`
> - Create an `index.js` file in `src` folder inside the `bikes` repo.
> - Put the following code in the `index.js` file: `alert('hello');` to check the file is being loaded
> - Import the `index.js` file into `index.html` by placing `<script src="src/index.js"></script>` just before the closing `body` html tag.
> - Open `index.html` in your browser.
> - In `index.js`:
> - Using `getElementById`, `getElementsByClassName` or `getElementsByTagName` ...
> - ... get the element with id `donation-count-alert` and `console.log` it. Look up documentation for `Element` or use a debugger find and `console.log` the contents of the element.
> - ... get all elements with the class `btn`, loop over them and `console.log` them individually. You may need to look up documentation for `HTMLCollection`.
> - ... get all links inside the element with id `navbarSupportedContent`, loop over the collection and `console.log` the text inside each link

### Query selector

The above selector functions are available in all browsers, but can be somewhat inflexible for example in situations that require complex lookups. Modern browsers have

```js
    document.querySelector('#mainHeader');
    document.querySelectorAll('p');
```

Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input.
`.querySelector` selects only the first element it finds, `querySelectorAll` selects all elements and returns a `NodeList`, which is a collection of `Nodes` (not an array). Unlike the selectors in the previous section, these functions return static results. That means any changes in the DOM will NOT result in updates to the elements.


> **Exercise**:
> - Comment out the code from previous exercise and rewrite solutions using `querySelector` and `querySelectorAll`. You may need to look up documentation for `NodeList`.


### DOM manipulation

We can use the DOM to edit elements. For example the `textContent` property of elements can used to read as well as set the text contents of an element.

```js
var x = document.querySelector('.jumbotron h1');
console.log(x.textContent) // Bikes for Refugees
x.textContent = "Something else";
```

Similarly, `innerHTML` property of elements can be used to get the HTML content of an element as well as

```js
var x = document.querySelector('.jumbotron h1');
x.innerHTML = `<strong>${x.textContent}</strong>`;
```

We can also access the `style` property of elements and update various properties
```js
var elements = document.querySelectorAll('.btn-primary');

elements.forEach( element => element.style.backgroundColor = 'red' );
```
Please note the use of camelCase style attribute names

We can also check it exists, read, change and remove attributes of elements using `hasAttribute`, `getAttribute()`, `removeAttribute` and `setAttribute`

```js
var elements = document.querySelectorAll('a');

elements.forEach( element => {
  if( element.hasAttribute('href') ){
    var href = element.getAttribute('href');
    console.log(href);
    element.setAttribute('href', 'https://google.com');
  }
});
```
What will above code do?

> **Exercise**:
> - Use above functions to
> - ... place ` - ` around the text in the navbar links
> - ... convert links in 'Upcoming Events' section to italic using `<i>` tag
> - ... make 'Learn more` links green

### Creating and inserting elements

We can use `document.createElement(tagName)` method to create a new element and `document.createTextNode(text)` to create new text contents. The elements created can be manipulated just like the elements above, but the changes will not visible until we insert the new element into the DOM.

We can insert elements into other elements using `element.appendChild` or `element.insertBefore`. For example.

```html
    <div id="parent">
        <p>some content</p>
    </div>
```

```js
    var spanNode = document.createElement('span');
    var textNode = document.createTextNode('hello');
    spanNode.appendChild(textNode);

    var parentNode = document.getElementById('parent');
    parentNode.appendChild(spanNode);
```

What do you think above code will do?

`insertBefore` is a bit more complicated.

```js
    var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

Here `insertedNode` is the the node being inserted, that is `newNode`. `parentNode` is the the parent of the newly inserted node. `newNode` is the node to be inserted and `referenceNode` is the node before which newNode is inserted.

There is no `insertAfter` method. It can be emulated by combining the `insertBefore` method with `nextSibling` property. In the line below we use this approach to insert `nodeOne` after `nodeTwo` inside `parentNode`

```js
    parentNode.insertBefore(nodeOne, nodeTwo.nextSibling);
```

> **Exercise**:
> - Use the inspector to examine the navbar
> - Create a new navbar item for Code Your Future which links to `https://codeyourfuture.co/`
> - Insert it at the end of the navbar

# Resources
1. [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
