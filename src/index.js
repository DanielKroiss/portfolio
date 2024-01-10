import './styles/style.css';
import './images/daniel-1.jpg';
import './images/hamburger.svg';



window.addEventListener("load", () => {
    initMobileHeaderHandler();
});

function initMobileHeaderHandler() {
    document.getElementById("hamburger").addEventListener("click", () => {
        const mobileHeader = document.getElementById("mobile-menu");
        if (mobileHeader.style.display === "none") {
            mobileHeader.style.display = "block";
        } else {
            mobileHeader.style.display = "none";
        }
    });
    hideMobileHeaderOnMenuClick();
}

function hideMobileHeaderOnMenuClick() {
    const menuLinks = document.getElementsByClassName("menu-link");
    for (let menuLink of menuLinks) {
        menuLink.addEventListener("click", () => {
            if (mobileHeader.style.display === "block") {
                mobileHeader.style.display = "none";
            }
        });
    }
}