let a = 5, b = 2, c = 4, d = 9;

[a, b] = [b, a]

console.log(a, ',', b)

c = c + d;
d = c - d;
c = c - d;
console.log(c, ',', d)