// // const name = "boutros";

// // console.log(typeof name);

// // const name = 25;

// // console.log(typeof name);

// // let val = String(new Date());

// // console.log(val);
// // console.log(typeof val);
// // console.log(val.length);
// // let val = String(new Date());
// // console.log(typeof val);
// // console.log(val);

// //
// // val = 5;
// // let val1 = val.toString(5);
// // console.log(val.toString()); // 5
// // console.log(typeof val1);

// // val = String(new Date());

// // console.log(val);            // date
// // console.log(typeof val);    //string
// // console.log(val.length);    //57

// // val = (5).toString();

// // console.log(val); // 5
// // console.log(typeof val); //string
// // console.log(val.length); // 1

// // val = String(["1", "2", "3"]);

// // console.log(val);            // 1,2,3
// // console.log(typeof val);   //string
// // console.log(val.length);        // 5
// // val = Number("5");

// // console.log(val);
// // console.log(typeof val);
// // console.log(val.toFixed());
// // let val1 = "5";
// // let val2 = 6;
// // let sum = val1 + val2;
// // console.log(sum);

// // val = Math.random() * 20;
// // console.log(val);

// // const firstName = "boutros";
// // const lastName = "Bekhit";
// // valp = firstName[0].toUpperCase() + firstName.slice(1);
// // valp1 = firstName.charAt(firstName.length - 1).toUpperCase();
// // console.log(valp);
// // var body = document.getElementsByTagName("body");
// // document.body.innerHTML = '<div id="message">The message</div>';
// // function getMessageText() {
// //   return $("#message").text;
// // }

// // console.log(getMessageText());
// // var image = document.querySelector(".image1");
// // var btn = document.querySelector(".remove1");

// // btn.addEventListener("click", function() {
// //   image.remove();
// // });

// // document.querySelector("body").style.background = "red";
// const btn = document.querySelector("#clicko");
// const remove1 = document.querySelector(".remove1");
// btn.addEventListener("click", function() {
//   remove1.classList.toggle("test");
// });

// // const heading = document.createElement("h1");
// // // heading.appendChild(document.createTextNode("Heading"));
// // // body.appendChild(heading);
// // heading.remove();

// const heading = document.createElement("li");
// heading.appendChild(document.createTextNode("test li"));
// document.querySelector(".head").appendChild(heading);

// heading.remove();
// const heading1 = document.createElement("h1");
// document.querySelector(".head").appendChild(heading1);
// heading1.appendChild(document.createTextNode("test h1"));

// const heading2 = document.createElement("h1");
// heading2.appendChild(document.createTextNode("heading 2"));

// document.querySelector(".head").replaceChild(heading2, heading1);

// document.body.addEventListener("mousemove", function(e) {
//   this.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},${Math.random() *
//     255})`;
// });
// heading2.addEventListener("mouseout", function(e) {
//   document.body.style.backgroundColor = "white";
// });

// for (let i = 0; i < 5; i++) {
//   document.getElementById("clicko").addEventListener("click", function() {
//     console.log(i);
//   });
// }
