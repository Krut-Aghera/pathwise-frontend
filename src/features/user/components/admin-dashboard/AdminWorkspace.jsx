import {
    BookOpen,
    CircleDashed,
    GraduationCap,
    LoaderCircle,
    UserRoundCheck,
} from "lucide-react"

const AdminWorkspace = ({
    instructors = [],
    students = [],
    courses = [],
    publishedCourses = [],
    draftCourses = [],
    isLoading = false,
}) => {
    if (isLoading) {
        return (
            <section className="overflow-hidden rounded-xl border border-border-subtle bg-background-surface">
                <div className="flex min-h-60 items-center justify-center">
                    <LoaderCircle
                        size={24}
                        strokeWidth={1.7}
                        className="animate-spin text-accent-primary"
                    />
                </div>
            </section>
        )
    }

    return (
        <section className="space-y-5">
            {/* People overview */}

            <div>
                <div className="mb-3">
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-secondary">
                        Platform activity
                    </p>

                    <h2 className="mt-1 font-accent text-lg font-semibold tracking-tight text-text-primary">
                        People overview
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                    {/* Instructors */}

                    <div className="overflow-hidden rounded-xl border border-border-subtle bg-background-surface">
                        <div className="flex items-center justify-between gap-4 border-b border-border-subtle px-4 py-3.5">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                                    <UserRoundCheck
                                        size={17}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="font-body text-xs font-medium text-text-primary">
                                        Instructors
                                    </p>

                                    <p className="mt-0.5 font-body text-[10px] text-text-secondary">
                                        Platform instructors
                                    </p>
                                </div>
                            </div>

                            <span className="shrink-0 rounded-full border border-accent-primary/20 bg-accent-primary/5 px-2 py-1 font-body text-[10px] font-semibold text-accent-primary">
                                {instructors.length}
                            </span>
                        </div>

                        <div className="max-h-64 overflow-y-auto">
                            {instructors.length > 0 ? (
                                <div className="divide-y divide-border-subtle">
                                    {instructors.map((instructor, index) => (
                                        <div
                                            key={`${instructor.name}-${index}`}
                                            className="flex items-center gap-2.5 px-4 py-2.5 transition-colors hover:bg-background-elevated/50"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-primary/10 text-[10px] font-semibold uppercase text-accent-primary">
                                                {instructor.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase() || "I"}
                                            </div>

                                            <span className="truncate font-body text-xs font-medium capitalize text-text-primary">
                                                {instructor.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex min-h-32 items-center justify-center px-4">
                                    <p className="font-body text-xs text-text-muted">
                                        No instructors found.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Students */}

                    <div className="overflow-hidden rounded-xl border border-border-subtle bg-background-surface">
                        <div className="flex items-center justify-between gap-4 border-b border-border-subtle px-4 py-3.5">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-unique/10 text-accent-unique">
                                    <GraduationCap
                                        size={17}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="font-body text-xs font-medium text-text-primary">
                                        Students
                                    </p>

                                    <p className="mt-0.5 font-body text-[10px] text-text-secondary">
                                        Registered learners
                                    </p>
                                </div>
                            </div>

                            <span className="shrink-0 rounded-full border border-accent-unique/20 bg-accent-unique/5 px-2 py-1 font-body text-[10px] font-semibold text-accent-unique">
                                {students.length}
                            </span>
                        </div>

                        <div className="max-h-64 overflow-y-auto">
                            {students.length > 0 ? (
                                <div className="divide-y divide-border-subtle">
                                    {students.map((student, index) => (
                                        <div
                                            key={`${student.name}-${index}`}
                                            className="flex items-center gap-2.5 px-4 py-2.5 transition-colors hover:bg-background-elevated/50"
                                        >
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-unique/10 text-[10px] font-semibold uppercase text-accent-unique">
                                                {student.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase() || "S"}
                                            </div>

                                            <span className="truncate font-body text-xs font-medium capitalize text-text-primary">
                                                {student.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex min-h-32 items-center justify-center px-4">
                                    <p className="font-body text-xs text-text-muted">
                                        No students found.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Course overview */}

            <div>
                <div className="mb-3">
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-secondary">
                        Course activity
                    </p>

                    <h2 className="mt-1 font-accent text-lg font-semibold tracking-tight text-text-primary">
                        Course overview
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Course status */}

                    <div className="rounded-xl border border-border-subtle bg-background-surface p-4">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between rounded-lg bg-background-elevated px-3 py-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-secondary/10 text-accent-secondary">
                                        <BookOpen
                                            size={15}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <p className="font-body text-xs font-medium text-text-primary">
                                            Published
                                        </p>

                                        <p className="font-body text-[10px] text-text-secondary">
                                            Live courses
                                        </p>
                                    </div>
                                </div>

                                <span className="font-accent text-lg font-semibold text-text-primary">
                                    {publishedCourses.length}
                                </span>
                            </div>

                            <div className="flex items-center justify-between rounded-lg bg-background-elevated px-3 py-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                                        <CircleDashed
                                            size={15}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <p className="font-body text-xs font-medium text-text-primary">
                                            Draft
                                        </p>

                                        <p className="font-body text-[10px] text-text-secondary">
                                            Work in progress
                                        </p>
                                    </div>
                                </div>

                                <span className="font-accent text-lg font-semibold text-text-primary">
                                    {draftCourses.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* All courses */}

                    <div className="overflow-hidden rounded-xl border border-border-subtle bg-background-surface">
                        <div className="flex items-center justify-between gap-4 border-b border-border-subtle px-4 py-3.5">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-secondary/10 text-accent-secondary">
                                    <BookOpen
                                        size={17}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="font-body text-xs font-medium text-text-primary">
                                        All courses
                                    </p>

                                    <p className="mt-0.5 font-body text-[10px] text-text-secondary">
                                        Courses across the platform
                                    </p>
                                </div>
                            </div>

                            <span className="shrink-0 rounded-full border border-accent-secondary/20 bg-accent-secondary/5 px-2 py-1 font-body text-[10px] font-semibold text-accent-secondary">
                                {courses.length}
                            </span>
                        </div>

                        <div className="max-h-80 overflow-y-auto">
                            {courses.length > 0 ? (
                                <div className="divide-y divide-border-subtle">
                                    {courses.map((course) => {
                                        const isDraft = draftCourses.some(
                                            (draftCourse) =>
                                                draftCourse._id === course._id
                                        )

                                        return (
                                            <div
                                                key={course._id}
                                                className="px-4 py-3.5 transition-colors hover:bg-background-elevated/50"
                                            >
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="min-w-0">
                                                        <h3 className="font-accent text-sm font-medium text-text-primary">
                                                            {course.title}
                                                        </h3>

                                                        <p className="mt-1 line-clamp-2 font-body text-[11px] leading-4 text-text-secondary">
                                                            {course.subtitle}
                                                        </p>

                                                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                                                            <p className="font-body text-[10px] capitalize text-text-muted">
                                                                By{" "}
                                                                {course.instructor}
                                                            </p>

                                                            <span className="text-[10px] text-border-subtle">
                                                                •
                                                            </span>

                                                            <p className="font-body text-[10px] text-text-muted">
                                                                ₹{course.price}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <span
                                                        className={`
                                                            shrink-0
                                                            rounded-full
                                                            border
                                                            px-2
                                                            py-1
                                                            font-body
                                                            text-[9px]
                                                            font-semibold
                                                            uppercase
                                                            tracking-[0.1em]

                                                            ${
                                                                isDraft
                                                                    ? `
                                                                        border-status-warning/20
                                                                        bg-status-warning/5
                                                                        text-status-warning
                                                                    `
                                                                    : `
                                                                        border-status-success/20
                                                                        bg-status-success/5
                                                                        text-status-success
                                                                    `
                                                            }
                                                        `}
                                                    >
                                                        {isDraft
                                                            ? "Draft"
                                                            : "Published"}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className="flex min-h-40 items-center justify-center px-4">
                                    <p className="font-body text-xs text-text-muted">
                                        No courses found.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminWorkspace
