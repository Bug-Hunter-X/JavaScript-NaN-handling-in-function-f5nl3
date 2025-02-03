# JavaScript NaN Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to how the language handles NaN (Not a Number).  The `bug.js` file contains a function that exhibits unexpected behavior when provided NaN as input.  The `bugSolution.js` file offers a corrected version.

## Bug Description

The original code has a flaw in how it handles NaN values, resulting in an incorrect return value.  The goal is to identify and correct this unexpected behavior.

## Solution

The solution involves using `Number.isNaN()` to explicitly check for NaN and handle it appropriately.  This ensures the function behaves as expected in all scenarios.