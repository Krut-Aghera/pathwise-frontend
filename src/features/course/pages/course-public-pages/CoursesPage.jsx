import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"

import {
    Search,
    SlidersHorizontal,
} from "lucide-react"

import { useNavigate, useSearchParams } from "react-router-dom"

import useCourse from "../../hooks/useCourse.js"

import CourseFilters from "../../components/course-public/CourseFilters.jsx"
import CourseGrid from "../../components/course-public/CourseGrid.jsx"
import CourseGridSkeleton from "../../components/course-public/CourseGridSkeleton.jsx"
import CoursePagination from "../../components/course-public/CoursePagination.jsx"
import CourseSearch from "../../components/course-public/CourseSearch.jsx"

import {
    COURSE_SORT_FIELDS,
    SORT_ORDERS,
} from "../../courseConstants.js"

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 12
const DEFAULT_SORT_BY = COURSE_SORT_FIELDS.CREATED_AT
const DEFAULT_SORT_ORDER = SORT_ORDERS.DESC

const CoursesPage = () => {

    const navigate = useNavigate()
    const [searchParams, setSearchParams] =
        useSearchParams()

    const {
        fetchCourses,
        courses,
        coursesPagination,

        isCoursesLoading,
        isCoursesFetching,
        isCoursesError,
        coursesError,
    } = useCourse()

    ///////////////////////////////////////////////////////////////
    // URL state

    const pageParam = Number(searchParams.get("page"))

    const limitParam = Number(
        searchParams.get("limit")
    )

    const page =
        Number.isFinite(pageParam) && pageParam > 0
            ? pageParam
            : DEFAULT_PAGE

    const limit =
        Number.isFinite(limitParam) && limitParam > 0
            ? limitParam
            : DEFAULT_LIMIT

    const search =
        searchParams.get("search") ?? ""

    const level =
        searchParams.get("level") ?? ""

    const language =
        searchParams.get("language") ?? ""

    const sortBy =
        searchParams.get("sortBy") ??
        DEFAULT_SORT_BY

    const sortOrder =
        searchParams.get("sortOrder") ??
        DEFAULT_SORT_ORDER

    ///////////////////////////////////////////////////////////////
    // Local state

    const [searchInput, setSearchInput] =
        useState(search)

    const [isMobileFiltersOpen, setIsMobileFiltersOpen] =
        useState(false)

    const isFirstSearchRender = useRef(true)

    ///////////////////////////////////////////////////////////////
    // Fetch courses

    const loadCourses = useCallback(() => {
        fetchCourses({
            page,
            limit,
            search: search || undefined,
            sortBy,
            sortOrder,
            level: level || undefined,
            language: language || undefined,
        })
    }, [
        fetchCourses,
        page,
        limit,
        search,
        sortBy,
        sortOrder,
        level,
        language,
    ])

    useEffect(() => {
        loadCourses()
    }, [loadCourses])

    ///////////////////////////////////////////////////////////////
    // Sync search input with URL

    useEffect(() => {
        setSearchInput(search)
    }, [search])

    ///////////////////////////////////////////////////////////////
    // Debounced search

    useEffect(() => {
        if (isFirstSearchRender.current) {
            isFirstSearchRender.current = false
            return
        }

        const timeoutId = setTimeout(() => {
            const trimmedSearch =
                searchInput.trim()

            setSearchParams(
                (currentParams) => {
                    const nextParams =
                        new URLSearchParams(
                            currentParams
                        )

                    if (trimmedSearch) {
                        nextParams.set(
                            "search",
                            trimmedSearch
                        )
                    } else {
                        nextParams.delete("search")
                    }

                    nextParams.delete("page")

                    return nextParams
                },
                {
                    replace: true,
                }
            )
        }, 400)

        return () => clearTimeout(timeoutId)
    }, [
        searchInput,
        setSearchParams,
    ])

    ///////////////////////////////////////////////////////////////
    // Filter update

    const updateFilter = useCallback(
        (key, value) => {
            setSearchParams(
                (currentParams) => {
                    const nextParams =
                        new URLSearchParams(
                            currentParams
                        )

                    if (value) {
                        nextParams.set(key, value)
                    } else {
                        nextParams.delete(key)
                    }

                    nextParams.delete("page")

                    return nextParams
                },
                {
                    replace: true,
                }
            )

            setIsMobileFiltersOpen(false)
        },
        [setSearchParams]
    )

    ///////////////////////////////////////////////////////////////
    // Reset filters

    const handleResetFilters = useCallback(() => {
        setSearchInput("")

        setSearchParams(
            (currentParams) => {
                const nextParams =
                    new URLSearchParams()

                const currentLimit =
                    currentParams.get("limit")

                if (currentLimit) {
                    nextParams.set(
                        "limit",
                        currentLimit
                    )
                }

                return nextParams
            },
            {
                replace: true,
            }
        )

        setIsMobileFiltersOpen(false)
    }, [setSearchParams])

    ///////////////////////////////////////////////////////////////
    // Pagination

    const handlePageChange = useCallback(
        (nextPage) => {
            if (nextPage < 1) {
                return
            }

            if (
                coursesPagination?.totalPages &&
                nextPage >
                coursesPagination.totalPages
            ) {
                return
            }

            setSearchParams(
                (currentParams) => {
                    const nextParams =
                        new URLSearchParams(
                            currentParams
                        )

                    if (
                        nextPage === DEFAULT_PAGE
                    ) {
                        nextParams.delete("page")
                    } else {
                        nextParams.set(
                            "page",
                            String(nextPage)
                        )
                    }

                    return nextParams
                },
                {
                    replace: false,
                }
            )

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        },
        [
            coursesPagination?.totalPages,
            setSearchParams,
        ]
    )

    ///////////////////////////////////////////////////////////////
    // Active filters

    const hasActiveFilters = useMemo(
        () =>
            Boolean(
                search ||
                level ||
                language ||
                sortBy !==
                DEFAULT_SORT_BY ||
                sortOrder !==
                DEFAULT_SORT_ORDER
            ),
        [
            search,
            level,
            language,
            sortBy,
            sortOrder,
        ]
    )

    ///////////////////////////////////////////////////////////////
    // Result count

    const resultText = useMemo(() => {
        const totalItems =
            coursesPagination?.totalItems ?? 0

        if (totalItems === 0) {
            return "No courses found"
        }

        if (totalItems === 1) {
            return "1 course"
        }

        return `${totalItems} courses`
    }, [
        coursesPagination?.totalItems,
    ])


    // Course detail page navigator

    const handleCourseDetailsPage = useCallback(
        (course) => {
            const courseId = course?._id ?? course?.id

            if (!courseId) {
                return
            }

            navigate(`/courses/${courseId}`)
        },
        [navigate]
    )

    ///////////////////////////////////////////////////////////////
    // Initial loading

    if (
        isCoursesLoading &&
        courses?.length === 0
    ) {
        return (
            <main
                className="
                    min-h-screen
                    bg-background-base
                "
            >
                <div
                    className="
                        mx-auto
                        w-full
                        max-w-360

                        px-4
                        py-8

                        sm:px-6
                        sm:py-10

                        lg:px-8
                        lg:py-12
                    "
                >
                    <div className="mb-6">
                        <div
                            className="
                                h-4
                                w-20
                                animate-pulse
                                rounded
                                bg-background-elevated
                            "
                        />
                    </div>

                    <div className="mb-7">
                        <div
                            className="
                                h-12
                                w-full
                                animate-pulse
                                rounded-xl
                                bg-background-surface
                            "
                        />
                    </div>

                    <div
                        className="
                            grid
                            gap-6

                            lg:grid-cols-[240px_minmax(0,1fr)]
                        "
                    >
                        <div
                            className="
                                hidden
                                h-80
                                animate-pulse
                                rounded-xl
                                bg-background-surface

                                lg:block
                            "
                        />

                        <CourseGridSkeleton
                            count={DEFAULT_LIMIT}
                        />
                    </div>
                </div>
            </main>
        )
    }

    ///////////////////////////////////////////////////////////////
    // Error

    if (
        isCoursesError &&
        courses?.length === 0
    ) {
        return (
            <main
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center

                    bg-background-base

                    px-4
                "
            >
                <div
                    className="
                        w-full
                        max-w-md

                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface

                        p-6

                        text-center
                    "
                >
                    <h1
                        className="
                            font-accent
                            text-lg
                            font-semibold
                            text-text-primary
                        "
                    >
                        Unable to load courses
                    </h1>

                    <p
                        className="
                            mt-2

                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        "
                    >
                        {coursesError?.message ??
                            "Something went wrong while loading courses."}
                    </p>

                    <button
                        type="button"
                        onClick={loadCourses}
                        className="
                            mt-5

                            inline-flex
                            cursor-pointer
                            items-center
                            justify-center

                            rounded-lg
                            bg-accent-primary

                            px-4
                            py-2.5

                            font-body
                            text-sm
                            font-medium
                            text-white

                            transition-opacity
                            duration-200

                            hover:opacity-90
                        "
                    >
                        Try again
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main
            className="
                min-h-screen
                bg-background-base
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-360

                    px-4
                    py-8

                    sm:px-6
                    sm:py-10

                    lg:px-8
                    lg:py-12
                "
            >
                {/* Explore label */}

                <header className="mb-5">
                    <div
                        className="
                            flex
                            items-center
                            gap-2

                            font-body
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wider
                            text-accent-primary
                        "
                    >
                        <Search size={16} />

                        <span>Explore</span>
                    </div>
                </header>

                {/* Search */}

                <div className="mb-7">
                    <CourseSearch
                        value={searchInput}
                        onChange={setSearchInput}
                    />
                </div>

                {/* Mobile filters */}

                <div className="mb-5 lg:hidden">
                    <button
                        type="button"
                        onClick={() =>
                            setIsMobileFiltersOpen(
                                (current) =>
                                    !current
                            )
                        }
                        className="
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            gap-2

                            rounded-lg
                            border
                            border-border-subtle
                            bg-background-surface

                            px-4
                            py-2.5

                            font-body
                            text-sm
                            font-medium
                            text-text-secondary

                            transition-colors
                            duration-200

                            hover:border-accent-primary/40
                            hover:text-text-primary
                        "
                    >
                        <SlidersHorizontal
                            size={16}
                        />

                        {isMobileFiltersOpen
                            ? "Hide filters"
                            : "Show filters"}
                    </button>
                </div>

                {/* Main content */}

                <div
                    className="
                        grid
                        gap-6

                        lg:grid-cols-[240px_minmax(0,1fr)]
                        lg:items-start
                    "
                >
                    {/* Sidebar */}

                    <div
                        className={`
                            ${isMobileFiltersOpen
                                ? "block"
                                : "hidden"
                            }

                            lg:sticky
                            lg:top-6
                            lg:block
                        `}
                    >
                        <CourseFilters
                            level={level}
                            language={language}
                            sortBy={sortBy}
                            sortOrder={sortOrder}
                            onLevelChange={(value) =>
                                updateFilter(
                                    "level",
                                    value
                                )
                            }
                            onLanguageChange={(
                                value
                            ) =>
                                updateFilter(
                                    "language",
                                    value
                                )
                            }
                            onSortByChange={(value) =>
                                updateFilter(
                                    "sortBy",
                                    value
                                )
                            }
                            onSortOrderChange={(
                                value
                            ) =>
                                updateFilter(
                                    "sortOrder",
                                    value
                                )
                            }
                            onReset={
                                handleResetFilters
                            }
                            hasActiveFilters={
                                hasActiveFilters
                            }
                        />
                    </div>

                    {/* Results */}

                    <section
                        aria-label="Course results"
                        className="min-w-0"
                    >
                        {/* Results header */}

                        <div
                            className="
                                mb-5
                                flex
                                min-h-6
                                items-center
                                justify-between
                                gap-4
                            "
                        >
                            <p
                                className="
                                    font-body
                                    text-sm
                                    text-text-secondary
                                "
                            >
                                {resultText}
                            </p>

                            {isCoursesFetching &&
                                !isCoursesLoading && (
                                    <span
                                        className="
                                            font-body
                                            text-xs
                                            text-text-muted
                                        "
                                    >
                                        Updating...
                                    </span>
                                )}
                        </div>

                        {/* Empty state */}

                        {!isCoursesFetching &&
                            !isCoursesError &&
                            courses?.length === 0 && (
                                <div
                                    className="
                                        rounded-xl
                                        border
                                        border-border-subtle
                                        bg-background-surface

                                        px-6
                                        py-14

                                        text-center
                                    "
                                >
                                    <h2
                                        className="
                                            font-accent
                                            text-lg
                                            font-semibold
                                            text-text-primary
                                        "
                                    >
                                        No courses found
                                    </h2>

                                    <p
                                        className="
                                            mx-auto
                                            mt-2
                                            max-w-md

                                            font-body
                                            text-sm
                                            leading-6
                                            text-text-secondary
                                        "
                                    >
                                        Try changing
                                        your search or
                                        adjusting the
                                        filters to find
                                        available
                                        courses.
                                    </p>

                                    {hasActiveFilters && (
                                        <button
                                            type="button"
                                            onClick={
                                                handleResetFilters
                                            }
                                            className="
                                                mt-5

                                                cursor-pointer
                                                rounded-lg
                                                bg-accent-primary

                                                px-4
                                                py-2.5

                                                font-body
                                                text-sm
                                                font-medium
                                                text-white

                                                transition-opacity
                                                duration-200

                                                hover:opacity-90
                                            "
                                        >
                                            Clear filters
                                        </button>
                                    )}
                                </div>
                            )}

                        {/* Course grid */}

                        {courses?.length > 0 && (
                            <>
                                <div
                                    className={
                                        isCoursesFetching
                                            ? `
                                                opacity-60
                                                transition-opacity
                                                duration-200
                                            `
                                            : ""
                                    }
                                >
                                    <CourseGrid
                                        courses={courses}
                                        onCourseClick={handleCourseDetailsPage}
                                    />
                                </div>

                                {/* Pagination */}

                                <div className="mt-10">
                                    <CoursePagination
                                        pagination={
                                            coursesPagination
                                        }
                                        onPageChange={
                                            handlePageChange
                                        }
                                        disabled={
                                            isCoursesFetching
                                        }
                                    />
                                </div>
                            </>
                        )}
                    </section>
                </div>
            </div>
        </main>
    )
}

export default CoursesPage
