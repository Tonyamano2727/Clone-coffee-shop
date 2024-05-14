function showHideMenu() {
    const navItems = document.querySelectorAll('.nav_link');
    
    navItems.forEach(item => {
        item.style.display = (item.style.display === "block") ? "none" : "block";
    });
}