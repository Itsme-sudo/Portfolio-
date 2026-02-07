/* Typing Effect */
const texts = ["Web Developer", "UI Designer", "Open Source Enthusiast"];
let index = 0;
let char = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (char < texts[index].length) {
        typing.textContent += texts[index][char];
        char++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (char > 0) {
        typing.textContent = texts[index].slice(0, char - 1);
        char--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

/* Theme Toggle */
const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeBtn.textContent = "🌙 Night";
        localStorage.setItem("theme", "dark");
    } else {
        modeBtn.textContent = "🌞 Day";
        localStorage.setItem("theme", "light");
    }
});

/* Load Theme */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    modeBtn.textContent = "🌙 Night";
}
/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
/* Project Modal */
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.querySelector("h3").textContent;
        modalDesc.textContent = card.querySelector("p").textContent;
        modal.style.display = "flex";
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};
