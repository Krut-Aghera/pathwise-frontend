///////////////////////////////////////////////////////////////
// Section validation rules

const sectionValidationRules = {

    ///////////////////////////////////////////////////////////////
    // Basic information

    title: {
        required: {
            value: true,
            message: "Section title is required",
        },

        minLength: {
            value: 3,
            message: "Section title must be between 3 and 120 characters",
        },

        maxLength: {
            value: 120,
            message: "Section title must be between 3 and 120 characters",
        },
    },
}


///////////////////////////////////////////////////////////////
// Reorder section validation rules
//
// Used when reordering sections within a course.
//
// These rules intentionally mirror only the frontend-checkable
// portion of the backend validation.
//
// Backend additionally validates:
// - duplicate section IDs
// - duplicate orders
// - sequential orders
// - complete course section coverage
// - section ownership/course membership

const reorderSectionValidationRules = {

    sections: {

        validate: {

            required: (value) =>
                (
                    Array.isArray(value) &&
                    value.length >= 1
                ) ||
                "Sections must be a non-empty array",
        },

        item: {

            sectionId: {
                required: {
                    value: true,
                    message: "Section ID is required",
                },
            },

            order: {
                required: {
                    value: true,
                    message: "Order is required",
                },

                validate: {

                    positiveInteger: (value) => {

                        if (
                            value === "" ||
                            value === null ||
                            value === undefined
                        ) {
                            return "Order is required"
                        }

                        const order = Number(value)

                        return (
                            Number.isInteger(order) &&
                            order >= 1
                        ) ||
                        "Order must be a positive integer"
                    },
                },
            },
        },
    },
}


///////////////////////////////////////////////////////////////
// exports

export {
    sectionValidationRules,
    reorderSectionValidationRules,
}