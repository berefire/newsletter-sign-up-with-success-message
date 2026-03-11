export function showError(input, messageElement){
    input.classList.add("error");
    input.classList.add("invalid-input")
    messageElement.textContent = "Valid email required";

    input.classList.remove("input-shake");
    void input.offsetWidth;
    input.classList.add("input-shake");
}

export function clearError(input, messageElement){
      input.classList.remove("error");
      input.classList.remove("invalid-input");
      input.classList.remove("input-shake");
      messageElement.textContent = "";
}

export function showSuccess(email) {
    const formSection = document.querySelector(".newsletter");
    const successSection = document.querySelector(".success-message");
    const emailText = document.querySelector(".success-email");

    formSection.classList.add("hidden");
    successSection.classList.remove("hidden");

    animateContainer();

    emailText.textContent = email;
}

export function ShowForm(){

    const formSection = document.querySelector(".newsletter");
    const successSection = document.querySelector(".success-message");

    successSection.classList.add("hidden");
    formSection.classList.remove("hidden");
}

export function animateContainer(){

    const container = document.querySelector(".cover")

    container.classList.remove("animate-in");

    void container.offsetWidth;

    container.classList.add("animate-in");
}