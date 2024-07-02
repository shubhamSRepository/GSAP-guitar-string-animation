var path = `M 10 250 Q 600 250 1190 250`;
var finalPath = `M 10 250 Q 600 250 1190 250`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
    path = `M 10 250 Q  ${dets.x} ${dets.y} 1190 250`;

    // console.log(dets.y);

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out"
    })
})


string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 2.5,
        ease: "elastic.out(1,0.2)"
    })
})