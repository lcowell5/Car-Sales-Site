let filterMenu = this.document.querySelector(".filter");
let menuIcon = this.document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    if (filterMenu.style.visibility === "hidden") {
        filterMenu.style.visibility = "visible";
    } else {
        filterMenu.style.visibility = "hidden";
    }
});

this.document.addEventListener('mouseup', (event) => {
    if (filterMenu.style.visibility = "visible") {
        if(!filterMenu.contains(event.target)) {
            filterMenu.style.visibility = "hidden";
        }      
    }
});

function changeHeart(x) {
    x.classList.toggle("fas")
    x.classList.toggle("far")
}
