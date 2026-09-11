///////////////////////////////////////////////////////////////
// format duration in seconds to hh:mm:ss or mm:ss format

const formatDuration = (seconds) => {
    if (
        seconds === null ||
        seconds === undefined ||
        !Number.isFinite(Number(seconds))
    ) {
        return "Not available"
    }

    const totalSeconds = Math.max(0, Math.floor(Number(seconds)))

    const hours = Math.floor(totalSeconds / 3600)

    const minutes = Math.floor((totalSeconds % 3600) / 60)

    const remainingSeconds = totalSeconds % 60

    if (hours > 0) {
        return [
            hours,
            String(minutes).padStart(2, "0"),
            String(remainingSeconds).padStart(2, "0"),
        ].join(":")
    }

    return [minutes, String(remainingSeconds).padStart(2, "0")].join(":")
}

export default formatDuration
