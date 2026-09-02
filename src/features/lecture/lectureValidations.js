///////////////////////////////////////////////////////////////
// Lecture validation rules

const lectureValidationRules = {
    ///////////////////////////////////////////////////////////////
    // Basic information

    title: {
        required: {
            value: true,
            message: "Lecture title is required",
        },

        minLength: {
            value: 3,
            message: "Lecture title must be between 3 and 150 characters",
        },

        maxLength: {
            value: 150,
            message: "Lecture title must be between 3 and 150 characters",
        },
    },

    ///////////////////////////////////////////////////////////////
    // Description

    description: {
        maxLength: {
            value: 3000,
            message: "Lecture description cannot exceed 3000 characters",
        },
    },
}

///////////////////////////////////////////////////////////////
// Reorder lecture validation rules
//
// Used when reordering lectures within a section.
//
// These rules intentionally mirror only the
// frontend-checkable portion of the backend validation.
//
// Backend additionally validates:
// - duplicate lecture IDs
// - duplicate orders
// - sequential orders
// - complete section lecture coverage
// - lecture ownership/section membership

const reorderLectureValidationRules = {
    lectures: {
        validate: {
            required: (value) =>
                (Array.isArray(value) && value.length >= 1) ||
                "Lectures must be a non-empty array",
        },

        item: {
            lectureId: {
                required: {
                    value: true,
                    message: "Lecture ID is required",
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
                            (Number.isInteger(order) && order >= 1) ||
                            "Order must be a positive integer"
                        )
                    },
                },
            },
        },
    },
}

///////////////////////////////////////////////////////////////
// Lecture video validation rules
//
// Mirrors the frontend-checkable portion of the
// backend multer configuration.
//
// Backend additionally handles:
// - temporary file creation
// - Cloudinary upload
// - existing video conflict
// - video metadata
// - storage/Cloudinary failures

const lectureVideoValidationRules = {
    video: {
        required: {
            value: true,
            message: "Lecture video is required",
        },

        validate: {
            fileType: (file) => {
                if (!file) {
                    return true
                }

                const allowedMimeTypes = [
                    "video/mp4",
                    "video/webm",
                    "video/quicktime",
                ]

                return (
                    allowedMimeTypes.includes(file.type) ||
                    "Only MP4, MOV and WEBM video files are allowed."
                )
            },

            maxSize: (file) => {
                if (!file) {
                    return true
                }

                const maxSize = 5 * 1024 * 1024 * 1024

                return (
                    file.size <= maxSize || "Lecture video cannot exceed 5 GB"
                )
            },
        },
    },
}

///////////////////////////////////////////////////////////////
// exports

export {
    lectureValidationRules,
    reorderLectureValidationRules,
    lectureVideoValidationRules,
}
