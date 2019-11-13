let re;
re = /hello/;
re = /hello/i; //case sensitive

//test() return true or false and it takes the thing i want to test
const result = re.test("Hello"); //without i returns false
function myReplace(str, before, after) {
  if (/[A-Z]/.test(before[0])) {
    after = after
      .charAt(0)
      .toUpperCase()
      .concat(after.slice(1));
  }
  return str.replace(before, after);
}

// match() returns array or null and it takes
const amount = e.target.value;

if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
  this.setState(() => ({ amount }));
}
console.log(val);
console.log(val.source);

// email validation
var pattern = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);

// !password.match(
//       /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
//     )

// validate phone number
let phone = "(510) 846-7253";
let re = /^\(?\d{3}[.- ]?\d{3}[.- ]?\d{4}$/;
console.log(re.test(re));
