import { SIGNUP_REGEX_VALIDATIONS } from "../auth/authValidation"

const userValidationRules = {
    ///////////////////////////////////////////////////////////////
    // Username update

    usernameUpdate: {
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
    },

    ///////////////////////////////////////////////////////////////
    // Email change request

    emailChangeRequest: {
        password: {
            required: {
                value: true,
                message: "Current password is required",
            },
        },

        newEmail: {
            required: {
                value: true,
                message: "Email is required",
            },

            pattern: {
                value: SIGNUP_REGEX_VALIDATIONS.email.PATTERN,
                message: SIGNUP_REGEX_VALIDATIONS.email.MESSAGE,
            },
        },
    },

    ///////////////////////////////////////////////////////////////
    // Account deactivation request

    accountDeactivationRequest: {
        password: {
            required: {
                value: true,
                message: "Current password is required",
            },
        },
    },

    ///////////////////////////////////////////////////////////////
    // Account deactivation confirmation

    accountDeactivationConfirmation: {
        otp: {
            required: {
                value: true,
                message: "Verification code is required",
            },

            minLength: {
                value: 6,
                message: "Verification code must be 6 digits",
            },

            maxLength: {
                value: 6,
                message: "Verification code must be 6 digits",
            },

            pattern: {
                value: /^\d+$/,
                message: "Verification code must contain only numbers",
            },
        },
    },
}

export default userValidationRules
