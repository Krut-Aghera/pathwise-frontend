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