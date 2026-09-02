// import { Link } from "react-router-dom"

// const HomeHero = () => {

//     return (
//         <section className="
//             relative
//             overflow-hidden
//             border-b
//             border-border-subtle
//         ">

//             {/* Ambient background */}

//             <div className="
//                 pointer-events-none
//                 absolute
//                 -left-40
//                 -top-40
//                 h-96
//                 w-96
//                 rounded-full
//                 bg-accent-primary
//                 opacity-10
//                 blur-[120px]
//             " />

//             <div className="
//                 pointer-events-none
//                 absolute
//                 -right-40
//                 top-40
//                 h-96
//                 w-96
//                 rounded-full
//                 bg-accent-secondary
//                 opacity-10
//                 blur-[120px]
//             " />

//             <div className="
//                 relative
//                 mx-auto
//                 grid
//                 w-full
//                 max-w-7xl
//                 grid-cols-1
//                 items-center
//                 gap-12
//                 px-4
//                 py-16
//                 sm:px-6
//                 sm:py-20
//                 lg:grid-cols-12
//                 lg:px-8
//                 lg:py-28
//             ">

//                 {/* Copy */}

//                 <div className="
//                     text-center
//                     lg:col-span-7
//                     lg:text-left
//                 ">

//                     <div className="
//                         mb-5
//                         inline-flex
//                         items-center
//                         gap-2
//                         rounded-full
//                         border
//                         border-border-subtle
//                         bg-background-surface
//                         px-3
//                         py-1.5
//                     ">
//                         <span className="
//                             h-1.5
//                             w-1.5
//                             rounded-full
//                             bg-accent-primary
//                         " />

//                         <span className="
//                             font-body
//                             text-xs
//                             text-text-secondary
//                         ">
//                             Learn skills that move you forward
//                         </span>
//                     </div>

//                     <h1 className="
//                         font-accent
//                         text-4xl
//                         font-bold
//                         leading-tight
//                         tracking-tight
//                         text-text-primary
//                         sm:text-5xl
//                         lg:text-6xl
//                     ">
//                         Learn with purpose.
//                         <br />

//                         <span className="
//                             bg-linear-to-r
//                             from-accent-primary
//                             via-accent-unique
//                             to-accent-secondary
//                             bg-clip-text
//                             text-transparent
//                         ">
//                             Build your future.
//                         </span>
//                     </h1>

//                     <p className="
//                         mx-auto
//                         mt-5
//                         max-w-2xl
//                         font-body
//                         text-base
//                         leading-7
//                         text-text-secondary
//                         sm:text-lg
//                         lg:mx-0
//                     ">
//                         Discover structured courses, practical projects,
//                         and guided learning paths designed to help you
//                         build skills you can actually use.
//                     </p>

//                     <div className="
//                         mt-8
//                         flex
//                         flex-col
//                         gap-3
//                         sm:flex-row
//                         sm:justify-center
//                         lg:justify-start
//                     ">
//                         <Link
//                             to="/courses"
//                             className="
//                                 rounded-md
//                                 bg-accent-primary
//                                 px-6
//                                 py-3
//                                 text-center
//                                 font-body
//                                 text-sm
//                                 font-medium
//                                 text-text-primary
//                                 shadow-lg
//                                 shadow-accent-primary/10
//                                 transition
//                                 hover:opacity-90
//                                 active:brightness-90
//                             "
//                         >
//                             Explore Courses
//                         </Link>

//                         <Link
//                             to="/learning-paths"
//                             className="
//                                 rounded-md
//                                 border
//                                 border-border-subtle
//                                 bg-background-surface
//                                 px-6
//                                 py-3
//                                 text-center
//                                 font-body
//                                 text-sm
//                                 font-medium
//                                 text-text-secondary
//                                 transition
//                                 hover:bg-background-elevated
//                                 hover:text-text-primary
//                             "
//                         >
//                             Browse Learning Paths
//                         </Link>
//                     </div>

//                 </div>

//                 {/* Learning dashboard visual */}

//                 <div className="
//                     flex
//                     justify-center
//                     lg:col-span-5
//                 ">

//                     <div className="
//                         w-full
//                         max-w-sm
//                         rounded-2xl
//                         border
//                         border-border-subtle
//                         bg-background-surface/80
//                         p-5
//                         shadow-2xl
//                         backdrop-blur
//                     ">

