---
title: "A Beginner's Guide to Binary Trees in Python"
desc: "This article provides a step-by-step guide on how to implement a binary tree in Python. It includes a Node class for representing individual nodes in the tree, as well as a BinaryTree class that contains methods for traversing the tree in different orders. The article also includes example code for creating a binary tree and traversing it in preorder, inorder, and postorder."
date: "12/17/2022"
readTime: "3-4 Min"
tags:
  - "tutorial"
  - "node"
  - "binary tree"
  - "beginner"
  - "python"
---

A binary tree is a data structure that is used to store data in a hierarchical manner. Each node in the tree can have at most two children, referred to as the left child and the right child.

Here is an example of how you can implement a binary tree in Python:

```py
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root):
        self.root = Node(root)

    def print_tree(self, traversal_type):
        if traversal_type == "preorder":
            return self.preorder_print(tree.root, "")
        elif traversal_type == "inorder":
            return self.inorder_print(tree.root, "")
        elif traversal_type == "postorder":
            return self.postorder_print(tree.root, "")
        else:
            print("Traversal type " + str(traversal_type) + " is not supported.")
            return False

    def preorder_print(self, start, traversal):
        """Root->Left->Right"""
        if start:
            traversal += (str(start.value) + "-")
            traversal = self.preorder_print(start.left, traversal)
            traversal = self.preorder_print(start.right, traversal)
        return traversal

    def inorder_print(self, start, traversal):
        """Left->Root->Right"""
        if start:
            traversal = self.inorder_print(start.left, traversal)
            traversal += (str(start.value) + "-")
            traversal = self.inorder_print(start.right, traversal)
        return traversal

    def postorder_print(self, start, traversal):
        """Left->Right->Root"""
        if start:
            traversal = self.postorder_print(start.left, traversal)
            traversal = self.postorder_print(start.right, traversal)
            traversal += (str(start.value) + "-")
        return traversal
```

The `Node` class represents a single node in the tree, and has a value and references to its left and right children. The `BinaryTree` class contains a reference to the root node and has methods for traversing the tree in different orders: preorder, inorder, and postorder.

To use the binary tree, you can create an instance of the `BinaryTree` class and add nodes to it. Here is an example of how you can create a tree and traverse it in different orders:

```py
# create a tree
tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)

# traverse the tree in preorder
print(tree.print_tree("preorder"))  # 1-2-4-5-3

# traverse the tree in inorder
print(tree.print_tree("inorder"))  # 4-2-5-1-3

# traverse the tree in postorder
print(tree.print_tree("postorder"))  # 4-5-2-3-1
```

In this example, we create a binary tree with the root node having the value 1, and add two children to the root node: a left child with the value 2 and a right child with the value 3. We also add a left child to the left child of the root (with the value 4) and a right child to the left child of the root (with the value 5).

We then traverse the tree in preorder, inorder, and postorder, and print the values of the nodes in each traversal. The output should be `1-2-4-5-3`, `4-2-5-1-3`, and `4-5-2-3-1`, respectively.

## Complete Code {#complete_code}

```py
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root):
        self.root = Node(root)

    def print_tree(self, traversal_type):
        if traversal_type == "preorder":
            return self.preorder_print(tree.root, "")
        elif traversal_type == "inorder":
            return self.inorder_print(tree.root, "")
        elif traversal_type == "postorder":
            return self.postorder_print(tree.root, "")
        else:
            print("Traversal type " + str(traversal_type) + " is not supported.")
            return False

    def preorder_print(self, start, traversal):
        """Root->Left->Right"""
        if start:
            traversal += (str(start.value) + "-")
            traversal = self.preorder_print(start.left, traversal)
            traversal = self.preorder_print(start.right, traversal)
        return traversal

    def inorder_print(self, start, traversal):
        """Left->Root->Right"""
        if start:
            traversal = self.inorder_print(start.left, traversal)
            traversal += (str(start.value) + "-")
            traversal = self.inorder_print(start.right, traversal)
        return traversal

    def postorder_print(self, start, traversal):
        """Left->Right->Root"""
        if start:
            traversal = self.postorder_print(start.left, traversal)
            traversal = self.postorder_print(start.right, traversal)
            traversal += (str(start.value) + "-")
        return traversal

# create a tree
tree = BinaryTree(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)

# traverse the tree in preorder
print(tree.print_tree("preorder"))  # 1-2-4-5-3

# traverse the tree in inorder
print(tree.print_tree("inorder"))  # 4-2-5-1-3

# traverse the tree in postorder
print(tree.print_tree("postorder"))  # 4-5-2-3-1
```