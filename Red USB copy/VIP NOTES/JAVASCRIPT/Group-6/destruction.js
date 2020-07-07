// 1 -
// second element is not needed
let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
alert(title); // Consul

// 2 -
// Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// 3 -
// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)

// 4 -
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { title, width, height } = options;
alert(title); // Menu
alert(width); // 100
alert(height); // 200

// 5-
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;
// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200

// 6 -
let options = {
  title: "Menu",
};
let { width = prompt("width?"), title = prompt("title?") } = options;
alert(title); // Menu
alert(width); // (whatever the result of prompt is)

// 7 -
let options = {
  title: "Menu",
};
let { width: w = 100, height: h = 200, title } = options;
alert(title); // Menu
alert(w); // 100
alert(h); // 200

// 8 -
let options = {
  title: "Menu",
  height: 200,
  width: 100,
};
// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;
// now title="Menu", rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100

// 9 -
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    width,
    height,
  },
  items: [...rest], // assign items here
  title = "Menu", // not present in the object (default value is used)
} = options;
alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut

// 10 -  // VIP VIP VIP VIP
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
// undefined where default values are fine(using the default values so we enter undefined)
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};
// ...and it immediately expands it to variables
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert(`${title} ${width} ${height}`); // My Menu 200 100
  alert(items); // Item1, Item2
}
showMenu(options);
