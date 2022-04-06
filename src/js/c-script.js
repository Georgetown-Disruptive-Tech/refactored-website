document.onreadystatechange = function() {
    if (document.readyState != "complete") {
        window.scrollTo(0, 0);
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("#preloader").style.visibility = "visible";
        document.querySelector("#preloader-text").style.visibility = "visible";
        document.querySelector("#preloader-copyright").style.visibility = "visible";
    } else {
        setTimeout(rmpreloader, 0);
    }
};

function rmpreloader() {
    window.scrollTo(0, 0);
    document.querySelector("#preloader").style.display = "none";
    document.querySelector("#preloader-text").style.display = "none";
    document.querySelector("#preloader-copyright").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("body").style.overflow = "visible";
}

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});


// mailchimp addition
! function(c, h, i, m, p) {
    m = c.createElement(h),
        p = c.getElementsByTagName(h)[0],
        m.async = 1,
        m.src = i,
        p.parentNode.insertBefore(m, p)
}
(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/da48ecb7a5439e08f4de18e0e/62efe0fa326501c4f252e2507.js");