let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// Match this "IP address" using a RegExp pattern

let myExp = /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/ig;

console.log(ip.match(myExp));
document.write(`<div>['${ip.match(myExp)}']</div>`);