// 1- creating date
let date = new Date()
let date = new Date(24 * 3600 * 1000)
let date = new Date("2017-01-26") // same as Date.parse
let date = new Date(year, month, date, hours, minutes, seconds, ms) // first 2 are obligatory

// 2 - 
getFullYear()
getUTCFullYear()
//Get the year (4 digits)

getMonth()
getUTCMonth()
//Get the month, from 0 to 11.

getDate()
getUTCDay()
//Get the day of month, from 1 to 31, the name of the method does look a little bit strange.

getHours(), getMinutes(), getSeconds(), getMilliseconds()
//Get the corresponding time components.

getTime()
// Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

getTimezoneOffset()
// Returns the difference between the local time zone and UTC, in minutes:

// 3- Setting date
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) //(sets the whole date by milliseconds since 01.01.1970 UTC)

let today = new Date();
today.setHours(0);
alert(today); // still today, but the hour is changed to 0
today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

// examples
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
alert( date ); // 1 Mar 2016

let date = new Date();
date.setSeconds(date.getSeconds() + 70);
alert( date ); // shows the correct date

let date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(1); // set day 1 of month
alert( date );
date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015

// 4 - Number of date gives ms
let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()

let start = new Date(); // start measuring time
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = new Date(); // end measuring time
alert( `The loop took ${end - start} ms` );

// 5 - It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.
Date.now()

// 6 - 


