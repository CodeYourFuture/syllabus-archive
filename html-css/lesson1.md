# HTML/CSS 1
** What we will learn today?**
- Semantic HTML tags
- CSS selectors, CSS cascade, Pseudo-classes such as `:hover`/`:focus`
- Box model: `margin`/`padding`/`border` etc...
- CSS specificity
---

### What makes a web page?

![What makes a web page](assets/webpage-parts.png)

** Separation of Concerns: ** In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. (Wikipedia)

> **Principles** - During the course, we will highlight principles that apply to the specific topic but also to Computer Science and Programming in general. It is important to understand these principles, terms and apply them to your thinking in general.

## Code Walkthrough

During Today's class, we will take this partially built site in the first image and gradually transform to the one in the second image.

<a href="assets/screenshot-start.png" target="blank">
  <img src="assets/screenshot-start.png" style="border: 1px solid #bababa; width: 48%; max-height: 293px">
</a>
<a href="assets/screenshot-complete.png" target="blank">
  <img src="assets/screenshot-complete.png" style="border: 1px solid #bababa; width: 48%;">
</a>

The first image is already implemented and is available
[on this Codepen](https://codepen.io/kabaros/project/full/ArrJEA/)

> **Exercise**: Spend 5 minutes exploring the code (HTML and CSS) for this page - notice how the file structure and how the Concerns are separated
> - Why we don't put everything in one file?

### Semantic HTML

What is wrong with using `<div>` for all our HTML page?

  - ``<header>``
  - ``<footer>`` and the role="main" attribute
  - ``<nav>``, ``<article>``
  - ``<aside role="complementary">``.
    > **Exercise (pair programming):**  Work in pairs to determine where to place these new Tags in the index.html file.

### CSS Selectors

Selectors define to which elements a set of CSS rules apply.

- Type selectors
```CSS
/* This CSS snippet would select all elements of Type input and set their color to red */
input {
  color: red
}
```
- Class selectors
```CSS
/* This CSS snippet would select all elements that have a class name "address-info" and set their color to red */
.address-info {
  color: red
}
```
- ID selectors
```CSS
/* This CSS snippet would select all elements that have an ID "input-email" and set their color to red */
#input-email {
  color: red
}
```
- Combining selectors
```CSS
/* This CSS snippet would select all elements of Type input that also have a class "address-info" and set their color to red */
input.address-info {
  color: red
}
```

For more information about selectors, check the [resources section](#resources) of this class.

> **Exercises:**
> 1. Set body background, color and font-size to see how it effects the page.
2. Implement a background image in the jumbotron.


### The cascade
The cascade is a fundamental feature of CSS. It is an algorithm defining how to combine properties values originating from different sources. It lies at the core of CSS as stressed by its name: Cascading Style Sheets. ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade))



> **Exercises:**
  1. Make all the text in the Jumbotron white (hint: use what you learned about the Cascade)
  2. Update the buttons to look like the screenshot, using the color from the logo (``#ce5f31``) for .btn-primary. (Make this change for all buttons on the page, not just those in the jumbotron.)

### Pseudo classes
A CSS pseudo-class is a keyword added to selectors that specifies a special state of the element to be selected. For example `:hover` will apply a style when the user hovers over the element specified by the selector.

> **Exercise:**
> Check out this [page](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) for a list of all available pseudo classes.
1. Change the colors to use `#ef7f52` as the background on hover and `#fff` on focus.
2. Use what you've learned about :hover and :focus to make the links in the navigation menu show a red (`#ce5f31`) border during those interactions. (make sure the button does not jump when the border is applied)

### Box model
  - How margins, padding and borders effect the size of a block element differently.

![Box Model](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

Image from MDN https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model

> **Exercises:**
1. Give each navigation menu link a left and right padding, and a left and right margin, of 1em.
2. There is a small gap that appears as you move the mouse from left to right across the menu. Modify the link styles to remove this gap, so that the mouse moves immediately from one link to the next.
3.  Add a margin to the `Learn More` heading, so that there is more space between the jumbotron and the heading. (make sure it applies only Learn More heading)

### CSS specificity
What happens if two CSS rules apply to the same element?

## Resources
1. [HTML5 - elements and their semantic](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5)
2. [CSS Selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
3. [The Cascade - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
4. [Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
5. [CSS specificity - MDN](https://developer.mozilla.org/en/docs/Web/CSS/Specificity)
6. [Pseudo classes - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

## Homework

1. Move Your Codepen page that you created to Github. That would involve:
  - Create a new Repository under your Github account
  - Moving your codepen files to your machine
  - Pushing them to Github
  - Apply the knowledge you acquired today to improve the page:

2. Read about [HTML forms](http://learn.shayhowe.com/html-css/building-forms/). Create a new HTML page, `contact.html` and add it to your Codepen site (after you've moved it to Github). Create a form to ask the user to enter their `name`, `email`, `address` and `phone number`, and present them with a large area to enter a `message`, and a button to `submit` the message. You may use [Bootstrap's input groups](http://getbootstrap.com/components/#input-groups) if you like. But also use the CSS techniques you've learned so far to style this form like the rest of the site. Things like border colors, labels and buttons should fit with the existing style of the page.

3. **[Bonus/Optional]** To practice your CSS selectors, play this [CSS Selector game](https://flukeout.github.io/). It gets hard at the end, but try your best! We advise that you read about [advanced CSS selectors](http://learn.shayhowe.com/advanced-html-css/complex-selectors/) to help you with the game

4. **Research:** Each student chose a topic to read about this week and do a very short presentation (5 minutes) about it next week.
The list of topics are: `HTML aria attributes`, `CSS box model`, `Vertically centering content`, `CSS naming patterns (BEM/OOCSS)`, `z-index`, `Positioning (absolute, relative, fixed)`, `Icon fonts`, `CSS transitions`, `Accessibility & SEO`

## Prepare for the next class
1. Read this [introduction to media queries](https://varvy.com/mobile/media-queries.html).
