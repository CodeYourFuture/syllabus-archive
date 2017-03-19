## Week 1 (estimated 2-3 hours)
Review, semantic HTML tags, CSS `background`, CSS cascade, `:hover`/`:focus` states, block `margin`/`padding`/`border`, CSS specificity.

1. Introduce the `index.html` file. Walk through the linked styles and scripts. Indicate where they'll be making changes.
2. Open `stylesheet.css` and perform quick review of selectors, rules and the cascade. Have them set body `background`, `color` and `font-size` to see how it effects the page.
3. Introduce the `<header>` and `<footer>` tags, and the `role="main"` attribute. Also `<nav>`, `<article>` and `<aside role="complementary">`. Ask them to work in pairs to determine where to place these in the `index.html` file.
4. Show how to implement a background image in the jumbotron. Once that's done, ask them to use what they learned about the cascade to make all the text on the jumbotron white. If they use separate selectors for each block of text, encourage them to set the color on the `.jumbotron` instead, so that it cascades to all child elements.
5. Ask them to update the buttons to look like the screenshot, using the color from the logo (`#ce5f31`) for `.btn-primary`. They should make this change for all buttons on the page, not just those in the jumbotron. Once done, introduce the `:hover` and `:focus` selectors, and ask them to change the colors to use `#ef7f52` as the background and `#fff` for the text in these states.
6. Working in pairs, ask them to use what they've learned about `:hover` and `:focus` to make the links in the navigation menu show a red (`#ce5f31`) border during interactions. Check that the nav menu items do not jump around (they'll need a transparent border around links in the base state).
7. Describe how margins, padding and borders effect the size of a block element differently. Ask them to give each navigation menu link a left and right padding, and a left and right margin, of `1em`. Point out the small gap that appears as you move the mouse from left to right across the menu. Ask them to modify the link styles to remove this gap, so that the mouse moves immediately from one link to the next.
8. Ask them to add a margin to the "Learn More" heading, so that there is more space between the jumbotron and the heading. If they apply it to `h2` or `heading-underline`, it will add a top margin to the "Upcoming Events" heading. Ask them to work in pairs to figure out how they can apply this margin to only the "Learn More" header.

### Homework
1. Read about [advanced CSS selectors](http://learn.shayhowe.com/advanced-html-css/complex-selectors/). Try to complete this [CSS Selector game](https://flukeout.github.io/). It gets hard at the end, but try your best!
2. Try to make the articles under "Upcoming Events" look as close to the completed example screenshot as possible. Students should identify inconsistent spacing above and below the second article. They should also make the Facebook events text bold and space out the icon.
2. Read about [HTML forms](http://learn.shayhowe.com/html-css/building-forms/). Try to create a new HTML page, `contact.html`, based off of the example that we've been working with so far. In this page, replace the jumbotron and the "Learn More" section with a contact form. This form should ask the user to enter their name, email address and phone number, and present them with a large area to enter a message. You may use [Bootstrap's input groups](http://getbootstrap.com/components/#input-groups) if you like. But also use the CSS techniques you've learned so far to style this form like the rest of the site. Things like border colors, labels and buttons should fit with the existing style of the page.

### Research and present at the next class
Assign one of the following topics to each student. Presentations should be 5 minutes each.
- HTML aria attributes
- CSS box model
- Vertically centering content
- CSS naming patterns (BEM/OOCSS)
- z-index
- Positioning (absolute, relative, fixed)
- Icon fonts
- CSS transitions


### Prepare for the next class
1. Read this [introduction to media queries](https://varvy.com/mobile/media-queries.html).
