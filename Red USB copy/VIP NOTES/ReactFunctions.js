import React, { Component } from "react";

export class FunctionReact extends Component {
  state = {
    title: ""
  };
  handleClick(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click1</button>
        {/* i reference the function only */}
        <button onClick={this.handleClick()}>Click1</button>
        {/* gives undefined */}
        <button onClick={this.handleClick(e)}>Click2</button>
        {/* once the component render it will call the function which is not right so if it has e it will give an error because the e comes from onClick */}
        <button onClick={e => this.handleClick(e)}>Click3</button>
        {/* here is function one calls function 2 */}
        <button onClick={e => this.handleClick()}>Click3</button>
        {/* this one gives error because i don't pass e */}
        <button onClick={() => this.handleClick(e)}>Click3</button>
        {/* this one gives error because it doestn't know e not like passing a string  */}
      </div>
    );
  }
}

export default FunctionReact;
// ****************************************************************************
import React, { Component } from "react";

export class Test extends Component {
  handleClick(item) {
    console.log(item);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("Hello")}>Click</button>
      </div>
    );
  }
}

export default Test;
// this will print Hello after click and i don't need to use arrow Func or bind because i am not setting state
// ****************************************************************************
import React, { Component } from "react";

export class Test extends Component {
  handleClick(item) {
    console.log(item);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick("Hello")}>Click</button>
      </div>
    );
  }
}

export default Test;
// this will print Hello right away and i don't need to use arrow Func or bind because i am not setting state
// ******************************************************************************
import React, { Component } from "react";

export class Test extends Component {
  state = {
    title: ""
  };
  handleClick(item) {
    this.setState({ title: item });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick("Hello")}>Click</button>
      </div>
    );
  }
}

export default Test;
// this will give error because function is not binded so it has no access to setState so to fix it we can do:
// 1.onClick={this.handleClick.bind(this,"Hello")}
// *****************************************************************************
import React, { Component } from "react";

export class Test extends Component {
  state = {
    title: ""
  };
  handleClick(item) {
    this.setState({ title: item }, () => console.log(this.state.title));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick("Hello")}>Click</button>
      </div>
    );
  }
}

export default Test;
// this will give error because function is not binded so it has no access to setState so to fix it we can do:
// 1.onClick={this.handleClick.bind(this,"Hello")}
// 2.onClick={() => this.handleClick("Hello")}
//  3. handleClick = item => e => {
//     this.setState({ title: item }, () => console.log(this.state.title));
//   };
// ******************************************************************************

// Example#1
// onClick={this.onLikeClick.bind(this, post._id)}
// onLikeClick(id) {
//   this.props.addLike(id);
// }

// Example#2
import React, { Component } from "react";
const showHello = () => {
  console.log("Hello");
};
export class FunctionReact extends Component {
  showWorld() {
    console.log("World");
    return <h1>World</h1>
  }
  render() {
    return (
      <div>
        <div>{showHello()}</div>
        <div>{this.showWorld()}</div>
      </div>
    );
  }
}
export default FunctionReact;

// Example #3
import React, { Component } from "react";
export class FunctionReact extends Component {
  state = {
    title: ""
  };
  handleClick() {
    console.log("Hello World Click");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default FunctionReact;
// Example #4
import React, { Component } from "react";
export class FunctionReact extends Component {
  state = {
    title: ""
  };
  handleClick=() =>{
    this.setState({title:"Hello World"})
  }
  render() {
    return (
      <div>
        {this.state.title}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default FunctionReact;

// Example #5
import React, { Component } from "react";
export class FunctionReact extends Component {
  state = {
    title: ""
  };
  handleClick() {
    this.setState({ title: "Hello World" });
  };
  render() {
    return (
      <div>
        {this.state.title}
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    );
  }
}
export default FunctionReact;
// Example #6
import React, { Component } from "react";
export class FunctionReact extends Component {
  constructor(){
    super();
    this.state={
      title: ""
    }
    this.handleClick=this.handleClick.bind(this)
  }
    handleClick() {
    this.setState({ title: "Hello World" });
  };
  render() {
    return (
      <div>
        {this.state.title}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default FunctionReact;

// Example #7
import React, { Component } from "react";
export class FunctionReact extends Component {
  state = {
    title: ""
  };
  handleClick(names) {
    this.setState({ title: `${names.first} ${names.last}` });
  }
  render() {
    const names = { first: "Boutros", last: "Bekhit" };
    return (
      <div>
        {this.state.title}
        <button onClick={this.handleClick.bind(this, names)}>Click</button>
      </div>
    );
  }
}
export default FunctionReact;
// **********************************************************************************
// here the FunctionReact is considered a child
import React, { Component } from "react";
export class FunctionReact extends Component {
  // componentDidMount() {
  //   this.props.getFamily(this.state.family);
  // }

  handleClick(family) {
    this.props.getFamily(family);
  }
  render() {
    const family = {
      one: "Samah",
      Two: "Tony",
      Three: "Michael"
    };
    return (
      <div>
        <button onClick={this.handleClick.bind(this, family)}>Click</button>
      </div>
    );
  }
}
export default FunctionReact;

// ###
import React from "react";
import FunctionReact from "./FunctionReact";

class Child extends React.Component {
  state = {
    family: {}
  };
  getFamily = family => {
    this.setState({ family });
  };
  render() {
    return (
      <div>
        <FunctionReact name={"Boutros"} getFamily={this.getFamily} /> 
        {/* this is a parent and i want to get family info from its child */}
        <p>{this.state.family.one}</p>
        <p>{this.state.family.Two}</p>
        <p>{this.state.family.Three}</p>
      </div>
    );
  }
}
export default Child;
// *********************************************************************************
import React from "react";
import { Link } from "react-router-dom";
const links = [
  {
    name: "My Account",
    linkTo: "/function"
  },
  {
    name: "Profile",
    linkTo: "/login"
  },
  {
    name: "About",
    linkTo: "/bg"
  }
];
export default function FunctionReact(props) {
  // const generateLinks = links => {
  //   return links.map((item, i) => (
  //     <Link to={item.linkTo} key={i}>
  //       {item.name}
  //     </Link>
  //   ));
  // };
  const generateLinks = links =>
    links.map((item, i) => (
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    ));

  return <div style={{ marginTop: "150px" }}>{generateLinks(links)}</div>;
}
// *******************************************************************************
import React, { Component } from "react";

export default class FunctionReact extends Component {
  state = {
    links: [
      {
        name: "Boutros"
      },
      {
        name: "Boutros"
      },
      {
        name: "Boutros"
      }
    ]
  };
  // showLinks(links) {
  //   return links.map((item, i) => <p>{item.name}</p>);
  // }
  showLinks = links => links.map((item, i) => <p key={i}>{item.name}</p>);

  render() {
    return <div>{this.showLinks(this.state.links)}</div>;
  }
}
// ********************************************************************************
