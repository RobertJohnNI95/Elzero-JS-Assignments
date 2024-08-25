let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (friends[index][index - index] != "A" && typeof friends[index] != 'number') {
        console.log(`${++counter} => ${friends[index]}`);
    }
    index++;
}

// Output
/*
"1 => Sayed"
"2 => Mahmoud"
*/