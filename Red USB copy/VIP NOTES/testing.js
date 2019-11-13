// jest automated test runner
// i run jest from the terminal and react expected to be in the browser so the create react app install a dependency JSDOM to simulates how the browser work to fake the react app that there is a browser

// npm i -S enzyme enzyme-adapter-react-16
// in src create setupTests.js

// inside this file
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter() });

// when jest starts it looks first for this file and execute code inside it before running any tests that's why nameing is important

// Enzyme is a package created by Airbnb to give us the ability to write expectations that work with react better

// makes testing easier
// like the code:
expect(div).tohaveInstanceOf(CommentBox);

// ****************************************************
let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
afterEach(() => {
  wrapped.unmount();
});
test("it has a textarea and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
test("it has a text area that user can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "New Comment" }
  });
  wrapped.update();
  expect(wrapped.find("textarea").props("value")).toEqual("New Comment");
});

//***************************************************
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});
test("shows a commentBox component", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

test("shows a ListBox component", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
//***************************************************
//shallow return the component with out children
//mount    return the component with full access
// static render component and plain text
