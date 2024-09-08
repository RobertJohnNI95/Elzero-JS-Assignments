let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)]);
document.write(`<div>(${new Set(myFriends).size}) [${[...new Set(myFriends)].map(e => ` "${e}"`)} ]</div>`);

// Solution in one line
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']