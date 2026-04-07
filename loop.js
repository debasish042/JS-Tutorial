console.log("Looping through arrays");

// for(let i=1;i<=5;i++){
//     console.log("Debasish Sahu");
// }


// sum of 1 to n 
// let sum =0;
// let n=7;
// for (let i=1;i<=n;i++){
//     sum += i;
// }

// console.log("Sum of 1 to 5 is ",sum);
// console.log("loop ended");


// while loop 

//  let i=1;

//  while(i<=5){
//     console.log(i);
//     i++;
//  }

 // do while loop

 /// for of Loop

 // syntax -- 

 let str = "Debasish";

    for(let char of str){
        console.log(char);
    }


    // calculate the size of string 

    let size =0;
    for(let char of str){
        console.log(char);
        size++;
    }

    console.log("Size of the string is: ", size);


    // for in loop

    let Student ={
        name : "Debasish Sahu",
        age : 24,
        city : "Bhubaneswar"
    };
// for in loop always return the Keys 
    for(let key in Student){
        console.log(key);
    }

    // to print the values we have to do like this console.log(Student[key]);

    for(let key in Student){
        console.log(key, Student[key]);
    }



   // print all the even numbers from 0 to 100

   for (let i = 0; i <= 100; i ++) {
    if(i%2==0){
        console.log(i);
    }           
}




