---
title: "Creating a NextJS app"
desc: "This article is a tutorial that guides readers through the process of creating a basic NextJS app from scratch. It covers the prerequisites for setting up a NextJS app, as well as the steps for creating a new app and starting the development server. The article also provides tips for working with NextJS and creating additional pages in the app. The tutorial is suitable for developers who are new to NextJS or web development in general."
date: "12/16/2022"
readTime: "3-4 Min"
tags:
  - "tutorial"
  - "framework"
  - "react"
  - "nextjs"
  - "javascript"
---

NextJS is a popular JavaScript framework for building server-rendered React apps. In this tutorial, we'll walk through the steps of creating a basic NextJS app from scratch.

## Prerequisites

- Make sure you have Node.js and npm (the Node.js package manager) installed on your computer. You can check if you have them installed by running the following commands in your terminal:

```js
node -v
npm -v
```

If you don't have Node.js and npm installed, you can download and install them from the official website (https://nodejs.org/).

## Create a new NextJS app

1. Create a new directory for your NextJS app and navigate to it in your terminal.
2. Initialize a new npm project by running the following command:

```js
npm init -y
```

This will create a `package.json` file in your project directory, which contains information about your project, such as the dependencies it uses and scripts you can run.

3. Install NextJS as a dependency of your project by running the following command:

```
npm install next react react-dom
```

This installs the NextJS, React, and React DOM libraries, which are required for building a NextJS app.

4. Create a new file named `pages/index.js` in your project directory, and add the following code to it:

```js
import React from 'react';

function Home() {
  return <h1>Welcome to my NextJS app!</h1>;
}

export default Home;
```

This code defines a simple React component that displays a heading.

## Start the development server

1. Start the development server for your NextJS app by running the following command:

```js
npm run dev
```

This will start the development server and open your app in a new browser window.

2. You can now edit the pages/index.js file and see the changes reflected in the browser as you save.

## Next Steps

You now have a basic NextJS app up and running. You can create additional pages by adding new files to the pages directory, and you can use the NextJS API to customize the behavior of your app.

Here are a few more tips for working with NextJS:

- To create additional pages in your NextJS app, simply create new files in the pages directory. The name of the file will determine the URL of the page. For example, if you create a file named pages/about.js, it will be accessible at /about.
- You can use the Link component from the next/link module to create links between pages in your NextJS app. This will enable client-side navigation, which means that the browser will not have to reload the page when the user clicks on a link.

```js
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Welcome to my NextJS app!</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
```