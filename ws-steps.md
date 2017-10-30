
## Steps

### Install handlebars

 In the tasks directory run the follwing code:
`npm i --save express-handlebars`

### Add handlebars to your project

1. Require express-handlebars in app.js
`const exphbs = require('express-handlebars')`

2. We now need to set the views folder ready for the views engine and also set the views engine for our express app:
```js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
```


3. We use app.engine tells express to use the view engine to render hbs files.
```js
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  })
  ```
  4. We now need to make the relevant folders. Create a views directory within src. This is what you set in the app.js file as the directory to hold the .hbs files.
  5. In src/views creates a layouts directory.
  6. In src/views creates a partials directory.


  ### Loading up main page


1. Create a home.hbs in the views directory
1. Navigate to public/index.html. Copy all the contents to home.hbs.
1. Delete public/index.html.
1. In src/views/layouts create a main.hbs file and insert the following code:
``` {{{body}}}```
Body will be the hbs file we are rendering. So in this case it will be home.hbs.
6. To start the server in development mode using:
`npm run start:watch`

Load up the server and expect to see a 404 error. We are now going to serve up the home.hbs file.

7. Create a home.js in src/controllers

8. In this file add the following code:
```js
exports.get = (req, res) => {
  res.render('home');
};
```
9. In src/controllers/index.js require in home.js.
10. Add the following line after files are required in:
``` js
router.get('/', home.get);
```

## Split up the contents to partials
1. In src/views/partials create the following files:
* htmlHead.hbs
* header.hbs
* footer.hbs
2. From home.hbs cut:
* head to htmlHead.hbs
* header to header.hbs
* footer to footer.hbs
3. The next stage is to continue creating the main.hbs layout and inserting in the partials we have created. Copy across everything inside home.hbs except for what is in the ```<main>``` tags. (The <main> tags should moved to main.js)
4. Place {{{body}}} in <main> tags.
5. Now you can insert the partials you have created into the main.hbs file. Use the [handlebars documentation](http://handlebarsjs.com/) to show you how

## Creating fruits page
1. In src/views create a fruits.hbs file
2. In public/fruits.html and copy its contents to the fruits.hbs file
3. Delete fruit.html
3. Delete everything you have in your partials
4. See all the many list items? We will create these programtically using handlebars.
5. Delete all but one of the list items.
6. Open up src/model/index.js and take a look. We will use this list for creating out fruits page.
7. Now go back to src/controllers/fruits.js and require in the model of fruits. Res.render also takes an object as an argument which can be used in the hbs file to insert conent.
8. Pass it as an object to the render function





## Create main page to be rendered


1. Install `express-handlebars` npm package and set up view engine in `src/app.js` by specifying the `views` directory; handlebars view engine, and `express-handlebars` configuration object.
1. Create `src/views/layouts/main.hbs` and set up the main html structure for the app.
1. Create `src/views/home.hbs` to show home page title, introduction and image.
1. Create `src/controllers/home.js` and use it in `src/controllers/index.js` to handle requests to '/' (home) route.
1. Create `src/views/partials/htmlHead.hbs` and add the structure of the html `head` section.
1. Create `src/views/partials/header.hbs` and add the structure of the html `header` navigation section.
1. Create `src/views/partials/footer.hbs` and add the html `footer` section.
1. Create `src/views/fruits.hbs` to render the fruit list. Use the `each` helper in `src/views/fruits.hbs` to render the list of fruits.
1. Use `render` function in `src/controllers/fruits.js`.
1. Send `activePage` object in `src/controllers/home.js` and `src/controllers/fruits.js` and add `if` helpers to `src/views/partials/header.hbs`.
1. Create `views/helpers/capitalize.js` and `views/helpers/index.js`, make sure `helpers` are added to the config in `src/app.js`. Use `capitalize` in `src/views/fruits.hbs` to capitalize fruit name (watermelon -> Watermelon)
1. Use `render` function in `src/controllers/fruit.js` to render individual fruit. Extract name from the params.
1. Create `src/views/fruit.hbs` to show individual fruit name and image.
1. Create `views/helpers/uppercase.js` and export it in `views/helpers/index.js`. Use `uppercase` in `src/views/fruit.hbs` to convert fruit name to uppercase letters (watermelon -> WATERMELON)
1. Update `src/controllers/error.js`. First handle `client` error.
  ```js
  res.status(404).render('error', {
    statusCode: 404,
    errorMessage: 'Page not found',
  });
  ```
  Create `src/views/error.hbs` to show error message and status code.

  Notice how the error message is displayed within the `main` layout (e.g. `header` and `footer` are visible). To avoid this pass `layout` to the `render` function in `src/controllers/error.js` and create new layout: `src/views/layouts/error`.

  Use the `render` in the `server` controller as well. You can demo it by adding for example `throw new Error();` in the `client` controller.

  notes

  Add active page part in home.hbs
