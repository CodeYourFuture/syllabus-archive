![Lesson Ready](https://img.shields.io/badge/status-ready-green.svg)

# HTML/CSS 1

What will we learn today?

- [Semantic HTML tags](#semantic-html)
- [Linking Resources](#add-css-and-javascript)
- [CSS Selectors](#css-selectors)
- [CSS Properties](#css-properties)
- [The Box Model](#box-model)
- [Git Branching](#git-branching)

## <a name="soc"></a> What makes a web page?

![What makes a web page](../assets/webpage-parts.png)

**Separation of Concerns:** In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections, so that each section addresses a separate concern ([Wikipedia](https://en.wikipedia.org/wiki/Separation_of_concerns)).

## HTML Syntax

You learned HTML code during your application process. If you want to refresh your memory, read this [quick guide to the HTML syntax](http://marksheet.io/html-syntax.html).

All together, let's review the basic syntax in the following example:

```html
<article>
    <h1>Learning HTML</h1>
    <p>Get to know the HTML basics.</p>
    <a href="http://html5rocks.com">Read Article</a>
</article>
```

> **Exercise** Which parts are the **Tags** and which parts are the **Attributes**.

HTML tags are arranged in a hierarchy. This is sometimes called "nesting" tags or creating an HTML "tree". Between the opening `<article>` tag and the closing `</article>` tag there are three other tags. We call these "child" tags, because they have a parent-child relationship.

![HTML Hierarchy](../assets/html-hierarchy.png)

> **Exercise** As a group, let's try to name all of the parent and child tags in the following example.

```html
<article>
    <h1>Learning HTML</h1>
    <p>
        <span class="author">Author:</span>
        <a href="http://codeyourfuture.co">Code Your Future</a>
    </p>
    <p>Get to know the HTML basics.</p>
    <a href="http://html5rocks.com">Read Article</a>
</article>
```

## Begin Individual Exercises

During this module, you will use an [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises) to practice what you learn. To begin, open the [repository](https://github.com/CodeYourFuture/html-css-git-exercises), scroll down and follow the instructions in the image below.

![Screenshot indicating where to read the instructions for the exercises](../assets/exercises-readme.png)

For now, stop after you complete exercises 1 and 2.

## Semantic HTML

When writing HTML code, you can use different tags to describe the content. Is it a navigation menu, a paragraph of text, or an article? By using the correct tag, you help search engines like Google or screen readers for the visually impaired.

> Semantic HTML is the use of HTML markup to reinforce the semantics, or **meaning**, of the information in webpages and web applications rather than merely to define its presentation or look. [Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

We'll cover the following semantic tags and talk about their use on the [BBC News website](https://www.bbc.co.uk/news):

- `<header role="banner"></header>`
- `<footer role="contentinfo"></footer>`
- `<main role="main"></main>`
- `<nav></nav>`
- `<article></article>`
- `<aside role="complementary"></aside>`

There are more than 100 semantic tags. If you would like, you can [review several semantic tags](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantic_elements).

> **Group Discussion**: How does semantic HTML relate to the [Separation of Concerns](#soc) that we discussed at the start of the class?

## Add CSS and JavaScript

During your application process, you wrote CSS code. Later in this course you will learn about JavaScript. Both are different languages from HTML.

A typical webpage will require three files, one for each language:

- `index.html`
- `styles.css`
- `main.js`

To use all of the files together, we have to tell the HTML code to load the other two files. Use the `<link>` tag to add the CSS file and the `<script>` tag to add the JavaScript:

```html
<html>
	<head>
		<title>Example Webpage</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<p>My webpage content.</p>
    <script src="main.js"></script>
	</body>
</html>
```

The `<link>` tag must be placed in the `<header>` element. Usually, the `<script>` tag appears near the end of the `<body>` element of the HTML page:

> **Group Discussion**: How do these files relate to the [Separation of Concerns](#soc) that we discussed at the start of the class?

### File Paths

The HTML file isn't always in the same directory as the CSS and JavaScript files. It is common for them to appear in an `assets` directory.

![A screenshot showing CSS and JavaScript files in an assets direcotry](../assets/assets-directory.png)

In the example above, the `<link>` would have to be:

```html
<link rel="stylesheet" href="assets/style.css">
```

> Want to learn more? Read about [Relative Links](https://marksheet.io/html-links.html#relative-urls), [Absolute Links](https://marksheet.io/html-links.html#absolute-urls), and [how to choose the right one](https://marksheet.io/html-links.html#relative-or-absolute-links).

Complete exercises 3 and 4 from the [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises).

## CSS Selectors

You learned about CSS selectors during your application. Let's review the most common selectors.

![A sceenshot showing a tag selector in action](../assets/selectors-1.png)

![A sceenshot showing a class selector in action](../assets/selectors-2.png)

![A sceenshot showing an id selector in action](../assets/selectors-3.png)

> You can review the most [Common Selectors](http://learn.shayhowe.com/advanced-html-css/complex-selectors/).

## CSS Properties

CSS properties allow you to change the way an element appears on your HTML page. You do this by assigning "values" to "properties". Consider the properties and values in CSS code below.

```
p {
  color: darkslategrey;
  font-size: 16px;
  line-height: 1.8em;
}
```

> **Group Exercise**: Think of a chair. It might be green or red, tall or short. As a group, brainstorm as many properties and values as you can imagine for a chair.

## Box Model

In CSS, every element is a box. An image is a box. A link is a box. The area around this box can be modified with properties that we call margins, borders and padding. Here's a diagram showing what the box looks like.

![Box Model. Source: MDN](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

Complete exercises 5, 6 and 7 from the [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises).

## Advanced CSS Selectors

You can use more advanced CSS selectors to limit your selections. Read about [Child Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/#child-selectors), [Sibling Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/#sibling-selectors), [Pseudo Classes](https://learn.shayhowe.com/advanced-html-css/complex-selectors/#pseudo-classes), and other complex selectors.

Then complete exercise 8 from the [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises).

## Git Branching

You have been using git to track the changes you make to your exercises project. Each time you commit, you save a copy of your files.

![Visualization of git commits](../assets/git-branch-1.png)

When you create a new branch, you create a separate line of commits.

![Visualization of a git branch](../assets/git-branch-2.png)

With branches, you can work on two copies of your project and switch back and forth.

![Visualization of commits in two git branches](../assets/git-branch-3.png)

Complete exercise 9 from the [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises) to learn how to use git branches.

> If you want to go deeper, read this article on [how git branching works](https://www.atlassian.com/git/tutorials/using-branches).

# Resources

Use the following resources to learn more about the topics we covered this week.

1. [HTML5 - semantic elements](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5)
2. [CSS Selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
3. [The Cascade - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
4. [Box Model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)
5. [Box Model, box-sizing: border-box - CSS Tricks](https://css-tricks.com/international-box-sizing-awareness-day/)
6. [CSS specificity - MDN](https://developer.mozilla.org/en/docs/Web/CSS/Specificity)

{% include "./homework.md" %}
