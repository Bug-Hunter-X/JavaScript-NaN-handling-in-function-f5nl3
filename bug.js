function foo(a, b) {
  if (a === 0) {
    return 0; 
  }
  return a + b;
}

console.log(foo(0, 1)); // Output: 0
console.log(foo(1, 1)); // Output: 2
console.log(foo(NaN, 1)); //Output: NaN