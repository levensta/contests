const readline = require('readline');


function calc(m, n) {
    let count = 0;
    while (n > 1) {
         count += Math.floor(m / n);
         [m, n] = [n, m % n];
    }
    return (n !== 0) ? count + m : count;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let m, n;
    [m, n] = input.split(' ').map(item => Number(item));
    rl.close();
    console.log(Number(calc(m, n)));
});