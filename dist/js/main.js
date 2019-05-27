// select DOM items (Ui structure)

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuBranding = document.querySelector('.menu-branding')
const menuNav = document.querySelector('.menu-nav')

// to grab all the items of the same class you need to us querySelectorAll
const navItem = document.querySelectorAll('.nav-item')

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'))

        // Set menu state
        showMenu = true;
        
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'))

        // Set menu state
        showMenu = false;
    }
}

