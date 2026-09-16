document.documentElement.classList.add("js");

const translations = {
    sl: {
        "menu.open": "Odpri meni",
        "nav.about": "O meni",
        "nav.skills": "Znanja",
        "nav.education": "Izobrazba",
        "nav.projects": "Projekti",
        "nav.contact": "Kontakt",
        "hero.kicker": "Junior developer / študent ITK VS",
        "hero.lead": "Razvijam spletne in programske rešitve ter povezujem znanje informatike z izkušnjami iz mehatronike.",
        "hero.projects": "Poglej projekte",
        "hero.cv": "Prenesi CV",
        "hero.status": "Odprt za študentske in junior priložnosti",
        "about.label": "O meni",
        "about.title": "Tehnologija z uporabnim namenom.",
        "about.lead": "Sem študent programa Informatika in tehnologije komuniciranja na FERI ter tehnik mehatronike.",
        "about.body1": "Zanimajo me backend sistemi, spletni razvoj in podatkovne baze. Pri delu mi je pomembno, da je rešitev pregledna, razumljiva in uporabna.",
        "about.body2": "Znanje nadgrajujem s fakultetnimi in osebnimi projekti, kjer uporabljam programiranje, spletne tehnologije, elektroniko in prototipiranje.",
        "about.locationLabel": "Lokacija",
        "about.locationValue": "Slovenija",
        "about.studyLabel": "Študij",
        "about.languagesLabel": "Jeziki",
        "about.languagesValue": "SL / EN / DE",
        "skills.label": "Znanja",
        "skills.title": "Orodja, ki jih uporabljam.",
        "skills.programming": "Programiranje",
        "skills.web": "Spletni razvoj",
        "skills.data": "Podatki",
        "skills.tools": "Orodja",
        "skills.prototype": "Prototipiranje",
        "education.label": "Izobrazba",
        "education.title": "Od mehatronike do informatike.",
        "education.currentType": "Visokošolski študij",
        "education.currentText": "Programiranje, informacijski sistemi, uporabniški vmesniki, podatkovne baze in operacijski sistemi.",
        "education.previousType": "Srednješolsko izobraževanje",
        "education.previousTitle": "Tehnik mehatronike",
        "education.previousText": "Elektrotehnika, strojništvo, robotika, krmiljenje in izdelava praktičnih tehničnih rešitev.",
        "projects.label": "Projekti",
        "projects.title": "Izbrano delo.",
        "projects.intro": "Projekti, pri katerih sem povezal programiranje, načrtovanje in praktično izvedbo.",
        "project1.caption1": "3D model ohišja",
        "project1.caption2": "Elektronske komponente",
        "project1.caption3": "Flutter aplikacija",
        "project1.title": "Avtomatski hranilnik za domače živali",
        "project1.description": "Maturitetni projekt, ki omogoča ročno ali časovno nastavljeno hranjenje prek mobilne aplikacije. Sistem uporablja ESP8266, Wi-Fi komunikacijo, DC motor in 3D natisnjeno ohišje.",
        "project1.link": "Odpri dokumentacijo ↗",
        "project2.caption1": "Uvodna stran",
        "project2.caption2": "Predstavitev projektov",
        "project2.caption3": "Prilagojen mobilni prikaz",
        "project2.title": "Osebni portfolio",
        "project2.description": "Minimalistična eno-stranska predstavitev z retro temnim videzom, dvojezično vsebino, odzivno postavitvijo, galerijami in nežnimi animacijami brez zunanjega JavaScript ogrodja.",
        "project2.link": "Odpri GitHub profil ↗",
        "project3.caption1": "Uvodna stran aplikacije",
        "project3.caption2": "Dnevni izziv",
        "project3.caption3": "Lestvica uporabnikov",
        "project3.title": "ComfortFriends",
        "project3.description": "Spletna aplikacija, ki spodbuja majhne vsakodnevne izzive, beleži napredek in povezuje prijatelje. Uporabniki opravljajo izzive, zbirajo točke ter spremljajo lestvico.",
        "contact.label": "Kontakt",
        "contact.title": "Imaš projekt ali priložnost?",
        "contact.text": "Dosegljiv sem za študentsko delo, junior pozicije in sodelovanje pri zanimivih projektih.",
        "footer.text": "Narejeno s HTML, CSS in JavaScript.",
        "footer.top": "Na vrh ↑"
    },
    en: {
        "menu.open": "Open menu",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.education": "Education",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.kicker": "Junior developer / ICT student",
        "hero.lead": "I build web and software solutions while combining computer science with my previous experience in mechatronics.",
        "hero.projects": "View projects",
        "hero.cv": "Download CV",
        "hero.status": "Open to student and junior opportunities",
        "about.label": "About",
        "about.title": "Technology with a practical purpose.",
        "about.lead": "I am an Informatics and Communication Technologies student at FERI with a background in mechatronics.",
        "about.body1": "I am interested in backend systems, web development and databases. I value solutions that are clear, understandable and useful.",
        "about.body2": "I improve my knowledge through university and personal projects involving programming, web technologies, electronics and prototyping.",
        "about.locationLabel": "Location",
        "about.locationValue": "Slovenia",
        "about.studyLabel": "Studies",
        "about.languagesLabel": "Languages",
        "about.languagesValue": "SL / EN / DE",
        "skills.label": "Skills",
        "skills.title": "Tools I work with.",
        "skills.programming": "Programming",
        "skills.web": "Web development",
        "skills.data": "Data",
        "skills.tools": "Tools",
        "skills.prototype": "Prototyping",
        "education.label": "Education",
        "education.title": "From mechatronics to computing.",
        "education.currentType": "Undergraduate studies",
        "education.currentText": "Programming, information systems, user interfaces, databases and operating systems.",
        "education.previousType": "Secondary education",
        "education.previousTitle": "Mechatronics technician",
        "education.previousText": "Electrical engineering, mechanical engineering, robotics, control systems and practical technical solutions.",
        "projects.label": "Projects",
        "projects.title": "Selected work.",
        "projects.intro": "Projects where I combined programming, planning and practical implementation.",
        "project1.caption1": "3D enclosure model",
        "project1.caption2": "Electronic components",
        "project1.caption3": "Flutter application",
        "project1.title": "Automatic pet feeder",
        "project1.description": "A graduation project supporting manual and scheduled feeding through a mobile application. The system uses an ESP8266, Wi-Fi communication, a DC motor and a 3D-printed enclosure.",
        "project1.link": "Open documentation ↗",
        "project2.caption1": "Landing page",
        "project2.caption2": "Project presentation",
        "project2.caption3": "Responsive mobile view",
        "project2.title": "Personal portfolio",
        "project2.description": "A minimalist single-page presentation with a dark retro design, bilingual content, responsive layout, project galleries and subtle animations without a JavaScript framework.",
        "project2.link": "Open GitHub profile ↗",
        "project3.caption1": "Application landing page",
        "project3.caption2": "Daily challenge",
        "project3.caption3": "User leaderboard",
        "project3.title": "ComfortFriends",
        "project3.description": "A web application that encourages small daily challenges, tracks progress and connects friends. Users complete challenges, collect points and follow the leaderboard.",
        "contact.label": "Contact",
        "contact.title": "Have a project or opportunity?",
        "contact.text": "I am available for student work, junior positions and collaboration on interesting projects.",
        "footer.text": "Built with HTML, CSS and JavaScript.",
        "footer.top": "Back to top ↑"
    }
};

