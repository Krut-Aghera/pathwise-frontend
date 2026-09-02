import InstructorStatCard from "./InstructorStatCard"

const InstructorStats = ({ stats }) => {
    return (
        <section
            className="
            grid
            grid-cols-2
            gap-4

            xl:grid-cols-4
        "
        >
            <InstructorStatCard
                label="Total courses"
                value={stats.totalCourses}
                description="Courses in your workspace"
                accent="secondary"
            />

            <InstructorStatCard
                label="Published"
                value={stats.publishedCourses}
                description="Currently available to learners"
                accent="primary"
            />

            <InstructorStatCard
                label="Enrollments"
                value={stats.totalEnrollments}
                description="Total learners enrolled"
                accent="unique"
            />

            <InstructorStatCard
                label="Total revenue"
                value={stats.totalRevenue}
                description="Generated from your courses"
                accent="secondary"
            />
        </section>
    )
}

export default InstructorStats
