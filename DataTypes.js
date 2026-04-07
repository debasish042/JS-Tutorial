//  primitive data types 
// .1 .Number  -- 100 , 25.25, -100 
//2. String -- "Debsish" , "Raja"
//3. Boolean -- true or false
//4. Null 
//5. Undefined 
//6. Symbol

let x= BigInt("1234");

let y = Symbol("mySymbol");
//7. BigInt
//

// Non primitive data types 

// Object 
// stores in key value pair 

const Student = {
    name: "Debasish Sahu",
    age:24,
    cgpa:8.83,
    isPassed:true
}

console.log(Student);
console.log(Student.age);
console.log(Student["name"]);

Student.age = 25;
Student.age= Student.age+1;
console.log(Student.age);