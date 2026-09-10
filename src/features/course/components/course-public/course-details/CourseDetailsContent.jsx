import { Check, CircleAlert } from "lucide-react"

const CourseDetailsContent = ({ course }) => {
    return (
        <section
            className="
                rounded-xl
                border
                border-border-subtle
                bg-background-surface

                p-5

                sm:p-6
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
                About this Course
            </h2>

            {/* Description */}

            {course?.description && (
                <div className="mt-5">
                    <p
                        className="
                            whitespace-pre-line

                            font-body
                            text-sm
                            leading-7
                            text-text-secondary
                        "
                    >
                        {course.description}
                    </p>
                </div>
            )}

            {/* Learning outcomes */}

            {course?.learningOutcomes?.length > 0 && (
                <div className="mt-6">
                    <h3
                        className="
                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                    >
                        What You'll Learn
                    </h3>

                    <ul
                        className="
                            mt-3
                            grid
                            gap-3

                            sm:grid-cols-2
                        "
                    >
                        {course.learningOutcomes.map(
                            (outcome, index) => (
                                <li
                                    key={`${outcome}-${index}`}
                                    className="
                                        flex
                                        items-start
                                        gap-2

                                        font-body
                                        text-sm
                                        leading-6
                                        text-text-secondary
                                    "
                                >
                                    <Check
                                        size={16}
                                        className="
                                            mt-1
                                            shrink-0
                                            text-status-success
                                        "
                                    />

                                    <span>{outcome}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}

            {/* Target audience */}

            {course?.targetAudience?.length > 0 && (
                <div className="mt-6">
                    <h3
                        className="
                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                    >
                        Target Audience
                    </h3>

                    <ul className="mt-3 space-y-2">
                        {course.targetAudience.map(
                            (item, index) => (
                                <li
                                    key={`${item}-${index}`}
                                    className="
                                        flex
                                        items-start
                                        gap-2

                                        font-body
                                        text-sm
                                        leading-6
                                        text-text-secondary
                                    "
                                >
                                    <CircleAlert
                                        size={15}
                                        className="
                                            mt-1
                                            shrink-0
                                            text-accent-secondary
                                        "
                                    />

                                    <span>{item}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}

            {/* Requirements */}

            {course?.requirements?.length > 0 && (
                <div className="mt-6">
                    <h3
                        className="
                            font-body
                            text-sm
                            font-semibold
                            text-text-primary
                        "
                    >
                        Requirements
                    </h3>

                    <ul className="mt-3 space-y-2">
                        {course.requirements.map(
                            (requirement, index) => (
                                <li
                                    key={`${requirement}-${index}`}
                                    className="
                                        flex
                                        items-start
                                        gap-2

                                        font-body
                                        text-sm
                                        leading-6
                                        text-text-secondary
                                    "
                                >
                                    <span
                                        className="
                                            mt-2
                                            h-1.5
                                            w-1.5
                                            shrink-0
                                            rounded-full
                                            bg-text-muted
                                        "
                                    />

                                    <span>
                                        {requirement}
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default CourseDetailsContent
