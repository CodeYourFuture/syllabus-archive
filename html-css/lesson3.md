# HTML/CSS 3
- Design frameworks
- Bootstrap 4 and HTML/CSS frameworks
- HTML forms
- Git branching and pull requests
- Naming patterns (OOCSS, BEM)
---

## Design Frameworks

A design framework is a collection of re-usable code snippets which you can use to build a website. It is sometimes called a "design system", "style guide", or "pattern library", and will usually consist of three things:

1. **Brand guidelines** define the appropriate typography, colors and logos to use.
2. **Components** define re-usable code snippets for common requirements, like navigation menus.
3. **Helpers** define additional code tools to construct the site, like layout grids.

The main goals of a design framework are to ensure design consistency and avoid writing the same code twice.

The BBC's Global Experience Language is a design framework. It calls it's components [design patterns](http://www.bbc.co.uk/gel/guidelines/category/design-patterns) and in the [foundations](http://www.bbc.co.uk/gel/guidelines/category/foundations) section you'll find discussion of layouts and typography.

> **Exercise:** Look at the [Promos](http://www.bbc.co.uk/gel/guidelines/promos) design pattern. As a group, let's try to name all the parts of a Promo that we'll need to consider when designing the component? Now do the same with the [Carousel](http://www.bbc.co.uk/gel/guidelines/carousel) pattern.

## Open-source HTML/CSS/JS Frameworks

[Bootstrap](https://v4-alpha.getbootstrap.com/) and [Foundation](http://foundation.zurb.com/) are popular examples of open-source HTML/CSS/JS frameworks. They help you construct your own design framework by providing a number of re-usable components that are common for web applications.

Bootstrap is CSS and JavaScript code that we [load in our HTML pages](https://v4-alpha.getbootstrap.com/getting-started/introduction/). Bootstrap's documentation describes how to write HTML code that fits the Bootstrap components, including a [grid layout](https://v4-alpha.getbootstrap.com/layout/grid/) as well as several [components](https://v4-alpha.getbootstrap.com/components/alerts/).

> **Exercise:** Fork [this repository](https://github.com/NateWr/groupstrap) and follow the instructions in the [readme](https://github.com/NateWr/groupstrap) to create a new page and add a card component to it.

> **Exercise:** Perform a group exercise illustrating git branching and pull requests. Then create a branch, commit your new page, and issue a pull request. Once all the pull requests are merged, switch back to the `master` branch and update your copy.

## HTML Forms

Forms provide tools for visitors to your webpage to interact by entering details, making selections or performing other actions. When you write an update on Facebook, you're entering a message into a form field, and "posting" that message to Facebook.

> **Exercise:** Read this guide on [HTML forms](http://marksheet.io/html-forms.html). Then add a form to your new page. The form should include fields for the user to write their name, email address and a message. It should also include a button.

> **Exercise:** Look at the documentation for [Bootstrap's form components](https://v4-alpha.getbootstrap.com/components/forms/). Update your form to use Bootstrap's form groups, form controls and buttons. When you're done, create a new branch, commit, and issue a pull request.

## Naming Patterns (OOCSS/BEM)

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

> **Exercise:** Read the documentation on Bootstrap's [Card styles](https://v4-alpha.getbootstrap.com/components/card/#card-styles). Apply style adjustments to the cards in your project example.

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

## Homework

- Look at as much of the [Bootstrap 4 Documentation](https://v4-alpha.getbootstrap.com/) as you can.
- Add Bootstrap to the website you've been building for your homework.
- Add a new HTML page to the website you've been building for your homework. Use Bootstrap's form components to a contact form to this page.
- Modify the articles in the website you've been building for your homework. Modify their markup to use the BEM naming pattern so that they all look the same.

## Resources

- [HTML Forms](http://marksheet.io/html-forms.html) at Marksheet.io
- [Building Forms](http://learn.shayhowe.com/html-css/building-forms/) at ShayHowe.com
- [Bootstrap 4 Documentation](https://v4-alpha.getbootstrap.com/)

## Prepare for next class

Next week, we will begin learning and programming JavaScript. To prepare for the next lesson:

Watch this 2 minutes video:

1. ['What is JavaScript?'](https://www.youtube.com/watch?v=nItSSTwBvSU)
