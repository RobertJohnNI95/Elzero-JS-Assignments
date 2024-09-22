console.log(new Date(2004, 4, 9, 0, 0, 0));
console.log(new Date(1084050000000));
console.log(new Date("May 9 2004 00:00:00"));

// Needed Output (Using my birhtdate)
/*
"Sun May 09 2004 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Sun May 09 2004 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Sun May 09 2004 00:00:00 GMT+0200 (Eastern European Standard Time)"
*/

// NOTE: I have no idea why does it print GMT+0300 instead of GMT+0200