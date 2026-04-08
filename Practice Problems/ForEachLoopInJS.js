//arr.forEach(callBackFunction)

// CallBackFunction => Here, it is a function to execute for each element in the array 

// a callback is a function passed as an argument inside another function 

let arr =[1,2,3,4,5];

arr.forEach((val)=>{//value at ech index 
  square = val * val ;
  console.log(square);
});

let cities = ["Delhi","Mumbai","Thane"];

cities.forEach((x)=>{
    console.log(x.toUpperCase());
})

// //In JavaScript, a Higher-Order Function (HOF) is a function that does at least one of the following: 
// Takes one or more functions as arguments (commonly called "callback functions").
// Returns a function as its result. 


