
//instead of this 
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";


//write this
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

// for loop

let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}


//for in loop 


const person = {fname:"John", lname:"Doe", age:25};

let text1 = "";
for (let x in person) {
  text += person[x];

}


//for in over array

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}


//array for each

const numbers0 = [45, 4, 9, 16, 25];

let txt0 = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

//loop over string 
let language = "JavaScript";

let text0 = "";
for (let x of language) {
text += x;
}

//while loop

while (i < 10) {
    text += "The number is " + i;
    i++;
  }


  const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}




