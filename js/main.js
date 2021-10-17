var sideNav = document.getElementById('sideNavBar');
var menuBtn = document.getElementById('menuIcon');
var menu = document.querySelector('.menu');


sideNav.style.right = '-450px';
// menu.style.filter = 'brightness(0)';

menuBtn.onclick = function(){
    if (sideNav.style.right == "-450px"){
        sideNav.style.right = "0";
        menu.src = "img/close.png";
        // menu.style.filter = 'brightness(0) invert(1)';
    }
    else{
        sideNav.style.right = "-450px";
        menu.src = "img/menu.png";
        // menu.style.filter = 'brightness(0)';

    }
}