//                         <div className="
//                             flex
//                             items-center
//                             justify-between
//                             border-b
//                             border-border-subtle
//                             pb-4
//                         ">
//                             <span className="
//                                 font-body
//                                 text-xs
//                                 font-medium
//                                 text-text-muted
//                             ">
//                                 YOUR LEARNING
//                             </span>

//                             <span className="
//                                 rounded-full
//                                 bg-status-success/10
//                                 px-2
//                                 py-1
//                                 font-body
//                                 text-[10px]
//                                 font-medium
//                                 text-status-success
//                             ">
//                                 ACTIVE
//                             </span>
//                         </div>

//                         <div className="py-5">

//                             <div className="
//                                 flex
//                                 items-end
//                                 justify-between
//                             ">
//                                 <div>
//                                     <p className="
//                                         font-body
//                                         text-xs
//                                         text-text-muted
//                                     ">
//                                         Current progress
//                                     </p>

//                                     <p className="
//                                         mt-1
//                                         font-accent
//                                         text-3xl
//                                         font-bold
//                                         text-text-primary
//                                     ">
//                                         68%
//                                     </p>
//                                 </div>

//                                 <span className="
//                                     font-body
//                                     text-xs
//                                     text-text-secondary
//                                 ">
//                                     12 / 18 lessons
//                                 </span>
//                             </div>

//                             <div className="
//                                 mt-4
//                                 h-2
//                                 overflow-hidden
//                                 rounded-full
//                                 bg-background-elevated
//                             ">
//                                 <div className="
//                                     h-full
//                                     w-[68%]
//                                     rounded-full
//                                     bg-accent-primary
//                                 " />
//                             </div>

//                         </div>

//                         <div className="
//                             rounded-xl
//                             border
//                             border-border-subtle
//                             bg-background-elevated
//                             p-4
//                         ">
//                             <p className="
//                                 font-body
//                                 text-xs
//                                 text-text-muted
//                             ">
//                                 Continue learning
//                             </p>

//                             <p className="
//                                 mt-1
//                                 font-accent
//                                 text-sm
//                                 font-semibold
//                                 text-text-primary
//                             ">
//                                 Modern Web Development
//                             </p>

//                             <p className="
//                                 mt-1
//                                 font-body
//                                 text-xs
//                                 text-text-secondary
//                             ">
//                                 Next: Building reusable components
//                             </p>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </section>
//     )
// }

// export default HomeHero

import {
    ArrowDown,
    BookOpen,
    CheckCircle2,
    Code2,
    Layers3,
    PlayCircle,
    Rocket,
    Sparkles,
    Users,
} from "lucide-react"

import { Link } from "react-router-dom"

const learningAreas = [
    {
        icon: BookOpen,
        label: "Structured Courses",
        description: "Learn through focused, organized content.",
    },
    {
        icon: PlayCircle,
        label: "Practical Learning",
        description: "Watch lectures and build real skills.",
    },
    {
        icon: Layers3,
        label: "Learning Paths",
        description: "Move through concepts with direction.",
    },
    {
        icon: Rocket,
        label: "Skill Progress",
        description: "Track your learning from start to finish.",
    },
]

