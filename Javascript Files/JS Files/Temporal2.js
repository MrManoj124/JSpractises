//<--Create a PlainDateTime->
const dateTime = Temporal.PlainDateTime.from("2026-05-17T10:00:00");


//<--Get the Current Date and Time-->
const now = Temporal.Now.plainDateTimeISO();


//<--Add or Subtract Time-->
const dateTimes = Temporal.PlainDateTime.from("2026-05-17T10:00:00");

const earlier = dateTimes.subtract({ minutes: 30 });
const later = dateTimes.add({ hours: 2 });

//<--Convert from Instant-->
const instant = Temporal.Now.instant();
const zoned = instant.toZonedDateTimeISO("Europe/Oslo");

//<--Add a Time Duration-->
const date = Temporal.PlainDate.from("2026-02-17");
const duration = Temporal.Duration.from({ days: 7 });

const result = date.add(duration);


//<--Subtract a Time Duration-->
const dates = Temporal.PlainDate.from("2026-02-17");
const durations = Temporal.Duration.from({ days: 7 });

const results = dates.subtract(durations);
console.log(results);



//<--Calculate the Difference Between Two Dates-->
const wedding = Temporal.PlainDate.from('2026-05-17');
const today = Temporal.Now.plainDateISO();
const duration1 = today.since(wedding);
console.log(duration1);


//<--JavaScript Temporal until()-->
//Syntax
//temporal.until(temporal, options)


//Example for Temporal until function
const wedding1 = Temporal.PlainDate.from('2026-05-17');
const today1 = Temporal.Now.plainDateISO();
const duration2 = today.until(wedding1);


//<===Migrate from Date to Temporal===>
// Replace new Date()
//Date Example 
const day= new Date();


//Temporal Example
const instanted = Temporal.Now.instant();

//Temporal Date only
const todays = Temporal.Now.plainDateISO();

//Replace Date.now()
const timestamp = Date.now();

//Temporal Example2
const nows = Temporal.Now.instant();
const timestamps = instant.epochMilliseconds);

//Replace getFullYear(), getMonth(), getDate()


//Date Example
const d = new Date();

let year = d.getFullYear();
let month = d.getMonth();
let day1 = d.getDate();

//Temporal Example
const date1 = Temporal.Now.plainDateISO();

let year1 = date.year;
let month2 = date.month;
let day3 = date.day;


//Replace setDate() and Other Mutating Methods
//Date Example
const datu= new Date("2026-03-09");
datu.setDate(datu.getDate() +5);

//Temporal Example
const date5 = Temporal.PlainDate.from("2026-02-17");
const nextWeek = date5.add({ days: 7 });


//Replace Date Arithmetic
//Date Example
const starts = new Date("2026-05-01");
const ends = new Date("2026-05-17");

const duration01 = end - start;


//Temporal Example
const start = Temporal.PlainDate.from("2026-05-01");
const end = Temporal.PlainDate.from("2026-05-17");

const duration02 = start.until(end);



//<===Replace Time Zone Handling===>
    