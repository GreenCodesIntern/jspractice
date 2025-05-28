// bar chart

const xArray = ["Italy","France","Spain","USA","Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
  x: xArray,
  y: yArray,
  type: "bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255)"}
}];

const layout0 = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);

//horizental bar chart

const xArray0 = [55, 49, 44, 24, 15];
const yArray0 = ["Italy","France","Spain","USA","Argentina"];

const data0 = [{
  x: xArray,
  y: yArray,
  type: "bar",
  orientation: "h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);


//Pie Charts
const data1 = [{
    labels: xArray,
    values: yArray,
    type: "pie"
  }];

  //donot chart
  const data2 = [{
    labels: xArray,
    values: yArray,
    hole: .4,
    type: "pie"
  }];

//Plotting Equations

let exp = "Math.sin(x)";

// Generate values
const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 0.1) {
  xValues.push(x);
  yValues.push(eval(exp));
}

// Display using Plotly
const data = [{x:xValues, y:yValues, mode:"lines"}];
const layout = {title: "y = " + exp};
Plotly.newPlot("myPlot", data, layout);

// Display using Plotly
const data = [{x:xValues, y:yValues, mode:"markers"}];
const layout = {title: "y = " + exp};
Plotly.newPlot("myPlot", data, layout);


//Scatter Plots
const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const data = [{
  x: xArray,
  y: yArray,
  mode:"markers",
  type:"scatter"
}];

// Define Layout
const layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},
  title: "House Prices vs. Size"
};

Plotly.newPlot("myPlot", data, layout);

//line graph

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const data = [{
  x: xArray,
  y: yArray,
  mode: "lines",
  type: "scatter"
}];

// Define Layout
const layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},
  title: "House Prices vs Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

//Bubble Plots
const xArray = [1,2,3,4];
const yArray = [10,20,30,40];

const trace1 = {
  x: xArray,
  y: yArray,
  mode: 'markers',
  marker: {
    color: ['red', 'green', 'blue', 'orange'],
    size: [20, 30, 40, 50]
  }
};

const data = [trace1];

const layout = {
  title: "Plotting Bubbles"
};

Plotly.newPlot('myPlot', data, layout);

//line graphs

let exp12 = "x + 17";

// Generate values
const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 1) {
  yValues.push(eval(exp));
  xValues.push(x);
}

// Define Data
const data3 = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}];

// Define Layout
const layout3 = {title: "y = " + exp};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);

//multiple line graphs

let exp1 = "x";
let exp2 = "1.5*x";
let exp3 = "1.5*x + 7";

// Generate values
const x1Values = [];
const x2Values = [];
const x3Values = [];
const y1Values = [];
const y2Values = [];
const y3Values = [];

for (let x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
}

// Define Data
const data = [
  {x: x1Values, y: y1Values, mode:"lines"},
  {x: x2Values, y: y2Values, mode:"lines"},
  {x: x3Values, y: y3Values, mode:"lines"}
];

// Define Layout
const layout2 = {title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]"};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);