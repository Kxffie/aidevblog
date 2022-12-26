---
title: "Creating a VueJS app"
desc: "VueJS is an open source JavaScript framework used to create user interfaces and single-page applications. It is designed with a focus on simplicity, performance, and scalability, making it a great choice for web developers. This tutorial will provide an introduction to VueJS and detail how to make a VueJS app, as well as provide an example VueJS app."
date: "12/19/2022"
readTime: "3-5 Min"
tags:
  - "tutorial"
  - "vuejs"
  - "web"
  - "framework"
  - "javascript"
---

VueJS is a client-side JavaScript framework designed to help developers create user interfaces and single-page applications. It is based on the Model-View-ViewModel (MVVM) architectural pattern, which helps developers create powerful, modern web applications. It is built on the principle of simplicity, performance, and scalability, making it an ideal choice for web developers. 

VueJS has many features, including: 

- A declarative, two-way data binding system that makes it easy to keep data in sync between the application and the view. 
- An integrated router that allows developers to create complex user experiences with minimal code. 
- Components for encapsulating HTML, CSS and JavaScript into re-usable elements. 
- A powerful CLI tool for creating, managing and deploying applications. 

## How to Make a VueJS App

Making a VueJS app is relatively straightforward. The first step is to install the Vue CLI, which is a command-line interface for creating, managing, and deploying Vue applications. To install the Vue CLI, open a terminal window and run the following command:

```
npm install -g @vue/cli
```

Once the Vue CLI has been installed, you can create a new Vue application by running the following command:

```
vue create my-app
```

This will create a new Vue application in the directory `my-app`. To start the development server, run the following command:

```
cd my-app
npm run serve
```

This will start a development server at `http://localhost:8080`. You can now access the application in your browser.

## Example VueJS App

To demonstrate how a VueJS application works, let's create a simple application that displays a list of movies. We'll start by creating a new route for the movies list. To do this, open the file `src/router.js` and add the following code:

```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movies',
      name: 'movies',
      component: () => import(/* webpackChunkName: "movies" */ './views/Movies.vue')
    }
  ]
})
```

This will create a new route at `/movies`. Now, we need to create a model for the movies. To do this, open the file `src/store.js` and add the following code:

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
      },
      {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
      }
    ]
  }
})
```

This will create a store with the movies data. Finally, open the file `src/views/Movies.vue` and add the following code:

```
<template>
  <div>
    <h1>Movies</h1>

    <ul>
      <li v-for="movie in movies" :key="movie.title">
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.director }}</p>
        <p>{{ movie.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['movies'])
  }
}
</script>
```

This will display a list of movies.

## Conclusion

VueJS is a powerful client-side JavaScript framework that makes it easy to create user interfaces and single-page applications. This tutorial provided an introduction to VueJS and detailed how to make a VueJS app, as well as provided an example VueJS app. With VueJS, you can create powerful, modern web applications with minimal code.