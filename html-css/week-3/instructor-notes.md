# Instructor Notes

## Rough Schedule

| Time | Activity |
|------|----------|
| 10:45 - 11:30 | Preparation of space |
| 11:30 - 12:00 | Energisers/Stand Up |
| 12:00 - 12:30 | Homework review |
| 12:30 - 14:00 | 12-Column Grid |
| 14:00 - 14:45 | Lunch |
| 14:45 - 16:45 | Re-usable Grid Frameworks |
| 16:45 - 17:00 | Homework Discussion |

## Homework review

How did the homework go?

- Mobile first
- Media queries
- Layouts

Some common problems:

- Images get distorted/don’t scale. This is because students tend to add a width and a height to them, rather than saying width: 100% only. A demo of the problem in CodePen can be useful
- Fixed widths breaking layouts. Students often set fixed widths, such as `width: 900px;` for breakpoints below that size. This breaks the layout. Encourage them to use relative measurements where possible

## 12-Column Grid System

### Exercise 2

Show the students these websites in a desktop viewport, overlaid with a 12-column grid system:

- https://my.charitywater.org/projects
- https://www.lonelyplanet.com/

<!-- TODO: how to overlay website with a grid? -->

Then ask them to estimate how many columns each section is.

### Exercise 3

The same as exercise 2, but using a mobile viewport.

Point out how the grid is still 12 columns, but is squashed down into the mobile viewport.

### Implementing a 12-column grid

Highlight the obvious maths here - how we divide by 4 to get 3 columns.

## Homework

<!-- TODO: Should the points below go on the homework repo README? -->

- You'll have to find your own images to complete the design. This site is pretty good for finding nice pictures: https://unsplash.com/
- You'll also need to choose your own fonts - but try and select ones that look close to the design :) You'll probably need one font for headings, and one font for body copy. There are lots of fonts to choose from here: https://fonts.google.com/
