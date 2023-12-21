
let menuBurger = document.querySelector('#menu-burger');


menuBurger.addEventListener('click', gererDefilementToucherBurger);

function gererDefilementToucherBurger() {
    if(menuBurger.checked == true) {
        document.body.style.position = 'fixed';
    }
    else {
        document.body.style.position = 'static';
    }
}

