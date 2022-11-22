//бургер меню
const iconMenu = document.querySelector('.menu-icon');
if (iconMenu){
    const menu = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e){
 
        menu.classList.toggle('_active');

    });

}

