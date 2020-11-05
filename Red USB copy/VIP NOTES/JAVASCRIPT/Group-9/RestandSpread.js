// In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. And it still works, we can find it in the old code.

// But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.

// Also, it always contains all arguments. We can’t capture them partially, like we did with rest parameters.

// The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.
// For instance, to gather all arguments into array args:
function sumAll(...args) {
  // args is the name for the array it can be any name ...rest
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6

function showName(firstName, lastName, ...titles) {
  alert(firstName + " " + lastName); // Julius Caesar
  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert(titles[0]); // Consul
  alert(titles[1]); // Imperator
  alert(titles.length); // 2
}
showName("Julius", "Caesar", "Consul", "Imperator");

// If we access the arguments object from an arrow function, it takes them from the outer “normal” function.
// Here’s an example:
function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}
f(1); // 1

// rest in destructing
// If we want not just to get first values, but also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic"
];
alert(name1); // Julius
alert(name2); // Caesar
// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

// What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?
// We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.
// It looks like this:
let options = {
  title: "Menu",
  height: 200,
  width: 100
};
// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;
// now title="Menu", rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100

// ********************************************************************************
function memoize(fn) {
  // implementation is here
  //check if the arguments is the same
  let cach = {};
  return (...args) => {
    let str = args.toLocalString();
    if (str in cach) {
      return cach[str];
    } else {
      let myResult = fn(...args);
      cach[str] = myResult;
      return myResult;
    }
  };
  //if the arguments are the same don't execute
}
// ********************************SPREAD*****************************************
// When we see "..." in the code, it is either rest parameters or the spread operator.

// There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.

let obj = {
  name:"b",
  age: 40
}
let obj1 = {
  ...obj,
  age: 25
}
obj1={
  name:"b",
  age:25 // overwritten
}

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

let str = "Hello";
alert( [...str] ); // H,e,l,l,o

let str = "Hello";
// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o

// ********************************************************************************
// https://stackoverflow.com/questions/28452358/what-is-the-meaning-of-this-props-in-reactjs
<ComposedClass {...this.props} user={this.props.user} />;

<Component x={} y={} z={} />
var props = { x: 1, y: 1, z:1 };
<Component {...props} />

const person = {
  name: "xgqfrms",
  age: 23,
  country: "China"
};
class TestDemo extends React.Component {
  render() {
    const { name, age, country } = { ...this.props };
    // const {name, age, country} = this.props;
    return (
      <div>
        <h3> Person Information: </h3>
        <ul>
          <li>name={name}</li>
          <li>age={age}</li>
          <li>country={country}</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<TestDemo {...person} />, mountNode);
// ********************************************************************************

const props = {
  name: "xgqfrms",
  age: 23,
  country: "China"
};

const Test = props => {
  return (
    <div name={props.name} age={props.age} country={props.country}>
      Content Here
      <ul>
        <li>name={props.name}</li>
        <li>age={props.age}</li>
        <li>country={props.country}</li>
      </ul>
    </div>
  );
};

ReactDOM.render(
  <div>
    <Test {...props} />
    <hr />
    <Test name={props.name} age={props.age} country={props.country} />
  </div>,
  mountNode
);
// ********************************************************************************
