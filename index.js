//NYC Coders Workshop:

//Creates a node structure with a value and next property
class Node{
  //construct the node object to assign key/value pairs
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

//Creates Stack structure; Last In First Out (LIFO; the head is at the top)
class Stack{
  //construct the Stack with head and size
  constructor(){
    this.head = null;
    this.size = 0;
  }

  //adds a value to top of Stack
  //the method accepts a value parameter
  push(value){
    //create a new node
    const newHead = new Node(value);
    //assign head to newHeads pointer
    newHead.next = this.head;
    //assign newHead to head
    this.head = newHead;
    //increment size
    this.size++;
    //return stack
    return this;
  }

  //remove and return value from top of Stack
  //the method does not take parameters
  pop(){
    //edge case: if stack is empty, return null
    if(this.size === 0) return null;
    //grab reference to oldHead
    const oldHead = this.head;
    //update head to oldHead.next
    this.head = oldHead.next;
    //update oldHead pointer to null to disconnect from stack
    oldHead.next = null;
    //decrement size
    this.size--;
    //return oldHeads value
    return oldHead.value;
  }

  //returns value at the top of Stack
  peek(){
    //if stack empty, return null
    if(this.size === 0) return null;
    //return heads value
    return this.head.value;
  }

  //checks if Stack is empty or not
  isEmpty(){
    // returns Boolean if Stack size property is empty or not
    return this.size === 0
  }

  // returns the number of values in the Stack
  getSize(){
    //return size property
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
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.getSize());

// console.log(stack);
// console.log(stack.printListArray()); 
//_______________________________________________

//Queue uses the same node class structure

//Creates Queue structure; First In First Out (FIFO; the head is at the beginning of the queue, the tail is at the end of the queue)
class Queue{
  //construct the Queue with head, tail, and size
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //adds value to Queues tail
  //the method accepts a value parameter
  enqueue(value){
    //create new node
    const newNode = new Node(value);
    //edge case: if queue is empty, assign head/tail to new node
    if(this.size === 0){
      this.head = newNode;
      this.tail = this.head;
    }
    //assign new node to tails pointer
    this.tail.next = newNode;
    //update tail to be the new node
    this.tail = newNode;
    //increment the size
    this.size++;
    //return Queue
    return this;
  }

  //removes and returns the value at the front of the Queue
  dequeue(){
    //return null if the queue is empty
    if(this.size === 0) return null;
    //grab reference to head
    const removedHead = this.head;
    //update head to removedHead's next property
    this.head = removedHead.next;
    //update removedHead's next property to null to disconnect it
    removedHead.next = null;
    //decrement size
    this.size--;
    //update head/tail reference if queue becomes empty
    if(this.size === 0){
      this.head = null;
      this.tail = null;
    }
    //return removedHeads value
    return removedHead.value;
  }

  //returns the value at the beginning of the Queue
  peek(){
    //edge case: if Queue is empty, return null
    if(this.size === 0) return null;
    //return the heads value
    return this.head.value;
  }

  //checks if the Queue is empty or not
  isEmpty(){
    // returns Boolean if Queue size property is empty or not
    return this.size === 0
  }

