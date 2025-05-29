// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  // Create an Object
const person1 = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//using new keyword
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  //Create an Object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  // Try to create a copy
  const x = person;
  
  // This will change age in person:
  x.age = 10;