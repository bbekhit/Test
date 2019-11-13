let phone = "(510) 846-7253";
let re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
console.log(re.test(phone));

let zip = "95392-3";
let re = /^\d{5}(-\d{4})?$/;
// const re = /^[0-9]{5}(-[0-9]{4})?$/;
console.log(re.test(zip));

let email = "tes._-t@tes.";
let re = /^([a-zA-Z0-9-._]+)@([a-zA-Z0-9-._]+)\.([a-zA-Z]{2,5})$/;
let re = /^[a-zA-Z0-9_.]{1,}@[a-zA-Z0-9_.]{1,}\.[a-z]{2,5}$/;
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; //Brad
console.log(re.test(email));
