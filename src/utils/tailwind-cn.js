import { twMerge } from "tailwind-merge"

const mergeClass = (...classes) => {
    return twMerge(classes)
}

export default mergeClass
