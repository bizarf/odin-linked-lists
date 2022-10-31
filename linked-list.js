class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds new node to end of list
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = newNode;
        }
        this.size++;
    }

    // adds new node to start of list
    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // returns the total number of nodes in list
    getSize() {
        return this.size
    }

    // returns the first node in the list
    getHead() {
        return this.head
    }

    // returns the last node in the list
    getTail() {
        let tail = this.head;
        if (tail) {
            while (tail.nextNode) {
                tail = tail.nextNode
            }
            return tail
        }
    }

    // returns the node at given index
    at(index) {
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
            if (count === index) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.nextNode;
        }
    }

    // removes the last element from the list
    pop() {
        let currentNode = this.head;
        let node = this.head.nextNode;

        if (this.size === 1) {
            this.head = null;
        } else {
            while (node.nextNode) {
                currentNode = node;
                node = node.nextNode;
            }
            currentNode.nextNode = null;
        }

        this.size--;
    }

    // returns true if value is in list and false if not
    contains(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        if (value != currentNode) return false;
    }

    // returns the index of the node containing value in argument or null if not found
    find(value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode) {
            if (value === currentNode.value) {
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }

        if (value != currentNode) return null;
    }

    // returns all the linked list objects as a string
    toString() {
        let currentNode = this.head;
        let string = ""

        while (currentNode) {
            if (currentNode.nextNode != null) {
                string += `${currentNode.value}, `
            } else {
                string += `${currentNode.value}.`
            }

            currentNode = currentNode.nextNode;
        }
        return string
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

const list = new LinkedList()
console.log(list)
list.append(500)
list.append(506)
console.log(list)
// console.log(list.getSize())
list.prepend(700)
// console.log(list.contains(506))
console.log(list)
// console.log(list.getHead())
// console.log(list.getTail())
// console.log(list.at(1))
// list.pop()
// console.log(list)
console.log(list.contains(700))
console.log(list.contains(506))
console.log(list.contains(505))
console.log(list.find(700))
console.log(list.find(506))
console.log(list.toString())