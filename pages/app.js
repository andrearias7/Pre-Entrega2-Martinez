window.onload = function() {  
    var btn_menu = document.querySelector('.b-menu') 
    if (btn_menu) { 
        btn_menu.addEventListener('click', () => { 
            var menu_items = document.querySelector('.navegador') 
            menu_items.classList.toggle('show')
        }) 
    } 
}