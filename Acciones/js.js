const Menu=document.getElementById("menu_icono");
const cerrar_ventana= document.getElementById("menu_url");


Menu.addEventListener('click',()=>{
    //GENERAMOS UNA CLASE
    cerrar_ventana.classList.toggle("abrir");
})