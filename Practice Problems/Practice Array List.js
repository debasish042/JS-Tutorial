let marks = [85, 90, 78, 92, 88];

let totalMarks =0;


for(let mark of marks){
    totalMarks = totalMarks + mark;
}
let avg = totalMarks/ marks.length;
console.log(`Average marks of the class is ${avg}`);