import InstructorCourseCard from "./InstructorCourseCard"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorCourseGrid = ({ courses, onPublish, onDraft, onRemove }) => {
    return (
        <div
            className="
            mt-5

            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            xl:grid-cols-3
        "
        >
            {courses.map((course) => (
                <InstructorCourseCard
                    key={course._id}
                    course={course}

                    onPublish={onPublish}
                    onDraft={onDraft}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
}

export default InstructorCourseGrid
