export function triggerShake(element) {
    element.classList.remove("input--error");
    void element.offsetWidth; // trigger reflow to restart animation
    element.classList.add("input--error");
}

export function animateContainer(container) {
    container.classList.remove("animate-enter-up");
    void container.offsetWidth; // trigger reflow to restart animation
    container.classList.add("animate-enter-up");
}