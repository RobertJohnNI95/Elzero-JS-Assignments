/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

function showDetails (a = undefined, b = undefined, c = undefined) {
    let name = typeof a == 'string' ? a : typeof b == 'string' ? b : typeof c == 'string' ? c : "Visitor";
    let age = typeof a == 'number' ? a : typeof b == 'number' ? b :  typeof c == 'number' ? c : "Unknown";
    let hire = typeof a == 'boolean' ? a : typeof b == 'boolean' ? b : typeof c == 'boolean' ? c : false;
    let hireStatus = hire == true ? "Available" : "Not Available";

    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${hireStatus} For Hire`);
    document.write(`<hr><p>Hello ${name}, Your Age Is ${age}, You Are ${hireStatus} For Hire</p>`);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
showDetails("Osama");
showDetails(38);
showDetails(true);
showDetails(38, "Osama");
showDetails("Osama", true);
showDetails(true, 38);
showDetails(undefined);
showDetails();