// datatypes in Typescript 
// Primitive Datatypes (Number , String, Boolean)
//Arays
// Tuples
// Enums
// Any unknown Void Null undefined

let a = 12;
let b = "malav"

// Arrays
let c = [1,2,3,4,5, "Malav", true]; // mixed array
let arr1 = [1,2,3,4,{name : "Malav"}]

let arr2: number[] = [1,2,3]; //Only Numbers are alloweed in this array number array

//Tuples 
let tpl1: [number, string] = [1, "Malav"] //tuples are having only 2 possible datatypes 

//enums just like an object but it is a special type of object that allows you to define a set of named constants.
//Enums are a way to give more friendly names to sets of numeric values.    
 enum color {
    red = 1, 
    green = 2, 
    blue = 3
 }

 color.red


 //Any Datatype
 //this is explicitly telling typescript that this variable can be of any type.
 let m: number;
 m=10;

//this will accept any type of value in it as no datatype is defined
 let n;
 n=10
