# HTML/CSS 2
**What will we learn today?**
- Responsive web design
- Media queries
- Content layout: flexbox
- Content layout: floats (maybe)
- Content layout: relative and absolute positioning (maybe)
---

## Responsive Web Design
When we build for the web, we're making websites that can be viewed in a phone, a laptop, a tablet and more. To ensure we're presenting a website that's easy to use on any device, we use Responsive Web Design techniques to modify how content is displayed depending on the viewport.

> **Exercise:** As a group, let's brainstorm as many devices as we can think of which might access the websites we build.

See how much variety there is in [viewport sizes](https://decadecity.net/blog/2014/08/19/a-device-agnostic-approach-to-inlining-css).

## Media Queries
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

> **Exercise:** The two buttons in the jumbotron don't fit on the same line on small screens around `320px` wide. Working independently, can you adjust their size so that they fit on the same line?

> **Exercise:** (Pair programming) On a small screen (`320px`) replace the menu with a hoverable dropdown menu. Follow [this guide](https://schier.co/blog/2014/10/23/creating-a-pure-css-dropdown-using-the-hover-selector.html).

## Content Layout: Flexbox
Flexbox is a name for a set of CSS layout rules which are supported in newer browsers. They allow you to apply rules to elements to place them side-by-side and re-arrange them.

> **Exercise:** (Pair programming) Look at [this Codepen](http://codepen.io/natewr/pen/aJPOeR) which uses flexbox. Try to understand how it is working.

Often you will need to place a "gutter" between objects that sit side-by-side. A "gutter" is a small amount of open space between two columns. Read about the [justify-content](https://css-tricks.com/almanac/properties/j/justify-content/) property.

> **Exercise:** Add a small gutter between the two articles under the "Learn More" section of the `bikes for refugees` website that you have already forked on your personal Github account.

Read this short article on the [align-items](https://css-tricks.com/almanac/properties/a/align-items/) property. Try out some of the different properties on your "Learn More" boxes to see how they effect the size of the boxes.

> **Exercise:** The sidebar in your `bikes for refugees` site is [broken](assets/broken-sidebar.png). Fix it to match this using Flexbox: 
![](assets/fixed-sidebar.png)

## Homework
1. (Est. 1-2 hours) Complete the "Common Responsive Patterns" lesson of the [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893) course.
2. (Est. 1-2 hours) Complete as many levels of the [Flexbox Froggy](http://flexboxfroggy.com/) game as you can. This will stretch your knowledge of Flexbox and you may need to do some research. It's ok if you can't complete all levels. Do as many as you can.
3. Go back to your fork of the Project repo - https://github.com/Code-Your-Future/html-css-project - Revisit the webpage you created in last week's homework assignment. Add a sidebar to your site and move the site description into it. This should appear below the articles on small screens, then switch to a two-column layout with the articles and sidebar sitting side-by-side. Add at least three more articles and then convert them to a grid, so that you show 3 articles per row in a box layout.
4. (Est. 2-3 hours) Create your own CSS library! You can re-use the styles from one project across all your projects by sharing the same CSS file across all of them! Start by forking [this repository](https://github.com/Code-Your-Future/css-skin) into your repository. Your goal is to add the necessary CSS style for the buttons to match the images next to them, according to [this page](https://code-your-future.github.io/css-skin/).

## Prepare for the next class
1. (Est. 1 hour) You may remember Bootstrap from your application process. Look at the documentation for [Bootstrap 4](https://v4-alpha.getbootstrap.com/) and look at their examples to see how they are building components.
