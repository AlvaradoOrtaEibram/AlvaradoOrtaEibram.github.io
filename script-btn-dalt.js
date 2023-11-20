const btnswitch = document.querySelector('#switch');

document.addEventListener('DOMContentLoaded', () => {
    const savedState = localStorage.getItem('daltState');
    if (savedState === 'active') {
        document.body.classList.add('dalt');
        btnswitch.classList.add('active');
    }
});

btnswitch.addEventListener('click', () => {
    document.body.classList.toggle('dalt');
    btnswitch.classList.toggle('active');

    const currentState = document.body.classList.contains('dalt') ? 'active' : 'inactive';
    localStorage.setItem('daltState', currentState);

    if (currentState === 'active') {
        window.location.href = 'pag-daltonicos/index-dalt.html';
    } else {
        window.location.href = '../index.html';
    }
});

if (window.location.pathname.includes('pag-daltonicos/index-dalt.html')) {
    btnswitch.addEventListener('click', () => {
        if (document.body.classList.contains('dalt')) {
            localStorage.setItem('daltState', 'active');
        } else {
            localStorage.setItem('daltState', 'inactive');
        }
        window.location.href = '../index.html';  
    });
}

const botonmenu = document.getElementById('check');

botonmenu.addEventListener('click', () => {
    document.querySelector('.cont-men-desp-bottom').classList.toggle("showMobileMenu")

}) 