const HomeHero = () => {
    return (
        <section
            className="
            relative
            overflow-hidden
            border-b
            border-border-subtle
        "
        >
            {/* =========================================================
                Background
            ========================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.035]
                    text-text-primary
                "
                style={{
                    backgroundImage: `
                        linear-gradient(
                            to right,
                            currentColor 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to bottom,
                            currentColor 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Primary ambient glow */}

            <div
                className="
                pointer-events-none
                absolute
                left-1/2
                top-[-12rem]
                h-[34rem]
                w-[34rem]
                -translate-x-1/2
                rounded-full
                bg-accent-primary/10
                blur-[120px]
            "
            />

            {/* Secondary ambient glow */}

            <div
                className="
                pointer-events-none
                absolute
                -left-48
                bottom-0
                h-96
                w-96
                rounded-full
                bg-accent-unique/5
                blur-[120px]
            "
            />

            <div
                className="
                pointer-events-none
                absolute
                -right-48
                top-1/3
                h-96
                w-96
                rounded-full
                bg-accent-secondary/5
                blur-[120px]
            "
            />

            <div
                className="
                relative
                mx-auto
                w-full
                max-w-7xl
                px-4
                py-16
                sm:px-6
                sm:py-20
                lg:px-8
                lg:py-24
            "
            >
                {/* =====================================================
                    Hero Introduction
                ====================================================== */}

                <div
                    className="
                    mx-auto
                    max-w-4xl
                    text-center
                "
                >
                    {/* Eyebrow */}

                    <div
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-accent-primary/20
                        bg-accent-primary/5
                        px-3
                        py-1.5
                        font-body
                        text-xs
                        font-medium
                        text-accent-primary
                    "
                    >
                        <Sparkles size={13} />
                        Learn with purpose
                    </div>

                    {/* Heading */}

                    <h1
                        className="
                        mt-6
                        font-accent
                        text-4xl
                        font-bold
                        leading-[1.08]
                        tracking-tight
                        text-text-primary
                        sm:text-5xl
                        lg:text-7xl
                    "
                    >
                        Build skills that
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
                            move you forward.
                        </span>
                    </h1>

                    {/* Description */}

                    <p
                        className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        font-body
                        text-base
                        leading-7
                        text-text-secondary
                        sm:text-lg
                    "
                    >
                        Discover structured courses, practical learning, and
                        guided experiences designed to help you turn knowledge
                        into skills you can actually use.
                    </p>

                    {/* Actions */}

                    <div
                        className="
                        mt-8
                        flex
                        flex-col
                        items-center
                        justify-center
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
                                gap-2
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
                            Explore Courses
                        </Link>

                        <a
                            href="#learning-experience"
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
                                hover:border-accent-primary/30
                                hover:text-text-primary
                            "
                        >
                            See how it works
                            <ArrowDown size={15} />
                        </a>
                    </div>
                </div>

                {/* =====================================================
                    Learning Experience Visual
                ====================================================== */}

                <div
                    id="learning-experience"
                    className="
                        mx-auto
                        mt-14
                        max-w-6xl
                        sm:mt-18
                        lg:mt-20
                    "
                >
                    <div
                        className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border-subtle
                        bg-background-surface/80
                        p-4
                        shadow-2xl
                        backdrop-blur-sm
                        sm:p-6
                    "
                    >
                        {/* Decorative background */}

                        <div
                            className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-1/2
                            h-72
                            w-72
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-accent-primary/5
                            blur-3xl
                        "
                        />

                        {/* Header */}

                        <div
                            className="
                            relative
                            flex
                            flex-col
                            gap-3
                            border-b
                            border-border-subtle
                            pb-5
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
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
                                    Your learning experience
                                </h2>
                            </div>

                            <div
                                className="
                                inline-flex
                                w-fit
                                items-center
                                gap-2
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
                                LEARNING ACTIVE
                            </div>
                        </div>

                        {/* =================================================
                            Central learning map
                        ================================================== */}

                        <div
                            className="
                            relative
                            mt-6
                            grid
                            gap-3
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                        >
                            {learningAreas.map(
                                ({ icon: Icon, label, description }) => (
                                    <div
                                        key={label}
                                        className="
                                            rounded-xl
                                            border
                                            border-border-subtle
                                            bg-background-base/60
                                            p-4
                                            transition
                                            hover:border-accent-primary/30
                                        "
                                    >
                                        <div
                                            className="
                                            flex
                                            items-center
                                            justify-between
                                        "
                                        >
                                            <div
                                                className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-accent-primary/10
                                                text-accent-primary
                                            "
                                            >
                                                <Icon size={17} />
                                            </div>

                                            <CheckCircle2
                                                size={15}
                                                className="
                                                    text-status-success
                                                "
                                            />
                                        </div>

                                        <h3
                                            className="
                                            mt-4
                                            font-accent
                                            text-sm
                                            font-semibold
                                            text-text-primary
                                        "
                                        >
                                            {label}
                                        </h3>

                                        <p
                                            className="
                                            mt-1.5
                                            font-body
                                            text-xs
                                            leading-5
                                            text-text-secondary
                                        "
                                        >
                                            {description}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>

                        {/* =================================================
                            Learning progress visual
                        ================================================== */}

                        <div
                            className="
                            relative
                            mt-4
                            grid
                            gap-4
                            lg:grid-cols-[1.4fr_0.6fr]
                        "
                        >
                            {/* Current course */}

                            <div
                                className="
                                rounded-xl
                                border
                                border-border-subtle
                                bg-background-base/60
                                p-5
                            "
                            >
                                <div
                                    className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                "
                                >
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
                                            Continue learning
                                        </p>

                                        <h3
                                            className="
                                            mt-1
                                            font-accent
                                            text-base
                                            font-semibold
                                            text-text-primary
                                            sm:text-lg
                                        "
                                        >
                                            Modern Web Development
                                        </h3>

                                        <p
                                            className="
                                            mt-1
                                            font-body
                                            text-xs
                                            text-text-secondary
                                        "
                                        >
                                            Building reusable React components
                                        </p>
                                    </div>

                                    <div
                                        className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-accent-primary/10
                                        text-accent-primary
                                    "
                                    >
                                        <Code2 size={18} />
                                    </div>
                                </div>

                                {/* Progress */}

                                <div className="mt-5">
                                    <div
                                        className="
                                        flex
                                        items-center
                                        justify-between
                                    "
                                    >
                                        <span
                                            className="
                                            font-body
                                            text-xs
                                            text-text-muted
                                        "
                                        >
                                            Course progress
                                        </span>

                                        <span
                                            className="
                                            font-body
                                            text-xs
                                            font-medium
                                            text-text-secondary
                                        "
                                        >
                                            68%
                                        </span>
                                    </div>

                                    <div
                                        className="
                                        mt-2
                                        h-1.5
                                        overflow-hidden
                                        rounded-full
                                        bg-background-elevated
                                    "
                                    >
                                        <div
                                            className="
                                            h-full
                                            w-[68%]
                                            rounded-full
                                            bg-linear-to-r
                                            from-accent-primary
                                            to-accent-unique
                                        "
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Learning stats */}

                            <div
                                className="
                                rounded-xl
                                border
                                border-border-subtle
                                bg-background-base/60
                                p-5
                            "
                            >
                                <div
                                    className="
                                    flex
                                    items-center
                                    gap-3
                                "
                                >
                                    <div
                                        className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-accent-secondary/10
                                        text-accent-secondary
                                    "
                                    >
                                        <Users size={17} />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                            font-body
                                            text-[10px]
                                            uppercase
                                            tracking-wider
                                            text-text-muted
                                        "
                                        >
                                            Built for
                                        </p>

                                        <p
                                            className="
                                            mt-0.5
                                            font-accent
                                            text-sm
                                            font-semibold
                                            text-text-primary
                                        "
                                        >
                                            Learners & Creators
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="
                                    mt-5
                                    grid
                                    grid-cols-2
                                    gap-3
                                "
                                >
                                    <div
                                        className="
                                        rounded-lg
                                        border
                                        border-border-subtle
                                        bg-background-elevated
                                        p-3
                                    "
                                    >
                                        <p
                                            className="
                                            font-body
                                            text-[10px]
                                            text-text-muted
                                        "
                                        >
                                            Lessons
                                        </p>

                                        <p
                                            className="
                                            mt-1
                                            font-accent
                                            text-lg
                                            font-bold
                                            text-text-primary
                                        "
                                        >
                                            18
                                        </p>
                                    </div>

                                    <div
                                        className="
                                        rounded-lg
                                        border
                                        border-border-subtle
                                        bg-background-elevated
                                        p-3
                                    "
                                    >
                                        <p
                                            className="
                                            font-body
                                            text-[10px]
                                            text-text-muted
                                        "
                                        >
                                            Progress
                                        </p>

                                        <p
                                            className="
                                            mt-1
                                            font-accent
                                            text-lg
                                            font-bold
                                            text-text-primary
                                        "
                                        >
                                            68%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =====================================================
                    Bottom message
                ====================================================== */}

                <div
                    className="
                    mx-auto
                    mt-8
                    flex
                    max-w-3xl
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    text-center
                    sm:flex-row
                    sm:gap-3
                "
                >
                    <span
                        className="
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        Learn
                    </span>

                    <span
                        className="
                        hidden
                        h-1
                        w-1
                        rounded-full
                        bg-border-subtle
                        sm:block
                    "
                    />

                    <span
                        className="
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        Practice
                    </span>

                    <span
                        className="
                        hidden
                        h-1
                        w-1
                        rounded-full
                        bg-border-subtle
                        sm:block
                    "
                    />

                    <span
                        className="
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        Track progress
                    </span>

                    <span
                        className="
                        hidden
                        h-1
                        w-1
                        rounded-full
                        bg-border-subtle
                        sm:block
                    "
                    />

                    <span
                        className="
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        Keep moving forward
                    </span>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
