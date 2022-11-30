class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  push(value){
    //create a new node with value val
    const newHead = new Node(value);
    //point the new node's next to head
    newHead.next = this.head;
    //update head to new node
    this.head = newHead;
    //increment size property
    this.size++;
    return this;
  }
  
  pop(){
    //edge case: if stack is empty, return null
    if(this.size === 0) return null;
    //grab reference to oldHead
    const oldHead = this.head;
    //update head to oldHead.next
    this.head = oldHead.next;
    //update oldHead pointer to null to disconnect from stack
    oldHead.next = null;
    //decrement size property
    this.size--;
    //return oldHead
    return oldHead.value;
  }
  
  peek(){
    //if stack empty, return null
    if(this.size === 0) return null;
    //grab reference to head
    // const grabbedHead = this.head;
    //return head
    return this.head.value;
  }
  
  isEmpty(){
    return this.size === 0
  }
  
  getSize(){
    return this.size;
  }

  //prints a list in console that's easier to read
  printListArray(){
    //create empty array
    const array = [];
    //begin currentNode at head
    let currentNode = this.head;
    //while currentNode is not null (while loops used when we don't know input length)
    while(currentNode !== null){
      //push the currentNode value into empty array
      array.push(currentNode.value);
      //update currentNode to next node until currentNode is at null
      currentNode = currentNode.next
    }
    //return the array
    return array;
  }
  
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.getSize());


// console.log(stack);
// console.log(stack.printListArray()); 

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //adds to tail
  enqueue(value){
    //create new node
    const newNode = new Node(value);
    //edge case: if queue is empty, assign head/tail to new node
    if(this.size === 0){
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }
  
  dequeue(){
    //return null if the queue is empty
    if(this.size === 0) return null;
    //grab head reference
    const removedHead = this.head;
    //update head reference to removedHead's next property
    this.head = removedHead.next;
    //update removedHead's next property to null to disconnect it
    removedHead.next = null;
    //update tail reference if queue becomes empty
    if(this.head === null){
      this.tail = null;
    }
    //decrement size
    this.size--;
    //return removedHead value
    return removedHead.value;
  }
  
  peek(){
    if(this.size === 0) return null;
    return this.head.value;
  }
  
  isEmpty(){
    return this.size === 0
  }
  
  getSize(){
    return this.size;
  }

  //prints a list in console that's easier to read
  printListArray(){
    //create empty array
    const array = [];
    //begin currentNode at head
    let currentNode = this.head;
    //while currentNode is not null (while loops used when we don't know input length)
    while(currentNode !== null){
      //push the currentNode value into empty array
      array.push(currentNode.value);
      //update currentNode to next node until currentNode is at null
      currentNode = currentNode.next
    }
    //return the array
    return array;
  }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
console.log(queue.getSize());

console.log(queue.printListArray());