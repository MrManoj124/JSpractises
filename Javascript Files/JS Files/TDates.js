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