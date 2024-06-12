let aa= "Anurag Gupta"
console.log(aa.length);

console.log(aa[3]);

//Template Literals

let SpecialString = `This is template String`;
console.log(typeof SpecialString); 


//Example 
let obj ={
    item  : "pen",
    price : 10
};
let output =`The cost of ${obj.item} is ${obj.price} Rupees`;
console.log(output);
console.log("The cost of " , obj.item , "is" , obj.price , " Rupees");
