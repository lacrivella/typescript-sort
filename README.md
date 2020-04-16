# typescript-sort

1. in terminal make sure you do tsc index.ts
2. seperate the files into a build and source folder. type 'tsc --init' into your command line to get access to the config file.
3. uncomment out rootDir and outDir in configs. rootDir is for typescript (our src folder), and rootDir for what's compiled (build)
4. tsc -w

## Bubble Sort
double-nested for loops, that compares if the left-hand side > right-hand side, and if so, swap them. After the first iteration, the greatest number will be on the right hand side.