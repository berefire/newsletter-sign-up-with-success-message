/* ========= ERROR ========= */

export function showError(input, messageElement, message){
  input.classList.add("invalid-input");
  input.setAttribute("aria-invalid", "true");
  
  messageElement.textContent = message;
  messageElement.classList.add("label-is-error");
  messageElement.setAttribute("role", "alert");
}

export function clearError(input, messageElement){
  input.classList.remove("invalid-input", "input--error");
  input.removeAttribute("aria-invalid");  

  messageElement.textContent = "";
  messageElement.removeAttribute("role");
}

/* ========= STATES ========= */

export function showSuccessUI({
  email,
  successEmail,
  formSection,
  successSection,
}) {
  formSection.classList.add("hidden");

  successSection.classList.remove("hidden");
  successSection.removeAttribute("aria-hidden");
  successSection.setAttribute("aria-live", "polite");

  successEmail.textContent = email;
}

export function showFormUI({
  formSection,
  successSection,
}) {
  formSection.classList.remove("hidden");
  successSection.classList.add("hidden");
  successSection.setAttribute("aria-hidden", "true");
  successSection.setAttribute("tabindex", "-1");
}

/* ========= FOCUS ========== */

export function focusElement(element) {
  element?.focus();
}