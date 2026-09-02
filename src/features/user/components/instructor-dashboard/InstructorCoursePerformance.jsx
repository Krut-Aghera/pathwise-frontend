import InstructorCourseRow from "./InstructorCourseRow"

const InstructorCoursePerformance = ({ courses }) => {
    return (
        <section>
            <div
                className="
                mb-4
                flex
                items-end
                justify-between
                gap-4
            "
            >
                <div>
                    <p
                        className="
                        font-body
                        text-xs
                        font-medium
                        uppercase
                        tracking-wider
                        text-accent-primary
                    "
                    >
                        Course performance
                    </p>

                    <h2
                        className="
                        mt-1
                        font-accent
                        text-xl
                        font-bold
                        text-text-primary
                    "
                    >
                        Published courses
                    </h2>
                </div>
            </div>

            <div className="space-y-3">
                {courses.map((course) => (
                    <InstructorCourseRow key={course.id} course={course} />
                ))}
            </div>
        </section>
    )
}

export default InstructorCoursePerformance
