# HTML/CSS 3

**What will we learn today?**

<!-- TODO: Update this once we've nailed it down a bit more -->

## The 12-Column Grid

| **Exercise 1** |
| :---- |
| Find a partner and compare the width percentage values (`width: __%;`) you used in your homework. |
| How many different values did you use? |
| Are the values inconsistent? |
| Do you think this would be a problem on a real website? Why? |

A *grid system* is a collection of re-usable CSS styles which you can use to build a website. It helps keep the layout *consistent* across all pages of the website.

A grid system made up of 12 columns is common, as 12 is divisible by 2, 3 and 4 meaning it is flexible for many different designs.

<!-- TODO: flesh this out more? -->

| **Exercise 2** |
| :---- |
| Your teacher will show some websites with a 12-column grid system overlaid on top. |
| Estimate how many columns each section of the website will take. |

| **Exercise 3** |
| :---- |
| Your teacher will now show the same websites but on a mobile view

If we start thinking in a 12-column way, there are only 12 possible widths elements can be - so why don’t we write these 12 CSS classes, and re-use them as much as we want?

Solve the problem of repetition by pre-writing all your column classes and re-using them!

### Implementing a 12-column grid

Instead of using media queries for each element in the layout, we can instead use a completely re-usable set of *utility* classes that we apply directly to our HTML.

```css
.col-1 { width: 8.333%; /* 100% / 12 = 8.333% */ }
...
.col-3 { width: 25%; /* 100% / 4 = 25% */ }
```

Then in our HTML it looks like this:

```html
<div class="col-3">
  <div class="col-1"></div>
</div>
```

### Recap

There are two contrasting ways of making a page responsive:

1. with media queries for each custom class,
2. with a pre-defined grid system and re-usable utility classes

With the first approach you will often repeat `width: x%` over and over again. The problem is you don’t want to a lot of inconsistent widths, otherwise it won’t *align* (line up). Alignment is **very** important and designs are always lined up.

To ensure things are always aligned, we can decide to always use the same width values for our elements, and always have the same spacing between elements. This is why we use a grid. A grid is a system that forces us to always use the same set of widths for elements on a page, and also controls how much space is between each element.

## Re-usable Grid Frameworks

| **Exercise 1** |
| :---- |
| Write 12 columns in the format `col-1`, `col-2`, etc and assign an appropriate width rule. |
| Add a `row` class to act as flex container. | <!-- TODO: make this more descriptive -->

A common feature of many grids are *gutters*. These add spacing in between the columns, so that elements aren't right next to each other. <!-- TODO: This is referenced in the recap, above perhaps it would be better to the section above? -->

| **Exercise 2** |
| :---- |
| Add some `margin` to your `col-X` columns, so that there is a gutter between the columns. |
| Add a `container` class with a `max-width` rule, to contain the width on wide screens. |

<!-- TODO: flesh this out more? -->

Writing CSS like this for every website that you make would get boring quickly! Luckily, there are *CSS Frameworks* that have written this repetitive CSS for you and which you can just re-use as needed.

### Using a 12-Column Grid Framework

When using a 12-column grid framework, remember these rules:

- `col-X` The total of all columns should always be 12
- Wrap your content with additional `<div>`s with these utility classes, so they don’t clash with your content
- Do not add any additional padding, width or margins to the styling of an element that uses grid utility classes. It would override the grid styles, which breaks them

### Bootstrap 4

<!-- TODO: keep this? -->

One example of a 12-column grid framework (and more!) is [Bootstrap](https://getbootstrap.com/).

Some useful Bootstrap documentation pages are:

- [Loading Bootstrap in our HTML pages](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [How to use the 12-column grid](https://getbootstrap.com/docs/4.0/layout/grid/)
- [Some useful "components", like buttons](https://getbootstrap.com/docs/4.0/components/buttons/).

There are other open-source HTML/CSS frameworks you can also try. Two popular ones are [Bulma](https://bulma.io/) and [Foundation](https://foundation.zurb.com/).

<!-- TODO: Should they start work on the homework in class? Or pick another layout and practice that in class? Or something else entirely? -->

{% include "./homework.md" %}

## Resources

<!-- TODO: review these for relevancy -->

* [HTML Forms](http://marksheet.io/html-forms.html) at Marksheet.io
* [Building Forms](http://learn.shayhowe.com/html-css/building-forms/) at ShayHowe.com
* [Bootstrap 4 Documentation](https://getbootstrap.com/)
* [Introduction](http://getbem.com/introduction/) and [Naming](http://getbem.com/naming/) with BEM Syntax for Reusable CSS
