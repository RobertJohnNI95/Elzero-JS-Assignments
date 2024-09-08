let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let infoMap = new Map();
for (let i = 0; i < Object.keys(myInfo).length; i++) {
    infoMap.set(Object.keys(myInfo)[i], Object.values(myInfo)[i]);
}

console.log(infoMap);
console.log(infoMap.size);
console.log(infoMap.has("role"));

// Needed Output
/*
Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true
*/