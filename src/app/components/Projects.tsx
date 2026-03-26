'use client';

import { ExternalLink, Code, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        name: 'TeaWorld',
        description: 'Образовательный сайт про чай с каталогом, статьями и системой рейтингов',
        stack: ['Vite', 'React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/Atreu1s/TeaWorld',
        link: 'https://tea-world-opal.vercel.app/',
        icon: Globe,
    },
    {
        name: 'ProgressBar Component',
        description: 'Переиспользуемый компонент прогресс-бара с методами класса для управления состоянием',
        stack: ['HTML5', 'CSS3','JavaScript'],
        github: 'https://github.com/Atreu1s/ProgressBar',
        link: 'https://atreu1s.github.io/ProgressBar/',
        icon: Code,
    },
    
];

export default function Projects() {
    return (
        <section className="flex justify-center my-20" id="projects">
            <div className="max-w-6xl w-full">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Проекты</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group border border-white/20 rounded-lg overflow-hidden 
                                bg-bcolor/30 hover:bg-bcolor/50 hover:border-accent/50
                                transition-all duration-300 flex flex-col`}
                        >
                            <div className="p-6 pb-4 flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <project.icon className="w-6 h-6 text-accent shrink-0" />
                                    <h3 className="text-lg font-semibold text-white">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="px-6 pb-4">
                                <p className="text-gray-400 text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div className="px-6 pb-4">
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(project.stack) 
                                        ? project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))
                                        : (
                                            <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                                                {project.stack}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="mt-auto px-6 pb-6 pt-2 flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github.trim()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        Код
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link.trim()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Демо
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}