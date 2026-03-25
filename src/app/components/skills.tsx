'use client';

const MySkills = [
    { category: "Frontend", skills: ["JavaScript", "TypeScript", "React", "Next.js"] },
    { category: "Backend", skills: ["Node.js", "Express", "REST API"] },
    { category: "Databases", skills: ["PostgreSQL", "MongoDB"] },
    { category: "Tools", skills: ["Git", "Linux", "Prompt Engineering", "LLM"] },
];

export default function SkillsGrid() {
    return (
        <section className="py-6">
            <div className="max-w-5xl mx-auto space-y-6">
                {MySkills.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h4 className="text-accent text-xs font-medium uppercase tracking-wider mb-3">
                            {group.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, index) => (
                                <span 
                                    key={index}
                                    className="border border-accent px-3 py-1.5 rounded text-sm text-white hover:text-accent transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}