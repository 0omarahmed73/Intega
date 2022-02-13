const iconmenu = document.querySelector(".icon-menu");
const iconremove = document.querySelector(".icon-remove");
const ull = document.querySelector(".ull");

iconmenu.addEventListener("click" , (eo) => {
    ull.style.left = "0";
})

iconremove.addEventListener("click" , (eo) => {
    ull.style.left = "-350px";
});