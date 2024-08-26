function sayHello(theName, theGender) {
    let title = theGender == "Male" ? " Mr" : theGender == "Female" ? " Mrs" : "";
    console.log(`Hello${title} ${theName}`);
    document.write(`<hr><p>Hello${title} ${theName}<p>`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Mrs Eman"
sayHello("Sameh"); // "Hello Sameh"