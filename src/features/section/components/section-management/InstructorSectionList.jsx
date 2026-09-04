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

import InstructorSectionItem from "./InstructorSectionItem"

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const InstructorSectionList = ({
    sections = [],
    onSectionDetail,
    onReorderSections,
    isReorderingSections = false,
}) => {
    const [localSections, setLocalSections] = useState(sections)

    /*
     * Sync server state into local ordering.
     *
     * Do not overwrite optimistic ordering while
     * a reorder request is still in progress.
     */

    useEffect(() => {
        if (!isReorderingSections) {
            setLocalSections(sections)
        }
    }, [sections, isReorderingSections])

    /*
     * DnD sensors
     */

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

    /*
     * Handle completed drag
     */

    const handleDragEnd = async ({ active, over }) => {
        if (isReorderingSections || !over || active.id === over.id) {
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

        /*
         * Keep the current state for rollback.
         */

        const previousSections = localSections

        /*
         * Optimistically update the UI.
         */

        const reorderedSections = arrayMove(localSections, oldIndex, newIndex)

        setLocalSections(reorderedSections)

        /*
         * Ask the page to persist the new order.
         */

        const success = await onReorderSections?.(reorderedSections)

        /*
         * Roll back if the API operation failed.
         */

        if (!success) {
            setLocalSections(previousSections)
        }
    }

    /*
     * Empty state
     */

    if (!localSections.length) {
        return (
            <div
                className="
                    rounded-lg
                    border
                    border-dashed
                    border-border-subtle
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
                        text-text-primary
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
                    Add your first section to start building the course
                    curriculum.
                </p>
            </div>
        )
    }

    /*
     * DnD list
     */

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
                        <InstructorSectionItem
                            key={section._id}
                            section={section}
                            onSectionDetail={onSectionDetail}
                            isReorderingSections={isReorderingSections}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    )
}

export default InstructorSectionList
