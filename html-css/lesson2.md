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

> **Exercise:** Working in pairs, reduce the size of the "Bikes for Refugees" text so that it fits on a small screen (`320px`). But make sure it increases in size on larger screens.

> **Exercise:** The two buttons in the jumbotron don't fit on the same line on small screens around `320px` wide. Working independently, can you adjust their size so that they fit on the same line?

## Content Layout: Flexbox
Flexbox is a name for a set of CSS layout rules which are supported in newer browsers. They allow you to apply rules to elements to place them side-by-side and re-arrange them.

> **Exercise:** Working in pairs, look at [this Codepen](http://codepen.io/natewr/pen/aJPOeR) which uses flexbox. Try to understand how it is working, then use that technique to put the two articles under the "Learn More" section side-by-side.

> **Exercise:** Working in pairs, search on Google for information about the flexbox `order` property. Share what you've found with each other, then use that to position the "How can I help?" box on the left.

Often you will be asked to place a "gutter" between objects that sit side-by-side. A "gutter" is a small amount of open space between two columns. Read about the [justify-content](https://css-tricks.com/almanac/properties/j/justify-content/) property.

> **Exercise:** Add a small gutter between the two articles under the "Learn More" section.

Let's take a break from flexbox for a minute. Do you remember the `:first-child` psuedo class? There's a `:last-child` psuedo class as well.

> **Exercise:** See if you can use these psuedo classes to give the left box a grey background (`#ddd`) and the right box a grey border (`1px solid #ddd`). Use [this screenshot](assets/screenshot-complete.png) to guide you.

Now, back to Flexbox. Read this short article on the [align-items](https://css-tricks.com/almanac/properties/a/align-items/) property. Try out some of the different properties on your "Learn More" boxes to see how they effect the size of the boxes.

> **Exercise:** Working independently, try to position the articles and images side-by-side under the "Upcoming Events" section. Use [this screenshot](assets/screenshot-complete.png) to guide you. If you get stuck, go ahead and ask your partner. Never be afraid to ask!

## Homework
1. (Est. 1-2 hours) Complete the "Common Responsive Patterns" lesson of the [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893) course.
2. (Est. 1-2 hours) Complete as many levels of the [Flexbox Froggy](http://flexboxfroggy.com/) game as you can. This will stretch your knowledge of Flexbox and you may need to do some research. It's ok if you can't complete all levels. Do as many as you can.
2. (Est. 1-2 hours) Revisit the webpage you created in last week's homework assignment. Add a sidebar to your site and move the site description into it. This should appear below the articles on small screens, then switch to a two-column layout with the articles and sidebar sitting side-by-side. Add at least three more articles and then convert them to a grid, so that you show 3 articles per row in a box layout.
3. (Est. 1-2 hours) Flexbox is relatively new and is not supported in older browsers. In most of your work, you'll use Flexbox. But an employer might want you to use one of the older layout strategies. Read this article to learn about [positioning content in CSS](http://learn.shayhowe.com/html-css/positioning-content/) using floats and absolute positioning.

## Prepare for the next class
1. (Est. 1 hour) You may remember Bootstrap from your application process. Look at the documentation for [Bootstrap 4](https://v4-alpha.getbootstrap.com/) and look at their examples to see how they are building components.
