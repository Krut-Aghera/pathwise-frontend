import { Link } from "react-router-dom"
import { ArrowDown } from "lucide-react"

import { systemAreas } from "../../../data/aboutData"

const AboutHero = () => {
    return (
        <section
            className="
            relative
            overflow-hidden
            border-b
            border-border-subtle
        "
        >
            <div
                className="
                pointer-events-none
                absolute
                -left-40
                -top-40
                h-96
                w-96
                rounded-full
                bg-accent-primary
                opacity-10
                blur-[120px]
            "
            />

            <div
                className="
                pointer-events-none
                absolute
                -right-40
                bottom-0
                h-96
                w-96
                rounded-full
                bg-accent-secondary
                opacity-10
                blur-[120px]
            "
            />

            <div
                className="
                relative
                mx-auto
                grid
                w-full
                max-w-7xl
                grid-cols-1
                items-start
                gap-10
                px-4
                py-14
                sm:px-6
                sm:py-16
                lg:grid-cols-12
                lg:gap-12
                lg:px-8
                lg:py-15
            "
            >
                {/* =====================================================
                    Content
                ====================================================== */}

                <div
                    className="
                    flex
                    flex-col
                    justify-start
                    lg:col-span-7
                "
                >
                    {/* Portfolio tag */}

                    <div
                        className="
                        mb-5
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-border-subtle
                        bg-background-surface
                        px-3
                        py-1.5
                    "
                    >
                        <span
                            className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-accent-primary
                        "
                        />

                        <span
                            className="
                            font-body
                            text-xs
                            font-medium
                            text-text-secondary
                        "
                        >
                            Portfolio Engineering Project
                        </span>
                    </div>

                    {/* Heading */}

                    <h1
                        className="
                        max-w-3xl
                        font-accent
                        text-4xl
                        font-bold
                        leading-tight
                        tracking-tight
                        text-text-primary
                        sm:text-5xl
                        lg:text-6xl
                    "
                    >
                        An LMS built as a
                        <span
                            className="
                            block
                            bg-linear-to-r
                            from-accent-primary
                            via-accent-unique
                            to-accent-secondary
                            bg-clip-text
                            text-transparent
                        "
                        >
                            complete system.
                        </span>
                    </h1>

                    {/* Description */}

                    <p
                        className="
                        mt-5
                        max-w-2xl
                        font-body
                        text-base
                        leading-7
                        text-text-secondary
                        sm:text-lg
                    "
                    >
                        Pathwise is a production-oriented learning platform
                        created to explore how authentication, course
                        management, payments, media, communication, and learning
                        progress work together as one application.
                    </p>

                    {/* Secondary description */}

                    <p
                        className="
                        mt-4
                        max-w-2xl
                        font-body
                        text-sm
                        leading-6
                        text-text-muted
                    "
                    >
                        The project focuses on understanding the engineering
                        behind a modern LMS — from secure user flows and
                        instructor workflows to payment verification, media
                        handling, and persistent learning progress.
                    </p>

                    {/* Actions */}

                    <div
                        className="
                        mt-7
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                    "
                    >
                        <Link
                            to="/courses"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-md
                                bg-accent-primary
                                px-5
                                py-3
                                font-body
                                text-sm
                                font-medium
                                text-text-primary
                                shadow-lg
                                shadow-accent-primary/10
                                transition
                                hover:opacity-90
                                active:brightness-90
                            "
                        >
                            Explore the Platform
                        </Link>

                        <a
                            href="#engineering"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                rounded-md
                                border
                                border-border-subtle
                                bg-background-surface
                                px-5
                                py-3
                                font-body
                                text-sm
                                font-medium
                                text-text-secondary
                                transition
                                hover:bg-background-elevated
                                hover:text-text-primary
                            "
                        >
                            See the Engineering
                            <ArrowDown size={15} />
                        </a>
                    </div>
                </div>

                {/* =====================================================
                    System Overview
                ====================================================== */}

                <div
                    className="
                    flex
                    justify-center
                    lg:col-span-5
                    lg:justify-end
                "
                >
                    <div
                        className="
                        w-full
                        max-w-md
                        rounded-2xl
                        border
                        border-border-subtle
                        bg-background-surface/80
                        p-5
                        shadow-2xl
                        backdrop-blur
                        sm:p-6
                    "
                    >
                        {/* Header */}

                        <div
                            className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-border-subtle
                            pb-4
                        "
                        >
                            <div>
                                <p
                                    className="
                                    font-body
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-text-muted
                                "
                                >
                                    PATHWISE
                                </p>

                                <h2
                                    className="
                                    mt-1
                                    font-accent
                                    text-lg
                                    font-semibold
                                    text-text-primary
                                "
                                >
                                    System Overview
                                </h2>
                            </div>

                            <span
                                className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-status-success/20
                                bg-status-success/5
                                px-2.5
                                py-1
                                font-body
                                text-[10px]
                                font-medium
                                text-status-success
                            "
                            >
                                <span
                                    className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-status-success
                                "
                                />
                                ENGINEERED
                            </span>
                        </div>

                        {/* System areas */}

                        <div
                            className="
                            mt-5
                            space-y-2.5
                        "
                        >
                            {systemAreas.map(({ icon: Icon, label }, index) => (
                                <div
                                    key={label}
                                    className="
                                            flex
                                            items-center
                                            gap-3
                                            rounded-lg
                                            border
                                            border-border-subtle
                                            bg-background-base/60
                                            px-3
                                            py-3
                                            transition
                                            hover:border-accent-primary/30
                                        "
                                >
                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-accent-primary/10
                                            text-accent-primary
                                        "
                                    >
                                        <Icon size={17} />
                                    </div>

                                    <div className="min-w-0">
                                        <p
                                            className="
                                                font-body
                                                text-[10px]
                                                font-medium
                                                uppercase
                                                tracking-wider
                                                text-text-muted
                                            "
                                        >
                                            0{index + 1}
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                font-body
                                                text-sm
                                                font-medium
                                                text-text-secondary
                                            "
                                        >
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
