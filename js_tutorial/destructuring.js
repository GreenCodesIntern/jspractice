//object destructuring 

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName} = person;



  // Create an Object
const persons = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {lastNam, firstNam} = person;


  //destructuring map

  // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Destructuring
  let text = "";
  for (const [key, value] of fruits) {
    text += key + " is " + value;
  }