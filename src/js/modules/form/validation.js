const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
    const value = email?.trim() ?? "";

    if(!value) {
        return {
            isValid: false,
            message: "Email is required"
        };
    }

    if (!EMAIL_REGEX.test(value)) {
        return {
            isValid: false,
            message: "Please enter a valid email address"
        };
    }

    return {
        isValid: true,
        message: "",
    };
}
