const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click" , moveMenuLateral);
fuction moveMenuLateral(){
  if(menuMobile.classList.contains("bi-list")){
    menuMobile.classList.replace("bi-list", "bi-x");
  }else{
    menuMobile.classList.replace("bi-x", "bi-list");
  }
  body.classList.toggle("menu-nav-active");
}