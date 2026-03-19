/* ========= ERROR ========= */

export function showError(input, messageElement, message){
  if (!input) return;

  input.classList.add("invalid-input");
  input.setAttribute("aria-invalid", "true");
  
  if (messageElement) {
    messageElement.textContent = message;
    messageElement.classList.add("label-is-error");
    messageElement.setAttribute("role", "alert");
  } else {
    console.warn("Error message element not found for displaying error:", messageElement);
  }
}

export function clearError(input, messageElement){
  if (!input) return;

  input.classList.remove("invalid-input", "input--error");
  input.removeAttribute("aria-invalid");  

  if (messageElement) {
    messageElement.textContent = "";
    messageElement.classList.remove("label-is-error");
    messageElement.removeAttribute("role");
  } else {
    console.warn("Error message element not found for clearing error:", messageElement);
  }
}

/* ========= STATES ========= */

export function showSuccessUI({
  formSection,
  email,
  successEmail,
  successSection,
  successTitle,
  successDescription,
}) {
  formSection?.classList.add("hidden");

  if (successSection) {
     successSection.classList.remove("hidden");
     successSection.removeAttribute("aria-hidden");
  } else {
    console.warn("Success section element not found:", successSection);
  }

  if (successTitle) {
    successTitle.setAttribute("tabindex", "-1");
    successTitle.setAttribute("role", "status");
    successTitle.setAttribute("aria-live", "polite");
  } else {
    console.warn("Success title element not found:", successTitle);
  }

  if (successDescription) {
    successDescription.setAttribute("aria-live", "polite");
    successDescription.setAttribute("aria-atomic", "true");
  } else {
    console.warn("Success description element not found:", successDescription);
  }

  successEmail.textContent = email;
}

export function showFormUI({
  formSection,
  successSection,
  successTitle,
  successDescription,
}) {
  formSection?.classList.remove("hidden");

  if (successSection) {
    successSection.classList.add("hidden");
    successSection.setAttribute("aria-hidden", "true");
  } else {
    console.warn("Success section element not found:", successSection);
  }

  if (successTitle) {
    successTitle.removeAttribute("tabindex");
    successTitle.removeAttribute("role");
    successTitle.removeAttribute("aria-live");
  } else {
    console.warn("Success title element not found:", successTitle);
  }

  if (successDescription) {
    successDescription.removeAttribute("aria-live");
    successDescription.removeAttribute("aria-atomic");
  } else {
    console.warn("Success description element not found:", successDescription);
  }
}

/* ========= FOCUS ========== */

export function focusElement(element) {
  if (element && typeof element.focus === "function") {
    element.focus();
  }
}