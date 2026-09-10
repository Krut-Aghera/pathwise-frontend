import {
    BookOpen,
    Clock3,
    Globe2,
    Layers3,
    Signal,
    Star,
    Users,
} from "lucide-react"

const formatDuration = (seconds = 0) => {
    const totalSeconds = Number(seconds) || 0

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)

    if (hours > 0) {
        return `${hours}h ${minutes}m`
    }

    return `${minutes}m`
}

const formatNumber = (value = 0) => {
    return new Intl.NumberFormat("en-IN").format(value)
}

const CourseDetailsHero = ({ course }) => {

    console.log(course)
    const statistics = course?.statistics ?? {}
    const instructor = course?.instructor ?? {}

    const rating = Number(statistics?.averageRating ?? 0)

    return (
        <section
            className="
                border-b
                border-border-subtle
                bg-background-base
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-7xl

                    px-4
                    py-8

                    sm:px-6
                    sm:py-10

                    lg:px-8
                    lg:py-12
                "
            >
                <div className="max-w-4xl">
                    {/* Breadcrumb */}

                    <div
                        className="
                            mb-5
                            flex
                            items-center
                            gap-2

                            font-body
                            text-xs
                            text-text-muted
                        "
                    >
                        <span>Courses</span>

                        <span className="text-text-muted/60">/</span>

                        <span className="truncate text-text-secondary">
                            {course?.title}
                        </span>
                    </div>

                    {/* Title */}

                    <h1
                        className="
                            font-accent
                            text-3xl
                            font-semibold
                            leading-tight
                            text-text-primary

                            sm:text-4xl
                        "
                    >
                        {course?.title}
                    </h1>

                    {/* Subtitle */}

                    {course?.subtitle && (
                        <p
                            className="
                                mt-4
                                max-w-3xl

                                font-body
                                text-sm
                                leading-7
                                text-text-secondary

                                sm:text-base
                            "
                        >
                            {course.subtitle}
                        </p>
                    )}

                    {/* Rating + students */}

                    <div
                        className="
                            mt-5
                            flex
                            flex-wrap
                            items-center
                            gap-x-5
                            gap-y-2

                            font-body
                            text-sm
                        "
                    >
                        <div className="flex items-center gap-2">
                            <Star
                                size={16}
                                className="
                                    fill-status-warning
                                    text-status-warning
                                "
                            />

                            <span
                                className="
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                {rating.toFixed(1)}
                            </span>

                            <span className="text-text-muted">
                                ({formatNumber(
                                    statistics?.totalRatings
                                )}{" "}
                                ratings)
                            </span>
                        </div>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-text-secondary
                            "
                        >
                            <Users
                                size={16}
                                className="text-accent-secondary"
                            />

                            <span>
                                {formatNumber(
                                    statistics?.totalEnrollments
                                )}{" "}
                                students
                            </span>
                        </div>
                    </div>

                    {/* Instructor */}

                    <div
                        className="
                            mt-6
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                overflow-hidden

                                rounded-full
                                border
                                border-border-subtle
                                bg-background-elevated
                            "
                        >
                            {instructor?.profilePicture?.url ? (
                                <img
                                    src={
                                        instructor.profilePicture.url
                                    }
                                    alt={
                                        instructor?.username ??
                                        "Instructor"
                                    }
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />
                            ) : (
                                <span
                                    className="
                                        font-accent
                                        text-sm
                                        font-semibold
                                        text-accent-secondary
                                    "
                                >
                                    {instructor?.username
                                        ?.charAt(0)
                                        ?.toUpperCase() ?? "I"}
                                </span>
                            )}
                        </div>

                        <p
                            className="
                                font-body
                                text-sm
                                text-text-secondary
                            "
                        >
                            Created by{" "}
                            <span
                                className="
                                    font-medium
                                    text-text-primary
                                "
                            >
                                {instructor?.username ??
                                    "Instructor"}
                            </span>
                        </p>
                    </div>

                    {/* Course statistics */}

                    <div
                        className="
                            mt-7
                            border-y
                            border-border-subtle
                            py-4
                        "
                    >
                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-y-5

                                sm:grid-cols-4
                                sm:gap-y-0
                            "
                        >
                            {/* Sections */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2.5

                                    sm:border-r
                                    sm:border-border-subtle
                                    sm:px-4
                                    sm:first:pl-0
                                "
                            >
                                <Layers3
                                    size={16}
                                    className="
                                        shrink-0
                                        text-accent-primary
                                    "
                                />

                                <div>
                                    <p
                                        className="
                                            font-body
                                            text-xs
                                            text-text-muted
                                        "
                                    >
                                        Sections
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            font-body
                                            text-sm
                                            font-semibold
                                            text-text-primary
                                        "
                                    >
                                        {statistics?.totalSections ?? 0}
                                    </p>
                                </div>
                            </div>

                            {/* Lectures */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2.5

                                    sm:border-r
                                    sm:border-border-subtle
                                    sm:px-4
                                "
                            >
                                <BookOpen
                                    size={16}
                                    className="
                                        shrink-0
                                        text-accent-secondary
                                    "
                                />

                                <div>
                                    <p
                                        className="
                                            font-body
                                            text-xs
                                            text-text-muted
                                        "
                                    >
                                        Lectures
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            font-body
                                            text-sm
                                            font-semibold
                                            text-text-primary
                                        "
                                    >
                                        {statistics?.totalLectures ?? 0}
                                    </p>
                                </div>
                            </div>

                            {/* Duration */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2.5

                                    sm:border-r
                                    sm:border-border-subtle
                                    sm:px-4
                                "
                            >
                                <Clock3
                                    size={16}
                                    className="
                                        shrink-0
                                        text-text-muted
                                    "
                                />

                                <div>
                                    <p
                                        className="
                                            font-body
                                            text-xs
                                            text-text-muted
                                        "
                                    >
                                        Duration
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            font-body
                                            text-sm
                                            font-semibold
                                            text-text-primary
                                        "
                                    >
                                        {formatDuration(
                                            statistics?.totalDuration
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Level */}

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2.5

                                    sm:px-4
                                    sm:pr-0
                                "
                            >
                                <Signal
                                    size={16}
                                    className="
                                        shrink-0
                                        text-accent-unique
                                    "
                                />

                                <div>
                                    <p
                                        className="
                                            font-body
                                            text-xs
                                            text-text-muted
                                        "
                                    >
                                        Level
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            font-body
                                            text-sm
                                            font-semibold
                                            capitalize
                                            text-text-primary
                                        "
                                    >
                                        {course?.level ?? "—"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Language */}

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            gap-2

                            font-body
                            text-sm
                            text-text-secondary
                        "
                    >
                        <Globe2
                            size={16}
                            className="text-accent-secondary"
                        />

                        <span>
                            Language:{" "}
                            <span className="text-text-primary">
                                {course?.language ?? "—"}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsHero