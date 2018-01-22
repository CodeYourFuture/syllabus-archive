# Homework

1. If you haven't already, fork the
   [css-skin](https://github.com/Code-Your-Future/css-skin) repository. If you
   have already forked it, you can use your fork for this exercise. . Open
   `index.html` and look at the images of how your buttons should look like, and
   then notice the unstyled buttons above. . The unstyled buttons have classes.
   Use them to write your css in `skin.css`, so the buttons receive a style. Go
   for maximum reusability. Try not to repeat code! . Add more HTML examples,
   following the same naming pattern as the buttons - for example, a list (`ul`)
   with items (`li`). Add more than one sytle of element (for example a `ul`
   that displays the elements vertically and other that displays them
   horizontally). . Write the CSS for those elements. . As usual, make a pull
   request and send them to one of the mentors for review!
1. Read about
   [writing loops in SCSS >](http://clubmate.fi/for-while-and-each-loops-in-sass/)
   (Sass). Fork this CodePen into your account:
   [claudiamm/pen/xdjadV](https://codepen.io/claudiamm/pen/xdjadV). You have three paragraphs, each with
   a different `paragraph-size` class. First, write the common styles (`color`,
   etc) for all paragraphs. Use a SASS `for` loop and nesting in order to create
   the `paragraph-size-1/2/3` styles. The final result should look like [this](assets/loop-paragraph-example.jpg):

Note: the aim of this exercise is to do a for loop - so please **do NOT** do
something like below, as it will not bring you anything new:

```css
.paragraph-size-1 {
  ...;
}
.paragraph-size-2 {
  ...;
}
.paragraph-size-3 {
  ...;
}
```

**Tip:** you can multiply! `$i * 10px;`

1. (Optional) Use SASS in your `css-skin` project instead of normal CSS.
   Suggestion: alongside `skin.css`, create a file called `skin.scss`. You will
   use SASS to transform (compile) your SCSS file into a CSS file caled
   `skin.min.scss`.
   [How to compile SASS with VS Code >](/html-css/compile-scss-instructions.html)
1. (Optional)Make your `css-skin` project available under
   `yourname.github.io/css-skin`, as so you can access `skin.css` via
   `yourname.github.io/css-skin/skin.css`.
   * Go back to a website that you have made for CodeYourFuture (either for
     homework or the one that you built when applying).
   * Import your `skin.css` file using `<link rel="stylesheet"
     href="http://yourname.github.io/css-skin/skin.css" />`.
   * You can use your buttons and lists in this website too. Give it a try by
     adding the following code to your page `<button
     class="btn">Button</button>`.
   * You've got your own CSS framework now! Use it in your future projects for
     CodeYourFuture, and update it with new elements when needed. This will help
     you to build your Github portfolio.
