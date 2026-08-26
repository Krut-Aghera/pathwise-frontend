// const DashboardSideVisual = () => {

//     return (
//         <aside className="
//             w-full
//             shrink-0

//             lg:w-56
//         ">

//             <div className="
//                 relative
//                 h-48
//                 w-full
//                 hidden
//                 overflow-hidden
//                 rounded-xl
//                 border
//                 border-border-subtle
//                 bg-background-surface/20
//                  lg:block
//                 lg:h-78
//             ">

//                 <svg
//                     viewBox="0 0 224 256"
//                     preserveAspectRatio="none"
//                     className="
//                         absolute
//                         inset-0
//                         h-full
//                         w-full
//                     "
//                     aria-hidden="true"
//                 >

//                     {/* Primary paths */}

//                     <path
//                         d="
//                             M -30 45
//                             C 40 5, 65 90, 125 45
//                             S 185 20, 250 75
//                         "
//                         fill="none"
//                         stroke="rgb(59 130 246 / 0.30)"
//                         strokeWidth="1"
//                     />

//                     <path
//                         d="
//                             M -30 75
//                             C 45 30, 75 120, 135 75
//                             S 190 50, 250 105
//                         "
//                         fill="none"
//                         stroke="rgb(59 130 246 / 0.15)"
//                         strokeWidth="1"
//                     />


//                     {/* Secondary paths */}

//                     <path
//                         d="
//                             M -30 115
//                             C 40 70, 75 160, 130 115
//                             S 190 90, 250 145
//                         "
//                         fill="none"
//                         stroke="rgb(168 85 247 / 0.30)"
//                         strokeWidth="1"
//                     />

//                     <path
//                         d="
//                             M -30 140
//                             C 45 95, 80 185, 140 140
//                             S 195 115, 250 170
//                         "
//                         fill="none"
//                         stroke="rgb(168 85 247 / 0.15)"
//                         strokeWidth="1"
//                     />


//                     {/* Unique paths */}

//                     <path
//                         d="
//                             M -30 180
//                             C 40 135, 75 225, 135 180
//                             S 195 155, 250 210
//                         "
//                         fill="none"
//                         stroke="rgb(236 72 153 / 0.30)"
//                         strokeWidth="1"
//                     />

//                     <path
//                         d="
//                             M -30 205
//                             C 45 160, 80 250, 140 205
//                             S 195 180, 250 235
//                         "
//                         fill="none"
//                         stroke="rgb(236 72 153 / 0.15)"
//                         strokeWidth="1"
//                     />


//                     {/* Moving blue dot */}

//                     <circle
//                         r="2.5"
//                         fill="rgb(59 130 246)"
//                     >
//                         <animateMotion
//                             dur="5s"
//                             repeatCount="indefinite"
//                             path="
//                                 M -30 45
//                                 C 40 5, 65 90, 125 45
//                                 S 185 20, 250 75
//                             "
//                         />
//                     </circle>


//                     {/* Moving purple dot */}

//                     <circle
//                         r="2.5"
//                         fill="rgb(168 85 247)"
//                     >
//                         <animateMotion
//                             dur="6s"
//                             begin="1s"
//                             repeatCount="indefinite"
//                             path="
//                                 M -30 115
//                                 C 40 70, 75 160, 130 115
//                                 S 190 90, 250 145
//                             "
//                         />
//                     </circle>


//                     {/* Moving pink dot */}

//                     <circle
//                         r="2.5"
//                         fill="rgb(236 72 153)"
//                     >
//                         <animateMotion
//                             dur="7s"
//                             begin="2s"
//                             repeatCount="indefinite"
//                             path="
//                                 M -30 180
//                                 C 40 135, 75 225, 135 180
//                                 S 195 155, 250 210
//                             "
//                         />
//                     </circle>


//                     {/* Success signal */}

//                     <circle
//                         cx="55"
//                         cy="95"
//                         r="2"
//                         fill="rgb(34 197 94)"
//                     >
//                         <animate
//                             attributeName="opacity"
//                             values="0.2;0.8;0.2"
//                             dur="3s"
//                             repeatCount="indefinite"
//                         />
//                     </circle>


//                     {/* Warning signal */}

//                     <circle
//                         cx="175"
//                         cy="155"
//                         r="2"
//                         fill="rgb(234 179 8)"
//                     >
//                         <animate
//                             attributeName="opacity"
//                             values="0.2;0.8;0.2"
//                             dur="4s"
//                             begin="1s"
//                             repeatCount="indefinite"
//                         />
//                     </circle>


//                     {/* Danger signal */}

//                     <circle
//                         cx="70"
//                         cy="225"
//                         r="2"
//                         fill="rgb(239 68 68)"
//                     >
//                         <animate
//                             attributeName="opacity"
//                             values="0.2;0.8;0.2"
//                             dur="3.5s"
//                             begin="0.5s"
//                             repeatCount="indefinite"
//                         />
//                     </circle>

//                 </svg>

//             </div>

//         </aside>
//     )
// }


// export default DashboardSideVisual


const DashboardSideVisual = () => {

    return (
        <aside className="
            hidden
            w-56
            shrink-0

            lg:block
        ">

            <div className="
                relative
                min-h-[calc(100vh-4rem)]
                h-full
                overflow-hidden

                rounded-xl
                border
                border-border-subtle

                bg-background-surface/20
            ">

                {/* Primary glow */}

                <div className="
                    absolute
                    -left-12
                    top-16

                    h-40
                    w-40

                    rounded-full
                    bg-accent-primary/10

                    blur-3xl
                " />


                {/* Secondary glow */}

                <div className="
                    absolute
                    -right-12
                    top-1/2

                    h-48
                    w-48

                    rounded-full
                    bg-accent-secondary/8

                    blur-3xl
                " />


                {/* Unique glow */}

                <div className="
                    absolute
                    bottom-10
                    left-1/4

                    h-32
                    w-32

                    rounded-full
                    bg-accent-unique/8

                    blur-3xl
                " />


                {/* Vertical structure */}

                <div className="
                    absolute
                    inset-y-0
                    left-1/2

                    w-px
                    -translate-x-1/2

                    bg-linear-to-b
                    from-transparent
                    via-border-subtle
                    to-transparent

                    opacity-40
                " />


                {/* Top geometric frame */}

                <div className="
                    absolute
                    left-6
                    top-8

                    h-24
                    w-24

                    rounded-tl-3xl

                    border-l
                    border-t

                    border-accent-primary/15
                " />


                {/* Bottom geometric frame */}

                <div className="
                    absolute
                    bottom-8
                    right-6

                    h-24
                    w-24

                    rounded-br-3xl

                    border-b
                    border-r

                    border-accent-secondary/15
                " />


                {/* Small structural points */}

                <div className="
                    absolute
                    left-8
                    top-1/3

                    h-1.5
                    w-1.5

                    rounded-full
                    bg-accent-primary/40
                " />


                <div className="
                    absolute
                    right-8
                    top-1/2

                    h-1.5
                    w-1.5

                    rounded-full
                    bg-accent-secondary/40
                " />


                <div className="
                    absolute
                    bottom-1/3
                    left-1/3

                    h-1.5
                    w-1.5

                    rounded-full
                    bg-accent-unique/40
                " />


                {/* Subtle diagonal structure */}

                <div className="
                    absolute
                    inset-0

                    bg-[linear-gradient(
                        135deg,
                        transparent_0%,
                        transparent_48%,
                        rgb(255_255_255_/0.02)_49%,
                        transparent_50%,
                        transparent_100%
                    )]
                " />

            </div>

        </aside>
    )
}


export default DashboardSideVisual