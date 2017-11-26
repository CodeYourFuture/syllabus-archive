# JavaScript Core: in the Browser

![](https://img.shields.io/badge/status-ready-green.svg)

** What we will learn today?**

* [DOM](#dom)
* [Events](#browser-events)

---

## The DOM

Your webpages are made up of a bunch of HTML elements, nested within each other
(parents and children). In JavaScript we have access to this "DOM" object
(Document Object Model) which is actually a representation of our webpage that
JavaScript can work with.

In the browser the DOM is represented by the `window.document` object, which can
also be accessed directly using `document`. We can use it to get information
about the page loaded into the browser, query the content of the page and edit
it. You can see full details of the functionality
[here](https://developer.mozilla.org/en-US/docs/Web/API/Document).

### Querying

The DOM offers a lot of useful functions we can use to find elements on the
page. Here are some we'll be using today:

```js
// gets an Element with id 'submit'
var element = document.getElementById('submit'); 
```

`getElementById` accepts an id string as argument and returns an `Element` from
the document with a matching id. If no matching `Element` is found the function
returns `null`.

```js
// get an HTMLCollection containing elements with class 'link'
var links = document.getElementsByClassName('link');
```

`getElementsByClassName` takes a string containing one or more classes and
returns an `HTMLCollection`, which is an array-like object containing all
elements whose class attributes match the string. We can pass multiple classes
as an argument to query for elements matching all classes.

```js
// get an Element with id 'submit'
var form = document.getElementById('myform');
// get an HTMLCollection containing elements with class 'red'
// which are children of the 'myform' element
var inputs = root.getElementsByClassName('red'); 
```

`getElementsByClassName` can be called on individual `elements` as well as the
top-level `document` object. When calling `getElementsByClassName` on an
`element`, the method will query only the children of the `element` rather than
the entire `document`

```js
elements = document.getElementsByTagName('div'); // or:
elements = someElement.getElementsByTagName('a');
```

Much like `getElementsByClassName`, `getElementsByTagName` allows us to query
for elements using the tag name. `getElementsByTagName` also returns
`HTMLCollection` and can be called on `element`s as well as `document`.

All of the above calls return a live reference, which means that the objects
will be automatically updated with all changes since the query.

> **Exercise**:
>
> * Clone the repo from HTML and CSS class into new `bikes` directory. `git
>   clone git@github.com:dmitrigrabov/bikes-for-refugees.git bikes`
> * Once cloned run `npm install` to download the dependencies:
> * Implement `getTitle`, `getNumberOfBikes`, `getAllButtonText`, `getNavLinksText` in `src/functions.js`
>   using above methods to get all tests passing using `npm test`:

### Query selector

The above selector functions are available in all browsers, but can be somewhat
inflexible for example in situations that require complex lookups. Modern
browsers have

```js
document.querySelector("#mainHeader");
document.querySelectorAll("p");
```

Both `.querySelector` and `querySelectorAll` accept a CSS selector as an input.
`.querySelector` selects only the first element it finds, `querySelectorAll`
selects all elements and returns a `NodeList`, which is a collection of `Nodes`
(not an array). Unlike the selectors in the previous section, these functions
return static results. That means any changes in the DOM will NOT result in
updates to the elements.

> **Exercise**:
>
> * Rewrite solutions to previous exercise using
>   `querySelector` and `querySelectorAll`. You may need to look up
>   documentation for `NodeList`.

### DOM manipulation

We can use the DOM to edit elements. For example the `textContent` property of
elements can used to read as well as set the text contents of an element.

```js
var x = document.querySelector(".jumbotron h1");
console.log(x.textContent); // Bikes for Refugees
x.textContent = "Something else";
```

Similarly, `innerHTML` property of elements can be used to get the HTML content
of an element as well as

```js
var x = document.querySelector(".jumbotron h1");
x.innerHTML = '<strong>' + x.textContent + '</strong>';
```

We can also access the `style` property of elements and update various
properties

```js
var elements = document.querySelectorAll(".btn-primary");

elements.forEach(function(element) {
  element.style.backgroundColor = "red"
});
```

Please note the use of camelCase style attribute names

We can also check it exists, read, change and remove attributes of elements
using `hasAttribute`, `getAttribute()`, `removeAttribute` and `setAttribute`

```js
var elements = document.querySelectorAll("a");

elements.forEach(element => {
  if (element.hasAttribute("href")) {
    var href = element.getAttribute("href");
    element.setAttribute("href", "https://google.com");
  }
});
```

What will above code do?

> **Exercise**:
>
> * Use above functions to
> * ... place `-` around the text in the navbar links
> * ... convert links in 'Upcoming Events' section to italic using `<i>` tag
> * ... make `Learn more` links green
> * Ensure all tests for above pass

### Creating and inserting elements

We can use `document.createElement(tagName)` method to create a new element and
`document.createTextNode(text)` to create new text contents. The elements
created can be manipulated just like the elements above, but the changes will
not be visible until we insert the new element into the DOM.

We can insert elements into other elements using `element.appendChild` or
`element.insertBefore`. For example.

```html
<div id="parent">
  <p>some content</p>
</div>
```

```js
var spanNode = document.createElement("span");
var textNode = document.createTextNode("hello");
spanNode.appendChild(textNode);

var parentNode = document.getElementById("parent");
parentNode.appendChild(spanNode);
```

What do you think above code will do?

`insertBefore` is a bit more complicated.

```js
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

Here `insertedNode` is the the node being inserted, that is `newNode`.
`parentNode` is the the parent of the newly inserted node. `newNode` is the node
to be inserted and `referenceNode` is the node before which newNode is inserted.

> **Exercise**:
>
> * Use the inspector to examine the navbar
> * Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
>   `https://codeyourfuture.io/`. It should have same structure as the other links
> * Insert it at the end of the navbar
> * Ensure all tests for above pass

## Resources

1. [DOM: Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
2. [MDN: DOM Examples and explanation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples)

## Browser events

Browser events are actions that take place on our web page. They could be user
triggered such as a mouse being clicked, a key being pressed or a form
submitted. Alternatively, they could be triggered by the system such as a
resource being loaded or an error occurring.

We can subscribe to those events by registering an `eventHandler` to perform a
certain action when an event is detected. For example, we may want to update a
letter count on a text input when a user types or we may want to perform
validation on a form before submitting it.

For each event subscription we will need 3 things:

1. `target` - this is the object where we are listening for events on. For
   example, it could be a link on which we would like to listen to for clicks.
1. `eventType` - as the name suggests, this is the type of event we ar listening
   for. There are dozens of possible events (see
   [here](https://developer.mozilla.org/en-US/docs/Web/Events) for the full
   list). Common ones include . `click` - mouse click . `submit` - form submit .
   `keydown` - keyboard key being pressed . `mouseenter` - a mouse cursor being
   moved onto an element . `change` - value of a form input changing
1. `eventHandler` - A function that we want to execute when the event is
   detected

To subscribe to the actual event we use the `addEventListener` method of our
`target` element like below

```js
var myButton = document.querySelector("#myButton");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Something");
}
```

In the above code `myButton` is the target on which we listen to for `click`
events and call the event handler `alertSomething` when the click is detected.

> **Exercise**:
>
> * Set a click listener on the donate buttons and increment the donated bikes
>   counter with each click ( no tests )

### Event object

Just knowing that an event has happened is not particularly useful in most
cases. Usually, we will want to know more about what exactly happened such as
the coordinates of a mouse `click` or the new `value` of an input after it has
changed.

Keep in mind that different event types will have characteristics that are
specific to them. For example, `key` events will have a `event.char` property
indicating the key that was pressed. `mouse` events will have `event.clientX`
and `event.clientY` properties indicating the location of the mouse event on the
screen, where (0,0) is the top left hand corner in the browser.

Every `event` object has a `.preventDefault()` which when called will prevent
the default action of the event from being triggered. This is particularly
useful to intercepting events and altering the behaviour when needed. For
example, we can call `event.preventDefault()` on a `submit` event if the data in
the form is not valid.

We can find out which element the event was triggered on from the `event.target`
property.

> **Exercise**:
>
> * Prevent clicks on links from triggering a url change in the browser and
>   instead `console.log` the coordinates of the click as well as the text
>   inside the link

### Bubbling

> **Together**:
>
> * Let's place a `click` listener on the `.jumbotron` element and `console.log`
>   the `event`
> * What happens when we click on the buttons?

Most events, though not all, have a default behaviour know as `bubbling` which
results in events being propagated to the target element's parents. That means
an event listener placed on the parent will be triggered after the event
listener placed on the child. Why is this behaviour desired?

We can distinguish between the elements on which the event was triggered vs the
element on which the event was detected.

* `event.target` is the element on which received the initial event
* `event.currentTarget` is the element on which the event listener detected the
  event

In some cases we may want to prevent an event from bubbling up. We can do so by
calling the `stopPropagation` method on the event. Once it has been called, any
event handlers placed by parent elements will not be triggered.

> **Together**:
>
> * Let's prevent clicks on 'Volunteer' button from bubbling up to above listener using `stopPropagation`

# Resources

1. [Introduction to browser events](https://javascript.info/introduction-browser-events)
2. [Events](https://developer.mozilla.org/en-US/docs/Web/Events)


{% include "./homework.md" %}
