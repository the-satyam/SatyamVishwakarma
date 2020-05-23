//Sidenav
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {}); //initializing our SideNav

//Carousel
const carousel = document.querySelector(".carousel");
M.Carousel.init(carousel, {});

//Scrollspy
const scrollspy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollspy, {});
document.get