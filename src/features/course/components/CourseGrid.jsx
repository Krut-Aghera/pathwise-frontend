import CourseCard from "./CourseCard"

const CourseGrid = ({ courses = [] }) => {

    if (courses.length === 0) {
        return null
    }


    return (
        <div className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-4
        ">
            {courses.map((course) => (
                <CourseCard
                    key={course._id || course.id}
                    course={course}
                />
            ))}
        </div>
    )
}


export default CourseGrid