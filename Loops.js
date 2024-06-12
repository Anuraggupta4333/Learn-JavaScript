// for(let i=1; i<=5; i++){
//     console.log("Anurag :",i);
// }

// sum of n number

// let num = prompt("Enter an number");
// let sum =0;
// for( let i=1; i<=num; i++){
//     sum = sum+i;
// }
// console.log(sum);

//for of loop
let str = "Anurag ";
for(let i of str){
    console.log(i);
}

//for in loop
let Student= {
  name : "Anurag",
  mob : 9754274333,
  age : 22
};
for( let j in Student){
    console.log("Key :",j,"value : ", Student[j]);
}
