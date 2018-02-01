![Lesson in review](https://img.shields.io/badge/status-review-orange.svg)

# HTML/CSS 3

** What we will learn today?**

* [Design framework](#design-frameworks)
* [Naming patterns](#naming-patterns)
* [Forms](#html-forms)
* (Optional) [CSS processors](#css-processors)

---

## Design frameworks

A design framework is a collection of re-usable code snippets which you can use
to build a website. It is sometimes called a "design system", "style guide", or
"pattern library", and will usually consist of three things:

1. **Brand guidelines** define the appropriate typography, colors and logos to
   use.
1. **Components** define re-usable code snippets for common requirements, like
   navigation menus.
1. **Helpers** define additional code tools to construct the site, like layout
   grids

Having a design framework is essential when working in large projects, as it
allows developers to share code, without having to write the same thing several
times. It also allows the core design elements to be changed easily. For
example, if all the buttons in your website use the same CSS class, you can
change their appearance simply by editing one rule.

The BBC's Global Experience Language is a design framework. It calls it's
components
[design patterns](http://www.bbc.co.uk/gel/guidelines/category/design-patterns)
and in the
[foundations](http://www.bbc.co.uk/gel/guidelines/category/foundations) section
you'll find discussion of layouts and typography.

### Examples of CSS frameworks

Larger companies use design styleguides as a daily tool, allowing them to
deliver code faster and improve communication between designers and developers
(which is not always easy!!).

* [MailChimp >](http://ux.mailchimp.com/patterns)
* [Lonely planet >](http://rizzo.lonelyplanet.com/styleguide)
* [CodePen >](http://codepen.io/guide/)

### Open source frameworks

When you need to create a website very quickly, in order to test a concept, for
example, there are design systems that you can use. In addition to CSS classes,
they also bring Javascript functionality that works out of the box (by applying
CSS classes to your elements). Explore the documentation of the frameworks
below.

* [Bootstrap >](http://getbootstrap.com/)
* [Skin >](https://ebay.github.io/skin/)
* [Foundation](http://foundation.zurb.com/)

Bootstrap is CSS and JavaScript code that we
[load in our HTML pages](https://v4-alpha.getbootstrap.com/getting-started/introduction/).
Bootstrap's documentation describes how to write HTML code that fits the
Bootstrap components, including a
[grid layout](https://v4-alpha.getbootstrap.com/layout/grid/) as well as several
[components](https://v4-alpha.getbootstrap.com/components/alerts/).

> **Exercise:** Explore the examples of CSS frameworks above. What do they have
> in common? What are the basic elements that all of the have?

> **Exercise:** Go back to `bikes-for-refugees` and open `index.html`. Use the
> web developer tools ("Inspect Element") to see which CSS classes are applied
> to each button (`Donate now`, `Donate a bike today` and `Volunteer`). How does
> the `Volunteer` button differ from the other buttons?

> Still using the developer tools, change the height of the three buttons with
> one line of code. Do the same for font-sizes.

> Bikes-for-refugees already includes `Bootstrap`. Check its
> [documentation >](http://getbootstrap.com/css/) and add some elements to your
> page that use bootstrap. For example, a
> [responsive image >](http://getbootstrap.com/css/#images).

> **Exercise:** Fork [this repository](https://github.com/NateWr/groupstrap) and
> follow the instructions in the [readme](https://github.com/NateWr/groupstrap)
> to create a new page and add a card component to it.

> **Exercise:** Perform a group exercise illustrating git branching and pull
> requests. Then create a branch, commit your new page, and issue a pull
> request. Once all the pull requests are merged, switch back to the `master`
> branch and update your copy.

## Naming Patterns

We use naming patterns to organise our code so that it is easier for colleagues
to work with our code -- and easier for us to work with our colleagues' code. In
a team of developers, you will need to understand, read and make use of a naming
pattern.

Bootstrap uses a naming pattern called **Object-Oriented CSS** (OOCSS). The goal
is to define an _object_, which is another word for a _component_, and come up
with a set of re-usable class names appropriate for that object.

```html
<div class="alert alert-success">
  You have successfully completed your task.
</div>
<div class="alert alert-danger">
  You did not complete your task.
</div>
```

```css
.alert {
  padding: 0.75rem 1.25rem;
  border-radius: 0.25em;
}
.alert-success {
  background-color: green;
}
.alert-error {
  background-color: red;
}
```

> **Exercise:** As a group, let's explore the naming patterns in Bootstrap's
> [Card component](https://v4-alpha.getbootstrap.com/components/card/#example).
> How is the object-oriented naming pattern used here?

Let's look at the following example of Bootstrap's Card component:

```html
<div class="card card-inverted">
  <div class="card-block">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">
    Some quick example text to build on the card title
    and make up the bulk of the card's content.
    </p>
  </div>
</div>
```

We have three _types_ of class names here:

* `.card` is the **object**.
* `.card-block`, `.card-title`, and `.card-text` are **sub-objects**.
* `.card-inverted` is a **modifier**.

With Bootstrap's naming pattern, we know an object is a single word class name
like `.card`, `.btn` or `.alert`. But our other two _types_ of class names share
the same naming pattern: `.card-inverted` and `.card-block`.

The [Block, Element, Modifier](http://getbem.com/introduction/) (BEM) naming pattern
is an attempt to overcome
this. It introduces separate naming structures for all three _types_ of class
names.

* The **object** is called a "Block": `.card`.
* The **sub-objects** are called "Elements" and are written with **2
  underscores**: `.card__block`, `.card__title` and `.card__text`.
* The **modifier** is written with **2 dashes** as: `.card--inverted`.

If we changed our Card example to use BEM syntax, it would look like this:

```html
<div class="card card--inverted">
  <div class="card__block">
    <h4 class="card__title">Card title</h4>
    <p class="card__text">
    Some quick example text to build on the card title
    and make up the bulk of the card's content.
    </p>
  </div>
</div>
```

> "There are only two hard things in Computer Science: cache invalidation and
> naming things" - Phil Karlton

One of the goals in a naming pattern is to communicate purpose.

## HTML Forms

Forms provide tools for visitors to your webpage to interact by entering
details, making selections or performing other actions. When you write an update
on Facebook, you're entering a message into a form field, and "posting" that
message to Facebook.

![An example web form](../assets/example_form.png)

> **Exercise:** Read this guide on
> [HTML forms](http://marksheet.io/html-forms.html). Then add a form to your new
> page. The form should include fields for the user to write their name, email
> address and a message. It should also include a button.

> **Exercise:** Look at the documentation for
> [Bootstrap's form components](https://v4-alpha.getbootstrap.com/components/forms/).
> Update your form to use Bootstrap's form groups, form controls and buttons.
> When you're done, create a new branch, commit, and issue a pull request.

## CSS processors

Two of the most important principles of web development are to `avoid repetition` and aim for `reusability`. CSS is a fairly simple language, which is
perfect for small websites, but when left to its own devices ends up creating
too much repetition.

In order to minimize this, we have tools called CSS processors. There are many,
including SASS, LESS, PostCSS and also Javascript based ones. In this lesson, we
will learn about SASS.

### Variables

```css
$border-color: #262626;

.primary-button {
  border: $border-color 1px solid;
}

input {
  border: $border-color 2px dotted;
}
```

Outputs

```css
.primary-button {
  border: #262626 1px solid;
}

input {
  border: #262626 2px dotted;
}
```

### Nesting

```css
.articles {
  h1 {
    font-size: 20px;
  }

  p {
    margin-bottom: 30px;
  }

  .hero-image {
    width: 100%;
  }
}
```

Outputs

```css
.articles h1 {
  font-size: 20px;
}

.articles p {
  margin-bottom: 30px;
}

.articles .hero-image {
  width: 100%;
}
```

### Composability

```css
.btn {
  border-radius: 3px;

  &--primary {
    background-color: #802be2;
  }

  &--secondary {
    background-color: #ffffff;
  }
}
```

Outputs

```css
.btn {
  border-radius: 3px;
}

.btn--primary {
  background-color: #802be2;
}

.btn--secondary {
  background-color: #ffffff;
}
```

### Conditions

Do somehting based on a variable.

```css
$food: apple;

div {
  @if $food == apple {
    background-color: red;
  } @else if $food == pear {
    color: green;
  } @else {
    color: grey;
  }
}
```

Outputs

```css
div {
  background-color: red;
}
```

The background color is read because we defined the variable food as `apple` in
the beginning.

### Loops

```css
@for $i from 1 through 8 {
  $width: percentage(1 / $i);

  .col-#{$i} {
    width: $width;
  }
}
```

Outputs

```css
.col-1 {
  width: 100%;
}
.col-2 {
  width: 50%;
}
.col-3 {
  width: 33.333%;
}
.col-4 {
  width: 25%;
}
.col-5 {
  width: 20%;
}
.col-6 {
  width: 16.666%;
}
.col-7 {
  width: 14.285%;
}
.col-8 {
  width: 12.5%;
}
```

Example taken from [here](http://clubmate.fi/for-while-and-each-loops-in-sass/).

{% include "./homework.md" %}
