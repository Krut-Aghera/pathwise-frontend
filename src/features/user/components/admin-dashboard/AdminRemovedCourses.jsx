import { ArchiveX } from "lucide-react"

const AdminRemovedCourses = ({ courses = [] }) => {
    return (
        <section className="overflow-hidden rounded-xl border border-status-danger/20 bg-status-danger/5">
            <div className="flex items-center justify-between gap-4 border-b border-status-danger/10 px-4 py-3.5 sm:px-5">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-status-danger/10 text-status-danger">
                        <ArchiveX size={15} strokeWidth={1.8} />
                    </div>

                    <div>
                        <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-status-danger">
                            Archive
                        </p>

                        <h2 className="mt-0.5 font-accent text-base font-semibold text-text-primary">
                            Removed courses
                        </h2>
                    </div>
                </div>

                <span className="shrink-0 rounded-full border border-status-danger/20 bg-status-danger/5 px-2 py-1 font-body text-[10px] font-semibold text-status-danger">
                    {courses.length}
                </span>
            </div>

            <div className="max-h-80 overflow-y-auto">
                {courses.length > 0 ? (
                    <div className="divide-y divide-status-danger/10">
                        {courses.map((course) => (
                            <div
                                key={course._id}
                                className="px-4 py-3.5 transition-colors hover:bg-status-danger/5 sm:px-5"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-status-danger" />

                                    <div className="min-w-0">
                                        <h3 className="font-accent text-sm font-medium text-text-primary">
                                            {course.title}
                                        </h3>

                                        <p className="mt-1 line-clamp-2 font-body text-[11px] leading-4 text-text-secondary">
                                            {course.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-32 items-center justify-center px-4">
                        <p className="font-body text-xs text-text-muted">
                            No removed courses found.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default AdminRemovedCourses
