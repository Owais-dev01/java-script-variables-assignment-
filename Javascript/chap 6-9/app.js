let num = 10;
let add = num + 5;
let sub = num - 3;
let mul = num * 2;
let div = num / 2;

document.getElementById("arithmeticResult").innerHTML = `
      <p>Initial number: ${num}</p>
      <p>Addition (num + 5): ${add}</p>
      <p>Subtraction (num - 3): ${sub}</p>
      <p>Multiplication (num * 2): ${mul}</p>
      <p>Division (num / 2): ${div}</p>
    `;

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.getElementById("varOutput").innerHTML = `
      <p>a = ${a}</p>
      <p>b = ${b}</p>
      <p>result = ${result}</p>
    `;

let output = document.getElementById("outputBox");

let userName = prompt("Enter your name:");
output.innerHTML += "<h3>Task 3: Greeting</h3>";
output.innerHTML += "Hello, " + userName + "! Welcome to our website.<br><br>";

let tableNum = prompt("Enter a number for multiplication table (default is 5):");
if (tableNum === "" || tableNum === null) {
    tableNum = 5;
} else {
    tableNum = Number(tableNum);
}

output.innerHTML += "<h3>Task 5: Multiplication Table of " + tableNum + "</h3>";
for (let i = 1; i <= 10; i++) {
    output.innerHTML += tableNum + " x " + i + " = " + (tableNum * i) + "<br>";
}
output.innerHTML += "<br>";

let sub1 = prompt("Enter first subject name:");
let sub2 = prompt("Enter second subject name:");
let sub3 = prompt("Enter third subject name:");

let totalMarks = 100;

let marks1 = Number(prompt("Enter obtained marks in " + sub1));
let marks2 = Number(prompt("Enter obtained marks in " + sub2));
let marks3 = Number(prompt("Enter obtained marks in " + sub3));

let obtainedMarks = marks1 + marks2 + marks3;
let percentage = (obtainedMarks / (totalMarks * 3)) * 100;

output.innerHTML += "<h3>Task 6: Marks & Percentage</h3>";
output.innerHTML += "<table border='1' cellspacing='0' cellpadding='8'>";
output.innerHTML += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
output.innerHTML += "<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>";
output.innerHTML += "<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>";
output.innerHTML += "<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>";
output.innerHTML += "</table><br>";
output.innerHTML += "Total Marks = " + (totalMarks * 3) + "<br>";
output.innerHTML += "Obtained Marks = " + obtainedMarks + "<br>";
output.innerHTML += "Percentage = " + percentage.toFixed(2) + "%<br>";