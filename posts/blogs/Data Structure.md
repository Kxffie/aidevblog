---
title: "Data Structures"
desc: "This article provides an overview of data structures, which are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. The article covers several common data structures, including arrays, linked lists, stacks, queues, trees, and hash tables, and provides examples of how to create and manipulate these data structures in Python. The article explains the strengths and weaknesses of each data structure, and discusses when it is most appropriate to use each one. Choosing the right data structure for a particular task can greatly improve the efficiency and performance of an application."
date: "12/25/2022"
readTime: "5-10 Min"
tags: 
- "article"
- "python"
---

A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different types of data structures are suited to different kinds of applications, and some are highly specialized to specific tasks. Some common data structures include:

## Arrays

An array is a contiguous block of memory that stores a fixed number of values of the same type. Each value is stored at a specific index, and the indices are usually integer numbers. Arrays are useful for storing and manipulating large amounts of data, but they have some limitations:

- The size of the array must be determined when it is created and cannot be changed afterward.

- Accessing elements of an array by index is efficient, but inserting or deleting elements from the middle of the array can be slow.

```python
# create an array of integers
my_array = [1, 2, 3, 4, 5]

# access an element of the array by index
print(my_array[0])  # prints 1

# modify an element of the array by index
my_array[0] = 10
print(my_array[0])  # prints 10

# add an element to the end of the array
my_array.append(6)
print(my_array)  # prints [10, 2, 3, 4, 5, 6]

# remove an element from the end of the array
my_array.pop()
print(my_array)  # prints [10, 2, 3, 4, 5]
```



## Linked Lists

A linked list is a collection of nodes that are linked together in a specific order. Each node contains a value and a reference to the next node in the list. Linked lists are dynamic, meaning that nodes can be added or removed from the list as needed. They are useful for tasks that require inserting or deleting elements from the middle of a list, but they are not as efficient as arrays for accessing individual elements by index.

```python
# define a Node class to represent a node in the linked list
class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next

# create the head node of the linked list
head = Node(1)

# add some more nodes to the linked list
head.next = Node(2)
head.next.next = Node(3)

# access a node of the linked list by traversing the list
node = head
while node is not None:
    print(node.value)
    node = node.next

# prints 1, 2, 3

```



## Stacks

A stack is a data structure that operates on a last-in, first-out (LIFO) principle. It consists of a collection of elements, with the most recently added element at the top of the stack. Stacks are useful for tasks that involve undoing or reversing actions, as the most recently added element can be easily removed.

```python
# create an empty stack
stack = []

# push elements onto the stack
stack.append(1)
stack.append(2)
stack.append(3)

# peek at the top element of the stack
print(stack[-1])  # prints 3

# pop an element off the stack
print(stack.pop())  # prints 3
print(stack)  # prints [1, 2]

```



## Queues

A queue is a data structure that operates on a first-in, first-out (FIFO) principle. It consists of a collection of elements, with the first element added to the queue being the first one to be removed. Queues are useful for tasks that involve processing items in the order they are received, such as tasks that require sequential processing or tasks that must be completed in the order they are received.

```python
# create an empty queue
queue = []

# enqueue elements onto the queue
queue.append(1)
queue.append(2)
queue.append(3)

# peek at the first element of the queue
print(queue[0])  # prints 1

# dequeue an element from the queue
print(queue.pop(0))  # prints 1
print(queue)  # prints [2, 3]

```



## Trees

A tree is a data structure that consists of a set of nodes organized in a hierarchical structure. The top node is called the root, and the nodes below it are called children. Each child node can have its own set of children, forming a branching structure. Trees are useful for tasks that involve organizing data hierarchically, such as file systems or decision-making processes.

```python
# define a Node class to represent a node in the tree
class Node:
    def __init__(self, value=None, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# create the root node of the tree
root = Node(1)

# add some child nodes to the root node
root.left = Node(2)
root.right = Node(3)

# add some more nodes to the tree
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

# traverse the tree in pre-order
def pre_order(node):
    if node is not None:
        print(node.value)
        pre_order(node.left)
        pre_order(node.right)

pre_order(root)

# prints 1, 2, 4, 5, 3, 6, 7

```

This example creates a tree with the following structure:

```bash
   1
  / \
 2   3
/ \ / \
4  5 6  7

```

The `pre_order` function traverses the tree in pre-order, which means it visits the root node first, then the left child, then the right child. Other common tree traversal methods include in-order (left child, root, right child) and post-order (left child, right child, root).

## Hash Tables

A hash table is a data structure that uses a hash function to map keys to indices in an array. It allows for efficient insertion, deletion, and retrieval of data, but it requires a large amount of memory and can suffer from collisions, where two keys are mapped to the same index.

```python
# create an empty hash table
hash_table = {}

# insert some key-value pairs into the hash table
hash_table['key1'] = 'value1'
hash_table['key2'] = 'value2'
hash_table['key3'] = 'value3'

# retrieve a value from the hash table using its key
print(hash_table['key1'])  # prints 'value1'

# update the value of a key in the hash table
hash_table['key1'] = 'new value'
print(hash_table['key1'])  # prints 'new value'

# delete a key-value pair from the hash table
del hash_table['key2']
print(key2 in hash_table)  # prints False

```

## Conclusion

In conclusion, data structures are a way of organizing and storing data in a computer for efficient access and modification. There are various types of data structures, including arrays, linked lists, stacks, queues, and trees, each of which is suited to different kinds of applications and tasks. Arrays are efficient for storing and manipulating large amounts of data, but have limitations in terms of inserting or deleting elements. Linked lists are dynamic and useful for inserting or deleting elements, but not as efficient for accessing individual elements by index. Stacks operate on a last-in, first-out principle and are useful for undoing or reversing actions. Queues operate on a first-in, first-out principle and are useful for processing items in the order they are received. Trees are hierarchical structures that can be used to represent relationships between data.