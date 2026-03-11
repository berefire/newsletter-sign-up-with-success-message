import { validateEmail } from "./modules/validation";
import { showError, clearError, showSuccess, ShowForm } from "./modules/ui";

export function initApp(){

    const form = document.getElementById("signup-form");
    const input = document.getElementById("user-email");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const userEmail = input.value.trim();

        if(!validateEmail(userEmail)) {
            showError(input, errorMessage);
            return;
        }

        clearError(input, errorMessage);
        showSuccess(userEmail);
    })
}