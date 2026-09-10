const Skeleton = ({ className = "" }) => {
    return (
        <div
            className={`
                animate-pulse
                rounded-lg
                bg-background-elevated
                ${className}
            `}
        />
    )
}

const CourseDetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-background-base">
            {/* Hero */}
            <section className="border-b border-border-subtle bg-background-surface">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
                        <div>
                            <Skeleton className="h-4 w-40" />

                            <Skeleton className="mt-6 h-12 w-full max-w-3xl" />

                            <Skeleton className="mt-3 h-6 w-full max-w-2xl" />

                            <div className="mt-6 flex gap-5">
                                <Skeleton className="h-5 w-28" />
                                <Skeleton className="h-5 w-32" />
                            </div>

                            <div className="mt-5 flex items-center gap-3">
                                <Skeleton className="h-9 w-9 rounded-full" />
                                <Skeleton className="h-4 w-40" />
                            </div>

                            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Skeleton
                                        key={index}
                                        className="h-24 rounded-xl"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <Skeleton className="aspect-video w-full rounded-t-2xl" />
                            <Skeleton className="h-72 w-full rounded-b-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
                    <div className="space-y-10">
                        <section>
                            <Skeleton className="h-7 w-48" />
                            <Skeleton className="mt-5 h-40 w-full rounded-2xl" />
                        </section>

                        <section>
                            <Skeleton className="h-7 w-52" />

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Skeleton
                                        key={index}
                                        className="h-20 rounded-xl"
                                    />
                                ))}
                            </div>
                        </section>

                        <section>
                            <Skeleton className="h-7 w-48" />

                            <div className="mt-5 overflow-hidden rounded-2xl border border-border-subtle">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Skeleton
                                        key={index}
                                        className="h-16 rounded-none border-b border-border-subtle last:border-0"
                                    />
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="hidden lg:block">
                        <Skeleton className="h-80 rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsSkeleton