gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var nav=document.querySelector("nav")
gsap.to("nav",{
    top:"-100%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page1",
        start:"top -5%",
        scrub:0.5
    }
})
var vid=document.querySelector("#page2 video")
gsap.to("#page2 video",{
    width:"100%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 video",
        start:"top 70%",
        end:"top 20%",
        scrub:0.3,
    }
})

gsap.from(".text h1,.text p,.text h6",{
  y:200,
  stagger:0.1,
  duration:0.5,
  scrollTrigger:{
    trigger:"#page3 .text h1",
    scroller:"#main",
    start:"top -50%",
    end:"top 80%",
    // markers:true
  }
})

var box1=document.querySelector("#box1")
var video=document.querySelector("#box1 video")
var curs=document.querySelector("#cursor")




box1.addEventListener("mouseenter",function(dets){
 curs.style.display="block"
 video.play(); 
})
box1.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    x:dets.x+"px",
    y:dets.y+"px"
  })

 
})

box1.addEventListener("mouseleave",function(){
 curs.style.display="none"
 video.pause();
 
})

var img2=document.querySelector("#page4-topright .img2")

img2.addEventListener("mouseenter",function(dets){
  curs.style.display="block"
 })
 img2.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
     x:dets.x+"px",
     y:dets.y+"px"
   })
 
  
 })
 
 img2.addEventListener("mouseleave",function(){
  curs.style.display="none"
  
 })



 var centre=document.querySelector("#centre")
 var video2=document.querySelector("#centre video")
 var curs2=document.querySelector("#cursor2")
 centre.addEventListener("mouseenter",function(){
  curs2.style.display="block"
  video2.play(); 
 })
 centre.addEventListener("mouseleave",function(){
  curs2.style.display="none"
  video2.pause(); 
 })
 centre.addEventListener("mousemove",function(dets){
  
  // console.log(dets)
      gsap.to("#cursor2",{
        x:(dets.x-500)+"px",
        y:(dets.y-100)+"px"
      })
 })


var footh1=document.querySelector("#footer .footh1 h1")
gsap.from(".footh1 h1",{
  y:100,
  scrollTrigger:{
    trigger:"#footer",
    scroller:"#main",
    start:"top -100%",
    end:"top 20%",
    scrub:2,
    // markers:true
    }
})

var loader=document.querySelector("#loader");

setTimeout(function(){
    loader.style.top="-100%"
},3000)


const imageUrls = ["./Screenshot_2024-03-02_215553-removebg-preview.png", "./Screenshot_2024-03-02_215959-removebg-preview.png","./Screenshot_2024-03-02_221241-removebg-preview.png","./Screenshot_2024-03-02_221401-removebg-preview.png","./Screenshot_2024-03-02_221458-removebg-preview.png"];

const loaderImage = document.getElementById("img1");

let currentIndex = 0;


function changeImage() {
  loaderImage.src = imageUrls[currentIndex];
  
  currentIndex = (currentIndex + 1) % imageUrls.length;
}


setInterval(changeImage, 400);

var p1h1 = document.querySelector("#page1 h1");
var p1h1Text = p1h1.textContent;
var p1h1Splitted = p1h1Text.split("");
var clut = '';

p1h1Splitted.forEach(function(elem) {
  clut += `<span>${elem}</span>`;
});

p1h1.innerHTML = clut;


setTimeout(function(){
  gsap.from("#page1 h1 span", {
    y: 500,
    opacity:0,
    stagger: {
      amount:0.5,
    },
    duration: 0.9,
  });
},3000)
var span = document.querySelector("#foot h1 span");
var linee = document.querySelector("#linee");

span.addEventListener("mouseenter", function() {
    gsap.to("#linee", {
        width: "32vw",
        duration: 2,
        overwrite: "auto", // Automatically overwrite conflicting tweens
    });
});

span.addEventListener("mouseleave", function() {
    gsap.to("#linee", {
        width: "0vw",
        duration: 0.3,
        overwrite: "auto", // Automatically overwrite conflicting tweens
    });
});

var page5h1=document.querySelector("#page5 h1")

// gsap.to("#page5 h1",{
//   transform:"translateX(-150%)",
//   scrollTrigger:{
//     trigger:"#page5",
//     scroller:"body",
//     // start:"top 0",
//     end:"top -70%",
//     scrub:3,
//     markers:true,
//     pin:true
//   }
// })

gsap.to("#p5inner h1", {
  transform: "translateX(50%)",
  scrollTrigger: {
    scroller: "body",
    trigger: "#page5",
    // markers: true,
    pin: true,
    start: "top 60%"
  }
});
















