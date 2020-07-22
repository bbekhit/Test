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


////
// https://blog.jmtalarn.com/running-node-js-react-tests-same-project/ 
// https://gist.github.com/wldcordeiro/6dc2eb97a26a52d548ed4aa86f2fc5c0 
// https://stackoverflow.com/questions/47192083/how-do-you-setup-multiple-jest-configs-within-a-single-project
// https://github.com/facebook/jest/issues/6509

//
// "jest": {
//   "collectCoverageFrom": [
//     "src/**/*.{js,jsx,ts,tsx}",
//     "!src/**/*.d.ts"
//   ],
//   "resolver": "jest-pnp-resolver",
//   "setupFiles": [
//     "react-app-polyfill/jsdom"
//   ],
//   "testMatch": [
//     "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
//     "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
//   ],
//   "testEnvironment": "jsdom",
//   "testURL": "http://localhost",
//   "transform": {
//     "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
//     "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
//     "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
//   },
//   "transformIgnorePatterns": [
//     "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
//     "^.+\\.module\\.(css|sass|scss)$"
//   ],
//   "moduleNameMapper": {
//     "^react-native$": "react-native-web",
//     "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
//   },
//   "moduleFileExtensions": [
//     "web.js",
//     "js",
//     "web.ts",
//     "ts",
//     "web.tsx",
//     "tsx",
//     "json",
//     "web.jsx",
//     "jsx",
//     "node"
//   ],
//   "watchPlugins": [
//     "/Users/aabramets/Projects/e2e-api/client/node_modules/jest-watch-typeahead/filename.js",
//     "/Users/aabramets/Projects/e2e-api/client/node_modules/jest-watch-typeahead/testname.js"
//   ]
// },
