// creates a new array with the results of some operation 
// The value its callback returns are used to form the array 

let nums= [1,2,3,4,5];

nums.map((x)=>{
    console.log(x);
});

let nums2 =[1,2,3,4,5];

let newNums= nums2.map((x)=>{
    return x * x;
})

console.log(newNums);