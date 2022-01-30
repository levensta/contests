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

function roadToThePeak(mountainHeight, arrJumpHeight, arrSlidingDown) {
    let currentHeight = 0;
    let countJumps = 0;
    while (currentHeight < mountainHeight) {
        currentHeight += arrJumpHeight[mountainHeight - currentHeight - 1];
        ++countJumps;
        currentHeight -= arrSlidingDown[mountainHeight - currentHeight - 1];
    }
    return countJumps;
}

const main = async () => {
    let mountainHeight = Number(await input(""));
    let arrJumpHeight = (await input("")).split(" ").map(item => Number(item));
    let arrSlidingDown = (await input("")).split(" ").map(item => Number(item));
    rl.close();
    // console.log(mountainHeight, arrJumpHeight, arrSlidingDown);
    console.log(roadToThePeak(mountainHeight, arrJumpHeight, arrSlidingDown));

};

main();