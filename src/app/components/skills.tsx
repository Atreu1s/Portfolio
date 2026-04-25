'use client';

// const MySkills = [
//     { category: "Frontend Core", skills: ["TypeScript", "React", "Next.js", "Vite"] },
//     { category: "Backend & Data", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"] },
//     { category: "State & Quality", skills: ["Vitest", "Jest", "Zustand", "Zod", "React Hook Form", ] },
//     { category: "DevOps & Workflow", skills: ["Git", "Docker", "CI/CD", "MSW", "AI/LLM Integration"] }
// ];

// const MySkills = [
//     { category: "Frontend", skills: ["TypeScript", "React", "Next.js", "Vite", "TanStack Query"] },
//     { category: "Backend & Databases", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
//     { category: "Forms & Testing", skills: ["React Hook Form", "Zod", "Vitest", "Jest", "React Testing Library"] },
//     { category: "Infrastructure", skills: ["Git", "Docker", "GitHub Actions", "MSW", "AI-Augmented Dev"] }
// ];

const MySkills = [
    { category: "Frontend Core", skills: ["TypeScript", "React", "Next.js", "Vite", "TanStack Query"] },
    { category: "Backend & Data", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"] },
    { category: "State & Quality", skills: ["Vitest", "Zustand", "React Hook Form", "Zod",  "React Testing Library"] },
    { category: "DevOps & Workflow", skills: ["Git", "Docker", "CI/CD", "MSW", "AI/LLM"] }
];

// const MySkills = [
//     { category: "Frontend", skills: ["TypeScript",  "React", "Next.js", "TailWind"] },
//     { category: "Backend", skills: ["Node.js", "Express", "REST API", "Axios"] },
//     { category: "Databases", skills: ["PostgreSQL", "MongoDB"] },
//     { category: "Testing", skills: ["Vitest", "Jest", "Zustand", "React Testing Library"] },
//     { category: "Tools", skills: ["Git", "Linux", "Prompt Engineering", "AI/LLM"] },
// ];

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