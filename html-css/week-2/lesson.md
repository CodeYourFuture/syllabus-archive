# HTML/CSS 2

**What will we learn today?**

<!-- TODO: Update this once we've nailed it down a bit more -->

---

## Responsive Web Design

When we build for the web, we're making websites that can be viewed on a variety of devices.

| **Exercise 1** |
| :---- |
| In groups, list the types of devices that you can access websites on. |
| Discuss how those devices are different, and how that might affect us as web developers. |

To ensure we're presenting a website that's easy to use on any device, we use *Responsive Web Design* techniques to modify how content is displayed depending on the *viewport*.

[This article](https://decadecity.net/blog/2014/08/19/a-device-agnostic-approach-to-inlining-css). shows some data on the huge variety of viewport sizes.

| **Exercise 2** |
| :---- |
| [The Karma-clone website](http://thinkful-ed.github.io/karma-clone/) you worked on as homework has some responsive design problems (try resizing the browser window to be smaller). |
| Make a list of what you think the problems are. |
| How would you solve those problems? |

Now let's look at how "real" websites solve this problem.

| **Exercise 3** |
| :---- |
| In groups, the teacher will assign you a website to investigate. |
| Open the website in your browser and observe what happens when you resize browser. |

## Media Queries

Media queries help us change the display of our content depending on the size of the viewport. Let's review what you learned and break down a media query:

```css
@media (min-width: 900px) {
  body {
    background: red;
  }
}
```

In this media query, we're assigning a red background color to the `<body>` element whenever the viewport is larger than `900px`, and we're viewing on a screen.

* `@media` starts the media query
* `(min-width: 900px)` tells it to apply these styles when the viewport is
  larger than `900px`
* Finally, we wrap all of our styles for this media query in brackets (`{` and `}`), just like a CSS rule

Let's look at a slightly more realistic example: open [this CodePen](https://codepen.io/anon/pen/jzQveg?editors=1100) and try resizing the window.
<!-- TODO: perhaps I'm missing something but the CodePen example seems backwards to me? A more realistic example would be for it to go full width at the mobile breakpoint? -->

| **Exercise** |
| :---- |
| Write three media queries to change three things on mobile for the Karma-clone page. |

<!-- TODO: should there be something about mobile-first design here? -->

## Cake website wireframe

We'll spend the rest of the lesson breaking down a *wireframe* and turning it into a website. From [Usability.gov](https://www.usability.gov/how-to-and-tools/methods/wireframing.html):

> A wireframe is a two-dimensional illustration of a page’s interface that specifically focuses on space allocation and prioritization of content, functionalities available, and intended behaviors

This is a common task for a web developer to do: they receive a wireframe from a designer and turn it into HTML and CSS.

| **Exercise** |
| :---- |
| Open [this wireframe image](https://clarelisbeth.files.wordpress.com/2011/06/mums-w-frame.jpg). |
| The teacher will point different parts of the wireframe, and the class will call out how it could be broken into semantic HTML elements. |
| In groups, decide how you would design the same website to work on mobile. |
| On sheets of paper, draw a wireframe of the mobile version. |

{% include "./homework.md" %}
