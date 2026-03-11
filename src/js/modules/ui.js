export function showError(input, messageElement){
    input.classList.add("error");
    input.classList.add("invalid-input")
    messageElement.textContent = "Valid email required";
}

export function clearError(input, messageElement){
      input.classList.remove("error");
      input.classList.remove("invalid-input");
      messageElement.textContent = "";
}

export function showSuccess(email) {
    const formSection = document.querySelector(".newsletter");
    const successSection = document.querySelector(".success-message");
    const emailText = document.getElementById("user-email");

    formSection.classList.add("hidden");
    successSection.classList.remove("hidden");

    emailText.textContent = email;
}

export function ShowForm(){

    const formSection = document.querySelector(".newsletter");
    const successSection = document.querySelector(".success-message");

    successSection.classList.add("hidden");
    formSection.classList.remove("hidden");
}