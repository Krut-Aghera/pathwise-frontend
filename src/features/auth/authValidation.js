const SIGNUP_REGEX_VALIDATIONS = {
    username: {
        PATTERN: /^[a-zA-Z]+(?: +[a-zA-Z]+)*$/,
        MESSAGE:
            "Username can only contain letters and spaces. Numbers and special characters are not allowed.",
        HINT: "Use letters (A-Z, a-z) and spaces between words. A single word is also allowed. Maximum 30 characters.",
    },

    email: {
        PATTERN: /^\S+@\S+\.\S+$/,
        MESSAGE: "Please provide a valid email address.",
        HINT: "Email must contain '@' and a domain (e.g. user@example.com).",
    },

    password: {
        PATTERN: /^.{8,}$/,
        MESSAGE: "Password must be at least 8 characters long.",
        HINT: "Use at least 8 characters. A mix of uppercase, lowercase, numbers, and symbols is recommended.",
    },
}

const signupValidationRules = {
    username: {
        required: {
            value: true,
            message: "Username is required",
        },

        minLength: {
            value: 3,
            message: "Username must be between 3 and 30 characters",
        },

        maxLength: {
            value: 30,
            message: "Username must be between 3 and 30 characters",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.username.PATTERN,
            message: SIGNUP_REGEX_VALIDATIONS.username.MESSAGE,
        },
    },

    email: {
        required: {
            value: true,
            message: "Email is required",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.email.PATTERN,
            message: SIGNUP_REGEX_VALIDATIONS.email.MESSAGE,
        },
    },

    password: {
        required: {
            value: true,
            message: "Password is required",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.password.PATTERN,
            message: SIGNUP_REGEX_VALIDATIONS.password.MESSAGE,
        },
    },
}

const loginValidationRules = {
    email: {
        required: {
            value: true,
            message: "Email is required",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.email.PATTERN,
            message: SIGNUP_REGEX_VALIDATIONS.email.MESSAGE,
        },
    },

    password: {
        required: {
            value: true,
            message: "Password is required",
        },
    },
}

const forgotPasswordValidationRules = {
    email: {
        required: {
            value: true,
            message: "Email is required",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.email.PATTERN,
            message: SIGNUP_REGEX_VALIDATIONS.email.MESSAGE,
        },
    },
}

const changePasswordValidationRules = {
    currentPassword: {
        required: {
            value: true,
            message: "Current password is required",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.password.PATTERN,
            message: "Current password is incorrect",
        },
    },

    newPassword: {
        required: {
            value: true,
            message: "New password is required",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.password.PATTERN,
            message: SIGNUP_REGEX_VALIDATIONS.password.MESSAGE,
        },
    },
}

const resetPasswordValidationRules = {
    newPassword: {
        required: {
            value: true,
            message: "New password is required",
        },

        pattern: {
            value: SIGNUP_REGEX_VALIDATIONS.password.PATTERN,
            message: SIGNUP_REGEX_VALIDATIONS.password.MESSAGE,
        },
    },

    confirmPassword: {
        required: {
            value: true,
            message: "Confirm password is required",
        },

        validate: (value, formValues) => {
            if (value !== formValues.newPassword) {
                return "Passwords do not match."
            }

            return true
        },
    },
}

export {
    SIGNUP_REGEX_VALIDATIONS,
    signupValidationRules,
    loginValidationRules,
    forgotPasswordValidationRules,
    changePasswordValidationRules,
    resetPasswordValidationRules,
}
