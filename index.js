var typed = new Typed('#typed', {
    // Waits 1000ms after typing "First"
    strings: ['Web Designer', 'Mobile Developer', 'UI/UX Designer', 'Web Developer'],
    stringselement:null,
    typedSpeed:20,
    startDelay:150,
    backSpeed:20,
    backDelay:1000,
    loop:true,
    loopCount:550,
    showCursor:true,
    cursorChar:"|",
    attr: null,
    contentTypeL: "html",
});

// MixitUp
var container = $(".mixitup")
mixitup(container);
