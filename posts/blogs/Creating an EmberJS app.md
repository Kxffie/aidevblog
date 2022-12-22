---
title: "Creating an EmberJS App"
desc: "EmberJS is an open source JavaScript framework used to create ambitious web applications. It is built on the principles of productivity and stability, making it a great choice for web developers. This tutorial will provide an introduction to EmberJS and detail how to make an EmberJS app, as well as provide an example EmberJS app."
date: "12/19/2022"
readTime: "5-10 Min"
tags:
  - "tutorial"
  - "emberjs"
  - "web"
  - "framework"
  - "javascript"
---

EmberJS is a client-side JavaScript framework designed to help developers create ambitious web applications. It is based on the Model-View-ViewModel (MVVM) architectural pattern, which helps developers create powerful, single-page applications. It is built on the principle of productivity and stability, making it an ideal choice for web developers. 

EmberJS has many features, including: 

- A declarative, two-way data binding system that makes it easy to keep data in sync between the application and the view. 
- An integrated router that allows developers to create complex user experiences with minimal code. 
- Components for encapsulating HTML, CSS and JavaScript into re-usable elements. 
- A powerful CLI tool for creating, managing and deploying applications. 

## How to Make an EmberJS App

Making an EmberJS app is relatively easy. The first step is to install the Ember CLI, which is a command-line interface for creating, managing, and deploying Ember applications. To install the Ember CLI, open a terminal window and run the following command:

```
npm install -g ember-cli
```

Once the Ember CLI has been installed, you can create a new Ember application by running the following command:

```
ember new my-app
```

This will create a new Ember application in the directory `my-app`. To start the development server, run the following command:

```
cd my-app
ember serve
```

This will start a development server at `http://localhost:4200`. You can now access the application in your browser.

## Example EmberJS App

To demonstrate how an EmberJS application works, let's create a simple application that displays a list of books. We'll start by creating a new route for the books list. To do this, run the following command:

```
ember generate route books
```

This will create a new route at `/books`. Now, we need to create a model for the books. To do this, run the following command:

```
ember generate model book
```

This will create a model for the books with the fields `title`, `author` and `description`. To create the books list, open the file `app/templates/books.hbs` and add the following code:

```
<h1>Books</h1>

<ul>
  {{#each books as |book|}}
    <li>
      <h2>{{book.title}}</h2>
      <p>{{book.author}}</p>
      <p>{{book.description}}</p>
    </li>
  {{/each}}
</ul>
```

This will display a list of books. Finally, open the file `app/routes/books.js` and add the following code:

```
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model() {
    return this.store.findAll('book');
  }
});
```

This will fetch the list of books from the store.

## Conclusion

EmberJS is a powerful client-side JavaScript framework that makes it easy to create ambitious web applications. This tutorial provided an introduction to EmberJS and detailed how to make an EmberJS app, as well as provided an example EmberJS app. With EmberJS, you can create powerful, single-page applications with minimal code.