---
title: "Creating a Flask App"
desc: "This article provides a step-by-step guide on how to create a simple Flask application using Python. It explains how to install Flask, create a new Python file, import Flask, create a Flask instance, define a route, and run the app. It also provides instructions on how to visit the app in a web browser to view the message or other output. This article is intended to help beginners understand the basic process of creating a Flask app and can be used as a reference for building more complex applications."
date: "12/16/2022"
readTime: "5-10 Min"
tags:
  - "tutorial"
  - "framework"
  - "flask"
  - "python"
  - "web development"
---

Flask is a lightweight Python web framework that provides useful tools and features for building web applications. It allows developers to create routes and views for handling HTTP requests and responses, and includes a built-in development server for testing and debugging applications. Flask is known for its simplicity and flexibility, making it a popular choice for developing web applications in Python.

## 1. Install Flask

Before you can use Flask, you will need to install it. Open up a terminal and enter the following command to install Flask:

```py
pip install flask
```

## 2. Create a new Python file:
Next, create a new Python file for your Flask app. You can name the file whatever you like, but make sure it has a .py extension.

## 3. Import Flask

At the top of your Python file, you will need to import Flask. Add the following line to your file:

```py
from flask import Flask
```

## 4. Create a Flask instance

Next, you will need to create an instance of the Flask class. Add the following code to your Python file:

```py
app = Flask(__name__)
```
The __name__ argument specifies the name of the current module, which is needed so that Flask knows where to find other files such as templates.

## 5. Define a route

In Flask, a "route" is a URL path that you can visit in your web browser. You can define a route by decorating a function with the @app.route decorator. For example, to define a route for the home page of your site, you might use the following code:

```py
@app.route('/')
def home():
    return 'Hello, World!'
```

## 6. Run the app

To start the Flask app, you will need to call the run() method of the app object. Add the following code to the end of your Python file:

```py
if __name__ == '__main__':
    app.run()
```

## 7. Visit the app in your web browser

To view your Flask app in your web browser, open a new tab and enter the following address:

```py
http://localhost:5000/
```

You should see the message "Hello, World!" displayed in your browser!

By following these steps, you can quickly and easily create a basic Flask app that can display a message or perform other functions. You can then customize and expand your app by adding additional routes and functionality as needed.

I hope this article has been helpful in explaining the process of creating a Flask app using Python. If you have any questions or need further assistance, please don't hesitate to ask.