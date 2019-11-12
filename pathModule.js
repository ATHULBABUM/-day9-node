/*console.log(__filename);
console.log(__dirname);
console.log(console.error);*/

/*const path=require("path");
var pathobj=path.parse(__filename);
console.log(pathobj);*/

var path=require("path");
var p2="/home/myfile"
var p3="file/athul"
var fullpath=path.join(p2,p3);
console.log(fullpath);