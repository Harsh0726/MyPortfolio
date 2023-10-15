var typed = new Typed('#typed', {
    // Waits 1000ms after typing "First"
    strings: ['Web Designer', 'Mobile Developer', 'UI/UX Designer', 'Web Developer'],
    stringselement:null,
    typedSpeed:20,
    startDelay:2000,
    backSpeed:20,
    backDelay:2000,
    loop:true,
    loopCount:500,
    showCursor:true,
    cursorChar:"|",
    attr: null,
    contentTypeL: "html",
});

// MixitUp
var container = $(".mixitup")
mixitup(container);
