
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Cloud,
    Code2,
    Database,
    FileCheck2,
    GitBranch,
    Globe2,
    KeyRound,
    Layers3,
    LockKeyhole,
    Mail,
    PlayCircle,
    Rocket,
    Server,
    ShieldCheck,
    ShoppingCart,
    UserRoundCog,
    Users,
    Video,
    Webhook,
    Zap,
} from "lucide-react"

import { Link } from "react-router-dom"


const engineeringFeatures = [
    {
        icon: Layers3,
        title: "Feature-based architecture",
        description:
            "The application is organized around features rather than a large collection of unrelated files, making the codebase easier to understand, extend, and maintain.",
    },
    {
        icon: KeyRound,
        title: "JWT authentication",
        description:
            "Authentication uses separate access and refresh token responsibilities with secure session handling.",
    },
    {
        icon: LockKeyhole,
        title: "HTTP-only cookies",
        description:
            "Authentication tokens are handled through HTTP-only cookies to reduce exposure to client-side JavaScript.",
    },
    {
        icon: GitBranch,
        title: "Refresh-token rotation",
        description:
            "Refresh sessions are rotated to provide a more robust authentication lifecycle.",
    },
    {
        icon: UserRoundCog,
        title: "Role-based authorization",
        description:
            "Different application capabilities are protected according to user roles such as student, course creator, and administrator.",
    },
    {
        icon: FileCheck2,
        title: "Validation & rate limiting",
        description:
            "Incoming data is validated and sensitive endpoints are protected with rate-limiting controls.",
    },
    {
        icon: ShieldCheck,
        title: "Payment verification",
        description:
            "Enrollment is tied to payment verification rather than simply trusting a client-side payment result.",
    },
    {
        icon: Webhook,
        title: "Webhook handling",
        description:
            "Payment webhooks are verified and processed as part of the server-side payment workflow.",
    },
    {
        icon: Cloud,
        title: "Cloud media storage",
        description:
            "Course media is handled through cloud storage rather than relying on the application server's local filesystem.",
    },
    {
        icon: Video,
        title: "Video delivery",
        description:
            "The learning experience includes dedicated video playback and course media handling.",
    },
    {
        icon: Zap,
        title: "Progress persistence",
        description:
            "Lecture progress, watched duration, completion state, and course progress are persisted through the backend.",
    },
    {
        icon: Mail,
        title: "Email workflows",
        description:
            "Authentication-related email flows such as registration and verification are integrated into the application.",
    },
]


const technologies = [
    {
        category: "Frontend",
        icon: Code2,
        items: [
            "React",
            "Vite",
            "Redux Toolkit",
            "React Router",
            "React Hook Form",
            "Tailwind CSS",
        ],
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
        ],
    },
    {
        category: "Services & Infrastructure",
        icon: Cloud,
        items: [
            "Cloudinary",
            "Cashfree",
            "Sender",
            "Vercel",
            "Railway",
        ],
    },
]


const studentCapabilities = [
    "Browse available courses",
    "View course details and curriculum",
    "Create an account and authenticate securely",
    "Enroll in courses through the payment flow",
    "Watch course lectures",
    "Resume learning from saved progress",
    "Track lecture and course completion",
]


const creatorCapabilities = [
    "Create courses",
    "Manage course information",
    "Create sections and lectures",
    "Upload course media",
    "Manage course content",
    "Save courses as drafts",
    "Publish courses when ready",
]


