//Arithmatic operator 

let a = 5;
let b= 2 ;

// console.log("a+b:"+(a+b));

// console.log(a-b);

// console.log("c", a+b);
// console.log(a*b);

// console.log(a/b);
// console.log(a%b);

// unary operator 

a= a+1;
console.log(a);

a++;
console.log(a);

a= a-1;
a--;

console.log(a);

//Assignment operator  

//conditional statement 

// let color;
// if(mode==="dark_mode"){
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

let age = 20;

if(age>=18){
    console.log("you are eligible to vote");
} else {
    console.log("you are not eligible to vote");
}


let color;
let mode ="dark";

if(mode==="dark"){
    color="black";
}

if(mode === "light"){
    color="white";
}

console.log(color);


// odd even print 

let num =52 ;

if(num %2 === 0){
    console.log(num , "is even");
} else {
    console.log(num, "is odd");
}


// nested if 

age = 27;
    if(age>= 60){
        console.log("Budha mc ");
    } else if(age <=18 ){
        console.log("Baccha mc");
    }else {
        console.log("cutie");
    }


 let age2 = 27;
 let result = age>=18 ? "eligible to vote": "not eligible to vote ";   

    console.log(result);



    




