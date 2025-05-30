window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
}

document.getElementById("backToTopBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (prefersReducedMotion) {
            
            backToTopBtn.style.display = "block";
            backToTopBtn.style.opacity = "1";
        } else {
            
            backToTopBtn.classList.add("show");
        }
    } else {
        if (prefersReducedMotion) {
            
            backToTopBtn.style.display = "none";
            backToTopBtn.style.opacity = "0";
        } else {
            
            backToTopBtn.classList.remove("show");
        }
    }
}

document.getElementById("backToTopBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
    });
};
