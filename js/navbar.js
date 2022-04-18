window.onload = () => {
    const checker = document.querySelector('#label');
    const checkbox = document.querySelector('#check');

    checker.addEventListener('click', (event) => {
        const newNav = document.querySelector('#links-container');

        if(checkbox.checked === false){
            newNav.style.cssText += 'right: 0;';
            checker.style.cssText += 'opacity: 0;';
        }else{
            newNav.style.cssText += 'right: -100vw';
            checker.style.cssText += 'opacity: 1;';
        }
    });
}