let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light";

modeBtn.addEventListener("click", () => {
    if(currMode === "Light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("Light");
    }
    else{
        currMode = "Light";
        body.classList.add("Light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});