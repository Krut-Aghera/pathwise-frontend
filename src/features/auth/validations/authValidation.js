import {
    SIGNUP_REGEX_VALIDATIONS,
} from "../../../constants/regexConstants.js"


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


export {
    signupValidationRules,
    loginValidationRules
}