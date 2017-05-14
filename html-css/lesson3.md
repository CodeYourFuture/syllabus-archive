# HTML/CSS 3

What we will learn today:

- [Design frameworks](#design-frameworks)
- [Naming patterns](#naming-patterns)
- [CSS processors](#css-processors)

## Design frameworks

A design framework is a collection of re-usable code snippets which you can use to build a website. It is sometimes called a "design system", "style guide", or "pattern library", and will usually consist of three things:

    1. Brand guidelines define the appropriate typography, colors and logos to use.
    2. Components define re-usable code snippets for common requirements, like navigation menus.
    3. Helpers define additional code tools to construct the site, like layout grids.

Having a design framework is essential when working in large projects, as it allows developers to share code, without having to write the same thing several times. It also allows the core design elements to be changed easily. For example, if all the buttons in your website use the same CSS class, you can change their appearance simply by editing one rule.

### Examples of CSS frameworks
Larger companies use design styleguides as a daily tool, allowing them to deliver code faster and improve communication between designers and developers (which is not always easy!!).

- [MailChimp >](http://ux.mailchimp.com/patterns)
- [Loneny planet >](http://rizzo.lonelyplanet.com/styleguide)
- [CodePen >](http://codepen.io/guide/)

### Open source frameworks

When you need to create a website very quickly, in order to test a concept, for example, there are design systems that you can use. In addition to CSS classes, they also bring Javascript functionality that works out of the box (by applying CSS classes to your elements). Explore the documentation of the frameworks below.

- [Bootstrap >](http://getbootstrap.com/)
- [Skin >](https://ebay.github.io/skin/)

> **Exercise:** Explore the examples of CSS frameworks above. What do they have in common? What are the basic elements that all of the have?

> **Exercise:** Go back to `bikes-for-refugees` and open `index.html`. Use the web developer tools ("Inspect Element") to see which CSS classes are applied to each button (`Donate now`, `Donate a bike today` and `Volunteer`). How does the `Volunteer` button differ from the other buttons?

> Still using the developer tools, change the height of the three buttons with one line of code. Do the same for font-sizes.

> Bikes-for-refugees already includes `Boostrap`. Check its [documentation >](http://getbootstrap.com/css/) and add some elements to your page that use boostrap. For example, a [responsive image >](http://getbootstrap.com/css/#images).


## Naming patterns

We use naming patterns to organise our code so that it is easier for colleagues to work with our code -- and easier for us to work with our colleagues' code. In a team of developers, you will need to understand, read and make use of a naming pattern.

Bootstrap uses a naming pattern called **Object-Oriented CSS** (OOCSS). The goal is to define an _object_, which is another word for a _component_, and come up with a set of re-usable class names appropriate for that object.

```
<div class="alert alert-success">
	You have successfully completed your task.
</div>
<div class="alert alert-danger">
	You did not complete your task.
</div>

.alert {
	padding: .75rem 1.25rem;
	border-radius: 0.25em;
}
.alert-success {
	background-color: green;
}
.alert-error {
	background-color: red;
}
```

> **Exercise:** As a group, let's explore the naming patterns in Bootstrap's [Card component](https://v4-alpha.getbootstrap.com/components/card/#example). How is the object-oriented naming pattern used here?

One of the goals in a naming pattern is to communicate purpose. Let's look at the following example of Bootstrap's Card component:

```
<div class="card card-inverted">
	<div class="card-block">
		<h4 class="card-title">Card title</h4>
		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	</div>
</div>
```

We have three _types_ of class names here:

- `.card` is the **object**.
- `.card-block`, `.card-title`, and `.card-text` are **sub-objects**.
- `.card-inverted` is a **modifier**.

With Bootstrap's naming pattern, we know an object is a single word class name like `.card`, `.btn` or `.alert`. But our other two _types_ of class names share the same naming pattern: `.card-inverted` and `.card-block`.

The [Block, Element, Modifier]() (BEM) naming pattern is an attempt to overcome this. It introduces separate naming structures for all three _types_ of class names.

- The **object** is called a "Block": `.card`.
- The **sub-objects** are called "Elements" and are written with __2 underscores__: `.card__block`, `.card__title` and `.card__text`.
- The **modifier** is written with __2 dashes__ as: `.card--inverted`.

If we changed our Card example to use BEM syntax, it would look like this:

```
<div class="card card--inverted">
	<div class="card__block">
		<h4 class="card__title">Card title</h4>
		<p class="card__text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	</div>
</div>
```

> "There are only two hard things in Computer Science: cache invalidation and naming things" - Phil Karlton


## CSS processors

Two of the most important principles of web development are to `avoid repetition` and aim for `reusability`.

## Homework
1. If you haven't already, fork the [`css-skin`](https://github.com/Code-Your-Future/css-skin) repository. If you have already forked it, you can use your fork for this exercise.

    - Open `index.html` and look at the images of how your buttons should look like, and then notice the unstyled buttons above.
    - The unstyled buttons have classes. Use them to write your css in `style.css`, so the buttons receive a style. Go for maximum reusability. Try not to repeat code!
    - Add more HTML examples, following the same naming pattern as the buttons - for example, a list (`ul`) with items (`li`). Add more than one sytle of element (for example a `ul` that displays the elements vertically and other that displays them horizontally).
    - Write the CSS for those elements.
    - As usual, make a pull request and send them to one of the mentors for review!

2. Read about [writing loops in SCSS >](http://clubmate.fi/for-while-and-each-loops-in-sass/) (Sass). Fork this CodePen into your account: https://codepen.io/claudiamm/pen/xdjadV. You have three paragraphs, each with a different `size` classes. Use a SASS `for` loop and nesting in order to create these sizes (tip: you can multiply! `font-size: $i * 10px;`). The final result should look like this:

    ![](assets/loop-paragraph-example.jpg)

    Note: the aim of this exercise is to do a for loop - so please **do NOT** do something like below, as it will not bring you anything new:

    ```
    .paragraph-size-1 {...}
    .paragraph-size-2 {...}
    .paragraph-size-3 {...}
    ```

### Optional homework, but you're awesome if you do it!

3. Use SASS in your `css-skin` project instead of normal CSS. Suggestion: alongside `style.css`, create a file called `style.scss`. You will use SASS to transform (compile) your SCSS file into a CSS file. [How to compile SASS >](https://www.youtube.com/watch?v=b0d--jixRwg)

4. Make your `css-skin` project available under `yourname.github.io/css-skin`, as so you can access `style.css` via `yourname.github.io/css-skin/style.css`.
    - Go back to a website that you have made for CodeYourFuture (either for homework or the one that you built when applying).
    - Import your `style.css` file using `<link rel="stylesheet" href="http://yourname.github.io/css-skin/style.css" />`.
    - You can use your buttons and lists in this website too. Give it a try by adding the following code to your page `<button class="btn">Button</button>`.
    - You've got your own CSS framework now! Use it in your future projects for CodeYourFuture, and update at 

## Reading

- [Getting started with SASS >](https://scotch.io/tutorials/getting-started-with-sass)

## Prepare for next class

Next week, we will begin learning and programming JavaScript. To prepare for the next lesson:

Watch these videos:

1. ['What is JavaScript?'](https://www.youtube.com/watch?v=nItSSTwBvSU)
2. ['Do You Know the History of JavaScript?'](https://www.youtube.com/watch?v=EUAmiIsp2YU)