# Level 40 - Add a Show Selector

For this level you will have to have learned to use fetch() to `GET` JSON content from an API.

1. Complete all requirements from level 30
1. Add a `select` input which allows you to choose which show you are interested in
   1. The select should list shows in alphabetical order, case-insensitive
   1. When a show is selected, your app should display the episodes for that show as per the earlier levels
   1. You can get the list of shows by loading `shows.js` in your `index.html` and using the provided function: `getAllShows()`
   1. Ensure that your search and episode selector controls still work correctly when you switch shows.

### Example screenshots of Show Selector

Note: Provided your project meets the above requirements, it can **look** however you want.

Here is one example layout.

![Example screenshot with Show Selector closed](./example-screenshots/example-show-selector-1.jpg)

![Example screenshot with Show Selector open](./example-screenshots/example-show-selector-2.jpg)

### Play nice - a note on using `fetch` during development

Be _careful_ when developing with fetch. By default, every time you make a small change to your app it will be restarted by live server - if you are fetching JSON on page load, the JSON will be downloaded again and again. These frequent HTTP requests may lead to the API permanently banning your IP address from further requests, or "throttling" it for some time. Worse, if they don't, they may cause performance issues for the API service we are using.

[<< level 30](./level-30.md) - [top](./readme.md) - [level 99 >>](./level-99.md)
