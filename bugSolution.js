function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // or handle the null case appropriately
  }
  // ... rest of the function
}