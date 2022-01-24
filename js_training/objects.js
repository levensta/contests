/*
* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
* Должно получиться 390. Если объект salaries пуст, то результат должен быть 0
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

/*
* Создайте функцию multiplyNumeric(obj), которая
* умножает все числовые свойства объекта obj на 2.
*/

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

/*
* Написать объект ladder - объект, который
* позволяет подниматься вверх и спускаться
*/

let ladder = {
    steps: 0,
    showStep: function () {
        console.log(this.steps);
    },
    up: function () {
        ++this.steps;
    },
    down: function () {
        --this.steps;
    }
}

ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
ladder.up();
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1