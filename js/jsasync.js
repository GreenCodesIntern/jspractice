
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);


document.getElementById("demo").innerHTML = posNumbers;


function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

//myCalculator
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);

  //normal async call

  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  mySecond();
  myFirst();