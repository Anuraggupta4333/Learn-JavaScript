let marks=[85,97,44,37,76,60];
let sum=0;
for (let i of marks) {
    sum= sum+i;
}
let result = sum/marks.length;
console.log(result);
console.log(`The average marks of students is ${result}`);


//  question 02 
 let itemprice=[250,654,300,900,50]
 console.log(itemprice.pop());  // for remove element like stack

 for(let i=0; i<itemprice.length; i++){
    let offer = itemprice[i]/10; 
    itemprice[i]= itemprice[i]-offer;
 }
 console.log(`Item price after 10% discount ${itemprice}`);

let companies =[ "bloombeg","microsoft","uber","google","ibm", "netflix"];
companies.shift();
console.log(companies);
companies.splice(1,1,"ola")
console.log(companies);
companies.push("Amazon")
console.log(companies);