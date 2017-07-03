# HTML/CSS 1 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

## HTML Syntax

This is an opportunity for any students who are struggling to get another pass at the basics. Even if it seems like some students get it quickly, try not to rush through this section.

When conducting the parent/child tags exercise, don't forget to point out that the first `<p>` tag is both a parent _and_ a child.

## Code Walkthrough

**Why don't we put everything in one file?**

Discuss:
- Keeping data separate from display
- Keeping code organised into manageable parts
- Syntax highlighting in code editors
- Linting Tools
- Working in large teams with narrow skill-sets

## Semantic HTML

HTML elements with the following classes should receive the following semantic tags/attributes:

- `.site-header` -> `<header>`
- `.navbar` -> `<nav>`
- `.primary-content` -> `role="main"`
- `.article` -> `<article>` (check in primary column and sidebar)
- `.sidebar-content` -> `<aside role="complementary">`
- `.site-footer` -> `<footer>`

**Who benefits when we write "semantic" HTML?**

Search engines, anyone with a visual impairment who uses a screen reader. Reinforce the distinction between data and display. Data should be meaningful regardless of display.

## CSS Selectors

Students may need more or less review depending on how much they remember from their application process. If students are struggling with the basics, have them go through this [CSS Introduction course](https://www.codecademy.com/courses/web-beginner-en-TlhFi/resume?curriculum_id=50579fb998b470000202dc8b), starting with the CSS Syntax lesson. Mentors should help guide them through and identify where they're struggling.

Students should set the button background color using the `.btn-primary` selector, and adjust the white button using the `.btn-secondary` selector. If they use the `.btn` selector, they'll effect both buttons. When they do that, use it as a lesson in how Object-Oriented CSS works and how to choose the right selector.

## CSS Inheritance

MDN just [says](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Inheritance), "Which properties are inherited by default and which aren't is largely down to common sense." That's kind of true and it's not easy to set out a clear rule.

Use any questions or discussion to reinforce the parent-child relationship. A child element will sit "within" a parent element, so text in a child element will appear on the background of a parent element. That kind of gets at why backgrounds don't inherit but text color does.

## Psuedo Classes

If the students use `.btn:hover` they'll effect the red and white buttons. Make sure they're using the `.btn-primary` and `.btn-secondary` selectors to prevent conflicts.

## The Cascade

See if the students can figure out the first exercise for themselves. But it's likely that some will need help. If there are enough mentors, do this one-on-one. Otherwise, bring it to the group and have one of the students who understands explain to the others.

In the second exercise, students should use the `.active` class that's assigned to that `.nav-item` element. Like this:

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

Make sure they know that the Responsive Web Design Fundamentals course will take up the majority of their homework time, even though it's really preparation for the next class.
