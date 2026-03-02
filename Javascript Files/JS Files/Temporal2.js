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
