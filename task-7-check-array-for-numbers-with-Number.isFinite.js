// УСЛОВИЕ //

// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным
// числом(Number.isFinite).Для проверки используй цикл for.Числа добавляются в новый
// массив numbers с помощью метода push, а не числа - игнорируются.По завершению проверки
// массива array возвращается массив numbers.

// РЕШЕНИЕ //

// 1. Создать новый массива из исходного массива.
// 2. Проверить значение массива на наличие чисел через Number.isFinite с помощью for.
// 3. Добавлять только числа в новый массив через push.
// 4. Вернуть новый массив чисел.

function filterArray(array) {
  'use strict';
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (Number.isFinite(array[i])) {
      numbers.push(Number(array[i]));
    }
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]
