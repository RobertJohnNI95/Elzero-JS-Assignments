let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let i = letter.length - letter.length
let j = i;

for (; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) continue;
    j++;
    console.log(`${j} => ${friends[i]}`);
}

// Output
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/