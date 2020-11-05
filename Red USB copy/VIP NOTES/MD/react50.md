1. It updates slow. 1. It updates faster.
2. Can directly update HTML. 2. Can’t directly update HTML.
3. Creates a new DOM if element updates. 3. Updates the JSX if element updates.
4. DOM manipulation is very expensive. 4. DOM manipulation is very easy.
5. Too much of memory wastage. 5. No memory wastage.

6. What is React?
   React is a front-end JavaScript library developed by Facebook in 2011.
   It follows the component based approach which helps in building reusable UI components.
   It is used for developing complex and interactive web and mobile UI.
   Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

7. What are the features of React?
   Major features of React are listed below:

It uses the virtual DOM instead of the real DOM.
It uses server-side rendering.
It follows uni-directional data flow or data binding.

4. List some of the major advantages of React.
   Some of the major advantages of React are:

It increases the application’s performance
It can be conveniently used on the client as well as server side
Because of JSX, code’s readability increases
React is easy to integrate with other frameworks like Meteor, Angular, etc
Using React, writing UI test cases become extremely easy

5. What are the limitations of React?
   Limitations of React are listed below:

React is just a library, not a full-blown framework
Its library is very large and takes time to understand
It can be little difficult for the novice programmers to understand
Coding gets complex as it uses inline templating and JSX

6. What is JSX?
   JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. Below is an example of JSX:

   <!--  Basically, by using JSX you can write concise HTML/XML-like structures
     (e.g., DOM like tree structures) in the same file as you write JavaScript code,
      then Babel will transform these expressions into actual JavaScript code. Unlike the past,
    instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.
    -->

7. What do you understand by Virtual DOM? Explain its working.
   A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.
   This Virtual DOM works in three simple steps.

\*\* Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

\*\* Then the difference between the previous DOM representation and the new one is calculated.

\*\* Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

8. Why can’t browsers read JSX?
   Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.

9. How different is React’s ES6 syntax when compared to ES5?
   import React from "react" before var React = require("react")
   export default Component before module.exports = Component
   class component extends before React.createClass

10. ARCHITECTURE ********\*\*\*\********* Only the View of MVC ----------- Complete MVC
    RENDERING ********\*\*\*\********* Server-side rendering ----------- Client-side rendering
    DOM ********\*\*\*\********* Uses virtual DOM ----------- Uses real DOM
    DATA BINDING ********\*\*\*\********* One-way data binding ----------- Two-way data binding
    DEBUGGING ********\*\*\*\********* Compile time ----------- debugging Runtime debugging
    AUTHOR ********\*\*\*\********* Facebook ----------- Google

11. What do you understand from “In React, everything is a component.”
    Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.

12. Explain the purpose of render() in React.
Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.

The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

13. How can you embed two or more components into one?
class MyComponent extends React.Component{
  render(){
  return(   
  <div>
   <h1>Hello</h1>
    <Header/>
  </div>
   );
  }
  }
  class Header extends React.Component{
  render(){
  return 
  <h1>Header Component</h1>
  };
  }
  ReactDOM.render(
  <MyComponent/>, document.getElementById('content')
  );

14. What is Props?
      Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.

15. What is a state in React and how is it used?
States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().

16. Differentiate between states and props.                                   state Props
 Receive initial value from parent component  *******************************	Yes	   Yes
 Parent component can change value *******************************            No	   Yes
 Set default values inside component	 *******************************        Yes	   Yes
 Changes inside component	 *******************************                    Yes	   No
 Set initial value for child components *******************************	      Yes	   Yes
 Changes inside child components *******************************	            No	   Yes

 17. How can you update the state of a component?
State of a component can be updated using this.setState().

18. What is arrow function in React? How is it used?
Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.
**this is not set to the component(instance) instance**
//General way
render() { 
return(
<MyInput onChange={this.handleChange.bind(this) } />
);
}
//With Arrow Function
render() { 
return(
<MyInput onChange={ (e) => this.handleOnChange(e) } />
);
}

19. Differentiate between stateful and stateless components.
Stateful vs Stateless
Stateful Component	                                           Stateless Component
 Stores info about component’s state change in memory	        1. Calculates the internal state of the components
 Have authority to change state	                              2. Do not have the authority to change state
 Contains the knowledge of past, current and possible future changes in state	3. Contains no knowledge of past, current and possible future state changes
 Stateless components notify them about the requirement of the state change, then they send down the props to them.	4. They receive the props from the Stateful components and treat them as callback functions.

 20. What are the different phases of React component’s lifecycle?
There are three different phases of React component’s lifecycle:

Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.


 21. What are React component’s lifecycle?
// constructor()
// Called first and only once when the page loads
// Used to set initial state

// static getDerivedStateFromProps(nextProps, prevState)
// Called right before the initial render and all re-renders
// Rarely used

