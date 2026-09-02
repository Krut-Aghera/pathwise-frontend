import { FileVideo } from "lucide-react"

import InstructorCourseLectureItem from "./InstructorCourseLectureItem.jsx"

const InstructorCourseLectureList = ({ lectures = [] }) => {
    if (lectures.length === 0) {
        return (
            <div
                className="
                flex
                items-center
                gap-2

                px-2
                py-4

                font-body
                text-xs
                text-text-muted
            "
            >
                <FileVideo size={14} />

                <span>No lectures in this section.</span>
            </div>
        )
    }

    return (
        <div
            className="
            divide-y
            divide-border-subtle
        "
        >
            {lectures.map((lecture) => (
                <InstructorCourseLectureItem
                    key={lecture._id}
                    lecture={lecture}
                />
            ))}
        </div>
    )
}

export default InstructorCourseLectureList
