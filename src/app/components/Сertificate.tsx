'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Code, Palette, Terminal, GitBranch, ExternalLink } from 'lucide-react';

const skills = [
  {
    name: 'HTML5',
    description: 'Семантическая вёрстка, доступность, микроразметка',
    icon: Code,
    color: 'from-orange-500/20 to-orange-500/5',
    borderColor: 'hover:border-orange-500/50',
    file: '/skills/html.pdf',
  },
  {
    name: 'CSS3',
    description: 'Flexbox, Grid, анимации, адаптив, методологии',
    icon: Palette,
    color: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'hover:border-blue-500/50',
    file: '/skills/css.pdf',
  },
  {
    name: 'JavaScript',
    description: 'ES6+, асинхронность, манипуляции с DOM, ООП',
    icon: Terminal,
    color: 'from-yellow-500/20 to-yellow-500/5',
    borderColor: 'hover:border-yellow-500/50',
    file: '/skills/javascript.pdf',
  },
  {
    name: 'Git',
    description: 'Ветвление, мерж, rebase, командная работа',
    icon: GitBranch,
    color: 'from-red-500/20 to-red-500/5',
    borderColor: 'hover:border-red-500/50',
    file: '/skills/git.pdf',
  },
];

export default function Сertificate() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
    containScroll: 'trimSnaps',
    loop: false,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 4, align: 'start' }
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
    <section className="py-12 max-w-6xl mx-auto w-full">
      <div className="relative flex items-center justify-start md:justify-center mb-8 md:px-0">
        <h2 className="text-2xl font-bold text-main text-left md:text-center">
          Сертификаты
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
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-2"
              >
                <a
                  href={skill.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col bg-bcolor/30 border border-white/20 ${skill.borderColor} rounded-xl p-4 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer h-full`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${skill.color} flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-main/40 group-hover:text-accent transition-colors" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-main mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-main/60 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] text-accent uppercase tracking-wider flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Открыть документ
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'w-2 bg-accent'     
                : 'w-2 bg-white/20 hover:bg-white/40' 
            }`}
            aria-label={`Перейти к ${skills[index].name}`}
          />
        ))}
      </div>
    </section>
  );
}