// render()
// This is the only required method in a class component.
// Called every time React updates and commits to the DOM
// Used for writing JSX for components

// componentDidMount()
// Called once when component is constructed and gets added to the DOM (right after render).
// Could be used to fetch data and have it displayed right after rendering is done


22. What is an event in React?
In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like:

Events are named using camel case instead of just using the lowercase.
Events are passed as functions instead of strings.
The event argument contains a set of properties, which are specific to an event. Each event type contains its own properties and behavior which can be accessed via its event handler only.


23. How do you create an event in React?
class Display extends React.Component({ 
show(evt) {
// code 
}, 
render() { 
// Render the div with an onClick prop (value is a function) 
return ( 
<div onClick={this.show}>Click Me!</div>
); 
}
});


24. What are synthetic events in React?
Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

//  Not unlike libraries such as jQuery, React has its own event handling system which is called Synthetic Events.
// Synthetic Events is a cross-browser wrapper of the browser’s native event.
// It works the same way as the event system that you find on browsers,
//  the only difference is that the same code will work across all browsers.

25. What do you understand by refs in React?
Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.

class ReferenceDemo extends React.Component{
display() {
const name = this.inputDemo.value;
document.getElementById('disp').innerHTML = name;
}
render() {
return( 
div>
Name: <input type="text" ref={input => this.inputDemo = input} />
<button name="Click" onClick={this.display}>Click</button> 
<h2>Hello <span id="disp"></span> !!!</h2>
</div>
);
}
}

// Similarly to keys refs are added to elements in the form of attributes. 
// According to React.js documentation some of the best cases for using refs are:
//  managing focus, text selection, or media playback, 
//  triggering animations, and integrating with third-party DOM libraries.

 class CustomTextInput extends React.Component {
        constructor(props) {
          super(props);
          // create a ref to store the textInput DOM element
          this.textInput = React.createRef();
          this.focusTextInput = this.focusTextInput.bind(this);
        }
      
        focusTextInput() {
          // Explicitly focus the text input using the raw DOM API
          // Note: we're accessing "current" to get the DOM node
          this.textInput.current.focus();
        }
      
        render() {
          // tell React that we want to associate the <input> ref
          // with the `textInput` that we created in the constructor
          return (
            <div>
              <input
                type="text"
                ref={this.textInput} />
      
              <input
                type="button"
                value="Focus the text input"
                onClick={this.focusTextInput}
              />
            </div>
          );
        }
      }

      In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.


26. List some of the cases when you should use Refs.
Following are the cases when refs should be used:

When you need to manage focus, select text or media playback
To trigger imperative animations
Integrate with third-party DOM libraries


27. How do you modularize code in React?
We can modularize code by using the export and import properties. They help in writing the components separately in different files.

28. How are forms created in React?
React forms are similar to HTML forms. But in React, the state is contained in the state property of the component and is only updated via setState(). Thus the elements can’t directly update their state and their submission is handled by a JavaScript function. This function has full access to the data that is entered by the user into a form.

29. What do you know about controlled and uncontrolled components?
Controlled vs Uncontrolled Components
Controlled Components	Uncontrolled Components
a. They do not maintain their own state	1. They maintain their own state
b. Data is controlled by the parent component	2. Data is controlled by the DOM
c. They take in the current values through props and then notify the changes via callbacks	3. Refs are used to get their current values

30. What are Higher Order Components(HOC)?
it's a funcftion that takes a component and return a new component

32. What are Pure Components?
React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

33. Keys
// Keys React are utilised to identify specific Virtual DOM Elements that have changed.
// This works and does indeed render the list of fruits. However at any moment we might want to add new fruits, as well 
// as delete or modify the existing ones. How would React know to perform those changes efficiently?

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:


36. What is Redux?
Redux is a JavaScript library and is used for the entire applications state management

37. What are the three principles that Redux follows?
Single source of truth: The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

State is read-only: The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 

Changes are made with pure functions: In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.

38. What do you understand by “Single source of truth”?
Redux uses ‘Store’ for storing the application’s entire state at one place. So all the component’s state are stored in the Store and they receive updates from the Store itself. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

39. Redux flow

**Store**
Redux uses ‘Store’ for storing the application’s entire state at one place. So all the component’s state are stored in the Store and they receive updates from the Store itself.

The Store is a combination of all the State objects from each Component in the application.

The Store is a single JavaScript object so all the State objects in the application must be combined into one large one using combineReducers()


**Provider**
A Provider receives the application’s data from the Store and makes it available to all the Containers.
By wrapping the <Main /> Container in a Provider, all of the applications data (the Store) is now available to all the children of the Provider.

**Container**
Containers are a gateway between State and Components. They take a piece of State from the Store and pass it into a Component as props using the mapStateToProps() method.

The mapStateToProps() method accepts the state and returns only the relevant bits of state we need.

