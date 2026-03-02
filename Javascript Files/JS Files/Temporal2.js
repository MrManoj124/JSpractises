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