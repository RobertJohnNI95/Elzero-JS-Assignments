let myDate = new Date("Apr-30-2022 18:13:20");

let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(myDate);
console.log(`Previous Month Is ${monthList[myDate.getMonth()]} And Last Day Is ${myDate.getDate()}`);

// Needed Output
/*
"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"
*/