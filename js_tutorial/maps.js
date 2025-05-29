// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()
// The new Map() Method
// You can create a Map by passing an Array to the new Map() constructor:



// Create a Map
const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  // Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


// Create an Array
const fruit = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Map.groupBy(fruits, myCallback);


// Create an Array
const fruits2 = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result2 = Map.groupBy(fruits, myCallback);