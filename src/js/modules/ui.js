/* cache DOM elements */

const formSection = document.querySelector(".newsletter");
const successSection = document.querySelector(".success-message");
const emailText = document.querySelector(".success-email");
const container = document.querySelector(".cover");

/* error handling */

export function showError(input, messageElement, message = "Please enter a valid email address" ) {
  input.classList.add("error", "invalid-input");
  input.setAttribute("aria-invalid", "true");

  messageElement.textContent = message;
  messageElement.setAttribute("role", "alert");

  triggerShake(input);
}

export function clearError(input, messageElement) {
  input.classList.remove("error", "invalid-input", "input-shake");

  messageElement.textContent = "";
}

/* UI states */

export function showSuccess(email) {
  formSection.classList.add("hidden");
  successSection.classList.remove("hidden");
  successSection.setAttribute("aria-hidden", "false");
  successSection.removeAttribute("tabindex");

  emailText.textContent = email;

  animateContainer();

  successSection.focus();
}

export function showForm() {
  successSection.classList.add("hidden");
  successSection.setAttribute("aria-hidden", "true");
  successSection.setAttribute("tabindex", "-1");
  formSection.classList.remove("hidden");
}

/* animations */

function triggerShake(element) {
  element.classList.remove("input-shake");

  void element.offsetWidth;

  element.classList.add("input-shake");
}

export function animateContainer() {
  container.classList.remove("animate-in");

  void container.offsetWidth;

  container.classList.add("animate-in");
}
