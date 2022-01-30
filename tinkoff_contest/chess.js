const readline = require('readline');

Array.matrix = function(numrows, numcols, initial) {
    let arr = [];
    for (let i = 0; i < numrows; ++i) {
        let columns = [];
        for (let j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

let W, H;
let chessboard = Array.matrix(51, 51, -1); 

function countSteps(x, y) {
    if (x < 1 || y < 1 || x > W || y > H) {
        return 0;
    }
    if (x === 1 && y === 1){
        return 1;
    }
    if (chessboard[x][y] != -1){
        return chessboard[x][y];
    }
    // идем в обратную сторону: с верхнего правого угла до левого нижнего
    chessboard[x][y] = (countSteps(x - 2, y - 1) + countSteps(x - 1, y - 2));

    return chessboard[x][y];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    let n, m;
    [n, m] = input.split(' ').map(item => Number(item));
    rl.close();
    // в 1700 случаях из 2500 ответ будет 0,
    // включая кейс с размером 1x1
    if (n === 1 || m === 1 || ((n + m) % 3) !== 2) {
        console.log(0);
    }
    else {
        W = n;
        H = m;
        console.log(countSteps(n, m));
    }
});