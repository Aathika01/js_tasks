let a = "hello";
let b = "world";

// Swap a and b
a = a + b;
b = a.substring(0, a.length - b.length);
a = a.substring(b.length);

console.log(a);  
console.log(b);  