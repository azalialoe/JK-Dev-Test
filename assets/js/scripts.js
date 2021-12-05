function fixBar() {
    const navBar = document.querySelector('.navbar');
    const navBarDark = document.querySelector('.navbar-dark')
    const scrollPosition = navBar.getBoundingClientRect().top;

    const screenPosition = window.innerHeight;

    navBar.classList.remove('navBarDark');
    navBar.classList.add('scroll');
    
}

window.addEventListener('scroll', fixBar);
