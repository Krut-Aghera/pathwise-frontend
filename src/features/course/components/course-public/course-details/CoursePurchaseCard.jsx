import {
    ArrowRight,
    BookOpen,
    Clock3,
    Globe2,
    LockKeyhole,
    Play,
    Signal,
} from "lucide-react"

import Button from "../../../../../components/ui/Button"
import formatDuration from "../../../../../utils/format-media-duration"

const formatPrice = (price = 0) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price)
}

const CoursePurchaseCard = ({ course, onEnroll, isEnrolling = false }) => {
    const statistics = course?.statistics ?? {}

    const totalLectures = statistics?.totalLectures ?? 0
    const totalDuration = statistics?.totalDuration ?? 0

    return (
        <aside
            className="
                overflow-hidden
                rounded-xl
                border
                border-border-subtle
                bg-background-elevated
                shadow-xl
                shadow-black/20
            "
        >
            {/* Thumbnail */}

            <div
                className="
                    relative
                    aspect-16/10
                    overflow-hidden
                    bg-background-surface
                "
            >
                {course?.thumbnail?.url ? (
                    <img
                        src={course.thumbnail.url}
                        alt={course?.title ?? "Course thumbnail"}
                        className="
                            h-full
                            w-full
                            object-cover
                        "
                    />
                ) : (
                    <div
                        className="
                            flex
                            h-full
                            items-center
                            justify-center
                            font-body
                            text-sm
                            text-text-muted
                        "
                    >
                        No thumbnail
                    </div>
                )}

                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-14
                        bg-linear-to-t
                        from-black/75
                        to-transparent
                    "
                />

                <div
                    className="
                        absolute
                        bottom-2.5
                        left-2.5
                        flex
                        items-center
                        gap-1.5
                        rounded-md
                        border
                        border-white/10
                        bg-black/50
                        px-2
                        py-1
                        font-body
                        text-[10px]
                        font-medium
                        text-white
                        backdrop-blur-md
                    "
                >
                    <Play
                        size={10}
                        className="fill-current text-accent-secondary"
                    />
                    Preview available
                </div>
            </div>

            <div className="p-4">
                {/* Price */}

                <div className="flex items-center justify-between gap-3">
                    <p
                        className="
                            font-accent
                            text-2xl
                            font-semibold
                            leading-none
                            text-text-primary
                        "
                    >
                        {formatPrice(course?.price)}
                    </p>

                    <LockKeyhole
                        size={15}
                        className="shrink-0 text-accent-primary"
                    />
                </div>

                {/* CTA */}

                <Button
                    type="button"
                    onClick={() => onEnroll?.(course?._id)}
                    loading={isEnrolling}
                    className="
                        mt-3
                        h-10
                        w-full
                        rounded-lg
                        font-semibold
                        text-white
                "
                >
                    Enroll Now
                </Button>

                {/* Course value */}

                <div
                    className="
                        mt-4
                        border-t
                        border-border-subtle
                        pt-3
                    "
                >
                    <h3
                        className="
                            font-accent
                            text-base
                            font-semibold
                            text-text-primary
                        "
                    >
                        What you'll get
                    </h3>

                    <div
                        className="
                            mt-1.5
                            divide-y
                            divide-border-subtle
                        "
                    >
                        {/* Lectures */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1.5
                            "
                        >
                            <div className="flex items-center gap-2.5">
                                <BookOpen
                                    size={14}
                                    className="text-accent-secondary"
                                />

                                <span
                                    className="
                                        font-body
                                        text-xs
                                        text-text-secondary
                                    "
                                >
                                    Lectures
                                </span>
                            </div>

                            <span
                                className="
                                    font-body
                                    text-xs
                                    font-medium
                                    text-text-primary
                                "
                            >
                                {totalLectures}
                            </span>
                        </div>

                        {/* Duration */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1.5
                            "
                        >
                            <div className="flex items-center gap-2.5">
                                <Clock3
                                    size={14}
                                    className="text-accent-primary"
                                />

                                <span
                                    className="
                                        font-body
                                        text-xs
                                        text-text-secondary
                                    "
                                >
                                    Course duration
                                </span>
                            </div>

                            <span
                                className="
                                    font-body
                                    text-xs
                                    font-medium
                                    text-text-primary
                                "
                            >
                                {formatDuration(totalDuration)}
                            </span>
                        </div>

                        {/* Level */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1.5
                            "
                        >
                            <div className="flex items-center gap-2.5">
                                <Signal
                                    size={14}
                                    className="text-accent-unique"
                                />

                                <span
                                    className="
                                        font-body
                                        text-xs
                                        text-text-secondary
                                    "
                                >
                                    Level
                                </span>
                            </div>

                            <span
                                className="
                                    font-body
                                    text-xs
                                    font-medium
                                    capitalize
                                    text-text-primary
                                "
                            >
                                {course?.level ?? "All"}
                            </span>
                        </div>

                        {/* Language */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                py-1.5
                            "
                        >
                            <div className="flex items-center gap-2.5">
                                <Globe2
                                    size={14}
                                    className="text-status-warning"
                                />

                                <span
                                    className="
                                        font-body
                                        text-xs
                                        text-text-secondary
                                    "
                                >
                                    Language
                                </span>
                            </div>

                            <span
                                className="
                                    font-body
                                    text-xs
                                    font-medium
                                    text-text-primary
                                "
                            >
                                {course?.language ?? "English"}
                            </span>
                        </div>
                    </div>

                    {/* Lifetime access */}

                    <div
                        className="
                            mt-2.5
                            flex
                            items-center
                            gap-2.5
                            rounded-lg
                            border
                            border-accent-secondary/20
                            bg-accent-secondary/10
                            px-3
                            py-2
                        "
                    >
                        <LockKeyhole
                            size={14}
                            className="
                                shrink-0
                                text-accent-secondary
                            "
                        />

                        <div className="min-w-0">
                            <p
                                className="
                                    font-body
                                    text-xs
                                    font-semibold
                                    text-text-primary
                                "
                            >
                                Lifetime access
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    font-body
                                    text-[10px]
                                    text-text-secondary
                                "
                            >
                                Learn at your own pace
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default CoursePurchaseCard
