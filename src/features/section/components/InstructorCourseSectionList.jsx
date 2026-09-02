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

import InstructorCourseSectionItem from "./InstructorCourseSectionItem"

const InstructorCourseSectionList = ({
    sections = [],
    onSectionClick,
    onSectionDetail,
    onReorderSections,
    isReorderingSections = false,
}) => {
    const [localSections, setLocalSections] = useState(sections)

    useEffect(() => {
        if (!isReorderingSections) {
            setLocalSections(sections)
        }
    }, [sections, isReorderingSections])

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

    if (localSections.length === 0) {
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
                    No sections yet.
                </p>

                <p
                    className="
                    mt-1
                    font-body
                    text-xs
                    text-text-muted
                "
                >
                    Add a section to start building the course.
                </p>
            </div>
        )
    }

    const handleDragEnd = async (event) => {
        if (isReorderingSections) {
            return
        }

        const { active, over } = event

        if (!over || active.id === over.id) {
            return
        }

        const oldIndex = localSections.findIndex(
            (section) => section._id === active.id
        )

        const newIndex = localSections.findIndex(
            (section) => section._id === over.id
        )

        if (oldIndex === -1 || newIndex === -1) {
            return
        }

        const previousSections = [...localSections]

        const reorderedSections = arrayMove(localSections, oldIndex, newIndex)

        setLocalSections(reorderedSections)

        const success = await onReorderSections?.(reorderedSections)

        if (!success) {
            setLocalSections(previousSections)
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={localSections.map((section) => section._id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="space-y-2.5">
                    {localSections.map((section) => (
                        <InstructorCourseSectionItem
                            key={section._id}
                            section={section}
                            onSectionClick={onSectionClick}
                            onSectionDetail={onSectionDetail}
                            isReorderingSections={isReorderingSections}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
}

export default InstructorCourseSectionList
