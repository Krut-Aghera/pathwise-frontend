import {
    COURSE_LEVELS,
    COURSE_LANGUAGES,
} from "./courseConstants.js"


///////////////////////////////////////////////////////////////
// Course validation rules

const courseValidationRules = {

    ///////////////////////////////////////////////////////////////
    // Basic information

    title: {
        required: {
            value: true,
            message: "Title is required",
        },

        minLength: {
            value: 5,
            message: "Title must be between 5 and 120 characters",
        },

        maxLength: {
            value: 120,
            message: "Title must be between 5 and 120 characters",
        },
    },


    subtitle: {
        required: {
            value: true,
            message: "Subtitle is required",
        },

        maxLength: {
            value: 180,
            message: "Subtitle cannot exceed 180 characters",
        },
    },


    description: {
        required: {
            value: true,
            message: "Description is required",
        },

        minLength: {
            value: 20,
            message: "Description must be between 20 and 10000 characters",
        },

        maxLength: {
            value: 10000,
            message: "Description must be between 20 and 10000 characters",
        },
    },


    ///////////////////////////////////////////////////////////////
    // Course details

    price: {
        required: {
            value: true,
            message: "Price is required",
        },

        validate: {
            validPrice: (value) => {

                if (value === "") {
                    return "Price is required"
                }

                const price = Number(value)

                if (!Number.isFinite(price)) {
                    return "Price must be a valid number"
                }

                if (price < 0) {
                    return "Price must be greater than or equal to 0"
                }

                return true
            },
        },
    },


    language: {
        required: {
            value: true,
            message: "Language is required",
        },

        validate: {
            validLanguage: (value) =>
                Object.values(COURSE_LANGUAGES).includes(value) ||
                "Language must be English or Hindi",
        },
    },


    level: {
        required: {
            value: true,
            message: "Level is required",
        },

        validate: {
            validLevel: (value) =>
                Object.values(COURSE_LEVELS).includes(value) ||
                "Level must be Beginner, Intermediate, or Advanced",
        },
    },


    ///////////////////////////////////////////////////////////////
    // Learning outcomes

    learningOutcomes: {

        validate: {

            required: (value) =>
                Array.isArray(value) &&
                value.length >= 1 ||
                "At least one learning outcome is required",

            maxItems: (value) =>
                Array.isArray(value) &&
                value.length <= 10 ||
                "You can add a maximum of 10 learning outcomes",
        },

        item: {

            required: {
                value: true,
                message: "Learning outcome cannot be empty",
            },

            maxLength: {
                value: 200,
                message: "Learning outcome cannot exceed 200 characters",
            },

            validate: {

                notBlank: (value) =>
                    value.trim().length > 0 ||
                    "Learning outcome cannot be empty",
            },
        },
    },


    ///////////////////////////////////////////////////////////////
    // Target audience

    targetAudience: {

        validate: {

            required: (value) =>
                Array.isArray(value) &&
                value.length >= 1 ||
                "At least one target audience item is required",

            maxItems: (value) =>
                Array.isArray(value) &&
                value.length <= 10 ||
                "You can add a maximum of 10 target audience items",
        },

        item: {

            required: {
                value: true,
                message: "Target audience item cannot be empty",
            },

            maxLength: {
                value: 200,
                message: "Target audience item cannot exceed 200 characters",
            },

            validate: {

                notBlank: (value) =>
                    value.trim().length > 0 ||
                    "Target audience item cannot be empty",
            },
        },
    },


    ///////////////////////////////////////////////////////////////
    // Requirements

    requirements: {

        validate: {

            required: (value) =>
                Array.isArray(value) &&
                value.length >= 1 ||
                "At least one requirement is required",

            maxItems: (value) =>
                Array.isArray(value) &&
                value.length <= 10 ||
                "You can add a maximum of 10 requirements",
        },

        item: {

            required: {
                value: true,
                message: "Requirement cannot be empty",
            },

            maxLength: {
                value: 200,
                message: "Requirement cannot exceed 200 characters",
            },

            validate: {

                notBlank: (value) =>
                    value.trim().length > 0 ||
                    "Requirement cannot be empty",
            },
        },
    },
}


///////////////////////////////////////////////////////////////
// Thumbnail validation rules
//
// Only used when creating a course.

const courseThumbnailValidationRules = {

    required: {
        value: true,
        message: "Course thumbnail is required",
    },

    validate: {

        validFile: (files) => {

            if (!files || files.length === 0) {
                return "Course thumbnail is required"
            }

            return true
        },
    },
}


export {
    courseValidationRules,
    courseThumbnailValidationRules,
}