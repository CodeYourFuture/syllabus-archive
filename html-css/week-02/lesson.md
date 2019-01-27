![Lesson in review](https://img.shields.io/badge/status-review-orange.svg)

# HTML/CSS 2

**What will we learn today?**

* [Responsive web design](#responsive-web-design)
* [Media queries](#media-queries)
* [Flexbox](#flexbox)
* [Git Merging](#git-merging)

---

## Responsive Web Design

When we build for the web, we're making websites that can be viewed in a phone, a laptop, a tablet and many other devices. To ensure we're presenting a website that's easy to use on any device, we use Responsive Web Design techniques to modify how content is displayed depending on the viewport.

> **Exercise:** As a group, let's brainstorm as many devices as we can think of which might access the websites we build.

See how much variety there is in [viewport sizes](https://decadecity.net/blog/2014/08/19/a-device-agnostic-approach-to-inlining-css).

## Media Queries

As you learned in your homework assignment, media queries help us change the display of our content depending on the size of the viewport. Let's review what you learned and break down a media query:

```css
@media screen and (min-width: 900px) {
  body {
    background: red;
  }
}
```

In this media query, we're assigning a red background color to the `<body>` element whenever the viewport is larger than `900px`, and we're viewing on a screen.

* `@media` starts the media query
* `screen` tells it to apply these styles to screen displays. Other displays
  might be `print`, for when a webpage is being printed.
* `(min-width: 900px)` tells it to apply these styles when the viewport is
  larger than `900px`

Finally, we wrap all of our styles for this media query in the brackets `{` and `}`, just like a CSS rule.

Complete exercise 10 from the [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises).

## Flexbox

Flexbox allows you to arrange things on a webpage. These can be buttons, `<div>` elements, paragraphs, anything you want!

To add flexbox:
  1. Identify the elements you want to arrange in a certain way. Let's use this for now:
  ```html
    <button>Home</button>
    <button>Gallery</button>
    <button>Contact</button>
  ```
  2. Make sure they're part of the same container:

```html
    <div class="menu">
      <button>Home</button>
      <button>Gallery</button>
      <button>Contact</button>
    </div>
  ```

  3. Tell the container to use Flexbox to arrange all its children

```css
.menu {
  display: flex;
}
```

Once you have flexbox applied to the container you can start adding more rules to tell it exactly how the elements should be arranged.

### `flex-direction`

*Display elements in a row*

```css
.menu {
  display: flex;
  flex-direction: row;
}
```

![A diagram showing flex-directions set to row](../assets/example-flex-direction-row.png)

*Display elements in a column*

```css
.menu {
  display: flex;
  flex-direction: column;
}
```

![A diagram showing flex-directions set to column](../assets/example-flex-direction-column.png)

### `justify-content`

*Space out elements equally in a row*
```css
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* OR space-around */
}
```

![A diagram showing the use of justify-content in a row](../assets/example-justify-content-row.png)

*Space out elements equally in a column*
```css
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* OR space-around */
}
```

![A diagram showing the use of justify-content in a column](../assets/example-justify-content-column.png)

> **Important:** In the above 2 examples we used the same rule (`justify-content: space-between;`), **but** we changed the `flex-direction` from `row` to `column`. Notice how `justify-content` works in the same direction as `flex-direction`. In the images above, the "green" arrow for `justify-content` is operating in the same direction as `flex-direction`.

### `align-items`

*Align elements in a row*
```css
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

![A diagram showing the use of align-items in a row](../assets/example-align-items-row.png)

*Align elements on a column*
```css
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

![A diagram showing the use of align-items in a row](../assets/example-align-items-column.png)

> **Important:** While `justify-content` works in the same direction as `flex-direction`, `align-items` works the opposite way! Have a close look at the above images - the "green" arrow is opposite to the yellow `flex-direction` one.

Learn more about flexbox by reading this [helpful, visual and complete reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to the many properties you can use with flexbox.

Complete exercises 11-17 from the [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises).


## Git Merging

Last week you used Git to create a branch so that you could work on two different copies of your project at the same time.

![Visualization of commits in two git branches](../assets/git-branch-3.png)

This week you will learn how to merge your changes in one branch back to your master branch.

![Visualization of merging one branch into another](../assets/git-merge.png)

Complete exercise 18 from the [exercise project](https://github.com/CodeYourFuture/html-css-git-exercises).

## Resources

Use the following resources to learn more about the topics we covered this week.

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

{% include "./homework.md" %}
