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