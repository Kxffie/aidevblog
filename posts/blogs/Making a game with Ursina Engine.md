---
title: "Making a game with Ursina Engine"
desc: "Ursina Engine is a powerful and easy-to-use game engine written in Python. In this guide, we'll walk through the process of creating a simple game using Ursina Engine."
date: "12/18/2022"
readTime: "20-30 Min"
tags:
  - "tutorial"
  - "ursina"
  - "game"
  - "guide"
  - "python"
---

[Ursina Engine](https://discord.gg/hYfQjNgXbv) is a powerful and easy-to-use game engine written in Python. In this guide, we'll walk through the process of creating a simple game using Ursina Engine.

## Prerequisites

Before you can start making your game, you'll need to install Ursina Engine and its dependencies. Follow these steps to set up your development environment:

1. Install Python 3.7 or later. You can download the latest version of Python from the [Python](https://www.python.org/) website.

2. Install the required dependencies. Open a terminal and run the following command:

```py
pip install -r requirements.txt
```

3. Install Ursina Engine. Run the following command to install Ursina Engine:

```py
pip install ursina
```

## Creating a new project

Now that you have Ursina Engine installed, you can start creating your game. Follow these steps to create a new project:

1. Create a new folder for your project.

2. Inside the project folder, create a new Python file called main.py. This will be the entry point for your game.

3. In the `main.py` file, import the `Ursina` module and create a new `Entity` object. This will be the root object for your game scene.

```py
from ursina import Ursina

app = Ursina()
root = Entity()
```

## Adding game objects

To make your game more interesting, you'll need to add some game objects to the scene. Ursina Engine has a number of built-in components that you can use to create game objects, such as `Model` and `Text`.

Here's an example of how you can create a simple game object with a `Model` and a `Text` component:

```py
cube = Entity(model='cube', scale=.5, parent=root)
text = Text(parent=cube, text='Hello, world!')
```

You can also create your own custom game objects by creating a new class that inherits from Entity and adding your own components and behavior.

## Adding user input

To make your game interactive, you'll need to add support for user input. Ursina Engine provides a number of ways to handle input, such as key and mouse events.

Here's an example of how you can use key events to move an object:

```py
def update(dt):
    if input.key_down('w'):
        cube.y += dt
    if input.key_down('s'):
        cube.y -= dt

app.run(update=update)
```

You can find more information on handling user input in the [Ursina Engine documentation](https://www.ursinaengine.org/documentation.html).

## Adding audio and graphics

To make your game more immersive, you'll likely want to add audio and graphics to your game. Ursina Engine provides a number of tools for adding audio and graphics to your game, such as the `Audio` and `Sprite` components.

Here's an example of how you can add an audio file to your game and play it when a button is pressed:

```py
button = Entity(model='cube', scale=.5, parent=root)
button_audio = Audio(parent=button, file='button.mp3')

def on_mouse_down(button):
    if button == 'left':
        button_audio.play()

button.on_mouse_down = on_mouse_down
```

You can also add graphics to your game using the `Sprite` component. For example, you can add a sprite to an object like this:

```py
object = Entity(parent=root)
sprite = Sprite(parent=object, texture='image.png')
```

You can find more information on adding audio and graphics to your game in the Ursina Engine documentation.

## Finishing touches

Once you have the basic gameplay and graphics of your game working, you can start adding the finishing touches. This may include things like menus, UI elements, and gameplay tweaks.

To create menus and UI elements, you can use the `Text` and `Button` components. For example, you can create a simple start menu like this:

```py
start_menu = Entity(parent=root)
start_button = Button(parent=start_menu, text='Start game')

def start_game():
    start_menu.enabled = False

start_button.on_click = start_game
```

To tweak gameplay and balance, you can use variables and functions to adjust the behavior of your game objects. For example, you can create a function to increase the speed of an object over time:

```py
def increase_speed(object):
    object.speed += 0.1

object.speed = 0

def update(dt):
    increase_speed(object)

app.run(update=update)
```

You can also use variables and functions to add more complex gameplay mechanics, such as health and damage. For example, you can create a function to reduce the health of an object when it is hit:

```py
def take_damage(object, amount):
    object.health -= amount

object.health = 100

def on_collision(other):
    take_damage(object, 10)

object.on_collision = on_collision
```

By using variables and functions to control the behavior of your game objects, you can create a wide range of gameplay mechanics and fine-tune the balance of your game.

## Publishing your game

Once you have completed your game, you can publish it for others to play. Ursina Engine provides a number of tools for packaging and distributing your game, such as the `build` command.

To build your game for distribution, run the following command from the terminal:

```py
python -m ursina.build
```

This will create a standalone executable of your game that you can share with others. You can find more information on building and distributing your game in the Ursina Engine documentation.

## Conclusion

By following these steps, you should now have a basic understanding of how to create a game using Ursina Engine. With some creativity and experimentation, you can use Ursina Engine to create a wide range of games and interactive experiences. Good luck, and have fun making your game!