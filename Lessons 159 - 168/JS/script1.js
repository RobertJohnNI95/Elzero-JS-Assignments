/*
    Print the seconds, minutes, hours, days, months, and years from your birthdate
    My Birthdate: May 9, 2004, (Let's say at) 12:00:00 AM GMT
*/

let bDate = new Date(2004, 4, 9, 0, 0, 0, 0); // Birthdate: May 9, 2004, 12:00:00 AM
let cDate = new Date() // Cuurent Date: Now

let diff = cDate - bDate;

console.log(Math.trunc(diff / 1000) + " Seconds"); // Seconds (Milliseconds Divided By 1000)

console.log(Math.trunc(diff / 1000 / 60) + " Minutes"); // Minutes

console.log(Math.trunc(diff / 1000 / 60 / 60) + " Hours"); // Hours

console.log(Math.trunc(diff / 1000 / 60 / 60 / 24) + " days"); // Days

console.log(Math.trunc(diff / 1000 / 60 / 60 / 24 / 30) + " Months"); // Months

console.log(Math.trunc(diff / 1000 / 60 / 60 / 24 / 365.25) + " Years"); // Years