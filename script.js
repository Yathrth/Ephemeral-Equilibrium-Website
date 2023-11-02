gsap.from(".nlink", {
    // stagger: .1,
    y: 20,
    duration: 1,
    opacity: 0
})

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anim2", {
    y:50,
    stagger:0.3,
    opacity:0,
    ease:Expo,
    duration:1
})

Shery.imageEffect("#imgentext img",{
    style:3,
    // debug:true
})

Shery.imageEffect(".imgeff img",{
    style:3,
    // debug:true
})

gsap.from("#imgentext img",{
    y:70,
    opacity:0,
    duration:2,
    ease:Expo.easenInOut
})

Shery.imageEffect("#bimg",{
    style: 5,
    // debug: true,
    gooey: true
})

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video", {
        opacity: 1,
        duration: 1,
        ease: Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video", {
        opacity: 0,
        duration: 1,
        ease: Power4
    })
})