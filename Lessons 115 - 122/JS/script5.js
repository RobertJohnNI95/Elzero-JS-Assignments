const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

// Write Your Destructuring Assignment/s Here
const {
    title: t,
    developer: d,
    releases: {
        "Oath In Felghana" : [u, j],
        "Ark Of Napishtim" : {
            US: u_price,
            JAP: j_price
        },
        Origin: or
    }
} = game;

const [o, a] = Object.keys(game.releases);

console.log(`My Favourite Games Style Is ${t} Style`);
document.write(`<div>${`My Favourite Games Style Is ${t} Style`}<hr>`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
document.write(`${`And I Love ${d} Games`}<hr>`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
document.write(`My Best Release Is ${o} It Released in ${u} & ${j}<hr>`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
document.write(`Although I Love ${a}<hr>`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
document.write(`${a} Price in USA Is ${u_price}<hr>`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
document.write(`${a} Price in Japan Is ${j_price}<hr>`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
document.write(`Origin Price Is ${or}</div>`);
// Origin Price Is 30 USD