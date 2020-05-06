# typescript-sort

1. in terminal make sure you do tsc index.ts
2. seperate the files into a build and source folder. type 'tsc --init' into your command line to get access to the config file.
3. uncomment out rootDir and outDir in configs. rootDir is for typescript (our src folder), and rootDir for what's compiled (build)
4. tsc -w

to run in termin do npm start

## Bubble Sort
double-nested for loops, that compares if the left-hand side > right-hand side, and if so, swap them. After the first iteration, the greatest number will be on the right hand side.

## Type Guards
Anytime we use a narrow type of a value to a primitive type (ie number, string, boolean, or symbol), we use the **typeof** in our type guard.

To narrow down every other type of value (value that is created with a constructor function) we use **instanceof**.

Even though arrays can be a typeof in javascript, it is NOT in typescript. We must use instanceof.