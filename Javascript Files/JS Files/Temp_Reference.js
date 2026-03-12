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