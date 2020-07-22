"test": "node scripts/test.js",
    "test:update": "npm test -- -u",
    "test:coverage": "node scripts/test.js --coverage; open ./coverage/lcov-report/index.html"

"jest": {
  "verbose": true,
    "collectCoverage": true,
    "coverageReporters": ["lcov", "html"],
    "projects": [
      {
        "displayName": "backend",
        "testEnvironment": "node",
        "rootDir": "./../",
        "testMatch": ["<rootDir>/server/src/**/*.test.js"]
      },
      {
        "displayName": "frontend",
        "testEnvironment": "jsdom",
        "testMatch": ["<rootDir>/src/**/*.test.js"],
        "setupFiles": [
          "raf/polyfill",
          "<rootDir>/src/tests/setupTests.js"
        ],
        "snapshotSerializers": [
          "enzyme-to-json/serializer"
        ]
    ]
}

"devDependencies": {
  "enzyme": "^3.11.0",
  "enzyme-adapter-react-16": "^1.15.2",
  "enzyme-to-json": "^3.5.0",
  "jest": "^26.1.0",
  "raf": "^3.4.1"
}

const minus = (a,b) => a - b;
test("subtract two numbers", () => {
  let res = minus(5,4);
  if(res !== 1){
    throw new Error("Something went wrong")
  }
})

const {setUnion} = require('../../common');


test("check if setUnion works properly", () => {
  let union;
  let result;
  let first = new Set([1, 2])
  let second = new Set([3, 4]);
  if ((first === null || first.size === 0) && (second === null || second.size === 0)) {
    result = new Set();
    union = setUnion(first, second)
    expect(union).toEqual(result)
  } else if (first === null || first.size === 0) {
    result = new Set(second)
    union = setUnion(first, second)
    expect(union).toEqual(result)
  } else if (second === null || second.size === 0) {
    result = new Set(first)
    union = setUnion(first, second)
    expect(union).toEqual(result)
  } else if ( first !== null && second !== null) {
    result = new Set([...first, ...second])
    union = setUnion(first, second)
    expect(union).toEqual(result)
  }
})

const add = (a,b) => a + b;

test("adds two numbers", () => {
  let res = add(3,4);
  if(res !== 7){
    throw new Error("Something went wrong")
  }
})

speech.test.js
import React from "react";
import { shallow } from "enzyme";
import { Speech } from "../../components/Speech";

test("should render Speech component correctly", () => {
  const props = {
    classes: {},
    result: {},
    grade: {}
  };
  const wrapper = shallow(<Speech {...props} />);
  expect(wrapper).toMatchSnapshot();
});

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

Module <rootDir>/client/src/tests/setupTests.js in the setupFiles option was not found.
         <rootDir> is: /Users/boutrosbekhit/Documents/New_Signal/siri-e2e


{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-syntax-jsx"
  ]
}

"transform": { "^.+\\.[jt]sx?$": "<rootDir>/client/node_modules/babel-jest" },