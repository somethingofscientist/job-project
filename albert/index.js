// let a = 5;

// function fact(a) {
//    if (a == 1) {
//       return a;
//    }
//    return (a - 1) + (a - 2);
// }

// console.log(fact(5))


let Input = [1, 1, 1, 2, 3, 3, 6, 6, 7]
// Output: [1, 2, 3, 6, 7]


function mapping(){
   let map = new Map();

for (let i = 0; i < Input.length; i++) {
   if (map.has(Input)) {
      map.get(Input)
   }
   else { map.set(Input + 1) }
}

if (map[1].length > 1) {
   return map[0];
}
}