myFun("one", "two", "three", "four", "five", "six");
function myFun(a, b, ...manyMoreArgs) {
   console.log("a", a);
   console.log("b", b);
   console.log("manyMoreArgs", manyMoreArgs);
 }
 