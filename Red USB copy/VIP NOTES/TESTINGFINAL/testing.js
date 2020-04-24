// https://enzymejs.github.io/enzyme///
// Jest ===> test runner  installed with create-react-app
// can add __test__ directory then add .test.js or .spec.js
// jest runs in the terminal, so we use JSDOM library installed by react to trick the app as if it's running in browser
// Enzyme airbnb to make react easier testing
//npm i -S enzyme enzyme-adapter-react-16

// in setupTests.js
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()})

// Enzyme renderers

// Static : plain html
// shallow: component but not children
// mount : component and it's children 


// describe is contructor in jest
