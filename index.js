const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("toggle")
const navClose = document.getElementById("close");

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
        console.log(navMenu);

        setTimeout(navMenu.addEventListener("click",() => {
                navMenu.classList.remove("show-menu")
            
        }), 2000)
        
    })
}

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}







