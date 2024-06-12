let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "dark";

mode.addEventListener("click", () => {
    if (currentMode === "dark") {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    } else {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
});
