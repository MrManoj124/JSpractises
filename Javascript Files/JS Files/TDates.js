const d = new Date();
const day = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
console.log(`Today's date is: ${month}/${day}/${year}`);

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');
const timeDiff = date2.getTime() - date1.getTime();
const daysDiff = timeDiff / (1000 * 3600 * 24);
console.log(`Number of days between ${date1.toDateString()} and ${date2.toDateString()}: ${daysDiff}`);

//Date Formates
const date = new Date();
console.log(date.toDateString()); // e.g. "Mon Jan 01 2024"
console.log(date.toISOString()); // e.g. "2024-01-01T00:00:00.000Z"
console.log(date.toLocaleDateString()); // e.g. "1/1/2024" (depends on locale)
console.log(date.toLocaleString()); // e.g. "1/1/2024, 12:00:00 AM" (depends on locale)
console.log(date.toLocaleTimeString()); // e.g. "12:00:00 AM" (depends on locale)
console.log(date.toTimeString()); // e.g. "00:00:00 GMT+0000 (Coordinated Universal Time)"

//Date get Methods
const now = new Date();
console.log(now.getFullYear()); // e.g. 2024
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dat = new Date();
let mont = months[dat.getMonth()];
console.log(`Current month is: ${mont}`);

//get days in a month
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dates = new Date("2021-03-25");
let dey = days[dates.getDay()];
console.log(`The day of the week for ${dates.toDateString()} is: ${dey}`);


//Date set Methods
const date3 = new Date();
date3.setFullYear(2025);
date3.setMonth(11);
date3.setDate(25);
date3.setHours(10);
date3.setMinutes(30);
date3.setSeconds(0);
console.log(`Updated date: ${date3.toString()}`);
console.log(`Updated date in ISO format: ${date3.toISOString()}`);
console.log(`Updated date in locale format: ${date3.toLocaleString()}`);

//create a date in the future and compare it with today's date
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);
