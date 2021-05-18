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

let heart = document.querySelectorAll('.car-action');


heart.forEach(item => {
    item.addEventListener('click', () => {
        if (item.getAttribute('src') === "assets/save.svg") {
            item.setAttribute('src', "assets/save-filled.svg");
        } else {
            item.setAttribute('src', "assets/save.svg");
        }
    }) 
})

