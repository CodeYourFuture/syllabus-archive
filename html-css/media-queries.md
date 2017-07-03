# Media Queries
As you learned in your homework assignment, media queries help us change the display of our content depending on the size of the viewport. Let's review what you learned and break down a media query:

```css
@media screen and (min-width: 900px) {
	body {
		background: red;
	}
}
```

In this media query, we're assigning a red background color to the `<body>` element whenever the viewport is larger than `900px`, and we're viewing on a screen.

- `@media` starts the media query
- `screen` tells it to apply these styles to screen displays. Other displays might be `print`, for when a webpage is being printed.
- `(min-width: 900px)` tells it to apply these styles when the viewport is larger than `900px`

Finally, we wrap all of our styles for this media query in brackets (`{` and `}`), just like a CSS rule.

> **Exercise:** (Pair programming) Reduce the size of the "Bikes for Refugees" text so that it fits on a small screen (`320px`). But make sure it increases in size on larger screens.

> **Exercise:** The two buttons in the jumbotron don't fit on the same line on small screens around `320px` wide. Can you adjust their size so that they fit on the same line?

> **Exercise:** (Pair programming) On a small screen (`320px`) replace the menu with a hoverable dropdown menu. Follow [this guide](https://schier.co/blog/2014/10/23/creating-a-pure-css-dropdown-using-the-hover-selector.html).
