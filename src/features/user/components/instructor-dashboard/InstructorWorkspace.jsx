import {
    ArrowRight,
    BookOpen,
    FileEdit,
    List,
    LoaderCircle,
} from "lucide-react"

import { Link } from "react-router-dom"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorWorkspace = ({
    draftCourses = [],
    allCourses = [],
    isLoading = false,
}) => {
    return (
        <section
            className="
                rounded-2xl
                border
                border-border-subtle
                bg-background-surface
            "
        >
            <div className="px-4 py-4 sm:px-5 lg:px-6 lg:py-5">
                {/* Header */}

                <div
                    className="
                        flex
                        flex-col
                        gap-4

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <div className="min-w-0">
                        <p
                            className="
                                font-body
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-accent-secondary
                            "
                        >
                            Course workspace
                        </p>

                        <h2
                            className="
                                mt-1
                                font-accent
                                text-lg
                                font-semibold
                                tracking-tight
                                text-text-primary
                            "
                        >
                            Continue building
                        </h2>

                        <p
                            className="
                                mt-1
                                font-body
                                text-xs
                                leading-5
                                text-text-secondary
                            "
                        >
                            Create a new course or continue working on your
                            drafts.
                        </p>
                    </div>

                    {/* Actions */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-2
                        "
                    >
                        <Link
                            to="/instructor/courses/create"
                            className="
                                inline-flex
                                h-9
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-accent-secondary
                                px-3.5
                                font-body
                                text-xs
                                font-semibold
                                text-background-base
                                transition-all
                                duration-200

                                hover:opacity-90
                                active:scale-[0.98]
                            "
                        >
                            <BookOpen size={15} strokeWidth={1.8} />
                            Create course
                        </Link>

                        <Link
                            to="/instructor/courses"
                            state={{
                                courses: allCourses,
                            }}
                            className="
                                inline-flex
                                h-9
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                border
                                border-border-subtle
                                bg-background-elevated
                                px-3.5
                                font-body
                                text-xs
                                font-semibold
                                text-text-secondary
                                transition-all
                                duration-200

                                hover:border-accent-secondary/30
                                hover:text-accent-secondary
                                active:scale-[0.98]
                            "
                        >
                            <List size={15} strokeWidth={1.8} />
                            All courses
                        </Link>
                    </div>
                </div>

                {/* Draft courses */}

                <div
                    className="
                        mt-4
                        border-t
                        border-border-subtle
                        pt-4
                    "
                >
                    <div
                        className="
                            mb-2.5
                            flex
                            items-center
                            justify-between
                            gap-3
                        "
                    >
                        <div className="flex items-center gap-2">
                            <FileEdit
                                size={16}
                                strokeWidth={1.5}
                                className="text-status-warning"
                            />

                            <p
                                className="
                                    font-body
                                    text-sm
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                Draft courses
                            </p>
                        </div>

                        <span
                            className="
                                rounded-full
                                bg-accent-primary/10
                                px-2
                                py-0.5
                                font-body
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-wider
                                text-status-warning
                            "
                        >
                            {isLoading ? "—" : draftCourses.length}
                        </span>
                    </div>

                    {/* Loading */}

                    {isLoading ? (
                        <div
                            className="
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-dashed
                                border-border-subtle
                                px-4
                                py-6
                            "
                        >
                            <LoaderCircle
                                size={17}
                                strokeWidth={1.8}
                                className="
                                    animate-spin
                                    text-status-warning
                                "
                            />

                            <p
                                className="
                                    font-body
                                    text-xs
                                    text-text-secondary
                                "
                            >
                                Loading your courses...
                            </p>
                        </div>
                    ) : draftCourses.length > 0 ? (
                        <div className="space-y-2">
                            {draftCourses.map((course) => (
                                <article
                                    key={course.id}
                                    className="
                                        group
                                        flex
                                        min-w-0
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        border-border-subtle
                                        bg-background-elevated
                                        px-3
                                        py-4
                                        transition-all
                                        duration-200

                                    
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-status-warning/10
                                            text-status-warning
                                        "
                                    >
                                        <FileEdit size={17} strokeWidth={1.5} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3
                                            className="
                                                truncate
                                                font-accent
                                                text-[15px]
                                                font-semibold
                                                text-text-primary
                                                transition-colors
                                                duration-200

                                                group-hover:text-status-warning
                                            "
                                        >
                                            {course.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-0.5
                                                truncate
                                                font-body
                                                text-[12px]
                                                text-text-muted
                                            "
                                        >
                                            {course.subtitle ||
                                                "Continue building your course."}
                                        </p>
                                    </div>

                                    <Link
                                        to={`/instructor/courses/${course._id}/manage`}
                                        className="
                                            inline-flex
                                            h-10
                                            shrink-0
                                            items-center
                                            justify-center
                                            gap-1.5
                                            rounded-lg
                                            border
                                            border-status-warning/20
                                            bg-status-warning/10
                                            px-4
                                            font-body
                                            text-[13px]
                                            font-semibold
                                            text-status-warning
                                            transition-all
                                            duration-200

                                            hover:text-status-warning/80
                                            hover:bg-status-warning/10
                                            active:
                                        "
                                    >
                                        Manage
                                        <ArrowRight
                                            size={14}
                                            strokeWidth={1.8}
                                        />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div
                            className="
                                rounded-xl
                                border
                                border-dashed
                                border-border-subtle
                                px-4
                                py-5
                                text-center
                            "
                        >
                            <FileEdit
                                size={18}
                                strokeWidth={1.7}
                                className="
                                    mx-auto
                                    text-text-muted
                                "
                            />

                            <p
                                className="
                                    mt-2
                                    font-body
                                    text-xs
                                    font-medium
                                    text-text-secondary
                                "
                            >
                                No draft courses
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    font-body
                                    text-[10px]
                                    text-text-muted
                                "
                            >
                                Start creating your next course.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default InstructorWorkspace
