import InstructorCourseSectionItem
    from "./InstructorCourseSectionItem.jsx"


const InstructorCourseSectionList = ({
    course,
    sections = [],
}) => {

    if (sections.length === 0) {

        return (
            <div className="
                rounded-lg
                border
                border-dashed
                border-border-subtle

                bg-background-elevated

                px-5
                py-10

                text-center
            ">

                <p className="
                    font-body
                    text-sm
                    font-medium
                    text-text-secondary
                ">

                    No sections yet.

                </p>

                <p className="
                    mt-1

                    font-body
                    text-xs
                    text-text-muted
                ">

                    Add a section to start building the course curriculum.

                </p>

            </div>
        )
    }


    return (
        <div className="
            space-y-3
        ">

            {sections.map((section) => (

                <InstructorCourseSectionItem
                    key={section._id}
                    course={course}
                    section={section}
                />

            ))}

        </div>
    )
}


export default InstructorCourseSectionList
