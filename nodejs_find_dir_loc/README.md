# Code challange

## Problem description

Help us find the directory across our repositories with the most lines of code (LOC).

You are allowed to install additional dependenies if you like, but the problem is solvable purely with the standard library.

hint: You can use the built-in `fetch` function to download the files from our server

### Input

The repositories can be found on the following urls:

```
https://coding-challange-public.s3.eu-central-1.amazonaws.com/find_dir_loc/1.json
https://coding-challange-public.s3.eu-central-1.amazonaws.com/find_dir_loc/2.json
https://coding-challange-public.s3.eu-central-1.amazonaws.com/find_dir_loc/3.json
https://coding-challange-public.s3.eu-central-1.amazonaws.com/find_dir_loc/4.json
https://coding-challange-public.s3.eu-central-1.amazonaws.com/find_dir_loc/5.json
https://coding-challange-public.s3.eu-central-1.amazonaws.com/find_dir_loc/6.json
```

Each respository has the following format:

```typescript
type Directory = { name: string; loc: number; subDirs: Directory[] };
```

### Output

Your program should print the following output to the terminal:

```
The largest directory is:
a/b/c = xxx LOC
```

where `a/b/c` is the path to the directory (in this example the directory 'c' is a subdirectory of 'b', which itself is a subdirectory of 'a') and `xxx` is the lines of code in the directory 'c'.

## Getting started

Make sure you're running the newest version of node.js 24.

Clone this repo and run the following commands:

```bash
cd nodejs_find_dir_loc
npm install
npm run dev
```

then start implementing your solution inside `solution.ts`
