import { validateEmail } from "./modules/validation";
import {
  showError,
  clearError,
  showSuccess,
  showForm,
  animateContainer,
} from "./modules/ui";

export function initApp() {
  const form = document.getElementById("signup-form");
  const input = document.getElementById("user-email");
  const errorMessage = document.querySelector(".error-message");
  const dismissBtn = document.querySelector(".dismiss-btn");

  // Run after DOM is loaded to ensure elements exist
  document.addEventListener("DOMContentLoaded", () => {
    // Defensive checks: bail out with a clear message if a required element is missing
    if (!form || !input) {
      console.warn("Sign-up form or input missing — skipping form behavior."); // non-blocking for users
      return; // safe exit: nothing else will run that expects these elements
    }

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
    if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      input.value = "";

      showForm();

      animateContainer();

      input.focus();
    });
  }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        showForm();

        input.focus();
      }
    });
  });
}
