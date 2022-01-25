/*
* Сделать функцию, которая принимает массив любых целых чисел,
* которая возращает истину, если все элементы четные,
* если хотя бы один элемент нечетный, то false.
*/

function isEvenArray(arrNums) {
    if (arrNums.find(item => item % 2 !== 0)) {
        return false;
    }
    return true;
}

let evenArr = [2, 4, 6, 8, 10];
let oddArr = [2, 4, 5, 8, 10];

console.log(isEvenArray(evenArr)); // true
console.log(isEvenArray(oddArr)); // false

/*
* Сделай функцию, которая принимает массив любых целых чисел,
* которая возращает новый массив, где все элементы кратны пяти.
* Например, [1,2,5,12,15,21] вернет [5,15]
*/

function multipleOfFive(arr) {
    return arr.filter(item => item % 5 === 0);
}

console.log(multipleOfFive([1, 2, 5, 12, 15, 21]));

/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
* и функция возращает среднее арифметическое, (округлить результат до десятых)
*/

function meanValue(arr) {
    // let sum = 0;
    // for (let num of arr) {
    //     sum += num;
    // }
    let sum = arr.reduce((acc, curr) => acc + curr);
    return Number((sum / arr.length).toFixed(1));
}

console.log(meanValue([1,2,3,4,5]));

/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
* и переносит первый элемент массива в конец (например можно засунуть первый
* элемент в конец, затем удалить первый элемент)
*/

function pushShit(arr) {
    if (arr) {
        arr.push(arr.shift());
    }
}

let myArr = [1, 2, 3, 4, 5];
console.log(myArr);
pushShit(myArr);
console.log(myArr);

/*
* Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет
* имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массив, где каждый элемент
* представляет из себя строку "Имя: Иван, возраст: 23".
*/

function parsePeople(employees) {
    return employees.map(item => "Имя: " + item.name + ", возраст: " + item.age);
}

let arrMembers = [
    {
        name: "Иван",
        age: 23
    },
    {
        name: "Сергей",
        age: 21
    },
    {
        name: "Руслан",
        age: 22
    }
];

console.log(arrMembers);
console.log(parsePeople(arrMembers));
