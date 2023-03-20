let a = 5;
let b = 15;

a = a + b;
console.log(a)
b = a - b;
console.log(b)
a = a - b;
console.log(a)

[a, b] = [b, a];

console.log(a, b);