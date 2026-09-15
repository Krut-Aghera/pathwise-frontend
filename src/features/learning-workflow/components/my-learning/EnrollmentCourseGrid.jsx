import EnrollmentCourseCard from "./EnrollmentCourseCard.jsx"

const EnrollmentCourseGrid = ({ enrollments }) => {
    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:gap-6
                xl:grid-cols-3
            "
        >
            {enrollments.map((enrollment) => (
                <EnrollmentCourseCard
                    key={enrollment._id}
                    enrollment={enrollment}
                />
            ))}
        </div>
    )
}

export default EnrollmentCourseGrid
