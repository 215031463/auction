/******  es5 新增数组方法  *******/

// forEach
let arr1 = [1, 2, 3, 4, 5];

arr1.forEach((val, index, arr) => {
  val *= 2;
});

console.log(arr1);

// map
let arr2 = [2, 3, 4, 5, 6];

let newArr2 = arr2.map(val => val * val); // map方法必需return, 否则返回一个length = arr2.length，值为undefined的数组

console.log(newArr2);

let users = [
  {name: '张含韵', email: 'zhang@email.com'},
  {name: '江一燕', email: 'jiang@email.com'},
  {name: '李小璐', email: 'li@email.com'},
  {name: '高圆圆', email: 'gao@email.com'}
];

let emails = users.map(user => user.email);

console.log(emails);


// filter
let arr3 = [0, 1, 2, 3];

let newArr3 = arr3.filter(val => val); //  遍历数组每个元素，根据返回的真值或者假值，转换成boolean值，决定是否过滤, 如果转换后为true 则通过，否则过滤掉

console.log(newArr3);


// some
let scores1 = [5, 8, 3, 10];

let current1 = 7;

let result1 = scores.some(val => val > current1); //遍历数组元素，只要有一个元素返回的为真值，就结束遍历，返回true

console.log(result);

// every
let scores2 = [1, 2, 3, 4, 5];

let current2 = 5;

let result2 =scores2.every(val => val < current2);

console.log(result2);


// indexOf 与字符串的indexOf类似
let arr4 = [1, 2, 3, 4, 6];

console.log(arr4.indexOf(6, 'x')); // 默认从索引 0 开始查找，错误下标时，根据默认找
console.log(arr4.indexOf(3, 2));
console.log(arr4.indexOf(3, 3));
console.log(arr4.indexOf(5));

// lastIndexOf  与字符串的lastIndexOf类似，想到与indexOf的倒序遍历

let arr5 = [1, 2, 3, 4, 5, 6];
console.log(arr5.lastIndexOf(5));
console.log(arr5.lastIndexOf(3, 4)); //  在索引值小于 4 的范围查找， 从后向前查找


// reduce
let arr6 = [1, 2, 3, 4, 5];

let sum6 = arr6.reduce((previous, current, index, arr) => { // reduce回调接受4个参数，previous表示上一次累加后的值，current表示当前元素...
  return previous + current;
});

console.log(sum6);

let sum = arr6.reduce((previous, current) => previous + current, 5); // reduce可以接受第二个可选参数，作为求和的初始值
console.log(sum);


let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let flatten = matrix.reduce((prev, current) => prev.concat(current));

console.log(flatten);

