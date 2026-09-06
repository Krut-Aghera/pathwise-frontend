///////////////////////////////////////////////////////////////
// File size formatting

const formatFileSize = (bytes) => {
    const size = Number(bytes)

    if (!Number.isFinite(size) || size < 0) {
        return "Unknown"
    }

    if (size === 0) {
        return "0 Bytes"
    }

    const units = ["Bytes", "KB", "MB", "GB"]

    const exponent = Math.min(
        Math.floor(Math.log(size) / Math.log(1024)),
        units.length - 1
    )

    const value = size / Math.pow(1024, exponent)

    return `${value.toFixed(exponent === 0 ? 0 : 1)} ${units[exponent]}`
}

export default formatFileSize
