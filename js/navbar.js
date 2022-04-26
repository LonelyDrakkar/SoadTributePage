window.onload = () => {
    const checker = document.querySelector('#label');
    const checkbox = document.querySelector('#check');
    const newNav = document.querySelector('#links-container');
    const navBar = document.querySelector('#nav-bar');
    const html = document.querySelector('html');

    let prevScrollPos = window.scrollY;


    checker.addEventListener('click', () => {

        if(checkbox.checked === false){
            newNav.style.cssText += 'right: 0;';
            checker.classList.toggle('toggle');
            html.classList.toggle('no-scroll');
        }else{
            newNav.style.cssText += 'right: -100vw';
            checker.classList.toggle('toggle');
            html.classList.toggle('no-scroll');
        }
    });

    newNav.addEventListener('click', () => {
        if(checkbox.checked === true){
            newNav.style.cssText += 'right: -100vw';
            checker.classList.toggle('toggle');
            checkbox.checked = false;
        }
    });

    window.onscroll = () => {
        let currentScrollPos = window.scrollY;

        if(prevScrollPos < currentScrollPos){
            navBar.style.cssText += 'top: -4em';
        }else{
            navBar.style.cssText += 'top: 0';
        }
    
        prevScrollPos = currentScrollPos;
    }
}
