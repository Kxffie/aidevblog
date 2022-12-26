---
title: "Creating an Angular app"
desc: "This article provides a step-by-step guide on creating an Angular app, a front-end web framework for building single-page applications. It covers the benefits of Angular, installation instructions, and an example of building a TODO app using Angular components."
date: "12/18/2022"
readTime: "3-5 Min"
tags:
  - "tutorial"
  - "angular"
  - "web"
  - "framework"
  - "javascript"
---

Angular is a front-end web framework for building single-page applications (SPAs) with HTML, CSS, and JavaScript. It is a complete rewrite of AngularJS, a popular JavaScript framework developed by Google. Angular uses a component-based architecture, where the application is divided into individual reusable components that can be combined to build complex user interfaces.

## Why use Angular?

There are several benefits to using Angular for building web applications:

- It is a full-featured framework, with everything you need to build a modern web app.
- It uses TypeScript, a strict superset of JavaScript, which adds type checking and other features to the language.
- It follows the Model-View-Controller (MVC) design pattern, which helps to separate the presentation layer from  the business logic.
- It has a powerful dependency injection system, which makes it easy to manage dependencies and test the application.

## Getting started with Angular

To get started with Angular, you will need to have Node.js and the Angular CLI (Command Line Interface) installed on your machine. You can install them by following the instructions on the official Angular website.

Once you have the required tools installed, you can create a new Angular project by running the following command:

```bash
ng new my-project
```

This will create a new directory called `my-project` with a basic Angular application set up. You can then navigate to the project directory and start the development server by running the following commands:

```bash
cd my-project
ng serve
```

The development server will start up and the application will be available at `http://localhost:4200`. You can now start building your Angular app!

## Building an Angular app

Angular apps are built using components, which are the building blocks of the application. Each component is a self-contained unit that handles a specific task or displays a specific piece of UI.

Here is an example of a simple component in Angular:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello, World!</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
}
```

This component is responsible for displaying a simple "Hello, World!" message. The `@Component` decorator is used to define the metadata for the component, including the template and styles that will be used to render the component.

To use this component in your app, you can include it in the root component using the `<app-root>` tag:

```html
<body>
  <app-root></app-root>
</body>
```

## Example project: TODO app

Now that you have a basic understanding of how to build an Angular app, let's try building a simple TODO app.

First, we will create a new component for the TODO list. This component will display a list of TODO items and allow the user to add new items to the list.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo }}</li>
    </ul>
    <form (submit)="addTodo()">
      <input type="text" [(ngModel)]="newTodo" name="newTodo" />
      <button type="submit">Add</button>
    </form>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos = ['Item 1', 'Item 2', 'Item 3'];
  newTodo = '';

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
  }
}

```

This component uses the `*ngFor` directive to loop through the `todos` array and display each item as a list item. It also has a form with an input field and a button that allows the user to add new items to the list. When the form is submitted, the `addTodo()` method is called and the new item is added to the array.

To use this component in your app, you can include it in the root component using the `<app-todo-list>` tag:

```html
<body>
  <app-todo-list></app-todo-list>
</body>
```

With this, you have created a simple TODO app using Angular! You can continue building on this example by adding more features, such as the ability to mark items as complete or delete them from the list.

## Conclusion

In conclusion, Angular is a powerful front-end web framework that allows you to build single-page applications with HTML, CSS, and JavaScript. It has a component-based architecture, which makes it easy to create reusable components that can be combined to build complex user interfaces. By following the steps outlined in this article, you can get started with Angular and begin building your own web applications. With a bit of practice, you will be able to create sophisticated and interactive web apps using Angular. So why wait? Start building your own Angular website today!