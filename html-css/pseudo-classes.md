## Pseudo Classes

You can assign CSS rules to a class like this:

```css
.btn {
    background: #ce5f31;
}
```

There are also things called "pseudo" classes. In this section, we'll introduce you to the common pseudo classes for assigning styles to interactions, such as moving your mouse over a link.

> "pseudo" is a fancy word for "fake". We call them "pseudo" classes because they're not really there in the HTML, but the browser knows what to do with them.

Here's an example of a pseudo class which changes the color of a link when the mouse moves over it.

```css
.btn:hover {
    background: #ef7f52;
}
```

Not everyone uses a mouse. Some users will prefer a keyboard, where they can hit `tab` to move between links on a page. So that they can see where they are, you should add effects to the `:focus` pseudo class too.

```css
.btn:hover,
.btn:focus {
    background: #ef7f52;
}
```

> **Exercise (pair programming):** Add the 'Learn more' section and make each box highlighted when in a "hover" or "focus" state.

# Resources
1. [Pseudo classes - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
