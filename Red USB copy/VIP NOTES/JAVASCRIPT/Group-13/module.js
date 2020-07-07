// NAMED
export const PI = 3.14;
export function printPI(){
  console.log(3.14)
}


// OR 
export {
  PI, printPI
}

import * as myModule from "./module" // myModule.PI
import { PI, printPI } from "./module" // i destructe the exported object


// DEFAULT
export default "Hello World"
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
import myDef, { PI, printPI } from "./module" // i destructe the exported object

// before modules
// To name some (for historical reasons):

// AMD – one of the most ancient module systems, initially implemented by the library require.js.
// CommonJS – the module system created for Node.js server.
// UMD – one more module system, suggested as a universal one, compatible with AMD and CommonJS.


// module scripts are deferred
{/* <script type="module">
  alert(typeof button); // object: the script can 'see' the button below
  // as modules are deferred, the script runs after the whole page is loaded
</script>
// Compare to regular script below:
<script>
  alert(typeof button); // Error: button is undefined, the script can't see elements below
  // regular scripts run immediately, before the rest of the page is processed
</script>
<button id="button">Button</button> */}


// external scripts 
// <!-- another-site.com must supply Access-Control-Allow-Origin -->
// <!-- otherwise, the script won't execute -->
// <script type="module" src="http://another-site.com/their.js"></script>

import {sayHi} from 'sayHi'; // Error, "bare" module
// the module must have a path, e.g. './sayHi.js' or wherever the module is


// Webpack
// Take a “main” module, the one intended to be put in <script type="module"> in HTML.
// Analyze its dependencies: imports and then imports of imports etc.
// Build a single file with all modules (or multiple files, that’s tunable), replacing native import calls with bundler functions, so that it works. “Special” module types like HTML/CSS modules are also supported.
// In the process, other transformations and optimizations may be applied:
// Unreachable code removed.
// Unused exports removed (“tree-shaking”).
// Development-specific statements like console and debugger removed.
// Modern, bleeding-edge JavaScript syntax may be transformed to older one with similar functionality using Babel.
// The resulting file is minified (spaces removed, variables replaced with shorter names, etc).

// In production, people often use bundlers such as Webpack to bundle modules together for performance and other reasons.