# HTML/CSS 3
- Bootstrap 4 and HTML/CSS frameworks
- OOCSS, BEM and writing reusable components

## Proposed outline:
To take 50-60% of the class.

Frameworks:
1. Introduce what a HTML/CSS component framework (design system, style guide, etc) is and why we use them (re-usable code, design consistency, reliability).
2. Show examples of corporate brand style guides/design systems.
3. Explain how Bootstrap/Foundation are starter kits for this, and point out the HTML code we've added to our sample site to use Bootstrap 4.
4. Illustrate a component by showing how parts of the sample website correspond to Bootstrap components: buttons, jumbotron, navbar.
5. Exercise: Create a new page in the sample website we've been working with. On this page we'll let visitors send us an email. Copy the HTML code from `index.html`, create a new file called `contact.html`, and paste the code in. Then remove everything from the `contact.html` page except the HTML header and footer content. Add a title to the page using the `<h1>` HTML tag.
6. Create a form on the page without using Bootstrap 4 markup. Then add the Bootstrap 4 classes to show how Bootstrap ties its components to specific markup/classes.
7. Exercise: Look at the example form under [Form Controls](https://v4-alpha.getbootstrap.com/components/forms/#form-controls) in the documentation. Using the Bootstrap form components, add a contact form which asks the visitor for their name, email address and the message they'd like to send.

Naming patterns:
1. Break down the form groups and talk about how Bootstrap has chosen to organise it's class names in an _abstract_ fashion, eg: `form-control` applied to `<input>`, `<select>` and `<textarea>` elements. `form-group` provides consistent spacing for each field. And the `.btn` component appears again. So we can re-use one component inside of another.
2. Introduce the concept of Object-Oriented CSS and illustrate how Bootstrap defines _objects_ (sometimes called components) based on class names, and then adds additional classes to make adjustments (eg: `.btn` and `.btn-success`).
3. Relate OOCSS to the original goals of frameworks: re-usable code, design consistency, reliability.
4. Excercise: Use a stripped-down cmoponent (eg: a card design with a thumb, title, author). Ask them to implement a OOCSS component which displays three cards in a consistent style. One card should be highlighted using an OOCSS naming pattern (eg - `card-highlight`).
5. Introduce BEM as a variant of OOCSS.
6. Excercise: Rename your card class assignments using BEM.

Homework: Implement BEM OOCSS on the article grid. Add a contact page to the websites you've been building as part of your homework, and try to make the form use re-usable components.
