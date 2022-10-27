class LinkedList {
    constructor(head, size) {
        this.head = null;
        this.size = 0;
    }

    // adds new node to end of list
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.size++;
        } else {
            let currentNode = this.head;

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = newNode;
            this.size++;
        }
        return this.newNode;
    }

    // adds new node to start of list
    prepend(value) {
        const newNode = new Node(value);
    }

    // returns the total number of nodes in list
    size() {
        return this.size
    }

    // returns the first node in the list
    head() {

    }

    // returns the last node in the list
    tail() {

    }

    // returns the node at given index
    at(index) {

    }

    // removes the last element from the list
    pop() {

    }

    // returns true if value is in list and false if not
    contains(value) {

    }

    // returns the index of the node containing value in argument or null if not found
    find(value) {

    }

    // returns all the linked list objects as a string
    toString() {

    }
}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = null;
    }
}

const list = new LinkedList()
console.log(list)
list.append(500)
list.append(506)
console.log(list)
console.log(list.size)