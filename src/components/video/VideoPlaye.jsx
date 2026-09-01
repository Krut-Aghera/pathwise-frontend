import {
    useEffect,
    useRef,
} from "react"

import videojs
    from "video.js"

import "video.js/dist/video-js.css"


const VideoPlayer = ({
    src,
    poster,

    controls = true,
    autoplay = false,
    muted = false,

    loop = false,

    preload = "metadata",

    playbackRates = [
        0.5,
        0.75,
        1,
        1.25,
        1.5,
        1.75,
        2,
    ],

    className = "",
}) => {

    const videoElementRef =
        useRef(null)


    const playerRef =
        useRef(null)


    ///////////////////////////////////////////////////////////////
    // Initialize player

    useEffect(() => {

        if (
            !videoElementRef.current ||
            playerRef.current
        ) {
            return
        }


        const player =
            videojs(
                videoElementRef.current,
                {
                    controls,

                    autoplay,

                    muted,

                    loop,

                    responsive: true,

                    fluid: true,

                    preload,

                    playbackRates,

                    controlBar: {

                        children: [
                            "playToggle",

                            "progressControl",

                            "currentTimeDisplay",

                            "timeDivider",

                            "durationDisplay",

                            "volumePanel",

                            "playbackRateMenuButton",

                            "pictureInPictureToggle",

                            "fullscreenToggle",
                        ],

                    },

                    userActions: {

                        hotkeys: true,

                    },

                    sources: src
                        ? [
                            {
                                src,
                                type: getVideoMimeType(src),
                            },
                        ]
                        : [],
                }
            )


        playerRef.current =
            player


        ///////////////////////////////////////////////////////////
        // Cleanup

        return () => {

            if (
                playerRef.current &&
                !playerRef.current.isDisposed()
            ) {
                playerRef.current.dispose()
            }


            playerRef.current = null

        }

    }, [])


    ///////////////////////////////////////////////////////////////
    // Source

    useEffect(() => {

        const player =
            playerRef.current


        if (
            !player ||
            !src
        ) {
            return
        }


        const currentSource =
            player.currentSource()


        ///////////////////////////////////////////////////////////
        // Avoid unnecessary source replacement

        if (
            currentSource?.src === src
        ) {
            return
        }


        player.src({
            src,
            type: getVideoMimeType(src),
        })

    }, [src])


    ///////////////////////////////////////////////////////////////
    // Poster

    useEffect(() => {

        const player =
            playerRef.current


        if (!player) {
            return
        }


        player.poster(
            poster || ""
        )

    }, [poster])


    ///////////////////////////////////////////////////////////////
    // Autoplay

    useEffect(() => {

        const player =
            playerRef.current


        if (!player) {
            return
        }


        player.autoplay(
            autoplay
        )

    }, [autoplay])


    ///////////////////////////////////////////////////////////////
    // Muted

    useEffect(() => {

        const player =
            playerRef.current


        if (!player) {
            return
        }


        player.muted(
            muted
        )

    }, [muted])


    ///////////////////////////////////////////////////////////////
    // Render

    return (
        <div
            className={`
                video-player
                w-full
                ${className}
            `}
        >

            <div data-vjs-player>

                <video
                    ref={videoElementRef}
                    className="
                        video-js
                        vjs-big-play-centered
                    "
                />

            </div>

        </div>
    )
}


///////////////////////////////////////////////////////////////
// MIME type

const getVideoMimeType = (src) => {

    if (!src) {
        return "video/mp4"
    }


    const cleanSrc =
        src
            .split("?")[0]
            .toLowerCase()


    if (cleanSrc.endsWith(".webm")) {
        return "video/webm"
    }


    if (
        cleanSrc.endsWith(".mov") ||
        cleanSrc.endsWith(".qt")
    ) {
        return "video/quicktime"
    }


    if (cleanSrc.endsWith(".m3u8")) {
        return "application/x-mpegURL"
    }


    if (cleanSrc.endsWith(".mp4")) {
        return "video/mp4"
    }


    return "video/mp4"
}


export default VideoPlayer