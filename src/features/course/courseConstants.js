export const COURSE_LEVELS = {
    BEGINNER: "beginner",
    INTERMEDIATE: "intermediate",
    ADVANCED: "advanced",
}

export const COURSE_LEVEL_OPTIONS = [
    {
        value: COURSE_LEVELS.BEGINNER,
        label: "Beginner",
    },
    {
        value: COURSE_LEVELS.INTERMEDIATE,
        label: "Intermediate",
    },
    {
        value: COURSE_LEVELS.ADVANCED,
        label: "Advanced",
    },
]

export const COURSE_LANGUAGES = {
    ENGLISH: "English",
    HINDI: "Hindi",
}

export const COURSE_LANGUAGE_OPTIONS = [
    {
        value: COURSE_LANGUAGES.ENGLISH,
        label: "English",
    },
    {
        value: COURSE_LANGUAGES.HINDI,
        label: "Hindi",
    },
]

///////////////////////////////////////////////////////////////
// Course sorting

export const COURSE_SORT_FIELDS = {
    CREATED_AT: "createdAt",
    TITLE: "title",
    PRICE: "price",
}

export const COURSE_SORT_OPTIONS = [
    {
        value: COURSE_SORT_FIELDS.CREATED_AT,
        label: "Newest",
    },
    {
        value: COURSE_SORT_FIELDS.TITLE,
        label: "Title",
    },
    {
        value: COURSE_SORT_FIELDS.PRICE,
        label: "Price",
    },
]

export const SORT_ORDERS = {
    ASC: "asc",
    DESC: "desc",
}

export const SORT_ORDER_OPTIONS = [
    {
        value: SORT_ORDERS.ASC,
        label: "Ascending",
    },
    {
        value: SORT_ORDERS.DESC,
        label: "Descending",
    },
]
