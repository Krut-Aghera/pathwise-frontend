import { useNavigate, useParams } from "react-router-dom"

import {
    useCreateSectionMutation,
} from "../sectionApi.js"

import { sectionValidationRules } from "../sectionValidations.js"
import SectionCreateForm from "../components/form/SectionCreateForm.jsx"

const SectionCreatePage = () => {

    const navigate = useNavigate()

    const {
        courseId,
    } = useParams()


    ///////////////////////////////////////////////////////////////
    // Create section

    const [
        createSection,
        {
            isLoading,
        },
    ] = useCreateSectionMutation()


    ///////////////////////////////////////////////////////////////
    // Submit

    const handleSubmit = async (sectionData) => {

        await createSection({
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

                <h1 className="
                    font-accent
                    text-2xl
                    font-semibold
                    text-text-primary

                    sm:text-3xl
                ">
                    Create Section
                </h1>


                <p className="
                    mt-2
                    max-w-2xl

                    font-body
                    text-sm
                    leading-6
                    text-text-secondary
                ">
                    Add a new section to organize the lectures in your course.
                </p>

            </header>


            {/* Form */}

            <SectionCreateForm
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                loading={isLoading}
                validationRules={sectionValidationRules}
            />

        </main>
    )
}


export default SectionCreatePage