const AboutPage = () => {
    return (
        <div className="bg-background-base text-text-primary">

            {/* =========================================================
                Hero
            ========================================================== */}

            <section className="
                relative
                overflow-hidden
                border-b
                border-border-subtle
            ">
                <div className="
                    pointer-events-none
                    absolute
                    -left-32
                    -top-32
                    h-80
                    w-80
                    rounded-full
                    bg-accent-primary/10
                    blur-3xl
                " />

                <div className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-20
                    h-96
                    w-96
                    rounded-full
                    bg-accent-secondary/5
                    blur-3xl
                " />

                <div className="
                    relative
                    mx-auto
                    flex
                    min-h-[calc(100vh-4.5rem)]
                    w-full
                    max-w-7xl
                    items-center
                    px-4
                    py-16
                    sm:px-6
                    sm:py-20
                    lg:px-8
                    lg:py-24
                ">
                    <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center">

                        <div className="lg:col-span-7">

                            <div className="
                                mb-6
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-accent-primary/20
                                bg-accent-primary/5
                                px-3
                                py-1.5
                                font-compact
                                text-xs
                                font-medium
                                text-accent-primary
                            ">
                                <Code2 size={14} />
                                Portfolio Project
                            </div>


                            <h1 className="
                                max-w-4xl
                                font-accent
                                text-4xl
                                font-bold
                                leading-tight
                                tracking-tight
                                text-text-primary
                                sm:text-5xl
                                lg:text-6xl
                            ">
                                Built to feel like a real LMS.
                                <span className="
                                    mt-2
                                    block
                                    bg-gradient-to-r
                                    from-accent-primary
                                    via-accent-unique
                                    to-accent-secondary
                                    bg-clip-text
                                    text-transparent
                                ">
                                    Engineered like a real product.
                                </span>
                            </h1>


                            <p className="
                                mt-6
                                max-w-2xl
                                font-body
                                text-base
                                leading-7
                                text-text-secondary
                                sm:text-lg
                            ">
                                Pathwise is a production-oriented LMS project
                                built from the ground up to explore the
                                architecture, workflows, and engineering
                                challenges behind a modern online learning
                                platform.
                            </p>


                            <p className="
                                mt-4
                                max-w-2xl
                                font-body
                                text-sm
                                leading-6
                                text-text-muted
                            ">
                                From course discovery and secure enrollment
                                to video learning, authentication, payments,
                                email workflows, and progress tracking,
                                Pathwise brings a complete learning experience
                                together in one portfolio project.
                            </p>


                            <div className="
                                mt-8
                                flex
                                flex-col
                                gap-3
                                sm:flex-row
                            ">
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
                                        transition
                                        hover:opacity-90
                                        active:brightness-90
                                    "
                                >
                                    Explore Courses
                                    <ArrowRight size={16} />
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
                                        hover:border-accent-primary/30
                                        hover:text-text-primary
                                    "
                                >
                                    Explore the Engineering
                                </a>
                            </div>

                        </div>


                        {/* Architecture visual */}

                        <div className="lg:col-span-5">

                            <div className="
                                rounded-2xl
                                border
                                border-border-subtle
                                bg-background-surface/80
                                p-5
                                shadow-2xl
                                backdrop-blur-sm
                                sm:p-6
                            ">

                                <div className="
                                    mb-5
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-border-subtle
                                    pb-4
                                ">
                                    <div>
                                        <p className="
                                            font-compact
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-widest
                                            text-text-muted
                                        ">
                                            PATHWISE
                                        </p>

                                        <p className="
                                            mt-1
                                            font-body
                                            text-sm
                                            font-medium
                                            text-text-primary
                                        ">
                                            System Overview
                                        </p>
                                    </div>

                                    <span className="
                                        flex
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        border
                                        border-status-success/20
                                        bg-status-success/5
                                        px-2.5
                                        py-1
                                        font-compact
                                        text-[10px]
                                        font-medium
                                        text-status-success
                                    ">
                                        <span className="
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-status-success
                                        " />
                                        ENGINEERED
                                    </span>
                                </div>


                                <div className="space-y-3">

                                    {[
                                        {
                                            icon: Globe2,
                                            label: "Course Discovery",
                                        },
                                        {
                                            icon: ShieldCheck,
                                            label: "Authentication",
                                        },
                                        {
                                            icon: ShoppingCart,
                                            label: "Enrollment & Payments",
                                        },
                                        {
                                            icon: PlayCircle,
                                            label: "Video Learning",
                                        },
                                        {
                                            icon: Zap,
                                            label: "Progress Tracking",
                                        },
                                    ].map(({ icon: Icon, label }) => (
                                        <div
                                            key={label}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                rounded-lg
                                                border
                                                border-border-subtle/70
                                                bg-background-base/50
                                                px-3
                                                py-3
                                            "
                                        >
                                            <div className="
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-md
                                                bg-accent-primary/10
                                                text-accent-primary
                                            ">
                                                <Icon size={15} />
                                            </div>

                                            <span className="
                                                font-body
                                                text-sm
                                                text-text-secondary
                                            ">
                                                {label}
                                            </span>

                                            <CheckCircle2
                                                size={15}
                                                className="
                                                    ml-auto
                                                    text-status-success
                                                "
                                            />
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================================
                Why Pathwise
            ========================================================== */}

            <section className="
                border-b
                border-border-subtle
                bg-background-surface/30
            ">
                <div className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-20
                    sm:px-6
                    lg:px-8
                ">

                    <div className="max-w-3xl">

                        <span className="
                            font-compact
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-accent-secondary
                        ">
                            Why Pathwise?
                        </span>

                        <h2 className="
                            mt-3
                            font-accent
                            text-3xl
                            font-bold
                            tracking-tight
                            text-text-primary
                            sm:text-4xl
                        ">
                            More than a CRUD application.
                        </h2>

                        <p className="
                            mt-5
                            font-body
                            text-base
                            leading-7
                            text-text-secondary
                        ">
                            Pathwise was intentionally built as a serious
                            portfolio project rather than another basic MERN
                            CRUD application. The goal was to understand what
                            happens when multiple real-world features have to
                            work together as one system.
                        </p>

                    </div>


                    <div className="
                        mt-10
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-4
                    ">

                        {[
                            {
                                icon: Layers3,
                                title: "Full-stack thinking",
                                text: "Understand how frontend, backend, database, authentication, services, and deployment connect together.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Production concerns",
                                text: "Explore security, validation, authorization, rate limiting, edge cases, and reliable server-side workflows.",
                            },
                            {
                                icon: Database,
                                title: "Real data modeling",
                                text: "Design relationships and persistence around users, courses, lectures, enrollment, orders, and progress.",
                            },
                            {
                                icon: Rocket,
                                title: "Deployment mindset",
                                text: "Move beyond local development and understand how a full application is configured and deployed.",
                            },
                        ].map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="
                                    rounded-xl
                                    border
                                    border-border-subtle
                                    bg-background-surface
                                    p-5
                                "
                            >
                                <div className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-accent-primary/10
                                    text-accent-primary
                                ">
                                    <Icon size={19} />
                                </div>

                                <h3 className="
                                    mt-4
                                    font-accent
                                    text-base
                                    font-semibold
                                    text-text-primary
                                ">
                                    {title}
                                </h3>

                                <p className="
                                    mt-2
                                    font-body
                                    text-sm
                                    leading-6
                                    text-text-secondary
                                ">
                                    {text}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* =========================================================
                Platform
            ========================================================== */}

            <section>
                <div className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-20
                    sm:px-6
                    lg:px-8
                ">

                    <div className="text-center">

                        <span className="
                            font-compact
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-accent-unique
                        ">
                            The Platform
                        </span>

                        <h2 className="
                            mt-3
                            font-accent
                            text-3xl
                            font-bold
                            tracking-tight
                            text-text-primary
                            sm:text-4xl
                        ">
                            A complete learning workflow
                        </h2>

                        <p className="
                            mx-auto
                            mt-4
                            max-w-2xl
                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        ">
                            The project covers the major pieces required to
                            make an online learning platform work from
                            discovery to completion.
                        </p>

                    </div>


                    <div className="
                        mt-12
                        grid
                        gap-6
                        md:grid-cols-2
                    ">

                        <div className="
                            rounded-2xl
                            border
                            border-border-subtle
                            bg-background-surface
                            p-6
                            sm:p-7
                        ">

                            <div className="
                                flex
                                items-center
                                gap-3
                            ">
                                <div className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-accent-primary/10
                                    text-accent-primary
                                ">
                                    <BookOpen size={19} />
                                </div>

                                <h3 className="
                                    font-accent
                                    text-xl
                                    font-semibold
                                    text-text-primary
                                ">
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


                        <div className="
                            rounded-2xl
                            border
                            border-border-subtle
                            bg-background-surface
                            p-6
                            sm:p-7
                        ">

                            <div className="
                                flex
                                items-center
                                gap-3
                            ">
                                <div className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-accent-unique/10
                                    text-accent-unique
                                ">
                                    <Users size={19} />
                                </div>

                                <h3 className="
                                    font-accent
                                    text-xl
                                    font-semibold
                                    text-text-primary
                                ">
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


            {/* =========================================================
                Engineering
            ========================================================== */}

            <section
                id="engineering"
                className="
                    border-y
                    border-border-subtle
                    bg-background-surface/30
                "
            >
                <div className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-20
                    sm:px-6
                    lg:px-8
                ">

                    <div className="max-w-3xl">

                        <span className="
                            font-compact
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-accent-primary
                        ">
                            Engineering Story
                        </span>

                        <h2 className="
                            mt-3
                            font-accent
                            text-3xl
                            font-bold
                            tracking-tight
                            text-text-primary
                            sm:text-4xl
                        ">
                            Built around real engineering problems.
                        </h2>

                        <p className="
                            mt-5
                            font-body
                            text-base
                            leading-7
                            text-text-secondary
                        ">
                            The interesting part of Pathwise is not the number
                            of screens. It is the engineering underneath them:
                            authentication lifecycles, payment verification,
                            media handling, persistent progress, API testing,
                            and the edge cases that appear when these systems
                            interact.
                        </p>

                    </div>


                    <div className="
                        mt-10
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                    ">

                        {engineeringFeatures.map(
                            ({ icon: Icon, title, description }) => (
                                <div
                                    key={title}
                                    className="
                                        rounded-xl
                                        border
                                        border-border-subtle
                                        bg-background-surface
                                        p-5
                                        transition
                                        hover:border-accent-primary/30
                                    "
                                >
                                    <div className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-background-elevated
                                        text-accent-primary
                                    ">
                                        <Icon size={17} />
                                    </div>

                                    <h3 className="
                                        mt-4
                                        font-accent
                                        text-sm
                                        font-semibold
                                        text-text-primary
                                    ">
                                        {title}
                                    </h3>

                                    <p className="
                                        mt-2
                                        font-body
                                        text-xs
                                        leading-5
                                        text-text-secondary
                                    ">
                                        {description}
                                    </p>
                                </div>
                            )
                        )}

                    </div>

                </div>
            </section>


            {/* =========================================================
                Technology Stack
            ========================================================== */}

            <section>
                <div className="
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-20
                    sm:px-6
                    lg:px-8
                ">

                    <div className="text-center">

                        <span className="
                            font-compact
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-accent-secondary
                        ">
                            Technology Stack
                        </span>

                        <h2 className="
                            mt-3
                            font-accent
                            text-3xl
                            font-bold
                            text-text-primary
                            sm:text-4xl
                        ">
                            Tools behind the platform
                        </h2>

                    </div>


                    <div className="
                        mx-auto
                        mt-10
                        grid
                        max-w-5xl
                        gap-5
                        md:grid-cols-3
                    ">

                        {technologies.map(
                            ({ category, icon: Icon, items }) => (
                                <div
                                    key={category}
                                    className="
                                        rounded-xl
                                        border
                                        border-border-subtle
                                        bg-background-surface
                                        p-6
                                    "
                                >
                                    <div className="
                                        flex
                                        items-center
                                        gap-3
                                    ">
                                        <div className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-accent-primary/10
                                            text-accent-primary
                                        ">
                                            <Icon size={17} />
                                        </div>

                                        <h3 className="
                                            font-accent
                                            text-base
                                            font-semibold
                                            text-text-primary
                                        ">
                                            {category}
                                        </h3>
                                    </div>


                                    <div className="
                                        mt-5
                                        flex
                                        flex-wrap
                                        gap-2
                                    ">
                                        {items.map((item) => (
                                            <span
                                                key={item}
                                                className="
                                                    rounded-md
                                                    border
                                                    border-border-subtle
                                                    bg-background-elevated
                                                    px-2.5
                                                    py-1.5
                                                    font-compact
                                                    text-xs
                                                    text-text-secondary
                                                "
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            )
                        )}

                    </div>

                </div>
            </section>


            {/* =========================================================
                Portfolio Disclaimer
            ========================================================== */}

            <section className="
                border-t
                border-border-subtle
                bg-background-surface/30
            ">
                <div className="
                    mx-auto
                    w-full
                    max-w-5xl
                    px-4
                    py-16
                    sm:px-6
                    lg:px-8
                ">

                    <div className="
                        rounded-2xl
                        border
                        border-accent-secondary/20
                        bg-accent-secondary/5
                        p-6
                        sm:p-8
                    ">

                        <div className="
                            flex
                            flex-col
                            gap-5
                            sm:flex-row
                            sm:items-start
                        ">

                            <div className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-accent-secondary/10
                                text-accent-secondary
                            ">
                                <Server size={19} />
                            </div>


                            <div>

                                <h2 className="
                                    font-accent
                                    text-lg
                                    font-semibold
                                    text-text-primary
                                ">
                                    A portfolio project — not a commercial LMS
                                </h2>

                                <p className="
                                    mt-2
                                    font-body
                                    text-sm
                                    leading-6
                                    text-text-secondary
                                ">
                                    Pathwise is intentionally built as a
                                    portfolio project to demonstrate
                                    full-stack engineering skills. The course
                                    catalog uses a small set of static
                                    demonstration courses, with a limited
                                    number of sections and lectures.
                                </p>

                                <p className="
                                    mt-3
                                    font-body
                                    text-sm
                                    leading-6
                                    text-text-secondary
                                ">
                                    Payments are connected to the
                                    <strong className="text-text-primary">
                                        {" "}Cashfree sandbox/test environment
                                    </strong>
                                    . No real money or real transactions are
                                    involved. Payment flows exist to
                                    demonstrate how a production-style
                                    enrollment workflow can be implemented.
                                </p>

                                <p className="
                                    mt-3
                                    font-body
                                    text-sm
                                    leading-6
                                    text-text-muted
                                ">
                                    The goal is not to compete with platforms
                                    such as Udemy or Coursera. The goal is to
                                    demonstrate how a modern LMS can be
                                    architected, implemented, secured, tested,
                                    and deployed end to end.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =========================================================
                CTA
            ========================================================== */}

            <section>
                <div className="
                    mx-auto
                    w-full
                    max-w-4xl
                    px-4
                    py-20
                    text-center
                    sm:px-6
                    lg:px-8
                ">

                    <div className="
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-accent-primary/10
                        text-accent-primary
                    ">
                        <BookOpen size={22} />
                    </div>

                    <h2 className="
                        mt-5
                        font-accent
                        text-3xl
                        font-bold
                        tracking-tight
                        text-text-primary
                        sm:text-4xl
                    ">
                        See the project in action.
                    </h2>

                    <p className="
                        mx-auto
                        mt-4
                        max-w-xl
                        font-body
                        text-sm
                        leading-6
                        text-text-secondary
                    ">
                        Explore the course experience and see how the
                        different parts of Pathwise come together.
                    </p>

                    <div className="
                        mt-7
                        flex
                        flex-col
                        justify-center
                        gap-3
                        sm:flex-row
                    ">
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
                                transition
                                hover:opacity-90
                            "
                        >
                            Browse Courses
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            to="/auth/signup"
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
                                hover:text-text-primary
                            "
                        >
                            Create an Account
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    )
}


export default AboutPage
