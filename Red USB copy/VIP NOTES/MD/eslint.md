## Brad

1- eslint extension on VSC
2- prettier extension on VSC
3- npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
4- npx install-peerdeps --dev eslint-config-airbnb
5-sudo npm i -g eslint // to install eslint globally
6-eslint --init

---

## youtube https://www.youtube.com/watch?v=GedOLszVOo4

target will let eslint to run prettier for js filles then prettier format rest of files

1- eslint extension on VSC
1- prettier extension on VSC
1 - sudo npm i -g eslint // to install eslint globally
2 - eslint --init // at insalling latest question press Y
3- modify the .eslintrc to be
{
"env": {
"browser": true,
"es6": true
},
"extends": [
"eslint:recommended",
"plugin:react/recommended"
],
"parserOptions": {
"ecmaVersion": 2018
},
"plugins": [
"react"
],
"rules": {
}
}
4-npx install-peerdeps --dev eslint-config-react-app
5-npm i -D eslint-plugin-prettier eslint-config-prettier prettier
6-final .eslintrc should be in client
{
"env": {
"browser": true,
"es6": true
},
"extends": ["react-app", "prettier"], // add prettier here will turn off any eslint rules in conflict
"plugins": ["react", "prettier"],
"parserOptions": {
"ecmaVersion": 2018
},
"rules": {
"semi": "error",
"prettier/prettier": [
"error",
{
"printWidth": 80,
"trailingComma": "es5",
"semi": false,
"jsxSingleQuote": true,
"singleQuote": true,
"useTabs": true
}
]
}
}
8- add this in the settings
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
"[javascript]": {
"editor.formatOnSave": false
}, // this makes that eslint runs first in javascript files
"eslint.alwaysShowStatus": true,
"prettier.disableLanguages": [
"js"
],
// "files.autoSave": "onFocusChange",
7-to check for contradicts
"scripts": {
"eslint-check": "eslint --print-config client/src/App.js | eslint-config-prettier-check"
}
8-npm i lint-staged husky -D // to let prettier run for staged files only
9-

///// .eslintrc
{
"env": {
"browser": true,
"es6": true
},
"extends": ["react-app", "prettier"],
"plugins": ["react", "prettier"],
"parserOptions": {
"ecmaVersion": 2018
},
"rules": {
"arrow-body-style": ["warn"],
"arrow-parens": ["warn", "always"],
"camelcase": ["warn"],
"import/no-named-as-default": ["off"],
"indent": "off",
"jsx-a11y/no-static-element-interactions": ["warn"],
"max-len": ["warn", { "code": 404, "tabWidth": 4 }],
"no-empty-function": ["warn"],
"no-restricted-syntax": ["warn"],
"no-param-reassign": ["error", { "props": false }],
"no-global-assign": ["error", { "exceptions": ["fetch"] }],
"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
"react/default-props-match-prop-types": ["warn"],
"react/destructuring-assignment": ["warn"],
"react/forbid-prop-types": ["warn"],
"react/jsx-one-expression-per-line": "off",
"react/no-access-state-in-setstate": ["warn"],
"react/prefer-stateless-function": "off",
"react/prop-types": ["warn"],
"react/require-default-props": ["warn"],
"react/sort-comp": [1],
"template-curly-spacing": "off",
"prettier/prettier": [
"error",
{
"printWidth": 80,
"trailingComma": "es5",
"semi": false,
"jsxSingleQuote": true,
"singleQuote": true,
"useTabs": true
}
]
}
}

// Brad
1-format on save
2-check single quote for pretier
3-download Prettier and eslint extensions in VSC
4-

### monorasim https://www.youtube.com/watch?v=bfyI9yl3qfE

1-download Prettier and eslint extensions in VSC
2-.eslintrc in client below src
3-npm i -D prettier eslint-config-prettier eslint-plugin-prettier

### other guy https://www.youtube.com/watch?v=GedOLszVOo4

1-npm i eslint -g
2-eslint init
3-modified eslintrc file
4- installed npx install-peerdeps --dev eslint-config-react-app
5-npm i -D eslint-config-prettier eslint-plugin-prettier prettier
6-{
"env": {
"browser": true,
"es6": true
},
"extends": ["react-app", "prettier"],
"plugins": ["react", "prettier"],
"parserOptions": {
"ecmaVersion": 2018
},
"rules": {
"prettier/prettier": [
"error",
{
"printWidth": 80,
"trailingComma": "es5",
"semi": false,
"jsxSingleQuote": true,
"singleQuote": true,
"useTabs": true
}
]
}
}

// jonas

- npm i -D prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
- for react
  npm i -D prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-eslint
