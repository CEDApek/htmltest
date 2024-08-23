function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //class="menu-links"
    const icon = document.querySelector(".hamburger-icon"); 
    menu.classList.toggle("toggle"); //open can be changed to anything
    icon.classList.toggle("toggle"); //and watch the css also
}