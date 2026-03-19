import { validateEmail } from "./validation";
import {
  showError,
  clearError,
  showSuccessUI,
  showFormUI,
  focusElement,
} from "./ui";
import { triggerShake, animateContainer } from "./animation";

export function createForm() {
  /* ======== REFS =========== */
  const refs = {
    form: document.getElementById("signup-form"),
    inputEmail: document.getElementById("user-email"),
    errorMessage: document.getElementById("email-error"),
    dismissBtn: document.querySelector(".dismiss-btn"),
    container: document.querySelector(".cover"),
    formSection: document.querySelector(".newsletter"),
    successSection: document.getElementById("success-section"),
    successEmail: document.getElementById("success-email"),
  };

  let isInitialized = false;

  /* ============= HANDLERS ============= */

  function handleSubmit(event) {
    event.preventDefault();

    const emailValue = validateEmail(refs.inputEmail.value);

    if (!emailValue.isValid) {
      showError(refs.inputEmail, refs.errorMessage, emailValue.message);
      triggerShake(refs.inputEmail);
      focusElement(refs.inputEmail);
      return;
    }

    clearError(refs.inputEmail, refs.errorMessage);
    showSuccessUI({
      email: refs.inputEmail.value,
      successEmail: refs.successEmail,
      formSection: refs.formSection,
      successSection: refs.successSection,
    });

    animateContainer(refs.container);
    focusElement(refs.successSection);
  }

  function handleInput() {
    clearError(refs.inputEmail, refs.errorMessage);
  }

  function handleDismiss() {
    showFormUI({
      formSection: refs.formSection,
      successSection: refs.successSection,
    });

    animateContainer(refs.container);
    focusElement(refs.inputEmail);
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      showFormUI({
        formSection: refs.formSection,
        successSection: refs.successSection,
      });

      focusElement(refs.inputEmail);
    }
  }

  /* ============== EVENTS =============== */

  function bindEvents() {
    refs.form.addEventListener("submit", handleSubmit);
    refs.inputEmail.addEventListener("input", handleInput);
    refs.dismissBtn?.addEventListener("click", handleDismiss);
    document.addEventListener("keydown", handleEscape);
  }

  function unbindEvents() {
    refs.form.removeEventListener("submit", handleSubmit);
    refs.inputEmail.removeEventListener("input", handleInput);
    refs.dismissBtn?.removeEventListener("click", handleDismiss);
    document.removeEventListener("keydown", handleEscape);
  }

  /* ============== LIFECYCLE =============== */

  function init() {
    if (isInitialized) return;

    if (!refs.form || !refs.inputEmail) {
      console.warn("Sign-up form or input missing — skipping form behavior.");
      return;
    }

    bindEvents();
    isInitialized = true;
  }

  function destroy() {
    if (!isInitialized) return;

    unbindEvents();
    isInitialized = false;
  }

  return {
    init,
    destroy,
  };
}
