1
// callback is one method to handle asynchronus programing

2
// Like the actual DOM, the Virtual DOM is a node tree that lists elements and their
// attributes and
// content as objects and properties. React’s render() method creates a node tree
// from React components and
// updates this tree in response to mutations in the data model, caused by actions.
// Whenever anything may have changed, the entire UI will be re-rendered
// in a Virtual DOM representation.
// The difference between the previous Virtual DOM representation and
// the new one will be calculated.
// The real DOM will be updated with what has actually changed.
// This is very much like applying a patch.

     The BOM (Browser Object Model) consists of the objects navigator, history, screen, location and document which are children of window. In the document node is the DOM (Document Object Model), the document object model, which represents the contents of the page. You can manipulate it using javascript.

3
// The Hypertext Transfer Protocol (HTTP) is designed to enable communications
// between clients and servers.
HTML hypertext Markup language
DNS domain name system is a server that contains database of
the IP addresses and associated domain names

4
//javascript is a interpreted programing language used to create interactive effects through browsers

5
// You enter a URL into a web browser
// The browser looks up the IP address for the domain name via DNS
// The browser sends a HTTP request to the server finding the fastest path
// The server sends back a HTTP response
// The browser begins rendering the HTML
// The browser sends requests for additional objects embedded in HTML (images, css, JavaScript) and repeats steps 3-5.
// Once the page is loaded, the browser sends further async requests as needed.

5
{{ The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

So, even though the DOM construction stops until an encountered script tag is encountered, that’s not what happens with the CSSOM.

With the CSSOM, the JS execution waits. No CSSOM, no JS execution.}}

5
Meta provides data about HTML document elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata.

6
// A RESTful API is an application program interface (API) that uses HTTP
// requests to GET, PUT, POST and DELETE data.
// it's a contract between one piece of software and another
REST is an architecture style for designing networked applications
treats server object as resource that can be created or destroyed
7
// XML and JSON
//extended markup language
//api respond with pure data and not structure and not HTML to be fasrter

8
// The semantic meaning of an h1 tag is that it is used to identify the most important header
// of a specific web page or section.

9
//api added to html5
// geolocation
// form
// media capture

10
// interview example
//var someVariable = ????; false,null,undefined,0,NaN,empty string ""
// string-number-boolean-null-undefined

// if(someVariable){
// // do smth

// }else{
// // do smth else
// // what value can some variable have to get here
// }

// var obj = {
// name:”boutros”,
// age:”40”
// }

// function createObj(name,age){
// this.name = name, this.age = age

// }

// this refers to current instance of object

// var obj1 = new createObj(“boutros”,”40”)
// function print(obj){
// if(!objl){
// return console.log(“obj not found”)
// }else{
// return console.log(obj.name)
// }

// }

11
// 10- === comparasion
// The `===` returns true only if the items being compared have the same value _and_ type.
// The `==` returns true if the items being compared have the same value, even if they don't have the same type.
// 1 == "1" true
// 1 === 1 true
// `[] === 0` is `false` from the pros of using ===

12
// primitive types : strings,numbers,boolean,null,undefined and symbol in ES6
// reference data types: arrays, object literals, function
// dynamiclly language:i know the type of variable from value "5"so this
// is a string not like other languages

13
let arr = [1,2]
console.log(typeof arr) //object vip
const today = new Date()
console.log(typeof today) // object too

14
let val = Number("Hello")
console.log(val) // NaN

15
//variables names can\'t start with number or contains symbol(let test!)
// can only starts with letter of \$ \_

let \$hany = "hello"
let \_hany = "hello"
// let 3hany = "hello" error

16
// three places to see undefined
let val;
console.log(val)
// arguments not defined
function sum(num){
console.log(num)
}
// function isn't returning anything
sum()
let result = sum()
console.log(result)

// speed load:
// 1-Reducing page weight through the elimination of unnecessary whitespace and comments,
// 2-Reducing the number of files referenced in a web page lowers the number of HTTP
// 3-For the purposes of this article, a CDN is a means to reduce the physical
// distance between your server and your visitor.
// 4-caching what ever can be cached

// data DataTransfer
// Parent to Child — Use Prop
return (

<div>
<InputBar/>
<ToDoList listNameFromParent={listName}/>
</div>
);
// Child to Parent — Use a callback and states

// 1-Define a callback in my parent which takes the data I need in as a parameter.
<VideoItem
items={items}
onSelect={(id, title) => this.onSelect(id, title)}
/>
// 2-Pass that callback as a prop to the child (see above).
// VideoItem({ items, onSelect })

<p
onClick={() => onSelect(item.id.videoId, item.snippet.title)}
className="text-center text-uppercase"
></p>
//3-Call the callback using this.props.[callback] in the 
//child (insert your own name where it says [callback] of course), and pass in the data as the argument.

</div>

// State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. mutable

// Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props. immutable
