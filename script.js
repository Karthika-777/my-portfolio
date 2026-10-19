function hamburg(){
    const menu=document.querySelector(".links");
    menu.classList.toggle("active");
}


const aboutContent = document.querySelector(".about-content");

if (aboutContent) {
    const aboutObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                }
            });
        },
        { threshold: 0.2 }
    );

    aboutObserver.observe(aboutContent);
}


const aboutSection = document.querySelector(".about-section");
const aboutCard = document.querySelector(".about-content");

function shrinkAboutOnScroll() {
    if (!aboutSection || !aboutCard) return;

    
    if (window.innerWidth <= 768) {
        aboutCard.style.scale = "1";
        return;
    }

    const rect = aboutSection.getBoundingClientRect();
    const progress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height * 0.65))
    );

    const scale = 1 - progress * 0.07;
    aboutCard.style.scale = String(scale);
}

window.addEventListener("scroll", shrinkAboutOnScroll, {
    passive: true
});

window.addEventListener("resize", shrinkAboutOnScroll);
shrinkAboutOnScroll();


const educationCards = document.querySelectorAll(".education-card");

const educationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("education-visible");
                educationObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

educationCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 150}ms`;
    educationObserver.observe(card);
});



const contactSection = document.querySelector(".contact-section");

if (contactSection) {
    const contactObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contactSection.classList.add("contact-visible");
                } else {
                    contactSection.classList.remove("contact-visible");
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    contactObserver.observe(contactSection);
}



