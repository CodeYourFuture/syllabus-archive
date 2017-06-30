# Naming Patterns

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

Let's look at the following example of Bootstrap's Card component:

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

One of the goals in a naming pattern is to communicate purpose.
