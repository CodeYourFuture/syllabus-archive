# HTML/CSS 1

**What will we learn today?**

- [Semantic HTML tags](#html-syntax)
- [CSS selectors, CSS cascade, Pseudo-classes such as `:hover`/`:focus`](#css-selectors)
- [Box model: `margin`/`padding`/`border` etc...](#box-model)

---

## What makes a web page?

There are three technologies which are combined to make a web page.

![What makes a web page? Structure, presentation, behaviour](../assets/webpage-parts.png)

**Structure: HTML**

The semantic structure of a web page is provided by HTML.

**Presentation: CSS**

The visual presentation of a web page is provided by CSS.

**Behaviour: JavaScript**

The web page is given behaviours (reacting to clicks etc) by JavaScript.

## HTML Terminology

| **Exercise** |
| :---- |
| Make a list of HTML terms, features and properties that you have heard of before |

## Dev Tools Inspector

There is a tool called the *Inspector* for helping you build web pages built into the browser. To open it, right-click any where on the page and then click Inspect.

| **Exercise** |
| :---- |
| As a class, use the Inspector on some web pages and identify some HTML features and properties |
| Do you notice something interesting about the HTML elements that you are inspecting? |

## HTML Syntax

| **Exercise** |
| :---- |
| Make a list of all of the HTML tags and syntax that you can remember |

You may be already familiar with HTML code from your application process. If you want to refresh your memory, read this [quick guide to the HTML syntax](http://marksheet.io/html-syntax.html).

Let's review the basic syntax in the following example:

```html
<article>
    <h1>Learning HTML</h1>
    <p>Get to know the HTML basics.</p>
    <a href="http://html5rocks.com">Read Article</a>
</article>
```

| **Exercise** |
| :---- |
| Which parts are the *tags* and which parts are the *attributes*? |

HTML tags are arranged in a hierarchy. This is sometimes called "nesting" tags or creating an HTML "tree". Between the opening `<article>` tag and the closing `</article>` tag there are three other tags. We call these "child" tags, because they have a parent-child relationship.

![HTML Hierarchy](../assets/html-hierarchy.png)

## Semantic HTML

### Thinking in sections

A common task for a web developer is to take a *mock-up* from a designer and turn it into a web page. How do developers approach this? Often we cut the design up into sections based on their **semantics** (or "meaning").

| **Exercise** |
| :---- |
| 1. In groups, pick one of the following web sites: [https://my.charitywater.org/donate/home](https://my.charitywater.org/donate/home), [https://medium.com](https://medium.com/), [https://www.timeout.com](https://www.timeout.com/), [https://broadsign.com](https://broadsign.com/), [https://www.airbnb.co.uk](https://www.airbnb.co.uk), [https://dribbble.com](https://dribbble.com/) |
| 2. Without looking at the Dev Tools Inspector, decide how you would "cut it up" into semantic sections. **Tip:** start big, then go granular. |
| 3. Present your web page sections to the rest of the class |

### Semantic elements

When writing HTML code, you can use different tags to describe the content. Is it a navigation menu, a paragraph of text, or an article? By using the correct tag, you help search engines like Google or screen readers for the visually impaired.

> Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages and web applications rather than merely to define its presentation or look. [Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

Here are some semantic HTML elements:

- `<header>`
- `<footer>`
- The `role="main"` attribute
- `<nav>`
- `<article>`
- `<aside role="complementary">`

| **Exercise 1** |
| :---- |
| 1. Open the Inspector on [this web page](http://thinkful-ed.github.io/karma-clone/). |
| 2. What are the semantic HTML elements on this page? |
| 3. What meaning do the semantic elements have? |

| **Exercise 2** |
| :---- |
| 1. Open [this CodeSandbox editor](https://codesandbox.io/s/z69nnxv5q3) in your browser. |
| 2. Read the comments (anything in-between `<!--` and `-->`) and complete the **HTML** tasks. |
| **Tips:** Everything that is opened, must be closed! When you write HTML, always write the opening and the closing tags at the same time, so you don’t lose track. |

## CSS Selectors

During your application process, you became familiar with CSS selectors. We'll review the basic selectors and then practice combining these to modify our button styles. If you want to review some selectors, read the [Common Selectors section](http://learn.shayhowe.com/advanced-html-css/complex-selectors/) of this page.

<!-- TODO: Add some content here? -->

## Pseudo Classes

You can assign CSS rules to a class like this:

```css
.btn {
    background: #ce5f31;
}
```

There are also things called *pseudo classes*. In this section, we'll introduce you to the common pseudo classes for assigning styles to interactions, such as moving your mouse over a link.

> "pseudo" is a fancy word meaning "fake". We call them "pseudo" classes because they're not really there in the HTML, but the browser knows what to do with them.

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

## What can we style?

<!-- TODO: add some content here? -->

| **Exercise** |
| :---- |
| 1. Open the CodeSandbox editor that you were using before. We will now be adding some CSS to it. |
| 2. Read the comments (anything in-between `<!--` and `-->`) and complete the **CSS** tasks. |
| **Tips:** Everything that is opened, must be closed! When you write a CSS rule, always write the opening and the closing braces at the same time, so you don’t lose track. |

## Cascading

<!-- TODO: add some content here? -->

The first word *cascading* in Cascading Style Sheets (CSS) is very important. Using this [CodeSandbox](https://codesandbox.io/s/znjvoqj1l) as an example let's explore how the cascade works.

<!-- TODO: flesh this out a bit? -->

1. Importance
    - `!important`
2. Specificity
    - Inline styles/ids/class, attribute/html selector and pseudo-selectors
3. Source order
    - The last one wins

## Box Model

Let's investigate the *box model* by looking at another example. Open [this CodeSandbox](https://codesandbox.io/s/znjvoqj1l) and explore it with the teacher using the browser dev tools.

In CSS, everything is a box. An image is a box. A link is a box. The area around this box can be modified with properties that we call margins, borders and padding. Here's a diagram showing what the box looks like.

![Box Model. Source: MDN](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

| **Exercise** |
| :---- |
| 1. Open the CodeSandbox editor that you were using before. We will now be adding some CSS to it. |
| 2. Read the comments (anything in-between `<!--` and `-->`) and complete the tasks in part 3. |
<!-- FIXME: it's not clear from the notes what the part 3 tasks are -->

## Flexbox

Now we'll investigate *flexbox*. Open [this CodeSandbox](https://codesandbox.io/s/znjvoqj1l) again and explore it with the teacher.

<!-- TODO: flesh this out a bit -->

| **Exercise** |
| :---- |
| 1. Open the CodeSandbox editor that you were using before. We will now be adding some CSS to it. |
| 2. Read the comments (anything in-between `<!--` and `-->`) and complete the tasks in part 4. |
<!-- FIXME: it's not clear from the notes what the part 4 tasks are -->

## Resources

1. [HTML5 - semantic elements](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5)
2. [CSS Selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
3. [The Cascade - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
4. [Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
5. [Box Model, box-sizing: border-box - CSS Tricks](https://css-tricks.com/international-box-sizing-awareness-day/)
6. [CSS specificity - MDN](https://developer.mozilla.org/en/docs/Web/CSS/Specificity)
7. [Pseudo classes - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
8. [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

{% include "./homework.md" %}
