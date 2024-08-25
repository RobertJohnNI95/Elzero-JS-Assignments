/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let adminsNum = myAdmins.length - myAdmins.indexOf("Stop") + 1;

document.write(`<div>We Have ${adminsNum} Admins</div>`);

let teamNo = 1;
let j = 1;

while (teamNo <= adminsNum) {
    document.write(`<hr>`);
    document.write(`<div>`);
    document.write(`The Admin For Team ${teamNo} Is ${myAdmins[teamNo - 1]}`);
    document.write(`<h3>Team Members:</h3>`);
    j = 1;
    for (let i = 0; i < myEmployees.length; i++) {
        if (myEmployees[i][0] != myAdmins[teamNo - 1][0]) continue;
        document.write(`<p>-- ${j++} ${myEmployees[i]}</p>`);
    }
    document.write(`</div>`);
    teamNo++;
}