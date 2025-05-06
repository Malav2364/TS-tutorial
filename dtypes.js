// datatypes in Typescript 
// Primitive Datatypes (Number , String, Boolean)
//Arays
// Tuples
// Enums
// Any unknown Void Null undefined
var a = 12;
var b = "malav";
// Arrays
var c = [1, 2, 3, 4, 5, "Malav", true]; // mixed array
var arr1 = [1, 2, 3, 4, { name: "Malav" }];
var arr2 = [1, 2, 3]; //Only Numbers are alloweed in this array number array
//Tuples 
var tpl1 = [1, "Malav"]; //tuples are having only 2 possible datatypes 
//enums just like an object but it is a special type of object that allows you to define a set of named constants.
//Enums are a way to give more friendly names to sets of numeric values.    
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
color.red;
//Any Datatype
//this is explicitly telling typescript that this variable can be of any type.
var m;
m = 10;
//this will accept any type of value in it as no datatype is defined
var n;
n = 10;
var z;
z = 15;
var x;
x = "Malav Patel";
//Any in typescript means typescript off
var j;
j = "Malav";
//Unknown means we have to define for what type the value is 
var d;
d = 10;
d = "Malav Patel";
//we have to define the type before using it 
//Example 
if (d === "string") {
    d.toLowerCase();
}
var k = null; //here it is type any 
k = 10;
var l;
// l = "Malav"; //type null string not assignable
var i;
// i = 10; //undefined is not assignable to number
function nevr() {
    while (true) {
    }
}
nevr();
//if type is never then it will not return anything and not execute anything after the block of code
console.log("Hello!!");
