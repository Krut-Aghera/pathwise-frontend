import { BookOpen, CheckCircle2, Users } from "lucide-react"

import {
    creatorCapabilities,
    studentCapabilities,
} from "../../../data/aboutData"

const AboutPlatform = () => {
    return (
        <section>
            <div
                className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                py-20
                sm:px-6
                lg:px-8
            "
            >
                <div className="text-center">
                    <span
                        className="
                        font-body
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        text-accent-unique
                    "
                    >
                        The Platform
                    </span>

                    <h2
                        className="
                        mt-3
                        font-accent
                        text-3xl
                        font-bold
                        tracking-tight
                        text-text-primary
                        sm:text-4xl
                    "
                    >
                        A complete learning workflow
                    </h2>

                    <p
                        className="
                        mx-auto
                        mt-4
                        max-w-2xl
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    "
                    >
                        Pathwise connects the learner experience with the
                        systems required to create, deliver, and manage online
                        courses.
                    </p>
                </div>

                <div
                    className="
                    mt-12
                    grid
                    gap-6
                    md:grid-cols-2
                "
                >
                    <div
                        className="
                        rounded-2xl
                        border
                        border-border-subtle
                        bg-background-surface
                        p-6
                        sm:p-7
                    "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-lg
                                bg-accent-primary/10
                                text-accent-primary
                            "
                            >
                                <BookOpen size={19} />
                            </div>

                            <h3
                                className="
                                font-accent
                                text-xl
                                font-semibold
                                text-text-primary
                            "
                            >
                                For students
                            </h3>
                        </div>

                        <div className="mt-6 space-y-3">
                            {studentCapabilities.map((item) => (
                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                        font-body
                                        text-sm
                                        text-text-secondary
                                    "
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-status-success
                                        "
                                    />

                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="
                        rounded-2xl
                        border
                        border-border-subtle
                        bg-background-surface
                        p-6
                        sm:p-7
                    "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-lg
                                bg-accent-unique/10
                                text-accent-unique
                            "
                            >
                                <Users size={19} />
                            </div>

                            <h3
                                className="
                                font-accent
                                text-xl
                                font-semibold
                                text-text-primary
                            "
                            >
                                For course creators
                            </h3>
                        </div>

                        <div className="mt-6 space-y-3">
                            {creatorCapabilities.map((item) => (
                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                        font-body
                                        text-sm
                                        text-text-secondary
                                    "
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-accent-unique
                                        "
                                    />

                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPlatform
