**Author**: [@PiotrBerebecki](https://github.com/PiotrBerebecki)  

**Maintainer**: [@PiotrBerebecki](https://github.com/PiotrBerebecki)

# Express Handlebars.js code-along workshop

This is a workshop designed as a code along to learn about html templating using Handlebars.js.
The main objectives of the workshop are to:
- be introduced to the MVC (Model - View - Controller) model
- learn how to serve dynamic files using Handlebars.js templates
- learn how to use Handlebars views, layouts and partials
- be introduced to Handlebars helpers
- there is an additional readme ([mentors-notes.md](./mentors-notes.md)) that the mentor can use to follow step by step instructions for the code-along workshop.

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
**Note for mentor**: Please use the additional readme ([mentors-notes.md](./mentors-notes.md)) and follow step by step instructions for the code-along workshop.

## Resources
- [Handlebars Docs](http://handlebarsjs.com/)
- [Write Templates Like A Node.js Pro: Handlebars Tutorial](https://webapplog.com/handlebars/)
