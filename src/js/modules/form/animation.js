export function triggerShake(element) {
    if (!element) return;

    element.classList.remove("input--error");
    void element.offsetWidth; // trigger reflow to restart animation
    element.classList.add("input--error");
}

export function animateContainer(element) {
    if (!element) return;

    element.classList.remove("animate-enter-up");
    void element.offsetWidth; // trigger reflow to restart animation
    element.classList.add("animate-enter-up");
}