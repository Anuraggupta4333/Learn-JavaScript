let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    console.log("btn1 is clicked");
}   

let box = document.querySelector(".box"); // Prefix with a dot for class selection
box.onmouseover = () => {
    console.log("Box is touched");
};


//Event listeners
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log("btn1 is clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    console.log("Box is touched");
});
