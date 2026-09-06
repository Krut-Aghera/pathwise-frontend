import { Heart, Trash2 } from "lucide-react"

import CourseCard from "../../course/components/course-public/CourseCard.jsx"
import { wishlistCourses } from "../../../data/wishlistData.js"

const WishlistPage = () => {
    const hasCourses = wishlistCourses.length > 0

    const handleClearWishlist = () => {
        // TODO: connect with wishlist API/state
    }

    return (
        <section
            className="
            min-h-[calc(100vh-4rem)]
            bg-background-base
            py-10
            sm:py-12
        "
        >
            <div
                className="
                mx-auto
                w-full
                max-w-7xl
                px-4
                sm:px-6
                lg:px-8
            "
            >
                {/* Header */}

                <div
                    className="
                    flex
                    flex-col
                    gap-5

                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                "
                >
                    <div>
                        <div
                            className="
                            flex
                            items-center
                            gap-2
                        "
                        >
                            <span
                                className="
                                font-body
                                text-xs
                                font-medium
                                uppercase
                                tracking-widest
                                text-accent-primary
                            "
                            >
                                Wishlist
                            </span>
                        </div>

                        <h1
                            className="
                            mt-2
                            font-accent
                            text-2xl
                            font-bold
                            text-text-primary

                            sm:text-3xl
                        "
                        >
                            Your saved courses
                        </h1>

                        <p
                            className="
                            mt-2
                            max-w-xl
                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        "
                        >
                            Courses you've saved for later. Start learning
                            whenever you're ready.
                        </p>
                    </div>

                    {/* Clear Wishlist */}

                    {hasCourses && (
                        <button
                            type="button"
                            onClick={handleClearWishlist}
                            className="
                                inline-flex
                                w-fit
                                items-center
                                gap-1.5

                                font-body
                                text-xs
                                font-medium
                                text-status-danger

                                transition-colors

                                hover:text-status-danger/70

                                cursor-pointer
                            "
                        >
                            <Trash2 size={14} />
                            Clear wishlist
                        </button>
                    )}
                </div>

                {/* Course count */}

                <div
                    className="
                    mt-8
                    border-y
                    border-border-subtle
                    py-3
                "
                >
                    <span
                        className="
                        font-body
                        text-xs
                        text-text-muted
                    "
                    >
                        {wishlistCourses.length}{" "}
                        {wishlistCourses.length === 1 ? "course" : "courses"}
                    </span>
                </div>

                {/* Courses */}

                {hasCourses ? (
                    <div
                        className="
                        mt-6
                        grid
                        grid-cols-1
                        gap-5

                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                    >
                        {wishlistCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div
                        className="
                        mt-6
                        flex
                        min-h-80
                        flex-col
                        items-center
                        justify-center

                        rounded-xl
                        border
                        border-border-subtle
                        bg-background-surface

                        px-6
                        text-center
                    "
                    >
                        <Heart size={24} className="text-text-muted" />

                        <h2
                            className="
                            mt-4
                            font-accent
                            text-base
                            font-semibold
                            text-text-primary
                        "
                        >
                            Your wishlist is empty
                        </h2>

                        <p
                            className="
                            mt-2
                            max-w-sm
                            font-body
                            text-sm
                            leading-6
                            text-text-secondary
                        "
                        >
                            Save courses you're interested in and find them here
                            later.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default WishlistPage
