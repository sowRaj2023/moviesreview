let reviewContainerEl = document.getElementById("reviewContainer");
let titleEL = document.getElementById("title");
let yourTextEl = document.getElementById("yourText");

function addButton(){
    let titleELs = titleEL.value;
    let yourTextEls = yourTextEl.value;

    if(titleELs === ""){
        alert("Please Enter valid details")
    }

    let headingEl = document.createElement("h1");
    headingEl.textContent = "Movie Title: " + titleELs;
    reviewContainerEl.appendChild(headingEl);

    let praEl =  document.createElement("p");
    praEl.textContent="Description: " + yourTextEls;
    reviewContainerEl.appendChild(praEl);

    titleEL.value = "";
    yourTextEl.value = "";
}