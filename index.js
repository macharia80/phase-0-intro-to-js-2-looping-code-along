// Code your solutions in this file
// index.js

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  function countDown(number) {
    let count = number;
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  

