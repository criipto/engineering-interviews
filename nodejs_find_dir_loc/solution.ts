type Directory = { name: string; loc: number; subDirs: Directory[] };

const files = ["1.json", "2.json", "3.json", "4.json", "5.json", "6.json"];
const baseUrl =
  "https://coding-challange-public.s3.eu-central-1.amazonaws.com/find_dir_loc/";

console.log("The largest directory is:");
console.log(`foo/bar/baz @ 1234 LOC`);