  //returns the number of values in the Queue
  getSize(){
    //return size property
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
// console.log(queue.peek());
// console.log(queue.isEmpty());
// console.log(queue.getSize());

// console.log(queue);
// console.log(queue.printListArray());
//_______________________________________________

/*
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false  (doesn't meet requirement #1)

Example 4:
Input: s = "))"
Output: false  (doesn't meet requirement #3)

Example 5:
Input: s = ")()"
Output: false  (doesn't meet requirement #3)

Things to remember:
Undersand the function signature: (isValid)
Understand the constraints: (1 <= s.length <= 10^4)
Understand the input/output: (parameter is a string/return is a boolean)
Example 1: a single parenthesis; s = '('; output = false (because odd or not a pair)
Example 2: s = '()'; output = true
Example 3: s = '(())'; output = true
Example 4: s = '[[['; output = false (open paranthesis are added to stack; this input will never give an empty stack; stack must be empty at end of algo for parenthesis to be valid)

How to build algo:
Use a stack
When a open parenthesis (key) is encountered push it into the stack
When a closing parentheis (value) is encountered, pop the last open parenthesis and check against current closing parenthesis to see if they match
Query the value of popped element; do they match, then valid/true
*/

// var isValid = function(s) {
//   //edge case: return false if odd number of characters
//   if(s.length % 2 !== 0) return false;
//   //create an empty stack; only open brackets go in the stack
//   const stack = [];
//   //create map to define matching pairs
//   const match = new Map([
//     ['(', ')'],
//     ['{', '}'],
//     ['[', ']']
//   ]);
//   //loop through s (for every 'bracket' of input 's')
//   for(const bracket of s){
//     //if open parentheses, push to stack (if match has the current element in a key, push to stack)
//     if(match.has(bracket)){
//       stack.push(bracket);
//     //else if it's a closed bracket, see if the pairs match )
//     }else{
//       //if stack not empty, compare with top (last) bracket
//       if(stack.length !== 0){
//         //grab top bracket in variable 
//         const lastOpen = stack.pop();
//         //if match keys' value (lastOpen's value) is not equal to current element, return false
//         if(match.get(lastOpen) !== bracket){
//           return false;
//         }
//       //otherwise if stack is empty, return false
//       }else{
//         return false;
//       }
//     }
//   }
//   //return true if stack is empty (stack must be empty at end of algo for parenthesis to be valid)
//   return stack.length === 0;
// };

// console.log(isValid(")()"));
//_______________________________________


//Udemy:

//see Node class at very top

//Creates Stack structure; Last In First Out (LIFO)
class StackTwo{
  constructor(){
    //node at top of Stack
    this.first = null;
    //node at bottom of Stack
    this.last = null;
    this.size = 0;
  }

  //adds a value to top of Stack and returns size
  //the method accepts a value parameter
  push(value){
    //create a new node
    const newNode = new Node(value);
    //if the stack is empty {assign new node to first and last}
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
      //else {grab original first node in variable, set new node to first's property, set new first's pointer to original first}
    }else{
      const originalFirst = this.first;
      this.first = newNode;
      this.first.next = originalFirst;
    }
    //increment size
    this.size++;
    //return stack size
    return this.size;
  }

  //remove and return value from top of Stack
  //the method does not take parameters
  pop(){
    //if the stack is empty {return null}
    if(this.size === 0) return null;
    //grab the first node to be removed in a variable
    const removedFirst = this.first;
    //if the stack has only 1 node {assign null to first and last}
    if(this.size === 1){
      this.first = null;
      this.last = null;
    //else {assign second node to first, assign null to removed node}
    }else{
    this.first = removedFirst.next;
    removedFirst.next = null;
    }
    //decrement size
    this.size--;
    //return removed node's value
    return removedFirst.value;
  }

  //returns value at the top of Stack
  peek(){
    //if stack empty, return null
    if(this.size === 0) return null;
    //return firsts value
    return this.first.value;
  }

  //checks if Stack is empty or not
  isEmpty(){
    // returns Boolean if Stack size property is empty or not
    return this.size === 0
  }

  // returns the number of values in the Stack
  getSize(){
    //return size property
    return this.size;
  }

  printListArray(){
    let array = [];
    let currentNode = this.first;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// const stackTwo = new StackTwo();
// stackTwo.push(1);
// stackTwo.push(2);
// stackTwo.push(3);
// stackTwo.push(4);
// stackTwo.push(5);
// console.log(stackTwo.pop());
// console.log(stackTwo.peek());

// console.log(stackTwo);
// console.log(stackTwo.printListArray());
//______________________________________

//Creates Queue structure; First In First Out (FIFO)
class QueueTwo{
  constructor(){
    //node at front of Queue
    this.first = null;
    //node at end of Queue
    this.last = null;
    this.size = 0;
  }

  //adds value to end of Queue (last)
  //the method accepts a value parameter
  enqueue(value){
    //create new node
    const newNode = new Node(value);
    //if queue is empty {assign new node to first and last}
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    //else {assign new node to last's pointer, assign new node to last}
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    //increment and return size
    return ++this.size;
  }

  //removes and returns the value at the front of the Queue (first)
  dequeue(){
    //if Queue is empty, return null
    if(this.size === 0) return null;
    //grab first node to be removed in variable
    const removedFirst = this.first;
    //if Queue size is 1 {assign null to first and last}
    if(this.size === 1){
      this.first = null;
      this.last = null;
    //else {assign the second node to first, assign null to the removed node}
    }else{
      this.first = removedFirst.next;
      removedFirst.next = null;
    }
    //decrement size
    this.size--;
    //return
    return removedFirst.value;
  }

  //returns the value at the front of the Queue
  peek(){
    //edge case: if Queue is empty, return null
    if(this.size === 0) return null;
    //return the front nodes value
    return this.first.value;
  }

  //checks if the Queue is empty or not
  isEmpty(){
    // returns Boolean if Queue size property is empty or not
    return this.size === 0
  }

  //returns the number of values in the Queue
  getSize(){
    //return size property
    return this.size;
  }

  printListArray(){
    let array = [];
    let currentNode = this.first;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const queueTwo = new QueueTwo();
queueTwo.enqueue(1);
queueTwo.enqueue(2);
queueTwo.enqueue(3);
queueTwo.enqueue(4);
queueTwo.enqueue(5);
// console.log(queueTwo.dequeue());
// console.log(queueTwo.peek());

console.log(queueTwo);
console.log(queueTwo.printListArray());