// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "20px";
        nav.style.background = "#161b22";
        nav.style.padding = "20px";
        nav.style.borderRadius = "15px";
        nav.style.gap = "20px";

    }

});

// ===========================
// TYPING EFFECT
// ===========================

const words = [

    "C Programmer",
    "C++ Programmer",
    "JavaScript Developer",
    "Linux Learner",
    "Future DevOps Engineer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    }
    else {

        typing.textContent = currentWord.substring(0, charIndex--);

    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1200;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length)
            wordIndex = 0;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// SCROLL ANIMATION
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".about-card,.project-card,.skill,.contact-box")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#1f6feb";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===========================
// FADE IN EFFECT
// ===========================

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;
transform:translateY(40px);
transition:.8s;

}

.show{

opacity:1;
transform:translateY(0);

}

nav a.active{

color:#4da3ff;
font-weight:600;

}

`;

document.head.appendChild(style);

// ===========================
// PRELOADER
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    }, 100);

});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log("%cWelcome to Taranveer Singh's Portfolio",
"color:#4da3ff;font-size:20px;font-weight:bold;");

console.log("Thanks for visiting! 🚀");
