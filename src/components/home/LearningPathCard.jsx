import { Link } from "react-router-dom"


const LearningPathCard = ({
    path,
}) => {

    const accentClasses = {
        primary: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
        secondary: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
        unique: "bg-accent-unique/10 text-accent-unique border-accent-unique/20",
    }


    return (
        <article className="
            rounded-xl
            border
            border-border-subtle
            bg-background-surface
            p-5
            transition
            hover:border-border-subtle
            hover:bg-background-elevated
        ">

            <div className="
                flex
                items-start
                justify-between
                gap-4
            ">

                <div className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    ${accentClasses[path.accent]}
                `}>
                    <span className="font-accent text-lg">
                        →
                    </span>
                </div>

                <span className="
                    font-body
                    text-xs
                    text-text-muted
                ">
                    {path.courses} courses
                </span>

            </div>


            <h3 className="
                mt-5
                font-accent
                text-lg
                font-semibold
                text-text-primary
            ">
                {path.title}
            </h3>


            <p className="
                mt-2
                font-body
                text-sm
                leading-6
                text-text-secondary
            ">
                {path.description}
            </p>


            <div className="
                mt-4
                flex
                items-center
                justify-between
                border-t
                border-border-subtle
                pt-4
            ">
                <span className="
                    font-body
                    text-xs
                    text-text-muted
                ">
                    {path.level}
                </span>

                <Link
                    to={`/learning-paths/${path.id}`}
                    className="
                        font-body
                        text-xs
                        font-medium
                        text-accent-primary
                        transition
                        hover:opacity-80
                    "
                >
                    Explore →
                </Link>
            </div>

        </article>
    )
}


export default LearningPathCard