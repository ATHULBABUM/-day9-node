/*var url="http://ictkerala.org/";
function print(message){
    console.log(message);
}
module.exports=print;//return an object.*/


var url="http://ictkerala.org/";
function print(message){
    console.log(message);
}
module.exports.display=print;
module.exports.link=url;