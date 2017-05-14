# HTML/CSS 3 - Mentor's Outline

This outline provides tips to help mentors guide students to the best answers or outcomes for the lesson topics and exercises.

## Design Frameworks

Spend some time exploring the BBC framework. It's [Promos](http://www.bbc.co.uk/gel/guidelines/promos) pattern shows a breakdown of content, and can be seen in use on their homepage. The [Carousel](http://www.bbc.co.uk/gel/guidelines/carousel) pattern shows how you can nest components (Promos in Carousels).

## Open-source HTML/CSS Frameworks

Using the [Navbar color schemes](https://v4-alpha.getbootstrap.com/components/navbar/#color-schemes), use the browser's dev tools to show how changing the navbar classes in the example website changes the look based on Bootstrap.

Using the [Card](https://v4-alpha.getbootstrap.com/components/card/#example) example, try to illustrate the way tags are nested inside of each other in a specific hierarchy. Emphasise the practice of paying close attention to documentation and picking up on minor details.

### Git Branching Excercise

A mentor should act as a `remote` repository and have a large sheet of paper. All students should have 4-5 sheets of paper.

1. The teacher should write the word `master` at the top of the sheet, and write their name below that.
2. All students should clone the main sheet on one of their sheets (`git clone`).
3. All students should add their name to their `master` sheet. Then show it to the mentor (`git commit` and pull request).
4. Take a moment to indicate how their sheets have diverged from the main sheet.
5. All students should copy the mentor's `master` sheet (`git pull`).
6. Ask two students to add a line to their sheet with any word they want. Then show it to the mentor (`git commit` and pull request). The mentor should refuse to merge one pull request.
7. All students should copy the mentor's `master` sheet (`git pull`).
8. The student who's pull request wasn't merged is now out-of-sync. Take a moment to describe the problem and introduce branching.
9. Ask the students to take another sheet, and copy the `master` sheet, replacing `master` with `feature-branch` (`git checkout -b feature-branch`).
10. Replay 3-5, this time rejecting some of the pull requests. Then have them copy the additions to the mentor's `master` sheet (`git pull`).
11. Have them destroy their `feature-branch` sheets (`git branch -D feature-branch`).
12. Ask the students to take a new sheet of paper, and copy the `master` sheet, replacing `master` with `update-branch` (`git checkout -b feature-branch`).
13. Ask the students to add three names to their `update-branch` sheet.
14. Ask the students to take a new sheet of paper, and copy only two of the three names they added to their `update-branch` sheet (`git add name1 name2`).
15. Take a moment to discuss the difference between the workspace and index. Then ask them to pass their commit sheet in.

## HTML Forms

After they have added the Bootstrap form components, reinforce the way that they have created __abstract__ patterns with `.form-group` and `.form-control`.

## Naming Patterns (OOCSS/BEM)

Walk throuh the [alert](https://v4-alpha.getbootstrap.com/components/alerts/) component example. Use the browser's dev tools to show how changing the class names changes the color.

When examining the card component as a group, point out how the `.btn` component is nested inside of the `.card` component. Reinforce the re-usability of objects.
