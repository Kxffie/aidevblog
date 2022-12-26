---
title: "A Beginner's Guide to Panda3D"
desc: "Panda3D is an open-source 3D game engine developed by Disney and maintained by Carnegie Mellon University's Entertainment Technology Center. It is designed to be easy to use and powerful enough to create high-quality 3D games, simulations, and visualizations. This tutorial will provide an overview of Panda3D, explain how to get started with it, demonstrate a quick game made with Panda3D, and provide a conclusion about Panda3D."
date: "12/20/2022"
readTime: "5-10 Min"
tags:
  - "tutorial"
  - "panda3d"
  - "python"
  - "c++/cpp"
  - "game"
---

Panda3D is a game engine and 3D rendering library that is open source and easy to use. It is written in Python and is designed to be flexible and modular, allowing developers to create a wide variety of interactive 3D applications, including games. In this article, we will go over the steps for creating a simple game using Panda3D.

## Install Panda3D

To get started, you will need to install Panda3D on your computer. You can download the latest version from the Panda3D website (https://www.panda3d.org/download.php). Follow the instructions for installing Panda3D on your operating system. You will also need to have Python installed on your machine, as Panda3D is written in Python.

## Set up your project

Once you have Panda3D installed, you can create a new project. Open up a terminal window and navigate to the directory where you want to create your project. Then, run the following command to create a new Panda3D project:

```
panda3d -project mygame
```

This will create a new directory called "mygame" with the necessary files and directories for your Panda3D project.

## Create a model

Next, you will need to create a 3D model for your game. There are a few different ways you can do this, such as using a 3D modeling software like Blender or 3DS Max, or by creating the model programmatically using Panda3D's built-in geometry classes.

Once you have your model ready, you will need to export it in a format that Panda3D can read. Panda3D supports a number of 3D file formats, including .egg and .bam.

## Import the model into your game

To import your model into your Panda3D game, you will need to use the `loader` module. This module allows you to load 3D models, textures, and other assets into your game.

First, import the `loader` module at the top of your Python script:

```py
from panda3d.core import loadPrcFileData
from direct.showbase.ShowBase import ShowBase
```

Next, use the `loadModel` function to load your model into the game:

```py
model = loader.loadModel("mymodel.bam")
```

## Create a scene

To create a scene for your game, you will need to use Panda3D's `NodePath` class. A `NodePath` represents a node in the scene graph, and it can have child nodes, allowing you to build up a hierarchy of objects in your scene.

To create a `NodePath` for your model, use the `attachNewNode` method:

```py
modelNode = model.attachNewNode("modelNode")
```

You can then use the `reparentTo` method to add the model to the scene:

```py
modelNode.reparentTo(render)
```

## Add interactivity

To make your game interactive, you will need to use Panda3D's event handling system. You can use the `accept` method to specify which events your game should listen for, and the `bind` method to specify a function to be called when an event occurs.

For example, to handle keyboard events, you can do the following:

```py
from direct.task import Task
from direct.showbase.DirectObject import DirectObject

class KeyboardController(DirectObject):
def init(self, modelNode):
self.modelNode = modelNode
self.accept("w", self.moveForward)
self.accept("s", self.moveBackward)
self.accept("a", self.turnLeft)
self.accept("d", self.turnRight)

def moveForward(self):
    self.modelNode.setY(self.modelNode, 1)

def moveBackward(self):
    self.modelNode.setY(self.modelNode, -1)

def turnLeft(self):
    self.modelNode.setH(self.modelNode.getH() + 10)

def turnRight(self):
    self.modelNode.setH(self.modelNode.getH() - 10)
# create a keyboard controller and attach it to the model node
keyboardController = KeyboardController(modelNode)
# add a task to update the model's position

taskMgr.add(self.updateModelPosition, "updateModelPosition")

def updateModelPosition(self, task):
# update the model's position based on the keyboard input
self.modelNode.setY(self.modelNode, 1)
return Task.cont
```

## Render the scene

To render the scene, you will need to create a `ShowBase` object and call the `run` method. This will start the rendering loop, which will update the scene and display it on the screen.


```python
base = ShowBase()
base.run()
```

## Conclusion

That's it! You now have a basic game that you can control with the keyboard and that updates the model's position based on user input. You can use this as a starting point for creating more complex games using Panda3D.
