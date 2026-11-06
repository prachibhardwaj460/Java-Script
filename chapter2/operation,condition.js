// arithmetic operations

a=8;
b=4;
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
// modulus
console.log("a%b",a%b);
//  exponetial 
console.log("a**b",a**b);
// unary operator 1. increment (++)    2. decrement (--)
a=a+8 , a++;
b=b+5 , b--;
console.log("a",a);
console.log("b",b);

// assignment opertaors 

a=8;
b=4;
// console.log("a+=b",a+=b)
a+=3;
console.log("a",a);
a-=3;
console.log("a",a);
a*=3;
console.log("a",a);
a/=3;
console.log("a",a);


// comparison operators
a=6;
b=3;
a==b;
console.log("6==3",a==b);
a!=b;
console.log("6!=3",a!=b);
 

// special case
a=5;
b="5";
console.log("a==b",a==b); // true 


// strict it will check value as well as data type
a=5;
b="5";
console.log("a===b",a===b); // false
console.log("a!==b",a!==b); // true




// operators in JS



// logical AND &&  TRUE TRUE = TRUE
a=7;
b=7;
let con1=a>b;
let con2=a===b;
console.log("con1&&con2",con1&&con2) // false

a=7;
b=6;
let cons1=a>b;
let cons2=a!==b;
console.log("cons1&&cons2",cons1&&cons2) // false



// logical OR  || FALSE FALSE = FALSE


a=7;
b=6;
let cond1=a>b;
let cond2=a!==b;
console.log("cond1||cond2",cond1||cond2) // true





// logical NOT ! TRUE KO FALSE , FALSE KO TRUE


a=7;
b=6;
console.log("!(a<b)=",!(a<b)); //true




// conditional statement 
let marks=45;
if(marks>33) {
    console.log("pass");
}


let color;
let mode="dark";
if (mode==="dark") {
    color="black";
}

if(mode==="light") {
    color="white";
}
console.log(color);



let colors;
if(mode==="darkk") {
    color="blackk";
} else {
    color="white"
}
console.log(color);

// operators in JS
//  CONDITION ? TRUE OUTPUT : FALSE OUTPUT = basically condition denge agar true hui to true print hoga false hui to false like  ( a ? b : c) = a condition true hai to b print hoga false hui , to c print hoga


let age=67;
let result=age>=18 ? "adult" : "not adult";
console.log(result);



