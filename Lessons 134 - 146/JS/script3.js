let phone = "+(995)-123 (4567)";
// Use a RegExp to match this phone number

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g));
document.write(`<div>['${phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g)}']</div>`);