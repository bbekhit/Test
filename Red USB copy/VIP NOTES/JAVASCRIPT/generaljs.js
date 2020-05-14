//type conversion

let val;

val = 5;

console.log(val); // 5
console.log(typeof val); //number
console.log(val.length); //will not work because length is a property of strings

val = String(5);

console.log(val); //5
console.log(typeof val); //string
console.log(val.length); //1

val = String(new Date());

console.log(val); // date
console.log(typeof val); //string
console.log(val.length); //57

val = (5).toString();

console.log(val); // 5
console.log(typeof val); //string
console.log(val.length); // 1

val = String(["1", "2", "3"]);

console.log(val); // 1,2,3
console.log(typeof val); //string
console.log(val.length); // 5

// strings to numbers
val = Number("5");

console.log(val); //5
console.log(typeof val); //number
console.log(val.toFixed()); //5

val = Number(true);

console.log(val); //1
console.log(typeof val); //number
console.log(val.toFixed()); //1

val = Number(false || null);

console.log(val); //0
console.log(typeof val); //number
console.log(val.toFixed()); //0

val = Number("hello" || [1, 2, 3]);

console.log(val); //NaN
console.log(typeof val); //number
console.log(val.toFixed()); //NaN

val = parseInt("100.3");
console.log(val); //100
console.log(typeof val); //number
console.log(val.toFixed()); //100

val = parseFloat("100.3");
console.log(val); //100.3
console.log(typeof val); //number
console.log(val.toFixed(2)); //100.30

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// type coercion

let val1 = "5";
let val2 = 6;
let sum = val1 + val2;
console.log(sum); //56 string

// DOM document object model
let val;

val = document;
val = document.all;
val = document.all[0]; //=> <html>
val = document.all.length;
val = document.head;
val = document.body;

// selectors
document.getElementById("id").id;
document.getElementById("id").className;

// changing style
document.getElementById("id").style.background = "red";
document.querySelector("h1").style.fontWeight = "700";
$("#id").css("background", "red");
$("id").css("fontWeight", "700");

// multiple styles
var styles = {
  background: "red",
  color: "white",
  border: "1px dashed green"
};
$("h1").css(styles);

// changing text
document.getElementById("id").textContent = "new text goes here";
document.getElementById("id").innerText = "new text goes here";
$("#id").text("new text goes here");
document.getElementById("id").innerHTML = "<h1>hello world</h1>";
document.querySelector(".navbar-toggler").innerHTML =
  '<i class="fa fa-arrow-down fa-2x"></i>';
$(document).ready(function() {
  $(".navbar-toggler").html('<i class="fa fa-chevron-down"></i>');
});

// querySelector
document.querySelector("#id");
document.querySelector(".class");
document.querySelector("h1");
document.querySelector("body").style.background = "red";
document.querySelector("ul li").style.background = "red"; //nested
document.querySelector("li:last-child").style.background = "red";
document.querySelector("li:nth-child(3)").style.background = "red";

// selecting multiple elements gives something like an array but not array to convert it to array:
let lis = document.getElementsByClassName("class");
lis = Array.from(lis);

lis.reverse();
// now it's an array so we can loop through it and change anything
lis.forEach(function(li) {
  li.textContent = "Hello World";
});
lis.forEach(function(li, index) {
  li.textContent = `${index}: Hello`;
});

//querySelectorAll is a nodeList and can perform array methods on it
document.querySelectorAll("ul.collection li.collection-item");
document.querySelectorAll("ul li"); //selecting without class name

// odd and even
const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li) {
  li.style.background = "gray";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "white";
}

// creating elements and adding class and attributes
const li = document.createElement("li");
li.className = "collection-item";
li.setAttribute("title", "New Item");
li.appendChild(document.createTextNode("hello world"));
document.querySelector("ul.collection").appendChild(li);

parentt.replaceChild(newheading, oldheading);

// remove
lis = document.querySelectorAll("li");
lis[0].remove();
// or removeChild()

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

// attributes
link.getAttribute();
link.setAttribute("href", "http://google.com");
link.hasAttribute("href");

// links
//  <link rel="stylesheet" href="main.css" >
{
  <a href="#" class="navbar-brand">
    <h3>Company</h3>
  </a>;
}
<script src="js/company.js" />;

//  eventa listeners
document.querySelector("button").addEventListener("click", onClick);
function onClick() {
  console.log("clicked");
}

// events
Click;
dblclick;
mouseover;
mouseout;

card.addEventListener("mousemove", function(e) {
  document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},40)`;
});

document.body.addEventListener("mousemove", function(e) {
  this.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},${Math.random() *
    255})`;
});

heading2.addEventListener("mouseout", function(e) {
  document.body.style.backgroundColor = "white";
});

//   local storage
localStorage.setItem("name", "john");
const name = localStorage.getItem("name");
localStorage.clear();

// it stores strings only so if we have Array

localStorage.setItem("tasks", JSON.stringify(tasks));

// to test if id exist
if (typeof id !== "undefined") {
  console.log(`ID is ${id}`);
} else {
  console.log("No ID");
}

// functions
// function declared
function greetings(firstName = "Joe", lastName = "Doe") {
  return `Hello ${firstName} ${lastName}`;
}

greetings("Boutros", "Bekhit");

// function expression
const square = function(x = 3) {
  return x * x;
};

console.log(square())(
  // immetiade invokable
  function() {
    console.log("something");
  }
)();

// loop
for (var i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite");
    continue;
  }

  if (i === 5) {
    console.log("stop looop");
    break;
  }
  console.log(i);
}

// objects
person.name;
person["name"];

// window is the global object in client side js
// computer system is my enviroment in node js
alert();
prompt();
if (window.confirm("Are you sure? this can NOT be undone")) {
  axios
    .delete("/api/profile")
    .then(res =>
      dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}
console.log(window.outerHeight);
window.location.href = "/login";

// scope
for (let i = 0; i < 5; i++) {
  document.getElementById("clicko").addEventListener("click", function() {
    console.log(i);
  });
}

for (var i = 0; i < 5; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
