import { useEffect, useState } from "react"

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable"

import InstructorCourseLectureItem from "./InstructorCourseLectureItem.jsx"

const InstructorCourseLectureList = ({
    lectures = [],
    onManageLecture,
    onReorderLectures,
    isReorderingLectures = false,
}) => {
    const [localLectures, setLocalLectures] = useState(lectures)

    useEffect(() => {
        if (!isReorderingLectures) {
            setLocalLectures(lectures)
        }
    }, [lectures, isReorderingLectures])

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 6,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    if (localLectures.length === 0) {
        return (
            <div
                className="
                    rounded-lg
                    border
                    border-dashed
                    border-border-subtle

                    bg-background-elevated

                    px-5
                    py-10

                    text-center
                "
            >
                <p
                    className="
                        font-body
                        text-sm
                        font-medium
                        text-text-secondary
                    "
                >
                    No lectures yet.
                </p>

                <p
                    className="
                        mt-1

                        font-body
                        text-xs
                        text-text-muted
                    "
                >
                    Add a lecture to start building this section.
                </p>
            </div>
        )
    }

    const handleDragEnd = async (event) => {
        if (isReorderingLectures) {
            return
        }

        const { active, over } = event

        if (!over || active.id === over.id) {
            return
        }

        const oldIndex = localLectures.findIndex(
            (lecture) => lecture._id === active.id
        )

        const newIndex = localLectures.findIndex(
            (lecture) => lecture._id === over.id
        )

        if (oldIndex === -1 || newIndex === -1) {
            return
        }

        const previousLectures = [...localLectures]

        const reorderedLectures = arrayMove(localLectures, oldIndex, newIndex)

        setLocalLectures(reorderedLectures)

        const success = await onReorderLectures?.(reorderedLectures)

        if (!success) {
            setLocalLectures(previousLectures)
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={localLectures.map((lecture) => lecture._id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-2.5">
                    {localLectures.map((lecture) => (
                        <InstructorCourseLectureItem
                            key={lecture._id}
                            lecture={lecture}
                            onManageLecture={onManageLecture}
                            isReorderingLectures={isReorderingLectures}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
}

export default InstructorCourseLectureList
