import {
    useEffect,
    useState,
} from "react"

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

import InstructorCourseSectionItem
    from "./InstructorCourseSectionItem"


const InstructorCourseSectionList = ({
    course,
    sections = [],
    onManageSection,
    onAddLecture,
    onReorderSections,
    isReorderingSections = false,
}) => {

    ///////////////////////////////////////////////////////////////
    // Local sections
    //
    // This allows the UI to update immediately after dragging.

    const [
        localSections,
        setLocalSections,
    ] = useState(sections)


    ///////////////////////////////////////////////////////////////
    // Sync server data
    //
    // RTK Query updates `sections` after successful mutations.
    // We sync that data back into the local list.

    useEffect(() => {

        if (!isReorderingSections) {

            setLocalSections(
                sections
            )

        }

    }, [
        sections,
        isReorderingSections,
    ])


    ///////////////////////////////////////////////////////////////
    // Sensors

    const sensors = useSensors(

        useSensor(
            PointerSensor,
            {
                activationConstraint: {
                    distance: 6,
                },
            }
        ),

        useSensor(
            KeyboardSensor,
            {
                coordinateGetter:
                    sortableKeyboardCoordinates,
            },
        )

    )


    ///////////////////////////////////////////////////////////////
    // Empty state

    if (localSections.length === 0) {

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


    ///////////////////////////////////////////////////////////////
    // Drag end

    const handleDragEnd = async (event) => {

        if (isReorderingSections) {
            return
        }


        const {
            active,
            over,
        } = event


        if (!over) {
            return
        }


        if (active.id === over.id) {
            return
        }


        ///////////////////////////////////////////////////////////////
        // Find indexes

        const oldIndex =
            localSections.findIndex(
                (section) =>
                    section._id === active.id
            )


        const newIndex =
            localSections.findIndex(
                (section) =>
                    section._id === over.id
            )


        if (
            oldIndex === -1 ||
            newIndex === -1
        ) {
            return
        }


        ///////////////////////////////////////////////////////////////
        // Preserve previous order
        //
        // Used for rollback if API fails.

        const previousSections =
            [...localSections]


        ///////////////////////////////////////////////////////////////
        // Create reordered array

        const reorderedSections =
            arrayMove(
                localSections,
                oldIndex,
                newIndex
            )


        ///////////////////////////////////////////////////////////////
        // Optimistic UI update

        setLocalSections(
            reorderedSections
        )


        ///////////////////////////////////////////////////////////////
        // Persist to backend

        const success =
            await onReorderSections?.(
                reorderedSections
            )


        ///////////////////////////////////////////////////////////////
        // Rollback on failure

        if (!success) {

            setLocalSections(
                previousSections
            )
        }
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >

            <SortableContext
                items={localSections.map(
                    (section) => section._id
                )}
                strategy={verticalListSortingStrategy}
            >

                <div className="
                    space-y-3
                ">

                    {localSections.map(
                        (section) => (
                            <InstructorCourseSectionItem
                                key={section._id}
                                course={course}
                                section={section}
                                onManageSection={onManageSection}
                                onAddLecture={onAddLecture}
                                isReorderingSections={
                                    isReorderingSections
                                }

                            />
                        )
                    )}

                </div>

            </SortableContext>

        </DndContext>
    )
}


export default InstructorCourseSectionList