"use strict";


function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}



function scrollHandler() {

    const sections = qs('.section', true);
    const timeline = qs('.timeline');
    const line = qs('.line');
    line.style.display = 'block';
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * .8;
    const {
        scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();
    const dist = targetY - timelineRect.top;

    if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set + 40}px)`;
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
    }

    sections.forEach(item => {
        const rect = item.getBoundingClientRect(); //

        if (rect.top + item.offsetHeight / 15 < targetY) {
            item.classList.add('show-me');
        }
    });

    prevScrollY = window.scrollY;
}

window.addEventListener("load", () => {
    scrollHandler();
});

window.addEventListener('scroll', scrollHandler);