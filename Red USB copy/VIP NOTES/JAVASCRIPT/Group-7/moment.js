// https://devhints.io/moment
// https://www.youtube.com/watch?v=n80RRNS1k64&t=24s

// ***********************Andrew*********************************
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

// export default (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     const createdAtMoment = moment(expense.createdAt);
//     const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
//     const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

//     return startDateMatch && endDateMatch && textMatch;
//   })

  // export default (expenses, { text, sortBy, startDate, endDate }) => {
  //   return expenses.filter((expense) => {
  //     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
  //     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
  //     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
  //     return startDateMatch && endDateMatch && textMatch;
  //   }).sort((a, b) => {
  //     if (sortBy === 'date') {
  //       return a.createdAt < b.createdAt ? 1 : -1;
  //     } else if (sortBy === 'amount') {
  //       return a.amount < b.amount ? 1 : -1;
  //     }
  //   });
  // };
  
// ***************PARSING*******************

// new Date()
let m = moment()

//in UTC MODE
let m = moment.utc()

// create an 8601 string 
//new Date("2019-05-17")
let m = moment("2019-05-17")
let m = moment("2019-05-17T23:10:0.000")

// using a format
// new Date(2019,5)
let m = moment("12/06/2013 4:50pm", "DD/MM/YYYY h:mmA")

//using milliseconds since epoch(1970) //new Date(ms)
let m = moment(60000)

//using seconds since epoch
let m = moment.unix(60000)

// ********************GETTING & SETTING*******************
let m = moment()
m.seconds() || m.get("seconds") // getMinutes()
m.minutes() // getSeconds()
m.hours()

// to set just add a number
m.seconds(45)
m.set("day", 8) //will give us monday of following week

// ************************Comparing*******************
let m1 = moment()
let m2 = moment("2020-1-1")
console.log(moment.max(m1,m2));

// ***************************Manipulating*********************
let m = moment()
m.add(7, 'days').add(1, 'months'); // with chaining
m.add({days:7,months:1}); // with object literal

moment().subtract(1.5, 'months') == moment().subtract(2, 'months')
moment().subtract(.7, 'years') == moment().subtract(8, 'months') //.7*12 = 8.4, rounded to 8

moment().startOf('year');
moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);

// *****************************Displaying**********************************
var a = moment('2016-06-06T21:03:55');//now
var b = moment('2016-05-06T20:03:55');

console.log(a.diff(b, 'minutes')) // 44700
console.log(a.diff(b, 'hours')) // 745
console.log(a.diff(b, 'days')) // 31
console.log(a.diff(b, 'weeks')) // 4

let isToday = moment(0, "HH").diff(date, "days") == 0;
isToday = date => moment(0,"HH").diff(date, "days") == 0;