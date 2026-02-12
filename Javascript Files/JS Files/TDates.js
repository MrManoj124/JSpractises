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