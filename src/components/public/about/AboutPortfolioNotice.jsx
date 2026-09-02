import { Server } from "lucide-react"

const AboutPortfolioNotice = () => {
    return (
        <section
            className="
            border-t
            border-border-subtle
            bg-background-surface/30
        "
        >
            <div
                className="
                mx-auto
                w-full
                max-w-5xl
                px-4
                py-16
                sm:px-6
                lg:px-8
            "
            >
                <div
                    className="
                    rounded-2xl
                    border
                    border-accent-secondary/20
                    bg-accent-secondary/5
                    p-6
                    sm:p-8
                "
                >
                    <div
                        className="
                        flex
                        flex-col
                        gap-5
                        sm:flex-row
                        sm:items-start
                    "
                    >
                        <div
                            className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-accent-secondary/10
                            text-accent-secondary
                        "
                        >
                            <Server size={19} />
                        </div>

                        <div>
                            <h2
                                className="
                                font-accent
                                text-lg
                                font-semibold
                                text-text-primary
                            "
                            >
                                A portfolio project — not a commercial LMS
                            </h2>

                            <p
                                className="
                                mt-2
                                font-body
                                text-sm
                                leading-6
                                text-text-secondary
                            "
                            >
                                Pathwise is intentionally built as a portfolio
                                project to demonstrate full-stack engineering
                                skills. The course catalog uses a small set of
                                demonstration courses with a limited number of
                                sections and lectures.
                            </p>

                            <p
                                className="
                                mt-3
                                font-body
                                text-sm
                                leading-6
                                text-text-secondary
                            "
                            >
                                Payments are connected to the{" "}
                                <strong className="text-text-primary">
                                    Cashfree sandbox/test environment
                                </strong>
                                . No real money or real transactions are
                                involved. The payment flow exists to demonstrate
                                a production-style enrollment workflow.
                            </p>

                            <p
                                className="
                                mt-3
                                font-body
                                text-sm
                                leading-6
                                text-text-muted
                            "
                            >
                                The goal is not to compete with platforms such
                                as Udemy or Coursera. The goal is to demonstrate
                                how a modern LMS can be architected,
                                implemented, secured, tested, and deployed end
                                to end.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPortfolioNotice
