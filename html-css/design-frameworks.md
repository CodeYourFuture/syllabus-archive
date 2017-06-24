## Design frameworks

A design framework is a collection of re-usable code snippets which you can use to build a website. It is sometimes called a "design system", "style guide", or "pattern library", and will usually consist of three things:

1. **Brand guidelines** define the appropriate typography, colors and logos to use.
2. **Components** define re-usable code snippets for common requirements, like navigation menus.
3. **Helpers** define additional code tools to construct the site, like layout grids

Having a design framework is essential when working in large projects, as it allows developers to share code, without having to write the same thing several times. It also allows the core design elements to be changed easily. For example, if all the buttons in your website use the same CSS class, you can change their appearance simply by editing one rule.

The BBC's Global Experience Language is a design framework. It calls it's components [design patterns](http://www.bbc.co.uk/gel/guidelines/category/design-patterns) and in the [foundations](http://www.bbc.co.uk/gel/guidelines/category/foundations) section you'll find discussion of layouts and typography.


### Examples of CSS frameworks
Larger companies use design styleguides as a daily tool, allowing them to deliver code faster and improve communication between designers and developers (which is not always easy!!).

- [MailChimp >](http://ux.mailchimp.com/patterns)
- [Lonely planet >](http://rizzo.lonelyplanet.com/styleguide)
- [CodePen >](http://codepen.io/guide/)

### Open source frameworks

When you need to create a website very quickly, in order to test a concept, for example, there are design systems that you can use. In addition to CSS classes, they also bring Javascript functionality that works out of the box (by applying CSS classes to your elements). Explore the documentation of the frameworks below.

- [Bootstrap >](http://getbootstrap.com/)
- [Skin >](https://ebay.github.io/skin/)
- [Foundation](http://foundation.zurb.com/)

Bootstrap is CSS and JavaScript code that we [load in our HTML pages](https://v4-alpha.getbootstrap.com/getting-started/introduction/). Bootstrap's documentation describes how to write HTML code that fits the Bootstrap components, including a [grid layout](https://v4-alpha.getbootstrap.com/layout/grid/) as well as several [components](https://v4-alpha.getbootstrap.com/components/alerts/).

> **Exercise:** Explore the examples of CSS frameworks above. What do they have in common? What are the basic elements that all of the have?

> **Exercise:** Go back to `bikes-for-refugees` and open `index.html`. Use the web developer tools ("Inspect Element") to see which CSS classes are applied to each button (`Donate now`, `Donate a bike today` and `Volunteer`). How does the `Volunteer` button differ from the other buttons?

> Still using the developer tools, change the height of the three buttons with one line of code. Do the same for font-sizes.

> Bikes-for-refugees already includes `Bootstrap`. Check its [documentation >](http://getbootstrap.com/css/) and add some elements to your page that use bootstrap. For example, a [responsive image >](http://getbootstrap.com/css/#images).

> **Exercise:** Fork [this repository](https://github.com/NateWr/groupstrap) and follow the instructions in the [readme](https://github.com/NateWr/groupstrap) to create a new page and add a card component to it.

> **Exercise:** Perform a group exercise illustrating git branching and pull requests. Then create a branch, commit your new page, and issue a pull request. Once all the pull requests are merged, switch back to the `master` branch and update your copy.
