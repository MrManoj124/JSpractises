let d = new Date(2026, 1, 27); //1 = Febrauary

let da = new Date(); d.setDate(d.getDate() + 7); // Changes the original object 

let today = Temporal.Now.plainDateISO();
let nextWeek = today.add({ days: 7 });