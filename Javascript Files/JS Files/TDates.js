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
