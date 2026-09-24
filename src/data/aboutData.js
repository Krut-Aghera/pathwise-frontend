import {
    ShieldCheck,
    Users,
    Settings2,
    Mail,
    ShoppingCart,
    Cloud,
    Activity,
    Database,
    Layers3,
    Rocket,
    Code2,
    Server,
} from "lucide-react"

export const systemAreas = [
    {
        icon: ShieldCheck,
        label: "Authentication & Authorization",
    },
    {
        icon: Users,
        label: "Role-Based Workflow",
    },
    {
        icon: Mail,
        label: "Email Based Communication",
    },
    {
        icon: Cloud,
        label: "Media Handling",
    },
    {
        icon: ShoppingCart,
        label: "Enrollment & Payment",
    },
    {
        icon: Activity,
        label: "Progress Tracking",
    }
]

export const reasons = [
    {
        icon: Layers3,
        title: "Full-stack thinking",
        text: "Understand how the frontend, backend, database, authentication, services, and deployment fit together.",
    },
    {
        icon: ShieldCheck,
        title: "Production concerns",
        text: "Explore validation, authorization, rate limiting, security, error handling, and reliable server-side workflows.",
    },
    {
        icon: Database,
        title: "Real data modeling",
        text: "Model relationships around users, courses, sections, lectures, orders, enrollment, and learning progress.",
    },
    {
        icon: Rocket,
        title: "Deployment mindset",
        text: "Move beyond local development and build an application with real deployment and infrastructure considerations.",
    },
]

export const studentCapabilities = [
    "Browse available courses",
    "View course details and curriculum",
    "Create an account and authenticate securely",
    "Enroll in courses through the payment flow",
    "Watch course lectures",
    "Resume learning from saved progress",
    "Track lecture and course completion",
]

export const creatorCapabilities = [
    "Create courses",
    "Manage course information",
    "Create sections and lectures",
    "Upload course media",
    "Manage course content",
    "Save courses as drafts",
    "Publish courses when ready",
]

export const engineeringFeatures = [
    {
        icon: ShieldCheck,
        title: "Authentication & Authorization",
        description:
            "Secure authentication with access and refresh token responsibilities, protected sessions, verification, and role-based authorization.",
    },
    {
        icon: Users,
        title: "Instructor Workflow",
        description:
            "Course creators can build courses, manage curriculum, upload media, save drafts, and publish courses through protected workflows.",
    },
    {
        icon: Settings2,
        title: "Administrative Workflow",
        description:
            "Role-aware application architecture provides a foundation for administrative capabilities and controlled system management.",
    },
    {
        icon: Mail,
        title: "Email Based Communication",
        description:
            "Email-based workflows support account-related communication such as registration, verification, and authentication events.",
    },
    {
        icon: ShoppingCart,
        title: "Enrollment & Payment",
        description:
            "Enrollment is connected to a server-side payment workflow where payment verification determines whether access is granted.",
    },
    {
        icon: Cloud,
        title: "Media Handling",
        description:
            "Course thumbnails and learning media are handled through cloud-oriented storage and delivery workflows.",
    },
    {
        icon: Activity,
        title: "Progress Tracking",
        description:
            "Lecture position, watched duration, completion state, and overall course progress are persisted for the learner.",
    },
    {
        icon: Database,
        title: "Data Modeling",
        description:
            "The application models relationships between users, courses, sections, lectures, orders, enrollment, and learning progress.",
    },
    {
        icon: Rocket,
        title: "Deployment & Infrastructure",
        description:
            "The application is deployed to a production environment with considerations for security, reliability, and performance.",
    }
]

export const technologies = [
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
        items: ["Node.js", "Express", "MongoDB", "Mongoose"],
    },
    {
        category: "Services & Infrastructure",
        icon: Cloud,
        items: ["Cloudinary", "Razorpay", "Sender", "Vercel", "Veeble Ubuntu", "Nginx", "PM2", "MongoDB Atlas", "Cloudflare"],
    },
]
