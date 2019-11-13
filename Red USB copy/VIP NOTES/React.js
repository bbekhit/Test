// onClick with capital c in react event

<button onClick={this.eventHandler}>Click</button>; //i don't add () because it will
// be executed immediatly when rendered to the DOM
// 'this' here referes to the class component(my component)

// ***************************************************
// BINDING
// *****************************************************
eventHandler = () => {
  this.setState({}); // the arrow function let the this word refer to the class
  // component(react component) so i have access to the setState method
  //   this is not set to the component(instance) instance. Now consider these alternatives:
};

// different event listener onChange onSubmit onFocus onBlur

this.props.title; // => here 'this' refers to the instance of the component

// ***************************************************
// SUPER
// *****************************************************
// when we call super as a function is the same as calling the constructor function of parent
// Component(react component) so we have access to all the properties and methods

// ***************************************************
// TWO WAY DATA BINDING
// *****************************************************
// when i have a stateless child component that has input field and i handle the onchange
// onChange={props.changed} and pass the value to parent component which will update the state 
// will will show up as value={props.name}
// onChange={props.changed} value={props.name}

// ***************************************************
// HANDLING EVENTS
// *****************************************************
onClick = { this.onHandleNameChange } //here it is an event listener and i just wnat to reference it
onHandleNameChange = () => {
  this.setState({ name: "Boutros" })
}

onClick = { this.onHandleNameChange.bind(this, "Boutros") } //here it is an event listener and i just wnat to reference it
onHandleNameChange = (value) => {
  this.setState({ name: value })
}
or //onClick = {() => this.onHandleNameChange("Boutros")}

const Person = (props) => {
  <p>{props.name}</p>
}
<Person name={this.state.name} /> //i get the name from state and send it to child to show it
const Person = (props) => {
  <p>{props.name}</p>
    <button onClick={props.onGet("27")}>Click to get age</button>
}
<Person name={this.state.name} onGet={(age) => this.onGet(age)} />

  // ***************************************************
  // JSX
  // *****************************************************
  // Basically, by using JSX you can write concise HTML/XML-like structures
  //  (e.g., DOM like tree structures) in the same file as you write JavaScript code,
  //   then Babel will transform these expressions into actual JavaScript code. Unlike the past, 
  // instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.

  // ***************************************************
  // PASSING DATA FROM CHILD TO PARENT
  // *****************************************************
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
//child (insert your own name where it says [callback] of course), 
//and pass in the data as the argument.

// ***************************************************
// STATE AND PROPS
// *****************************************************
// props  and state  are CORE concepts of React. Actually, 
// only changes in props  and/ or state  trigger React to re-render 
// your components and potentially update the DOM in the browser 
// (a detailed look at how React checks 
// whether to really touch the real DOM is provided in section 6).

// props  allow you to pass data from a parent 
// (wrapping) component to a child (embedded) component.

// State is referred to the local state of the component which cannot be accessed and modified outside 
// of the component and only can be used & modified inside the component.

// ***************************************************
// STATELESS VS STATEFUL
// *****************************************************
// If you don’t need to use state or lifecycle I would recommend 
// you to use a function component, but If there’s a chance that you need one of those 
// things(state, lifecycle methods) I would suggest you to use class component.

// ***************************************************
// LIFE CYCLE METHOD
//https://medium.com/@nancydo7/understanding-react-16-4-component-lifecycle-methods-e376710e5157
// *****************************************************
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

// ***************************************************
// PURE COMPONENT
// *****************************************************
// This is because PureComponent changes the life-cycle method shouldComponentUpdate 
// and adds some logic to automatically check whether a re-render is required for the component
// This allows a PureComponent to call the method render only if it detects changes in state or props.

// ***************************************************
// KEYS
// *****************************************************
// Keys React are utilised to identify specific Virtual DOM Elements that have changed.
// This works and does indeed render the list of fruits. However at any moment we might want to add new fruits, as well 
// as delete or modify the existing ones. How would React know to perform those changes efficiently?


// ***************************************************
// refs
// *****************************************************
// Similarly to keys refs are added to elements in the form of attributes. 
// According to React.js documentation some of the best cases for using refs are:
//  managing focus, text selection, or media playback, 
//  triggering animations, and integrating with third-party DOM libraries.
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusInput() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusInput}
        />
      </div>
    );
  }

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



// ***************************************************
// refs
// *****************************************************
//  Not unlike libraries such as jQuery, React has its own event handling system which is called Synthetic Events.
// Synthetic Events is a cross-browser wrapper of the browser’s native event.
// It works the same way as the event system that you find on browsers,
//  the only difference is that the same code will work across all browsers.

class Modal extends Component {
  render() {
    return (
      <div>
        Hello World
          </div>
    )
  }
}