/*
* Написать функцию с колбеком, которая принимает число с колбеком
* и через секунду выводить в консоль число. Ограничения: для решения задачи
* setTimeout можно использовать только один раз! Реализовать вывод в консоль
* от 1 до 10 через секунду. Вызываем так (только более большая вложенность):
*
*  func(1, (n) => {
*    func(n, (n) => {
*      func(n, (n) => {
*          func(n);
*      })
*    })
*  });
*/