# Mentor's notes

## Model-View-Controller (MVC) model

This is a common architectural design pattern to separate the data, their representation in the browser and the logic of your application. Think of your application as three separate parts talking to each other:
1. **Model**: data stored in a database
1. **View**: the aesthetics/representation of data in your application
1. **Controller**: the *brain* of your application

![A diagram of the MVC model](./images-readme/mvc-diagram.png)

Image Cred: Real Python (from [this medium post](https://medium.freecodecamp.com/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053#.3autr7o1d))

It is generally good practice to separate the view (presentation/ aesthetics) and the model (actual data), as this encourages clean code organisation. More information on the MVC model [here](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) and [here](https://medium.freecodecamp.com/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053#.3autr7o1d).

## What is a template engine and what is Handlebars.js?
- A template engine is basically software that is designed to combine reusable text (i.e. templates) with data in order to generate HTML.
- Handlebars.js is one of the most popular JavaScript templating engines that builds on top of the [Mustache](https://github.com/janl/mustache.js) templating engine and has therefore compatible syntax with Mustache.
- Handlebars is designed so that it minimises writing lots of JavaScript logic inside the templates. Unlike other template engines such as Jade, it requires full HTML code and can have embedded placeholders that can "hold" data. For example:
```hbs
<h1>{{title}}</h1>
<p>{{description}}</p>
```
- Handlebars can be used for both client-side and server-side rendering.

## Using Handlebars with Express
Express has extensive support for template rendering and can load and leverage Handlebars.js with the full use of:
- **layouts** (i.e. base templates)
- **partials** (smaller templates within templates) and
- **helpers** (functions used in templates to manipulate data) to ultimately render **views**.

## Dive into coding
1. Ask the cohort to clone this repo
1. Run `npm install` to install all the Node dependencies
1. Explain the existing folder structure

  Notice that in order to serve individual fruit pages we had to create a number of static `.html` pages.

  <img src="./images-readme/folder-structure-fruits-html.png" width="200px" height="auto"/>

  Notice also that we have two `.html` files to handle errors.

  Handlebars will allow us to avoid duplication by creating template views. In fact Handlebars will allow us to delete all those `.html` files.

  Let's code together!


## Steps

1. Install `express-handlebars` npm package and set up view engine in `src/app.js`.
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


## Resources
- [Handlebars Docs](http://handlebarsjs.com/)
- [Write Templates Like A Node.js Pro: Handlebars Tutorial](https://webapplog.com/handlebars/)
