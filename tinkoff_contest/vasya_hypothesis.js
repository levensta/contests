const readline = require('readline');

function hypothesis(A, B, n) {
    if (n === 0) {
        if (A === B) {
            return "YES";
        }
        return "NO";
    }
    else {
        if (A > B && (A - B) % 2 === 0 && n <= (A - B) / 2) {
            return "YES";
        }
        return "NO";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let A, B, n;
    [A, B, n] = input.split(' ').map(value => Number(value));
    rl.close();
    console.log(hypothesis(A, B, n));
});