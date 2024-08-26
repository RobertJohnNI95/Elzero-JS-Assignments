function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100) {
        console.log("Age Out Of Range");
        document.write("<hr>Age Out Of Range");
        return;
    }
    let months = theAge * 12;
    let weeks = Math.round(months * 30 / 7);
    let days = months * 30;
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    console.log(`Your Age Is:
    ${months} Months,
    ${weeks} Weeks,
    ${days} Days,
    ${hours} Hours,
    ${minutes} Minutes,
    ${seconds} Seconds.`);
    document.write(`
        <hr>
        <div>
            Your Age Is:
            <ul>
                <li>${months} Months,</li>
                <li>${weeks} Weeks,</li>
                <li>${days} Days,</li>
                <li>${hours} Hours,</li>
                <li>${minutes} Minutes,</li>
                <li>${seconds} Seconds.</li>
            </ul>
        </div>
        `);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months