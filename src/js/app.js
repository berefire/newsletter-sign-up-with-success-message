import { validateEmail } from "./modules/validation";
import { showError, clearError, showSuccess, showForm, animateContainer } from "./modules/ui";

export function initApp() {

  const form = document.getElementById("signup-form");
  const input = document.getElementById("user-email");
  const errorMessage = document.querySelector(".error-message");
  const dismissBtn = document.querySelector(".dismiss-btn");

  /* form submit */

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    const userEmail = input.value.trim();

    if (!validateEmail(userEmail)) {

      showError(input, errorMessage);

      input.setAttribute("aria-invalid", "true");
      input.focus();

      return;

    }

    clearError(input, errorMessage);

    input.removeAttribute("aria-invalid");

    showSuccess(userEmail);

  });

  /* remove error while typing */

  input.addEventListener("input", () => {

    clearError(input, errorMessage);

    input.removeAttribute("aria-invalid");

  });

  /* dismiss success message */

  dismissBtn.addEventListener("click", () => {

    input.value = "";

    showForm();

    animateContainer();

    input.focus();

  });

  document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    showForm();

    input.focus();

  }

});

}