The connect() method then attaches this new state object as props to the (imported) Main component.

**Action / Action Creator**
An Action Creator is simply a function which returns an Action, such as submitting a form, clicking a link, or adjusting a slider.

The returned Action has at least two parts, the type and the payload.

Note: The type property must use the key ‘type’ whereas the payload and any other properties can be named as you wish.

Here the addComment() Action Creator returns the ADD_COMMENT Action.

In order to use the Action, it must be passed in as a prop to our Component, similar to how a Container passes State to the Component.

This is done using the mapDispatchToProps() method

**Reducers** 
are functions which update the application’s state in response to Actions.

Actions announce that something has been triggered and Reducers respond to this by describing how the state changes.

When an Action is dispatched, it is sent to all Reducers so it is the Reducer’s job to determine if it needs to do anything with the dispatched action.

A simple switch statement is used to filter the required Actions.

In this example the postComments() Reducer handles only the dispatched Actions it is concerned with and modifies the state accordingly before returning the state to the Store.

39. List down the components of Redux.
Redux is composed of the following components:

Action – It’s an object that describes what happened.
Reducer –  It is a place to determine how the state will change.
Store – State/ Object tree of the entire application is saved in the Store.
View – Simply displays the data provided by the Store.

41. How are Actions defined in Redux?
Actions in React must have a type property that indicates the type of ACTION being performed. They must be defined as a String constant and you can add more properties to it as well. In Redux, actions are created using the functions called Action Creators. Below is an example of Action and Action Creator:

function addTodo(text) {
return {
type: ADD_TODO, 
text 
}
}

42. Explain the role of Reducer.
Reducers are pure functions which specify how the application’s state changes in response to an ACTION. Reducers work by taking in the previous state and action, and then it returns a new state. It determines what sort of update needs to be done based on the type of the action, and then returns new values. It returns the previous state as it is, if no work needs to be done.

43. What is the significance of Store in Redux?
A store is a JavaScript object which can hold the application’s state and provide a few helper methods to access the state, dispatch actions and register listeners. The entire state/ object tree of an application is saved in a single store. As a result of this, Redux is very simple and predictable. We can pass middleware to the store to handle the processing of data as well as to keep a log of various actions that change the state of stores. All the actions return a new state via reducers.

44. What are the advantages of Redux?
Advantages of Redux are listed below:

Predictability of outcome – Since there is always one source of truth, i.e. the store, there is no confusion about how to sync the current state with actions and other parts of the application.
Maintainability – The code becomes easier to maintain with a predictable outcome and strict structure.
Server-side rendering – You just need to pass the store created on the server, to the client side. This is very useful for initial render and provides a better user experience as it optimizes the application performance.
Developer tools – From actions to state changes, developers can track everything going on in the application in real time.
Community and ecosystem – Redux has a huge community behind it which makes it even more captivating to use. A large community of talented individuals contribute to the betterment of the library and develop various applications with it.
Ease of testing – Redux’s code is mostly functions which are small, pure and isolated. This makes the code testable and independent.
Organization – Redux is precise about how code should be organized, this makes the code more consistent and easier when a team works with it.


46. What is React Router?
React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.

47. Why is switch keyword used in React Router v4?
Although a <div> is used to encapsulate multiple routes inside the Router. The ‘switch’ keyword is used when you want to display only a single route to be rendered amongst the several defined routes. The <switch> tag when in use matches the typed URL with the defined routes in sequential order. When the first match is found, it renders the specified route. Thereby bypassing the remaining routes.

48. Why do we need a Router in React?
A Router is used to define multiple routes and when a user types a specific URL, if this URL matches the path of any ‘route’ defined inside the router, then the user is redirected to that particular route. So basically, we need to add a Router library to our app that allows creating multiple routes with each leading to us a unique view.

<switch>
<route exact path=’/’ component={Home}/>
<route path=’/posts/:id’ component={Newpost}/>
<route path=’/posts’   component={Post}/>
</switch>

49. List down the advantages of React Router.
Few advantages are:

Just like how React is based on components, in React Router v4, the API is ‘All About Components’. A Router can be visualized as a single root component (<BrowserRouter>) in which we enclose the specific child routes (<route>).
No need to manually set History value: In React Router v4, all we need to do is wrap our routes within the <BrowserRouter> component.
The packages are split: Three packages one each for Web, Native and Core. This supports the compact size of our application. It is easy to switch over based on a similar coding style.

50. How is React Router different from conventional routing?
Conventional Routing vs React Routing
Topic	Conventional Routing	React Routing
PAGES INVOLVED	Each view corresponds to a new file	Only single HTML page is involved
URL CHANGES	A HTTP request is sent to a server and corresponding HTML page is received	Only the History attribute is changed
FEEL	User actually navigates across different pages for each view	User is duped thinking he is navigating across different pages


51. Thunk
Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.


