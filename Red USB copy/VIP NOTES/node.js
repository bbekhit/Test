what is Node
// it's a crossplate form, open source javascript runtime, which alow us to run java
// script code on any machine

how it works
// If this was a web server, we would have to start a new thread for every new user. But JavaScript is single-threaded (not really, but it has a single-threaded event loop, which we’ll discuss a bit later). So this would make JavaScript not very well suited for multi-threaded tasks.

// That’s where the non-blocking part comes in.

advantage
it's asynchronse and event driven built on v8 google chrome machine

what is the api function
its asynchronse non blocking

callback
its a way to handle asyncronse Programing
so i want to get request  User (err,userdata)`

 node js server never waits for api to return data

ajax is used to update part of the page content dynamically without having to update whole page

javascript is single thread, but does support concurrency using events and callbacks
eachtime a task is completed it fires corresponding event which signals eventlistener to be executed

Refs make it possible to access DOM nodes directly within React.
Let’s say you want to change the value of an <input> element, but without using props or re-rendering the whole component.

A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

render function used to update UI


// call stack
// callback queue
