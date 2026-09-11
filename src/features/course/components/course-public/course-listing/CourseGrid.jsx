import CourseCard from "./CourseCard"

const CourseGrid = ({ courses = [], onCourseClick }) => {
    if (courses?.length === 0) {
        return null
    }

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-6

                sm:grid-cols-2

                lg:grid-cols-3
            "
        >
            {courses?.map((course) => (
                <CourseCard
                    key={course?._id ?? course?.id}
                    course={course}
                    onClick={onCourseClick}
                />
            ))}
        </div>
    )
}

export default CourseGrid
