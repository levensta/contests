/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//     var answer = [];
//     for (let i = 0; i < nums.length; ++i) {
//         for (let j = i + 1; j < nums.length; ++j) {
//             if ((nums[i] + nums[j]) === target) {
//                 return ([nums[i], nums[j]]);
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (let i = 0; i < nums.length; i++) {
//         // complement - это второе число, прибавив к которому nums[i]
//         // можно потенциально получить target
//         let complement = target - nums[i];
//         // в качестве значений хранится индекс в массиве nums
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i);
//     }
// };

var twoSum = function(nums, target) {
    let complement = {};
    for (let i = 0; i < nums.length; ++i) {
        // в качестве значения – индекс в массиве nums,
        // а индекс не может быть отрицательным
        if (complement[nums[i]] >= 0) {
            return [complement[nums[i]], i];
        }
        complement[target - nums[i]] = i;
    }
}

var arr = [1, 2, 3, 4, 5, 25, 26];
console.log(twoSum(arr, 51)); // 5, 6