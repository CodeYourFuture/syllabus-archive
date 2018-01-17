# HTML/CSS 1 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or
outcomes for the lesson topics and exercises.

## HTML Syntax

This is an opportunity for any students who are struggling to get another pass
at the basics. Even if it seems like some students get it quickly, try not to
rush through this section.

When conducting the parent/child tags exercise, don't forget to point out that
the first `<p>` tag is both a parent _and_ a child.

## Code Walkthrough

**Why don't we put everything in one file?**

Discuss:

* Keeping data separate from display
* Keeping code organised into manageable parts
* Syntax highlighting in code editors
* Linting Tools
* Working in large teams with narrow skill-sets

## Semantic HTML

HTML elements with the following classes should receive the following semantic
tags/attributes:

* `.site-header` -> `<header>`
* `.navbar` -> `<nav>`
* `.primary-content` -> `role="main"`
* `.article` -> `<article>` (check in primary column and sidebar)
* `.sidebar-content` -> `<aside role="complementary">`
* `.site-footer` -> `<footer>`

**Who benefits when we write "semantic" HTML?**

Search engines, anyone with a visual impairment who uses a screen reader.
Reinforce the distinction between data and display. Data should be meaningful
regardless of display.

## CSS Selectors

Students may need more or less review depending on how much they remember from
their application process. If students are struggling with the basics, have them
go through this
[CSS Introduction course](https://www.codecademy.com/courses/web-beginner-en-TlhFi/resume?curriculum_id=50579fb998b470000202dc8b),
starting with the CSS Syntax lesson. Mentors should help guide them through and
identify where they're struggling.

Students should set the button background color using the `.btn-primary`
selector, and adjust the white button using the `.btn-secondary` selector. If
they use the `.btn` selector, they'll effect both buttons. When they do that,
use it as a lesson in how Object-Oriented CSS works and how to choose the right
selector.

## CSS Inheritance

MDN just
[says](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Inheritance),
"Which properties are inherited by default and which aren't is largely down to
common sense." That's kind of true and it's not easy to set out a clear rule.

Use any questions or discussion to reinforce the parent-child relationship. A
child element will sit "within" a parent element, so text in a child element
will appear on the background of a parent element. That kind of gets at why
backgrounds don't inherit but text color does.

## Psuedo Classes

If the students use `.btn:hover` they'll effect the red and white buttons. Make
sure they're using the `.btn-primary` and `.btn-secondary` selectors to prevent
conflicts.

## The Cascade

See if the students can figure out the first exercise for themselves. But it's
likely that some will need help. If there are enough mentors, do this
one-on-one. Otherwise, bring it to the group and have one of the students who
understands explain to the others.

In the second exercise, students should use the `.active` class that's assigned
to that `.nav-item` element. Like this:

```css
.active .nav-link:hover,
.active .nav-link:focus {
  border-color: blue;
}
.nav-link:hover,
.nav-link:focus {
  border: 1px solid #ce5f31;
}
```

## Box Model

For the second exercise, the answer will look something like this:

```css
.nav-link {
  border: 1px solid transparent;
}
.nav-link:hover,
.nav-link:focus {
  border-color: #ce5f31;
}
```

## Homework

Make sure they know that the Responsive Web Design Fundamentals course will take
up the majority of their homework time, even though it's really preparation for
the next class.

# HTML/CSS 2 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or
outcomes for the lesson topics and exercises.

## Responsive Web Design

Devices to brainstorm together:

* Phones
* Tablets
* Laptops
* Desktop computers
* Gaming consoles (Playstation/Xbox)
* [Apple Watch](https://www.youtube.com/watch?v=wmyth7Bpyyo)
* Smart devices (fridges, washing machines, TVs)
* Screen readers
* Crawlers (search engines)

Use this list to illustrate the range of device sizes we build for. Reinforce
the separation between data and display.

## Media Queries

When completing the exercises, make sure they use a "mobile-first" technique.
They shouldn't shrink the text on small screens, but enlarge it on bigger
screens.

```css
/* Don't */
@media (max-width: 480px) {
  .jumbotron .display-3 {
    font-size: 3rem;
  }
}

/* Do */
.jumbotron .display-3 {
  font-size: 3rem;
}
@media (min-width: 480px) {
  .jumbotron .display-3 {
    font-size: 4.5rem;
  }
}
```

When completing the second exercise, make sure they're only modifying the
buttons in the jumbotron. The button in the header shouldn't be effected.

## Content Layout: Flexbox

This lesson is really just intended to get them a bit familiar with flexbox,
media queries and thinking about different viewports when doing their layouts.
Make sure that students are not relying on Bootstrap's grid when completing
these exercises. Make sure they're only using flexbox in `min-width` media
queries, and that they're applying sensible class naming patterns and wrapping
elements where necessary.

When they add a background and border to the "Learn More" articles, make sure
they're adding padding so the text doesn't go right up to the edge. If they are
using `px` units, nudge them towards `em` and explain that `em` is often
preferred because it scales well when you need to change font size for different
viewports.

## Homework

When checking their use of flexbox in their webpage, make sure they're using
gutters where appropriate and that they're using the kinds of design patterns
you would expect to see on a website (ie - items line up, text is proportionate,
etc).

# HTML/CSS 3 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or
outcomes for the lesson topics and exercises.

## Design Frameworks

Spend some time exploring the BBC framework. It's
[Promos](http://www.bbc.co.uk/gel/guidelines/promos) pattern shows a breakdown
of content, and can be seen in use on their homepage. The
[Carousel](http://www.bbc.co.uk/gel/guidelines/carousel) pattern shows how you
can nest components (Promos in Carousels).

## Open-source HTML/CSS Frameworks

Using the
[Navbar color schemes](https://v4-alpha.getbootstrap.com/components/navbar/#color-schemes),
use the browser's dev tools to show how changing the navbar classes in the
example website changes the look based on Bootstrap.

Using the [Card](https://v4-alpha.getbootstrap.com/components/card/#example)
example, try to illustrate the way tags are nested inside of each other in a
specific hierarchy. Emphasise the practice of paying close attention to
documentation and picking up on minor details.

### Git Branching Excercise

A mentor should act as a `remote` repository and have a large sheet of paper.
All students should have 4-5 sheets of paper.

1 The teacher should write the word `master` at the top of the sheet, and write
   their name below that.
2 All students should clone the main sheet on one of their sheets (`git
   clone`).
3 All students should add their name to their `master` sheet. Then show it to
   the mentor (`git commit` and pull request).
4 Take a moment to indicate how their sheets have diverged from the main sheet.
5 All students should copy the mentor's `master` sheet (`git pull`).
6 Ask two students to add a line to their sheet with any word they want. Then
   show it to the mentor (`git commit` and pull request). The mentor should
   refuse to merge one pull request.
7 All students should copy the mentor's `master` sheet (`git pull`).
8 The student who's pull request wasn't merged is now out-of-sync. Take a
   moment to describe the problem and introduce branching.
9 Ask the students to take another sheet, and copy the `master` sheet,
   replacing `master` with `feature-branch` (`git checkout -b feature-branch`).
10 Replay 3-5, this time rejecting some of the pull requests. Then have them
    copy the additions to the mentor's `master` sheet (`git pull`).
11 Have them destroy their `feature-branch` sheets (`git branch -D
    feature-branch`).
12 Ask the students to take a new sheet of paper, and copy the `master` sheet,
    replacing `master` with `update-branch` (`git checkout -b feature-branch`).
13 Ask the students to add three names to their `update-branch` sheet.
14 Ask the students to take a new sheet of paper, and copy only two of the
    three names they added to their `update-branch` sheet (`git add name1
    name2`).
15 Take a moment to discuss the difference between the workspace and index.
    Then ask them to pass their commit sheet in.

## HTML Forms

After they have added the Bootstrap form components, reinforce the way that they
have created **abstract** patterns with `.form-group` and `.form-control`.

## Naming Patterns (OOCSS/BEM)

Walk throuh the [alert](https://v4-alpha.getbootstrap.com/components/alerts/)
component example. Use the browser's dev tools to show how changing the class
names changes the color.

When examining the card component as a group, point out how the `.btn` component
is nested inside of the `.card` component. Reinforce the re-usability of
objects.
