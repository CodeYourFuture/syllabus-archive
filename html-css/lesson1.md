# HTML/CSS 1
**What will we learn today?**
- Semantic HTML tags
- CSS selectors, CSS cascade, Pseudo-classes such as `:hover`/`:focus`
- Box model: `margin`/`padding`/`border` etc...
- CSS specificity
---

## What makes a web page?

![What makes a web page](assets/webpage-parts.png)

**Separation of Concerns:** In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern. (Wikipedia)

> **Principles** - During the course, we will highlight principles that apply to the specific topic but also to Computer Science and Programming in general. It is important to understand these principles, terms and apply them to your thinking in general.

## Code Walkthrough

In today's class, we will begin adapting styles on this example website. We'll review some of the HTML/CSS basics you already encountered during your application process and learn some new techniques. By the end of the third lesson, we will have worked together to improve the example site on the left so that it looks like the screenshot on the right.

<a href="assets/screenshot-start.png" target="blank">
  <img src="assets/screenshot-start.png" style="border: 1px solid #bababa; width: 48%; max-height: 293px">
</a>
<a href="assets/screenshot-complete.png" target="blank">
  <img src="assets/screenshot-complete.png" style="border: 1px solid #bababa; width: 48%;">
</a>

The example website you'll begin working with is available [on Github](https://github.com/Code-Your-Future/bikes-for-refugees).

In order to get started, please [fork it](https://help.github.com/articles/fork-a-repo/) on Github, so it shows up under your account. Then clone it in your terminal and open it with VS Code (our chose IDE).

> **Exercise**: Spend 5 minutes exploring the `.html` and `.css` files for this page. Why don't we put everything in one file?

> Let's refresh how HTML tags are structured - https://www.w3schools.com/html/html5_syntax.asp

## Semantic HTML

When writing HTML code, you can use different tags to describe the content. Is it a navigation menu, a paragraph of text, or an article? By using the correct tag, you help search engines like Google or screen readers for the visually impaired.

> Semantic HTML is the use of HTML markup to reinforce the semantics, or **meaning**, of the information in webpages and web applications rather than merely to define its presentation or look. [Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

We'll cover the following semantic tags:

  - ``<header>``
  - ``<footer>``
  - The ``role="main"`` attribute
  - ``<nav>``
  - ``<article>``
  - ``<aside role="complementary">``

> **Exercise (pair programming):**  Work in pairs to determine where to place these new Tags and Attributes in the index.html file. Who benefits when we write "semantic" HTML?

## CSS Selectors

During your application process, you became familiar with CSS selectors. We'll review the basic selectors and then practice combining these to modify our button styles.

> If you want to review the selectors, read the [Common Selectors section](http://learn.shayhowe.com/advanced-html-css/complex-selectors/) of this page.

> **Exercise (pair programming):** Work in pairs to make the blue buttons on the page red (`#ce5f31`). The white button, which says "Volunteer", should remain white but the text should change to red.

## CSS Inheritance

Some CSS styles applied to one element will be "inherited" by their child elements. These are usually styles which apply to the content of the elements, such as font family and color. Other properties, like margins, paddings and borders, don't get passed down to children.

> In English, the word **inherit** refers to something, like the color of your eyes, which you can receive from your parent. We use this to describe how "child" HTML elements can inherit styles from "parent" HTML elements.

We'll do two quick exercises to explore what gets inherited, what doesn't, and why.

> **Exercise:** Work in pairs and use the [background properties](http://www.htmldog.com/references/css/properties/background/) to add a [assets/jumbotron-background.jpg](background image) to the jumbotron. Did these styles have "inheritance"? Why do you think they did or did not?

Now that the background image is in place, the text is difficult to read. The text needs to be white.

> **Exercise:** Work in pairs and use just one CSS rule to set all of the text in the jumbotron to white. To do this, you'll need to use inheritance. Why do you think some styles, like text color, get inherited?

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

> **Exercise:** Work in pairs and use the pseudo classes to make the background color of the red buttons change when in a "hover" or "focus" state. See if you can make the white "Volunteer" button change to a different background without effecting the red buttons.

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

# Resources
1. [HTML5 - semantic elements](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5)
2. [CSS Selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
3. [The Cascade - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
4. [Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
5. [Box Model, box-sizing: border-box - CSS Tricks](https://css-tricks.com/international-box-sizing-awareness-day/)
5. [CSS specificity - MDN](https://developer.mozilla.org/en/docs/Web/CSS/Specificity)
6. [Pseudo classes - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

## Homework

1. (Est. 2 hours) Read about [advanced CSS selectors](http://learn.shayhowe.com/advanced-html-css/complex-selectors/) and then practice by playing this [CSS selector game](https://flukeout.github.io/). It gets hard at the end, but try your best!

2. Fork this repo and follow the instructions on the README - https://github.com/Code-Your-Future/html-css-project

(If you need help with Forking - then refer back to [this tutorial](https://help.github.com/articles/fork-a-repo/))

## Prepare for the next class
3. (Est. 4-5 hours) Complete the first three lessons in this course on [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893). You should complete **Why Responsive?**, **Starting Small** and **Building Up**. *Don't worry if you don't have a phone you can use for Remote Debugging. You can use the browser's Device Emulation instead.*
