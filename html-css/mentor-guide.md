# Mentors Guide for HTML/CSS module

* [Lesson 1](#htmlcss--1-- mentors-outline)
* [Lesson 2](#htmlcss--2-- mentors-outline)
* [Lesson 3](#htmlcss--3-- mentors-outline)

# HTML/CSS 1 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

## HTML Syntax

This is an opportunity for any students who are struggling to get another pass at the basics. Even if it seems like some students get it quickly, try not to rush through this section.

When conducting the parent/child tags exercise, don't forget to point out that the first `<p>` tag is both a parent _and_ a child.

## Code Walkthrough

**Why don't we put everything in one file?**

Discuss:

* Keeping data separate from display
* Keeping code organised into manageable parts
* Syntax highlighting in code editors
* Linting Tools
* Working in large teams with narrow skill-sets

## Semantic HTML

HTML elements with the following classes should receive the following semantic tags/attributes:

* `.site-header` -> `<header>`
* `.navbar` -> `<nav>`
* `.primary-content` -> `role="main"`
* `.article` -> `<article>` (check in primary column and sidebar)
* `.sidebar-content` -> `<aside role="complementary">`
* `.site-footer` -> `<footer>`

**Who benefits when we write "semantic" HTML?**

Search engines, anyone with a visual impairment who uses a screen reader. Reinforce the distinction between data and display. Data should be meaningful regardless of display.

## CSS Selectors

Students may need more or less review depending on how much they remember from their application process. If students are struggling with the basics, have them go through this [CSS Introduction course](https://www.codecademy.com/courses/web-beginner-en-TlhFi/resume?curriculum_id=50579fb998b470000202dc8b), starting with the CSS Syntax lesson. Mentors should help guide them through and identify where they're struggling.

Students should set the button background color using the `.btn-primary` selector, and adjust the white button using the `.btn-secondary` selector. If they use the `.btn` selector, they'll effect both buttons. When they do that, use it as a lesson in how Object-Oriented CSS works and how to choose the right selector.

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

## Git

This will be the most challenging for students. Let them fail and try again until they get it.

## Homework

Make sure they know that the Responsive Web Design Fundamentals course will take up the majority of their homework time, even though it's really preparation for the next class.

# HTML/CSS 2 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

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

Use this list to illustrate the range of device sizes we build for. Reinforce the separation between data and display.

## Media Queries

When completing the exercises, make sure they use a "mobile-first" technique. They shouldn't shrink the text on small screens, but enlarge it on bigger screens.

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

When completing the second exercise, make sure they're only modifying the buttons in the jumbotron. The button in the header shouldn't be effected.

## Content Layout: Flexbox

This lesson is really just intended to get them a bit familiar with flexbox, media queries and thinking about different viewports when doing their layouts. Make sure that students are not relying on Bootstrap's grid when completing these exercises. Make sure they're only using flexbox in `min-width` media queries, and that they're applying sensible class naming patterns and wrapping elements where necessary.

When they add a background and border to the "Learn More" articles, make sure they're adding padding so the text doesn't go right up to the edge. If they are using `px` units, nudge them towards `em` and explain that `em` is often preferred because it scales well when you need to change font size for different viewports.

## Homework

When checking their use of flexbox in their webpage, make sure they're using gutters where appropriate and that they're using the kinds of design patterns you would expect to see on a website (ie - items line up, text is proportionate, etc).

# HTML/CSS 3 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

## Open-source HTML/CSS Frameworks

Using the [Navbar color schemes](https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes), use the browser's dev tools to show how changing the navbar classes in the example website changes the look based on Bootstrap.

Using the [Card](https://getbootstrap.com/docs/4.0/components/card/#example) example, try to illustrate the way tags are nested inside of each other in a specific hierarchy. Emphasise the practice of paying close attention to documentation and picking up on minor details.

## Git Branching Excercise

A mentor should act as a `remote` repository and have a large sheet of paper. Students should have 4-5 sheets of paper.

1. The mentor should write their name at the top of the sheet, and write `master` below that.
2. Students should clone the main sheet on one of their sheets (`git clone`), with their name and `master` on the sheet.
3. Students should take a new sheet of paper. Copy their main sheet, and replace `master` with `feature-branch` (`git checkout -b feature-branch`).
4. Students should write their country of origin on their `feature-branch` sheet. Then show it to the mentor (`git commit`, `git push` and pull request).
5. The mentor should "merge" each pull request by copying the country of origin onto their sheet.
6. Take a moment to indicate how their local sheet have divered from the mentor's sheet.
7. Ask the students to take their `master` sheet and copy the mentor's sheet (`git checkout master` and `git pull upstream master`).
8. Have the students take their `feature-branch` sheet, ball it up, and throw it away (`git branch -D feature-branch`).

Spend some time with this [Git Cheatsheet](https://ndpsoftware.com/git-cheatsheet.html). Point to your sheets and their sheets and ask them to identify what's in the Upstream Repository, Local Repository, Index and Workspace. Then walk through the whole process from Workspace up:

1. A student makes a change on their sheet. This change is in the Workspace.
2. A student does a `git add`. This change is now in the Index.
3. A student does a `git commit`. This change is now in the Local Repository.
4. A student does a `git push`. This change is now in the Remote Repository.

## Personal Websites

The goal of this exercise is to identify students who are struggling to keep up. Try to identify where a student is struggling:

* Can they find their files quickly?
* Are they using the command line when appropriate?
* Do they understand how their HTML and CSS interact?
* Do they seem to understand syntax, or are they writing code in the wrong place?

If you find a student who is struggling with any of these basics, try to work through them together, then give them a short assignment where they need to do something on their own.

There will be several students who have the basics down. If they do, push them on some of the higher-level abstract concepts, like re-usable HTML/CSS components, and using CSS specificity cleverly (eg - basic and primary buttons). Beyond that, let them read up on HTML Forms (links in the resources), do some of the advanced suggestions in the syllabus, or challenge them to read and implement BEM naming syntax.
