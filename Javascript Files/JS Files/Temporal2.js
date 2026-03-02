//<--Create a PlainDateTime->
const dateTime = Temporal.PlainDateTime.from("2026-05-17T10:00:00");


//<--Get the Current Date and Time-->
const now = Temporal.Now.plainDateTimeISO();


//<--Add or Subtract Time-->
const dateTimes = Temporal.PlainDateTime.from("2026-05-17T10:00:00");

const earlier = dateTimes.subtract({ minutes: 30 });
const later = dateTimes.add({ hours: 2 });