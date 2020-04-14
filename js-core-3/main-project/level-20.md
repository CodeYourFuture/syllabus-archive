# Level 20 - Add Search

1. Complete all requirements from Level 10
1. Add a "live" search input:
   1. Only episodes whose summary **OR** title contains the search term should be displayed
   1. The search should be case-**in**sensitive
   1. The display should update **immediately** after each keystroke changes the input.
   1. Display how many episodes match the current search
   1. If the search box is cleared, **all** episodes should be shown.

If you have been fetching the episode data from the API, be careful not to cause many frequent requests with this search feature. The search should look through an _in-memory_ copy of the episode list. **Do not** fetch the data again each time something is typed!

### Example screenshot of search

Note: Provided your project meets the above requirements, it can **look** however you want.

Here is one example layout.

![Example Search screenshot](./example-screenshots/example-search.jpg)

[<< level 10](./level-10.md) - [top](./readme.md) - [level 30 >>](./level-30.md)
