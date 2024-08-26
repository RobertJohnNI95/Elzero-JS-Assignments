function checkStatus(a, b, c) {
    let name = typeof a == 'string' ? a : typeof b == 'string' ? b : typeof c == 'string' ? c : "Visitor";
    let age = typeof a == 'number' ? a : typeof b == 'number' ? b :  typeof c == 'number' ? c : "Unknown";
    let hire = typeof a == 'boolean' ? a : typeof b == 'boolean' ? b : typeof c == 'boolean' ? c : false;
    let hireStatus = hire == true ? "Available" : "Not Available";

    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${hireStatus} For Hire`);
    document.write(`<hr><p>Hello ${name}, Your Age Is ${age}, You Are ${hireStatus} For Hire</p>`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"