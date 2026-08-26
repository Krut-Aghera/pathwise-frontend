import {
    Check,
    LockKeyhole,
    ShoppingCart,
} from "lucide-react"


const CourseEnrollmentCard = ({
    price,
    isEnrolled = false,
    isPurchasing = false,
    onEnroll,
}) => {

    return (
        <aside className="
            w-full

            rounded-xl
            border
            border-border-subtle
            bg-background-surface

            p-5

            sm:p-6

            lg:p-7
        ">

            {/* Price */}

            <div>
                <p className="
                    font-body
                    text-xs
                    font-medium
                    text-text-muted
                ">
                    Course price
                </p>

                <div className="
                    mt-1
                    flex
                    items-baseline
                    gap-1
                ">
                    <span className="
                        font-accent
                        text-3xl
                        font-bold
                        text-text-primary

                        sm:text-4xl
                    ">
                        ₹{price}
                    </span>
                </div>
            </div>


            {/* Enrollment Action */}

            <div className="mt-5">

                {isEnrolled ? (
                    <button
                        type="button"
                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2

                            rounded-lg

                            bg-accent-primary
                            px-5
                            py-3

                            font-body
                            text-sm
                            font-semibold
                            text-white

                            transition-all
                            duration-200

                            hover:opacity-90

                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/40
                        "
                    >
                        <Check size={17} />

                        Continue Learning
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={onEnroll}
                        disabled={isPurchasing}
                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2

                            rounded-lg

                            bg-accent-primary
                            px-5
                            py-3

                            font-body
                            text-sm
                            font-semibold
                            text-white

                            transition-all
                            duration-200

                            hover:opacity-90

                            disabled:cursor-not-allowed
                            disabled:opacity-60

                            focus:outline-none
                            focus:ring-2
                            focus:ring-accent-primary/40
                        "
                    >
                        <ShoppingCart size={17} />

                        {isPurchasing
                            ? "Processing..."
                            : "Enroll Now"}
                    </button>
                )}

            </div>


            {/* Security / Payment Information */}

            <div className="
                mt-4
                flex
                items-start
                gap-2

                font-body
                text-[11px]
                leading-5
                text-text-muted
            ">

                <LockKeyhole
                    size={13}
                    className="
                        mt-0.5
                        shrink-0
                    "
                />

                <span>
                    Secure payment. You will get access to the
                    course after successful payment.
                </span>

            </div>


            {/* Included */}

            <div className="
                mt-6
                border-t
                border-border-subtle
                pt-5
            ">

                <p className="
                    font-body
                    text-xs
                    font-semibold
                    text-text-primary
                ">
                    This course includes
                </p>

                <ul className="
                    mt-3
                    space-y-2.5
                ">

                    <li className="
                        flex
                        items-center
                        gap-2

                        font-body
                        text-xs
                        text-text-secondary
                    ">
                        <Check
                            size={14}
                            className="
                                shrink-0
                                text-accent-primary
                            "
                        />

                        Full course access
                    </li>

                    <li className="
                        flex
                        items-center
                        gap-2

                        font-body
                        text-xs
                        text-text-secondary
                    ">
                        <Check
                            size={14}
                            className="
                                shrink-0
                                text-accent-primary
                            "
                        />

                        On-demand video lectures
                    </li>

                    <li className="
                        flex
                        items-center
                        gap-2

                        font-body
                        text-xs
                        text-text-secondary
                    ">
                        <Check
                            size={14}
                            className="
                                shrink-0
                                text-accent-primary
                            "
                        />

                        Self-paced learning
                    </li>

                </ul>

            </div>

        </aside>
    )
}


export default CourseEnrollmentCard