"use strict";
/*
All of the data type mentioned below are Primitive Data Type: data type defined in the programming language itself.
*/
/*
The Undefined Type:
The undefined type has exact one value that is undefined. Any variable that has not been assigned a value has the value undefined and its type is also undefined.
*/

let userId;

function returnNothing() {
    return;
}

const result = returnNothing();

console.table({
    "Value of userId": userId,
    "Type of userId": typeof userId,
    "A function that returns nothing actually returns": result
});

/*
The Null Type:
The null type has exact one value that is null. The meaning of null is the intentional absence of any object value. The type of null is object.
*/

let userName = null;

console.table({
    "Value of the username": userName,
    "Type of the username": typeof userName
});

/*
The Boolean Type:
The boolean type represent a logical entity having two values, called true or false
*/

let x;
let isXUndefined = (x === undefined);

console.table({
    "Value of x": x,
    "Is x is undefined": isXUndefined,
    "Type of isXUndefined ": typeof isXUndefined
});


let y = null;
let isYNotNull = (y !== null);
let isYTypeIsObj = (typeof y === "object")

console.table({
    "Value of y": y,
    "Type of y": typeof y,
    "Is y not null": isYNotNull,
    "Is y type is object": isYTypeIsObj
});

/*
The String Type:
A String type represents textual data and is encoded as a sequence of 16-bits unsigned integer values representing UTF-16 code units.

Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on.  

JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. String methods create new strings based on the content of the current string
 */

let str = "Hello";

console.table({
    "String": str,
    "Length": str.length
});

/*
The Number Type:
The Number datatype in JavaScript represents numeric values — both integers and floating-point numbers.

Unlike some languages, JavaScript has one single Number type for all numbers.

*/
let a = 100;       // integer
let b = 3.14;      // floating point
let c = -200;      // negative number
let d = 1e6;       // exponential notation (1 million)
let e = Infinity;  // special number
let f = NaN;       // special value representing 'not a number'

console.table({
    "Value of a": a,
    "Type of a": typeof a,
    "Value of b": b,
    "Type of b": typeof b,
    "Value of c": c,
    "Type of c": typeof c,
    "Value of d": d,
    "Type of d": typeof d,
    "Value of e": e,
    "Type of e": typeof e,
    "Value of f": f,
    "Type of f": typeof f
});


// Shows all the prototype’s own methods/properties
console.dir(Object.getOwnPropertyNames(String.prototype));
