import Resources from "./Resources";

// Internal-review route: reuse current resources experience at /learning-paths
// until team confirms the final public navigation and naming rollout.
export default function LearningPaths() {
    return (
        <Resources
            pageHeading={<>Learning <span className="text-gradient">Paths</span></>}
            pageDescription="Internal review route for the same curated study flow, presented under the Learning Paths name."
        />
    );
}