const languageToggle = document.querySelector("#languageToggle");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const currentYear = document.querySelector("#currentYear");
const scrollProgress = document.querySelector("#scrollProgress");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector("#lightboxClose");
const galleryControllers = [];
let currentLanguage = "sl";

try {
    currentLanguage = localStorage.getItem("portfolio-language") || "sl";
} catch {
    currentLanguage = "sl";
}

if (!translations[currentLanguage]) {
    currentLanguage = "sl";
}

function closeMenu() {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const value = translations[language][key];
        if (value) {
            element.textContent = value;
        }
    });

    languageToggle.textContent = language === "sl" ? "EN" : "SL";
    languageToggle.setAttribute("aria-label", language === "sl" ? "Switch to English" : "Preklopi na slovenščino");
    mainNav.setAttribute("aria-label", language === "sl" ? "Glavna navigacija" : "Main navigation");
    lightboxClose.setAttribute("aria-label", language === "sl" ? "Zapri" : "Close");

    galleryControllers.forEach((controller) => controller.updateLanguage());

    try {
        localStorage.setItem("portfolio-language", language);
    } catch {
        return;
    }
}

function initializeGallery(gallery) {
    const viewport = gallery.querySelector(".gallery-viewport");
    const slides = Array.from(gallery.querySelectorAll(".gallery-slide"));
    const previousButton = gallery.querySelector(".gallery-prev");
    const nextButton = gallery.querySelector(".gallery-next");
    const dotsContainer = gallery.querySelector(".gallery-dots");
    const count = gallery.querySelector(".gallery-count");
    let activeIndex = 0;
    let scrollTimer;

    const dots = slides.map((slide, index) => {
        const dot = document.createElement("button");
        dot.className = "gallery-dot";
        dot.type = "button";
        dot.addEventListener("click", () => showSlide(index));
        dotsContainer.appendChild(dot);

        slide.addEventListener("click", () => {
            const image = slide.querySelector("img");
            const caption = slide.querySelector("figcaption");
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = caption.textContent;
            lightbox.showModal();
        });

        return dot;
    });

    function updateControls() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === activeIndex);
            dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
        });
        previousButton.disabled = activeIndex === 0;
        nextButton.disabled = activeIndex === slides.length - 1;
        count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }

    function showSlide(index, behavior = "smooth") {
        activeIndex = Math.max(0, Math.min(index, slides.length - 1));
        viewport.scrollTo({
            left: viewport.clientWidth * activeIndex,
            behavior
        });
        updateControls();
    }

    function updateLanguage() {
        const previousLabel = currentLanguage === "sl" ? "Prejšnja slika" : "Previous image";
        const nextLabel = currentLanguage === "sl" ? "Naslednja slika" : "Next image";
        const selectLabel = currentLanguage === "sl" ? "Izberi sliko" : "Select image";
        previousButton.setAttribute("aria-label", previousLabel);
        nextButton.setAttribute("aria-label", nextLabel);
        dotsContainer.setAttribute("aria-label", currentLanguage === "sl" ? "Izbira slike" : "Image selection");
        dots.forEach((dot, index) => dot.setAttribute("aria-label", `${selectLabel} ${index + 1}`));
    }

    previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => showSlide(activeIndex + 1));

    viewport.addEventListener("scroll", () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const newIndex = Math.round(viewport.scrollLeft / viewport.clientWidth);
            if (newIndex !== activeIndex) {
                activeIndex = Math.max(0, Math.min(newIndex, slides.length - 1));
                updateControls();
            }
        }, 60);
    }, { passive: true });

    window.addEventListener("resize", () => showSlide(activeIndex, "auto"));

    updateControls();
    galleryControllers.push({ updateLanguage });
}

menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    mainNav.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
});

mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "sl" ? "en" : "sl");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("scroll", () => {
    const maximum = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maximum > 0 ? (window.scrollY / maximum) * 100 : 0;
    scrollProgress.style.width = `${percentage}%`;
}, { passive: true });

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = Array.from(mainNav.querySelectorAll("a[href^='#']"));

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navigationLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: "-35% 0px -55%", threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll("[data-gallery]").forEach(initializeGallery);

lightboxClose.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.close();
    }
});

currentYear.textContent = new Date().getFullYear();
setLanguage(currentLanguage);
