// Type Inference
//Means the  given value is  inferred by the compiler
//eg if a = 10 then its number  and if a = "10" then its string
let a1 = "12"; // String
let a2 = 12; // Number

//Type annotations
//So here we annotated that the value 
let a3:string;
//Or we can give any one of them like 
let a4: number | string | Boolean;
// now we can assogn any type of assigned values
a4 = true;
a4 = 10;
a4 = "true";
//all accepted

//also need to be done for parameters of a function
function func1(a:string,b:number) {
    return a + b;
}

