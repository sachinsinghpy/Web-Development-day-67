Day 67
JavaScript DOM Parent , Child ,SiblingNodes

#webdeveloper #webdesign #webdevelopment #javascript

Navigating Between Nodes
You can use the following node properties to navigate between nodes with JavaScript:

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling
Important!
childNodes returns nodes: Element nodes, text nodes, and comment nodes.

Whitespace between elements are also text nodes.

Alternative:
The children Property

The children property returns elements (ignores text and comments).

Siblings vs Element Siblings
Siblings are "brothers" and "sisters".

Siblings are nodes with the same parent (in the same childNodes list).

Element Siblings are elements with the same parent (in the same children list).

The firstChild property returns the first child node of a node.

The firstChild property returns a node object.

The firstChild property is read-only.

The firstChild property is the same as childNodes[0].

Important!
firstChild returns the first child node: An element node, a text node, or a comment node.

Whitespace between elements are also text nodes.

Alternative:
The firstElementChild Property

The firstElementChild property returns the first child element (ignores text and comment nodes).

The firstElementChild property returns the first child element of the specified element.

Description
The lastChild property returns the last child node of a node.

The lastChild property returns returns a node object.

The lastChild property is read-only.

Important!
lastChild returns the list child node: An element node, a text node, or a comment node.

Whitespace between elements are also text nodes.

Alternative:
The lastElementChild Property

The lastElementChild property returns the last child element (ignores text and comment nodes).


Important!
nextSibling returns the next sibling node: An element node, a text node, or a comment node.

Whitespace between elements are also text nodes.

Alternative:
The nextElementSibling Property

nextElementSibling returns the next sibling element (ignores text and comments).
