## The Cascade

CSS stands for Cascading Style Sheets. The "cascade" is a set of rules which the browser uses to choose what to do when two CSS rules conflict. Take the following example:

```css
.btn {
    color: red;
}
.btn {
    color: blue;
}
```

Should the `.btn` be red or blue? When identical selectors are next to each other like this, the browser lets the last one override the first one. But in a real-world scenario, you may have CSS scattered across different files. To solve this, we use the cascade.

> **Exercise:** Read the section on [the cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#The_cascade). Then pair up. In the example, there are two paragraphs. Pick one paragraph and explain to your partner why it has a particular background color. Then ask your partner to explain the other paragraph.

> **Exercise:** Work in pairs to give each one of the navigation menu items a red border (`#ce5f31`). This border should only appear when the mouse is hovering over it or the item has focus. Then use what you've learned about the cascade to give the first navigation menu item ("Home") a different color border.


# Resources
1. [The Cascade - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
