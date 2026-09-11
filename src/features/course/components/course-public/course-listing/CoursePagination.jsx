import { ChevronLeft, ChevronRight } from "lucide-react"

const CoursePagination = ({ pagination, onPageChange, disabled = false }) => {
    const currentPage = pagination?.currentPage ?? 1

    const totalPages = pagination?.totalPages ?? 1

    const hasNextPage = pagination?.hasNextPage ?? false

    const hasPreviousPage = pagination?.hasPreviousPage ?? false

    const getPageNumbers = () => {
        const pages = []

        const startPage = Math.max(1, currentPage - 2)

        const endPage = Math.min(totalPages, currentPage + 2)

        for (let page = startPage; page <= endPage; page += 1) {
            pages.push(page)
        }

        return pages
    }

    return (
        <nav
            aria-label="Course pagination"
            className="
                flex
                items-center
                justify-center
                gap-1.5
            "
        >
            {/* Previous */}

            <button
                type="button"
                onClick={() => onPageChange?.(currentPage - 1)}
                disabled={!hasPreviousPage || disabled}
                aria-label="Previous page"
                className="
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center

                    rounded-lg
                    border
                    border-border-subtle
                    bg-background-surface

                    text-text-secondary

                    transition-colors
                    duration-200

                    hover:border-accent-primary/40
                    hover:text-text-primary

                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronLeft size={17} />
            </button>

            {/* Page numbers */}

            {getPageNumbers().map((page) => {
                const isCurrentPage = page === currentPage

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange?.(page)}
                        disabled={disabled}
                        aria-current={isCurrentPage ? "page" : undefined}
                        className={`
                            flex
                            h-9
                            min-w-9
                            cursor-pointer
                            items-center
                            justify-center

                            rounded-lg
                            border
                            px-2

                            font-body
                            text-sm
                            font-medium

                            transition-colors
                            duration-200

                            disabled:cursor-not-allowed
                            disabled:opacity-50

                            ${
                                isCurrentPage
                                    ? `
                                        border-accent-primary
                                        bg-accent-primary
                                        text-white
                                    `
                                    : `
                                        border-border-subtle
                                        bg-background-surface
                                        text-text-secondary

                                        hover:border-accent-primary/40
                                        hover:text-text-primary
                                    `
                            }
                        `}
                    >
                        {page}
                    </button>
                )
            })}

            {/* Next */}

            <button
                type="button"
                onClick={() => onPageChange?.(currentPage + 1)}
                disabled={!hasNextPage || disabled}
                aria-label="Next page"
                className="
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center

                    rounded-lg
                    border
                    border-border-subtle
                    bg-background-surface

                    text-text-secondary

                    transition-colors
                    duration-200

                    hover:border-accent-primary/40
                    hover:text-text-primary

                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                <ChevronRight size={17} />
            </button>
        </nav>
    )
}

export default CoursePagination
