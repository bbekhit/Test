// what is Node
// it's a crossplate form, open source javascript runtime, which alow us to run java
// script code on any machine

// how it works
// If this was a web server, we would have to start a new thread for every new user. But JavaScript is single-threaded (not really, but it has a single-threaded event loop, which we’ll discuss a bit later). So this would make JavaScript not very well suited for multi-threaded tasks.

// That’s where the non-blocking part comes in.

// advantage
// it's asynchronse and event driven built on v8 google chrome machine

// what is the api function
// its asynchronse non blocking

// callback
// its a way to handle asyncronse Programing
// so i want to get request  User (err,userdata)`

//  node js server never waits for api to return data

// ajax is used to update part of the page content dynamically without having to update whole page

// javascript is single thread, but does support concurrency using events and callbacks
// eachtime a task is completed it fires corresponding event which signals eventlistener to be executed

// Refs make it possible to access DOM nodes directly within React.
// Let’s say you want to change the value of an <input> element, but without using props or re-rendering the whole component.

// A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
// A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

// render function used to update UI


// call stack
// callback queue

// 1-  it's a javascript runtime built on V8 google javascripr Engine
// 2- container or enviroment in which JS can run
// 3- single threaded, based on event driven, non blocking I/o model
// 4- can build fast and scalable web application
// 5- API and database, server-side rendering, real-time apps
// 6- Thread is instruction which runs in CPU *****************************
      // all users accessing same thread
// 7- Routing: different actions for different urls
// 8- npm oudated --- npm update slugify -- npm i @latest
// 9- DNS, domain name server, special servers like the phone book for internet
  //  browser sent a request to DNS with nice name like google.com to get IP address 
  //  http://127.o.o.0.3000 protocol - IP - port(sub address)
  // after browser get IP address, a TCP socket connection established between server and browser
// 10-HTTP hypertext transfer protocol(protocol to send data between client and server)
// 11- (dependencies)V8(change JS to machine code) && Libuv ==provide==> event loop && thread pool
  // some callbacks are heavy so we get more 4 threads for expensive tasks(hashing password,IP lookup)

const {query,pathname} = url.parse(req.url,true);

module.exports = () => {
  console.log("exports")
}
const replaceTemplate = require('./index/replaceTemplates')
