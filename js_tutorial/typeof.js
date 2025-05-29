// The typeof Operator
// The typeof operator returns the data type of a JavaScript variable.

// Primitive Data Types
// In JavaScript, a primitive value is a single value with no properties or methods.

// JavaScript has 7 primitive data types:

// string
// number
// boolean
// bigint
// symbol
// null
// undefined
// The typeof operator returns the type of a variable or an expression.


typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  (fruits instanceof Map);

  typeof {name:'John'}   // Returns object
  typeof [1,2,3,4]       // Returns object
  typeof new Map()       // Returns object
  typeof new Set()       // Returns object
  
  typeof function (){}   // Returns function
  

  // Returns function Object() {[native code]}:
{name:'John',age:34}.constructor

// Returns function Array() {[native code]}:
[1,2,3,4].constructor

// Returns function Date() {[native code]}:
new Date().constructor

// Returns function Set() {[native code]}:
new Set().constructor

// Returns function Map() {[native code]}:
new Map().constructor

// Returns function Function() {[native code]}:
function () {}.constructor
