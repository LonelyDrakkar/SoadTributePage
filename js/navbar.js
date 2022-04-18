window.onload = () => {
    const checker = document.querySelector('#label');
    const checkbox = document.querySelector('#check');
    const newNav = document.querySelector('#links-container');

    checker.addEventListener('click', () => {

        if(checkbox.checked === false){
            newNav.style.cssText += 'right: 0;';
            checker.classList.toggle('toggle');
        }else{
            newNav.style.cssText += 'right: -100vw';
            checker.classList.toggle('toggle');
        }
    });

    newNav.addEventListener('click', () => {
        if(checkbox.checked === true){
            newNav.style.cssText += 'right: -100vw';
            checker.classList.toggle('toggle');
            checkbox.checked = false;
        }
    });
}
