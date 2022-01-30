const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (uinput)=> {
            resolve(uinput);
        }, () => {
            reject();
        });
    });
}

/**
 * чтобы найти предыдущий X:
 * sqrt(X(k) + a) = X(k - 1)
 * 
 * если (X(k) + a) = X(k-1)^2
 * значит a < X(k-1)^2
 * 
 * Следовательно мы можем взять самое большое число,
 * которое нам дали и посчитать минимальное X(k-1),
 * чтобы равенство (X(k) + a) = X(k-1)^2 выполнялось
 */

function getMinStartSeq(n, seq) {
    seq = seq.sort((a, b) => b - a);

    let x0 = 0;
    for (curr of seq) {
        x0 = Math.ceil(Math.sqrt(x0 + curr));
    }
    return x0;
}

const main = async () => {
    let n = Number(await input(""));
    let sequence = (await input("")).split(" ").map(item => Number(item));
    rl.close();
    console.log(getMinStartSeq(n, sequence));
};

main();