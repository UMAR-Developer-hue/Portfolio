var typed = new Typed("#element", {
    strings: ["Web-Developer", "Fronted Developer", "WordPress-Developer", "MERN-Stack-Developer","Python-programmer","SEO"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const cursorDot=document.querySelector("[data-cursor-dot]");
const cursorOutline=document.querySelector("[data-cursor-outline]");
// const cursorOutline2=document.querySelector("[data-cursor-outline2]");


window.addEventListener("mousemove",function (e) {
    const posX=e.clientX;
    const posY=e.clientY;

    cursorDot.style.left= `${posX}px`;
    cursorDot.style.top= `${posY}px`;

    
    // cursorOutline.style.left= `${posX}px`;
    // cursorOutline.style.top= `${posY}px`;
    cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`

    },{duration:1000,fill:"forwards"});



})