import { useNavigate, useParams } from "react-router-dom"

import {
    useFetchInstructorSectionQuery,
    useUpdateSectionMutation,
} from "../sectionApi.js"

import ErrorState from "../../../components/ui/ErrorState.jsx"
import { sectionValidationRules } from "../sectionValidations.js"
import SectionUpdateForm from "../components/form/SectionUpdateForm.jsx"


const SectionUpdatePage = () => {

    const navigate = useNavigate()

    const { sectionId } = useParams()


    ///////////////////////////////////////////////////////////////
    // Fetch section

    const {
        data: sectionResponse,
        isLoading: isSectionLoading,
        isError: isSectionError,
        error: sectionError,
        refetch: refetchSection,
    } = useFetchInstructorSectionQuery(sectionId)


    ///////////////////////////////////////////////////////////////
    // Update section

    const [
        updateSection,
        {
            isLoading: isUpdating,
        },
    ] = useUpdateSectionMutation()


    ///////////////////////////////////////////////////////////////
    // Data

    const section = sectionResponse?.data

    const courseId =
        section?.course?._id ||
        section?.course


    ///////////////////////////////////////////////////////////////
    // Validation rules

    const validationRules = {
        ...sectionValidationRules,
    }


    ///////////////////////////////////////////////////////////////
    // Error message helper

    const getErrorMessage = (error, fallback) => {

        return (
            error?.errors?.[0]?.message ||
            error?.message ||
            fallback
        )
    }


    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (sectionData) => {

        await updateSection({
            sectionId,
            courseId,
            sectionData,
        }).unwrap()

        ///////////////////////////////////////////////////////////
        // Success

        navigate(
            `/instructor/courses/${courseId}`
        )

    }


    ///////////////////////////////////////////////////////////////
    // Cancel

    const handleCancel = () => {

        navigate(
            `/instructor/courses/${courseId}`
        )

    }


    ///////////////////////////////////////////////////////////////
    // Loading

    if (isSectionLoading) {

        return (
            <main className="
                mx-auto
                w-full
                max-w-3xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <div className="
                    flex
                    min-h-80
                    items-center
                    justify-center

                    rounded-xl
                    border
                    border-border-subtle
                    bg-background-surface
                ">

                    <p className="
                        font-body
                        text-sm
                        text-text-muted
                    ">

                        Loading section...

                    </p>

                </div>

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Error

    if (isSectionError || !section) {

        const message = isSectionError
            ? getErrorMessage(
                sectionError,
                "Unable to load this section."
            )
            : "The requested section could not be found."


        return (
            <main className="
                mx-auto
                w-full
                max-w-3xl

                px-4
                py-6

                sm:px-6
                sm:py-8

                lg:px-8
                lg:py-10
            ">

                <ErrorState
                    title="Unable to load section"
                    message={message}
                    onRetry={refetchSection}
                />

            </main>
        )
    }


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <main className="
            mx-auto
            w-full
            max-w-3xl

            px-4
            py-6

            sm:px-6
            sm:py-8

            lg:px-8
            lg:py-10
        ">

            {/* Page Header */}

            <header className="mb-8">

                <p className="
                    font-body
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-accent-primary
                ">

                    Section {section?.order}

                </p>


                <h1 className="
                    mt-1

                    font-accent
                    text-2xl
                    font-semibold
                    text-text-primary

                    sm:text-3xl
                ">

                    Edit Section

                </h1>


                <p className="
                    mt-2
                    max-w-2xl

                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">

                    Update the title of this course section.

                </p>

            </header>


            {/* Form */}

            <SectionUpdateForm
                initialValues={{
                    title: section?.title || "",
                }}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isUpdating}
                validationRules={validationRules}
            />

        </main>
    )
}


export default SectionUpdatePage
