# Level 50 - Add a shows list and search

1. Complete all requirements from level 40
1. When your app starts, present a listing of all shows ("shows listing")
   1. For each show, you must display at least name, image, summary, genres, status, rating, and runtime.
1. When a show title is clicked, your app should:
   1. fetch and present episodes from that show (enabling episode search and selection as before)
   1. hide the "shows listing" view.   
1. Add a navigation link to enable the user to return to the "shows listing"
   1. When this is clicked, the episodes listing should be hidden
1. Provide a free-text show search through show names, genres, and summary texts.
1. Ensure that your episode search and episode selector controls still work correctly when you switch from shows listing to episodes listing and back.

To get the list of shows, you should load `shows.js` in your `index.html` and use the provided function: `getAllShows()`

### Example screenshots of Shows Listing

Note: Provided your project meets the above requirements, it can **look** however you want.

Here is one example layout.

![Example screenshot with Shows Listing and search](./example-screenshots/example-shows-list-with-search.jpg)

[<< level 40](./level-40.md) - [top](./readme.md) - [level 99 >>](./level-99.md)
