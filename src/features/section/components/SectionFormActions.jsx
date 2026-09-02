import Button from "../../../components/ui/Button.jsx"

const SectionFormActions = ({ loading = false, onCancel }) => {
    return (
        <div
            className="
            flex
            flex-col-reverse
            gap-3

            sm:flex-row
            sm:justify-end
        "
        >
            {/* Cancel */}

            <Button
                type="button"
                disabled={loading}
                onClick={onCancel}
                className="
                    w-full

                    border
                    border-border-subtle
                    bg-background-elevated

                    text-text-secondary

                    hover:bg-background-surface
                    hover:text-text-primary

                    sm:w-auto
                "
            >
                Cancel
            </Button>

            {/* Submit */}

            <Button
                type="submit"
                loading={loading}
                className="
                    w-full

                    sm:w-auto
                "
            >
                Create Section
            </Button>
        </div>
    )
}

export default SectionFormActions
