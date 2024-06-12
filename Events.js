let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    console.log("btn1 is clicked");
}

let box = document.querySelector(".box"); // Prefix with a dot for class selection
box.onmouseover = () => {
    console.log("Box is touched");
};
