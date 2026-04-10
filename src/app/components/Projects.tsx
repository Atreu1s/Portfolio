'use client';

import { ExternalLink, Code, Globe, Crown, Scissors } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect, useCallback } from 'react';

const projects = [
    {
        name: 'BarberShopB',
        description: 'Премиум-сайт барбершопа с онлайн-записью, каталогом мастеров, портфолио и двухшаговой модалкой выбора филиала. Полная оптимизация под мобильные устройства, локальное SEO и анимации.',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion'],
        github: 'https://gitlab.com/atreu1s/barbershopb',
        link: 'https://barbershopb.vercel.app/',
        icon: Scissors,
        isFeatured: false, 
    },
    {
        name: 'TeaWorld',
        description: 'Образовательный сайт про чай с каталогом сортов, статьями и системой рейтингов. Полноценная CMS с CRUD-операциями и аутентификацией.',
        stack: ['Vite', 'React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/Atreu1s/TeaWorld',
        link: 'https://tea-world-opal.vercel.app/',
        icon: Globe,
        isFeatured: true,
    },
    {
        name: 'ProgressBar Component',
        description: 'Переиспользуемый компонент прогресс-бара с методами класса для управления состоянием и плавными анимациями.',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/Atreu1s/ProgressBar',
        link: 'https://atreu1s.github.io/ProgressBar/',
        icon: Code,
        isFeatured: false,
    },
];

export default function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        slidesToScroll: 1,
        dragFree: true,
        containScroll: 'trimSnaps',
        loop: false,
        breakpoints: {
            '(min-width: 640px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3, align: 'start' }
        }
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);
    
    useEffect(() => {
        if (!emblaApi) return;
    
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
        emblaApi.off('select', onSelect);
    };
    }, [emblaApi, onSelect]);

    return (
        <section className="flex justify-center my-20" id="projects">
            <div className="max-w-6xl w-full">
                <div className="relative flex items-center justify-start md:justify-center mb-8 md:px-0">
                    <h2 className="text-2xl font-bold text-main text-left md:text-center">
                    Проекты
                    </h2>
                    <div className="absolute right-0 hidden md:flex gap-2">
                    <button 
                        onClick={scrollPrev} 
                        className="p-2 rounded-lg bg-white/5 text-main hover:bg-accent hover:text-back transition disabled:opacity-30"
                        aria-label="Назад"
                    >
                        ←
                    </button>
                    <button 
                        onClick={scrollNext} 
                        className="p-2 rounded-lg bg-white/5 text-main hover:bg-accent hover:text-back transition disabled:opacity-30"
                        aria-label="Вперёд"
                    >
                        →
                    </button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2"
                                >
                                    <div className={`h-full border border-white/20 rounded-lg overflow-hidden 
                                        bg-bcolor/30 hover:bg-bcolor/50 hover:border-accent/50
                                        transition-all duration-300 flex flex-col relative
                                        ${project.isFeatured ? 'ring-2 ring-accent/50' : ''}`}
                                    >
                                        {project.isFeatured && (
                                            <div className="absolute top-5 right-5 z-10">
                                                <div className="bg-accent text-back rounded-full p-1.5 shadow-lg shadow-accent/30">
                                                    <Crown className="w-4 h-4" />
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-6 pb-4 flex items-start justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <Icon className="w-6 h-6 text-accent shrink-0" />
                                                <h3 className="text-lg font-semibold text-white">
                                                    {project.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="px-6 pb-4 flex-1">
                                            <p className="text-gray-400 text-sm leading-relaxed">
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
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex 
                            ? 'w-2 bg-accent'     
                            : 'w-2 bg-white/20 hover:bg-white/40' 
                        }`}
                        aria-label={`Перейти к ${projects[index].name}`}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}