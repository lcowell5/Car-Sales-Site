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

function heartFill () {
    if (heart.getAttribute('src') === "../Scrimba/Car Sales Site/assets/save.svg") {
        heart.setAttribute('src', "../Scrimba/Car Sales Site/assets/save-filled.svg");
    } else {
        heart.setAttribute('src', "../Scrimba/Car Sales Site/assets/save.svg");
    }
};

heart.addEventListener('click', heartFill);
