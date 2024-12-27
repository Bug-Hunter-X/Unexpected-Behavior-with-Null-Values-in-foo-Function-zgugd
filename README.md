# Unexpected Behavior with Null Values in foo Function

This repository demonstrates a common JavaScript bug involving unexpected behavior when null values are passed as arguments to a function.

## Bug Description
The `foo` function does not correctly handle null values as input arguments.  This can lead to unexpected behavior or errors in the rest of the application.

## Bug Reproduction
1. Clone this repository.
2. Open `bug.js` and observe the function definition.
3. Run the `bug.js` file. The function does not check for null or undefined values and thus returns unexpected results. 

## Solution
The `bugSolution.js` file provides a corrected version of the `foo` function that explicitly handles null values, preventing unexpected behavior.