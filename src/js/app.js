import { validateEmail } from "./modules/validation";
import { showError, clearError, showSuccess, ShowForm, animateContainer } from "./modules/ui";

export function initApp() {
  const form = document.getElementById("signup-form");
  const input = document.getElementById("user-email");
  const errorMessage = document.querySelector(".error-message");
  const dismissBtn = document.querySelector(".dismiss-btn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userEmail = input.value.trim();

    if (!validateEmail(userEmail)) {
      showError(input, errorMessage);
      return;
    }

    clearError(input, errorMessage);
    showSuccess(userEmail);
  });

  /* limpiar error mientras el usuario escribe */

  input.addEventListener("input", () => {
    clearError(input, errorMessage);
  });

  dismissBtn.addEventListener("click", () => {

    input.value = "";
    ShowForm();

    animateContainer();

  });
}
