// functional code
function functional() {
  document.getElementById("year").textContent = new Date().getFullYear();
}
functional();

// scroll trigger with locomotive
function loco_scroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
    lerp: 0.02
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


}
loco_scroll();


// gsap code
function gsapp(){

  gsap.from(".sec1 div", {
    scale: 0.5,
    scrollTrigger: {
      trigger: ".sec1 div",
      scroller: "main",
      start: "50% 50%",
      end: "21000%  0%",
      // markers: true,
      pin: true,
      scrub: 1,
    }
  })
  
  
  let mm = gsap.matchMedia();
  
  mm.add("(min-width: 768px)", () => {
    // Desktop animations
    gsap.from(".img1", {
      height: "0%",
      scrollTrigger: {
        trigger: ".img1",
        scroller: "main",
        start: "100% 80%",
        end: "100% 20%",
        // markers: true,
        scrub: 1,
      }
    })
  
  
    gsap.from(".img2", {
      height: "0%",
      scrollTrigger: {
        trigger: ".img2",
        scroller: "main",
        start: "100% 80%",
        end: "100% 20%",
        // markers: true,
        scrub: 1,
      }
    })
  
  
  
    gsap.from(".img3", {
      height: "0%",
      scrollTrigger: {
        trigger: ".img3",
        scroller: "main",
        start: "100% 80%",
        end: "100% 20%",
        // markers: true,
        scrub: 1,
      }
    })
  
  
  
    gsap.from(".img4", {
      height: "0%",
      scrollTrigger: {
        trigger: ".img4",
        scroller: "main",
        start: "100% 80%",
        end: "100% 20%",
        // markers: true,
        scrub: 1,
      }
    })
  
  
  
    gsap.from(".img5", {
      height: "0%",
      scrollTrigger: {
        trigger: ".img5",
        scroller: "main",
        start: "100% 80%",
        end: "100% 20%",
        // markers: true,
        scrub: 1,
      }
    })
  
  
  
    gsap.from(".img6", {
      height: "0%",
      scrollTrigger: {
        trigger: ".img6",
        scroller: "main",
        start: "100% 80%",
        end: "100% 20%",
        // markers: true,
        scrub: 1,
      }
    })
  
  
  
    gsap.from(".img7", {
      height: "0%",
      scrollTrigger: {
        trigger: ".img7",
        scroller: "main",
        start: "100% 80%",
        end: "100% 20%",
        // markers: true,
        scrub: 1,
      }
    })
  });
  
  mm.add("(max-width: 767px)", () => {
    // Mobile animations
    // gsap.to(".box", { x: 100, duration: 1 });
  });
  
  
}
gsapp();

// code for img hover
function hoverr() {
  var img1 = document.getElementById("img1");
  img1.addEventListener("mouseenter", function () {
    gsap.to("main", {
      backgroundColor: "#EBE9E6"
    })
    gsap.to("section", {
      backgroundColor: "#EBE9E6"
    })
  });

  img1.addEventListener("mouseleave", function () {
    gsap.to("main", {
      backgroundColor: "black"
    })
    gsap.to("section", {
      backgroundColor: "black"
    })

  });




  var img2 = document.getElementById("img2");
  img2.addEventListener("mouseenter", function () {
    gsap.to("main", {
      backgroundColor: "#263F4C"
    })
    gsap.to("section", {
      backgroundColor: "#263F4C"
    })
  });

  img2.addEventListener("mouseleave", function () {
    gsap.to("main", {
      backgroundColor: "red"
    })
    gsap.to("section", {
      backgroundColor: "black"
    })

  });


  var img3 = document.getElementById("img3");
  img3.addEventListener("mouseenter", function () {
    gsap.to("main", {
      backgroundColor: "#F00E3E"
    })
    gsap.to("section", {
      backgroundColor: "#F00E3E"
    })
  });

  img3.addEventListener("mouseleave", function () {
    gsap.to("main", {
      backgroundColor: "red"
    })
    gsap.to("section", {
      backgroundColor: "black"
    })

  });


  var img4 = document.getElementById("img4");
  img4.addEventListener("mouseenter", function () {
    gsap.to("main", {
      backgroundColor: "#1D231F"
    })
    gsap.to("section", {
      backgroundColor: "#1D231F"
    })
  });

  img4.addEventListener("mouseleave", function () {
    gsap.to("main", {
      backgroundColor: "red"
    })
    gsap.to("section", {
      backgroundColor: "black"
    })

  });



  var img5 = document.getElementById("img5");
  img5.addEventListener("mouseenter", function () {
    gsap.to("main", {
      backgroundColor: "#BE775B"
    })
    gsap.to("section", {
      backgroundColor: "#BE775B"
    })
  });

  img5.addEventListener("mouseleave", function () {
    gsap.to("main", {
      backgroundColor: "red"
    })
    gsap.to("section", {
      backgroundColor: "black"
    })

  });



  var img6 = document.getElementById("img6");
  img6.addEventListener("mouseenter", function () {
    gsap.to("main", {
      backgroundColor: "#45438A"
    })
    gsap.to("section", {
      backgroundColor: "#45438A"
    })
  });

  img6.addEventListener("mouseleave", function () {
    gsap.to("main", {
      backgroundColor: "red"
    })
    gsap.to("section", {
      backgroundColor: "black"
    })

  });





  var img7 = document.getElementById("img7");
  img7.addEventListener("mouseenter", function () {
    gsap.to("main", {
      backgroundColor: "#282C35"
    })
    gsap.to("section", {
      backgroundColor: "#282C35"
    })
  });

  img7.addEventListener("mouseleave", function () {
    gsap.to("main", {
      backgroundColor: "red"
    })
    gsap.to("section", {
      backgroundColor: "black"
    })

  });




}
hoverr();




