# MyReads Project

This is one of the project in Udacity's React Nanodegree.

## Getting Started

- Download or clone this repository
- Install all project dependencies with `npm install`
- Start the development server with `npm start`

## App Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md - A given collection of available search terms.
├── package.json - npm package manager file.
├── public - icons and other files
└── src
      ├── App.css - #Styles for the app.
      ├── App.js - #Root of the app.
      ├── App.test.js - #Used for testing.
      ├── BooksAPI.js - #A JavaScript API for the provided Udacity backend.
      ├── Bookshelves.js - #JS file for the component to render each shelf items.
      ├── ListBooks.js - #JS file for the component to render all components on the page.
      ├── SearchBooks.js - #JS file for the component to render Seacrh books page.
      ├── icons - #Contains icons to be used in the app
      ├── index.css - #Global styles.
      └── index.js - #Used for DOM rendering.
```

## Highlights:

-> Created a new JS file for each component; following DOT (Do One Thing).
-> Component state is passed down from parent to child component. setState() is used to modify the state of the component.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Brief overview of functions:

- GetAll books from API
  -> Used (#getall) in the component lifecycle - componentDidMount()
  -> Used SetState() to render books in the UI

- Able to move books between the shelves
  -> Used (#update) in the component to update shelf value of the book in the backend
  -> Re-rendered UI with updated state by using setState
  -> Component state is passed from Parent to Child component using Props

- Keep UI and URL in sync

  -> Used <BrowserRouter /> from react-router-dom to render the UI based on its URL instead of the state

- Able to Search and add books

  -> Implemented top-bottom approach by passing updated state of the Parent to Child component

- Book shelf or state should reflect on both Search and Main page

  -> Used ES6 concat function to sustain state of the existing books under Search page

- Added a Error 404: Page not found for invalid URL

  -> Used Switch from react-router-dom to switch between the URLs and render No page found error if does not match with any valid URLs
