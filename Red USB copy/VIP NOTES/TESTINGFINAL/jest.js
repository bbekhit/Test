// in node package.json
// npm i -S babel-jest @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-syntax-jsx @babel/preset-react babel-plugin-transform-export-extensions 

// babel.config.js // can use without env if not devDep
module.exports = {
  "env": {
      "test": {
          "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
          ]
      }
  },
"plugins": [
  "babel-plugin-transform-export-extensions",
  "@babel/plugin-syntax-jsx",
  "@babel/plugin-proposal-class-properties"
]
}

// {
//   "presets": [
//     "@babel/preset-env",
//     "@babel/preset-react"
//   ],
//   "plugins": [
//     "@babel/plugin-syntax-jsx"
//   ]
// }

// in package.json node
// "jest": {
//   "verbose": true,
//   "collectCoverage": true,
//   "coverageReporters": [
//     "lcov",
//     "html"
//   ],
//   "projects": [
//     {
//       "displayName": "backend",
//       "testEnvironment": "node",
//       "testMatch": [
//         "<rootDir>/server/src/**/*.test.js"
//       ]
//     },
//     {
//       "displayName": "frontend",
//       "testEnvironment": "jsdom",
//       "testMatch": [
//         "<rootDir>/client/src/**/*.test.js"
//       ],
//       "setupFiles": [
//         "<rootDir>/client/src/tests/setupTests.js" ////vip to see the file if multiple projects
//       ],
//       "snapshotSerializers": [
//         "enzyme-to-json/serializer"
//       ]
//     }
//   ]
// },

// scope 
// "jest": {
//   "collectCoverageFrom": [
//     "**/src/components/**/*.{js,jsx}",
//     "**/src/redux/utils/**/*.{js,jsx}",
//     "**/src/services/**/*.{js,jsx}",
//     "!**/src/components/App/App.js",
//     "!**/src/components/AppWrapper.js",
//     "!**/src/components/FilterContext/FilterContext.js",
//     "!**/src/components/TLFQuickView/index.js"
//   ],
//   "coverageReporters": [
//     "html"
//   ],
//   "coverageThreshold": {
//     "global": {
//       "branches": 75,
//       "functions": 75,
//       "lines": 75,
//       "statements": 75
//     }
//   },
//   "moduleFileExtensions": [
//     "jsx",
//     "js",
//     "json"
//   ],
//   "moduleNameMapper": {
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
//     "\\.(css)$": "identity-obj-proxy"
//   },
//   "setupTestFrameworkScriptFile": "<rootDir>test/setupTests.js",
//   "snapshotSerializers": [
//     "enzyme-to-json/serializer"
//   ],
//   "testEnvironment": "node"
// },

// signal alex
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

//jest.config.js
module.exports = {
  "verbose": true,
  "collectCoverage": true,
  "coverageReporters": [
    "lcov",
    "html"
  ],
  "projects": [
    {
      "displayName": "backend",
      "testEnvironment": "node",
      "testMatch": [
        "<rootDir>/server/src/**/*.test.js"
      ]
    },
    {
      "displayName": "frontend",
      "testEnvironment": "jsdom",
      "testMatch": [
        "<rootDir>/client/src/**/*.test.js"
      ],
      "setupFiles": [
        "<rootDir>/client/src/tests/setupTests.js"
      ],
      "snapshotSerializers": [
        "<rootDir>/client/node_modules/enzyme-to-json/serializer" //// VIP VIP VIP
      ],
      "snapshotSerializers": [
          "enzyme-to-json/serializer"
      ],
    }
  ]
}

/// babel.config.js
module.exports = {
  "env": {
      "test": {
          "presets": [
              "@babel/preset-env",
              "@babel/preset-react",
          ]
      }
  },
"plugins": [
  "babel-plugin-transform-export-extensions",
  "@babel/plugin-syntax-jsx",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-runtime"
]
}

// if using jest infront 
// "jest": {
//   "verbose": true,
//   "collectCoverage": true,
//   "coverageReporters": ["lcov", "html"],
//   "projects": [
//     {
//       "displayName": "backend",
//       "testEnvironment": "node",
//       "rootDir": "./../",   ////////////////// VIP VIP VIP
//       "testMatch": ["<rootDir>/server/src/**/*.test.js"]
//     },
//     {
//       "displayName": "frontend",
//       "testEnvironment": "jsdom",
//       "testMatch": ["<rootDir>/src/**/*.test.js"],
//       "setupFiles": [
//         "raf/polyfill",
//         "<rootDir>/src/tests/setupTests.js"
//       ],
//       "snapshotSerializers": [
//         "enzyme-to-json/serializer"
//       ]
//     }
//   ]
// },