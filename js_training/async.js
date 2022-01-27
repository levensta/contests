/*
* Выводим от 1 до 10 через секунду каждый раз, используя Promise.
* Ограничения: setTimeout и new Promise() мы можем вызывать только
* один раз для решения нашей задачи.
*/

let promise = new Promise(function (resolve, reject) {
    let i = 0;
    let timerId = setTimeout(function inc(i) {
        console.log(i++);
        if (i <= 10) {
            timerId = setTimeout(inc, 1000, i);
        }
        else {
            resolve(i);
        }
    }, 1000, i);
});