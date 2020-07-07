// https://itnext.io/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969 
// https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/ 
// https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/ 

// DOM programming interface for HTML and XML 
// that JS can access and work on it 
// it returns the HTML into a tree of objects (OOP) that JS can deal with it 

// i have the global object which represents the browser (DOM,BOM,JS) 

// There are 12 node types. In practice we usually work with 4 of them:
// document – the “entry point” into DOM.
// element nodes – HTML-tags, the tree building blocks.
// text nodes – contain text.
// comments – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM. 

// SUMMARY 
// DOM specification
// Describes the document structure, manipulations and events, see https://dom.spec.whatwg.org.

// CSSOM specification
// Describes stylesheets and style rules, manipulations with them and their binding to documents, see https://www.w3.org/TR/cssom-1/.

// HTML specification
// Describes the HTML language (e.g. tags) and also the BOM (browser object model) – various browser functions: setTimeout, alert, location and so on, see https://html.spec.whatwg.org. ******It takes the DOM specification and extends it with many additional properties and methods.********