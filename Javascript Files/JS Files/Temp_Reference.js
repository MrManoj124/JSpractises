// Main Temporal Objects

// Temporal objects are the core part of the Temporal API which aims to replace the old Date object.

// All Temporal objects are immutable, which helps prevent bugs related to accidental modification of time values.
// Object	Description
// Temporal.Now	The current time
// Temporal.ZonedDateTime	Date and time in a specific time zone
// // Temporal.Instant	A fixed point in time, independent of time zone



//Plain Dates and Times
/*Temporal.PlainDate()	Calendar date only (2026-08-14)
Temporal.PlainTime()	Time of day only (14:30:00)
Temporal.PlainDateTime()	Full date and time (2026-11-14 14:30:00)
Temporal.PlainYearMonth()	Year and month only (2026-05)
Temporal.PlainMonthDay()	Month and day only (06-12)*/



//Temporal.Now
// The Temporal.Now object has methods for getting the current time in various formats.
// Use the Temporal.Now.zonedDateTimeISO() method for current system time:

// Example
const now = Temporal.Now.zonedDateTimeISO();


//<===Temporal.ZonedDateTime===>

// A Temporal.ZonedDateTime is a timezone and calendar-aware date/time object that represents a real time event from the perspective of a particular region on Earth.
// Example: August 15th, 1984 at 3:24 AM in US Pacific time (in Gregorian calendar).

//Example
const zonedDate = Temporal.ZonedDateTime.from({
  timeZone: 'America/Los_Angeles',
  year: 1995,
  month: 12,
  day: 7,
  hour: 3,
  minute: 24,
  second: 30,
  millisecond: 0,
  microsecond: 3,
  nanosecond: 500
});