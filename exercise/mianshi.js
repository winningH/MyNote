// 字节二面面试题
let x = [1, 2, 3];
let y = x; 
let z = [4, 5, 6];
y[0] = 10; 
y = z; 
z[1] = 20; 
x[2] = z = 30;
console.log(x, y, z);
// x: [10, 2, 30] y: [4, 20, 6] z: 30
