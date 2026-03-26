'use client';

import { useState } from 'react';

const educations = [
    {
        name: 'Московский политехнический университет',
        start: '2025',
        end: '2029',
        code: '09.03.01',
        code_description: 'Информатика и вычислительная техника',
        tasks: [
            'Внедрял AI-инструменты и использовал prompt-engineering для автоматизации задач',
            'Разрабатывал и поддерживал веб-приложения на React + Node.js, дорабатывал функционал и оптимизировал архитектуру PostgreSQL',
            'Администрировал серверы (Windows/Linux), настраивал мониторинг и резервное копирование',
            'Поддерживал IT-инфраструктуру: рабочие станции, сеть, IP-телефонию и CRM',
            'Работал с WordPress: настройка плагинов, контент, базовая кастомизация',
            'Обеспечивал безопасность: JWT, cookies, middleware, защита от XSS/CSRF',
            'Настраивал веб-аналитику и анализировал эффективность рекламы',
        ],
    },
    {
        name: 'ГАПОУ ПК № 8 им. И.Ф. Павлова',
        start: '2020',
        end: '2024',
        code: '09.02.07',
        code_description: 'Информационные системы и программирование',
        tasks: [
            'Внедрял AI-инструменты и использовал prompt-engineering для автоматизации задач',
            'Разрабатывал и поддерживал веб-приложения на React + Node.js, дорабатывал функционал и оптимизировал архитектуру PostgreSQL',
            'Администрировал серверы (Windows/Linux), настраивал мониторинг и резервное копирование',
            'Поддерживал IT-инфраструктуру: рабочие станции, сеть, IP-телефонию и CRM',
            'Работал с WordPress: настройка плагинов, контент, базовая кастомизация',
            'Обеспечивал безопасность: JWT, cookies, middleware, защита от XSS/CSRF',
            'Настраивал веб-аналитику и анализировал эффективность рекламы',
        ],
    },
];

export default function Education() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex justify-center my-10">
            <div className="max-w-6xl w-full">
                
                <div className="space-y-4">
                    {educations.map((edu, index) => (
                        <div
                            key={index}
                            className="border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/40"
                        >
                            <button
                                onClick={() => toggleOpen(index)}
                                className="w-full p-6 text-left bg-transparent hover:bg-white/5 transition-colors"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-2">
                                            <h3 className="text-md font-semibold text-white">{edu.name}</h3>
                                            {edu.start && (
                                                <span className="text-xs text-accent px-2 py-1 my-1 border border-accent/50 rounded w-fit">
                                                    {edu.start} - {edu.end}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-accent font-medium mb-1">{edu.code}</p>
                                        <p className="text-sm text-gray-400">{edu.code_description}</p>
                                    </div>
                                    <svg
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${
                                            openIndex === index ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-250 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6 pt-2 border-t border-white/10">
                                    <ul className="space-y-2">
                                        {edu.tasks.map((task, taskIndex) => (
                                            <li
                                                key={taskIndex}
                                                className="text-gray-300 text-sm flex items-start gap-2 text-start"
                                            >
                                                <span className="text-accent mt-1">•</span>
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}