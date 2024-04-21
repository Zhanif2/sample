function openMenu(){
document.body.classList += " menu--open"
}

function closeMenu(){
    document.body.classList.remove('menu--open')  
}

function navigateToPage() {
    window.location.href = 'books.html';
}

function navigateHome() {
    window.location.href = 'index.html';
}