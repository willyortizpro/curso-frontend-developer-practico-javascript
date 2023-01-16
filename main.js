const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isCarritoAsideClosed = aside.classList.contains('inactive');

    if(!isCarritoAsideClosed){
            aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isCarritoAsideClosed = aside.classList.contains('inactive');

    if(!isCarritoAsideClosed){
            aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactvie');
    const isDesktopClosed = desktopMenu.classList.contains('inactvie');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');    
    }
    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive');    
    }

    aside.classList.toggle('inactive');
}