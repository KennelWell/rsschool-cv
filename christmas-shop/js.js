const next = document.querySelector(".slider__controls_next");
const prev = document.querySelector(".slider__controls_prev");
const slider = document.querySelector(".slider__items");
const visible = document.querySelector(".slider__content").offsetWidth;
const counterItems = slider.querySelectorAll(".slider__item");
let counter = 0;
let moveStart = 0;



next.addEventListener("click", () => {
    moveStart += ((slider.offsetWidth - visible) / 4) + 24
    prev.disabled = false;
    counter++; {
        if (counter === 4) {
            next.disabled = true;
        }
    }
    slider.style.transform = `translateX(-${moveStart}px)`
})

prev.addEventListener("click", () => {
    moveStart -= ((slider.offsetWidth - visible) / 4) + 24
    next.disabled = false;
    counter--;
    if (counter === 0) {
        prev.disabled = true;
    }
    slider.style.transform = `translateX(-${moveStart}px)`
})

