## Box Model

In CSS, everything is a box. An image is a box. A link is a box. The area around this box can be modified with properites that we call margins, borders and padding. Here's a diagram showing what the box looks like.

![Box Model. Source: MDN](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

> **Exercise:** Work in pairs and use the `margin` and `padding` rules to spread your navigation links out a bit wider. There should be a small gap between them and enough padding so that the border is not too tight on the text.

You may have noticed that the border you added to the navigation links causes the links to jump around when you move your mouse over them. That's because the border is adding to the width of the box model, pushing the others to the side.

You can also set a transparent border, so that it takes up the space without showing a visible border.

```css
.navlink {
    border: 1px solid transparent;
}
```

> **Exercise:** Use a transparent border so that the width of each navigation menu item stays the same even when it is hovered or focused.

> **Exercise (stretch goal):** Extract all the CSS that you would like to be able to use in other websites into a separate file. This file should be in a separate repository. Determine the URL of this file and load it alongside your original CSS file.

# Resources
1. [Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
2. [Box Model, box-sizing: border-box - CSS Tricks](https://css-tricks.com/international-box-sizing-awareness-day/)
