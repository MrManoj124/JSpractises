let d = new Date(2026, 1, 27); //1 = Febrauary

let da = new Date(); d.setDate(d.getDate() + 7); // Changes the original object 

let today = Temporal.Now.plainDateISO();
let nextWeek = today.add({ days: 7 });


//JavaScript Temporal Vs Date
//Create a Date 
let date = new Date(2012, 5, 2);

//Add 7 days
date.setDate(date.getDate() + 7);

//// Here original date is gone


//Temporal Example
//Create a Date 
let thi = Temporal.PlainDate.from("2026-05-01");

//Add 6 days
let next = thi.add({ days : 7});

//Here original date is kept


//<--Date and Time Zone-->
// Months are 0-based (4 = May)
const de = new Date(2026, 4, 1);

// Might be 2026-04-30T22:00:00.000Z in some time zones:
de.toISOString();


//<--Handling Time Zones-->
let dev = new Date();
console.log(dev.toString());
console.log(dev.toUTCString());


//Temporal Example with Time and Date zone
let zdt = Temporal.Now.zonedDateTimeISO();

console.log(zdt);


//Date Parsing is Inconsistent
//Temporal is 1-Based
// May 1:
new Date(2026, 4, 1)

// May 1:
new Temporal.PlainDate(2026, 5, 1)


//<--Date Math-->
let start = new Date("2026-05-17");

start.setDate(start.getDate() + 30);



//Temporal Example with PlainDate function to set Date
let started = Temporal.PlainDate.from("2026-05-17");

let result = started.add({ days: 30 });