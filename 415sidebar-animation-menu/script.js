import gsap from "https://esm.sh/gsap";
// https://dribbble.com/shots/21131428-Pageload-Animation
// https://contratiempo.mx/
// https://www.mut.mx/
// https://simarrolozano.com/
// https://dribbble.com/shots/22349302-Drake-intro-concept
// https://www.studiosabia.com/about

var Menu = function(){
    const ButtonOpen = document.querySelector(".js-button-open");
    const ButtonClose = document.querySelector(".js-button-close");
    const Menu = document.querySelector(".js-menu");
    const MenuLines = document.querySelector(".js-header-lines");
    const Lines = document.querySelectorAll(".header__line data");
    const MenuOptions = document.querySelectorAll(".menu__navigation__option");
    
    var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    };
    
    //= OPEN > Click
    ButtonOpen.addEventListener("click", function () {
        console.log(':: OPEN ::');
        
        gsap.to(Lines, 0.5,{
            delay: 0,
            height: '100vh',
            ease: "power4.inOut",
            onComplete: function(){
                // Animation lines
                forEach(Lines, function (index, value) {
                    gsap.to(value, 0.5,{
                        delay: index * 0.1,
                        height: '8px',
                        ease: "power4.inOut",
                        onComplete: function(){
                            gsap.to(Menu, 0.5,{
                                delay: 0,
                                width: '41.66666%',
                                autoAlpha: 1,
                                ease: "power4.inOut"
                            });
                            
                            // Animation lines
                            forEach(MenuOptions, function (index, value) {
                                // Animation links options
                                gsap.to(value, 0.5,{
                                    delay: index * 0.1,
                                    y: 0,
                                    autoAlpha: 1,
                                    ease: "power4.inOut"
                                });
                            });
                        }
                    });
                });
            }
        });
    });
    
    //= CLOSE > Click
    ButtonClose.addEventListener("click", function () {
        console.log(':: CLOSE ::');
        // Animation lines
        forEach(MenuOptions, function (index, value) {
            // Animation links options
            gsap.to(value, 0.5,{
                delay: index * 0.1,
                y: 45,
                autoAlpha: 0,
                ease: "power4.inOut",
                onComplete: function(){
                    // Hidden menu
                    gsap.to(Menu, 0.5,{
                        delay: 0,
                        width: '0px',
                        opacity: 0,
                        ease: "expo.inOut",
                    });
                }
            });
        });
    });
}

var Intro = function(){
    const H1 = document.querySelector(".js-cover-title");
    const H2 = document.querySelector(".js-cover-subtitle");
    const Cover = document.querySelector(".js-cover-video");
    const Tags = document.querySelectorAll(".js-cover-tags");
    
    gsap.to(H1, 2,{
        delay: 0,
        scale: 1,
        autoAlpha: 1,
        ease: "expo.inOut",
    });
    
    gsap.to(H2, 1,{
        delay: 1,
        y: 0,
        autoAlpha: 1,
        ease: "expo.inOut",
    });
    
     gsap.to(Tags, 1,{
        delay: 1,
        y: 0,
        autoAlpha: 1,
        ease: "expo.inOut",
    });
    
    gsap.to(Cover, 2,{
        delay: 0.75,
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: "expo.inOut",
    });
}

Intro();
Menu();