import EnrollmentCourseCard from "./EnrollmentCourseCard.jsx"

const EnrollmentCourseGrid = ({ enrollments }) => {
    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
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
