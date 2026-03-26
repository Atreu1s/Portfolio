'use client';

import { useEffect, useState } from 'react';
import { Award, Code } from 'lucide-react';

export default function CodewarsStats() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCodewarsStats();
    }, []);

    const fetchCodewarsStats = async () => {
        try {
            const username = 'Atreu1s';
            const res = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
            
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            
            const jsonData = await res.json();
            setData(jsonData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка загрузки');
        } finally {
            setLoading(false);
        }
    };

    // Языки для отображения (ключи должны быть в lowercase как в API)
    const targetLanguages = [
        { key: 'javascript', name: 'JavaScript', color: 'text-yellow-400' },
        { key: 'typescript', name: 'TypeScript', color: 'text-blue-400' },
        { key: 'go', name: 'Go', color: 'text-cyan-400' },
    ];

    if (loading) {
        return (
            <section className="px-4 my-20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Codewars</h2>
                    <div className="border border-white/20 rounded-lg p-6 bg-bcolor/30">
                        <div className="animate-pulse text-gray-400 text-center">Загрузка...</div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !data) {
        return (
            <section className="px-4 my-20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Codewars</h2>
                    <div className="border border-red-500/30 rounded-lg p-6 bg-red-500/10">
                        <p className="text-red-400 text-center">{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="px-4 my-20" id="codewars">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Codewars</h2>
                
                <div className="border border-white/20 rounded-lg p-6 bg-bcolor/30">
                    {/* Общий ранг */}
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                        <Award className="w-6 h-6 text-accent" />
                        <div>
                            <p className="text-sm text-gray-400">Общий ранг</p>
                            <p className="text-2xl font-bold text-white">
                                {Math.abs(data.ranks?.overall?.rank) || '—'} kyu
                                <span className="text-sm text-gray-500 ml-2">
                                    ({data.ranks?.overall?.score || 0} очков)
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Всего решено задач */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                        <p className="text-sm text-gray-400 mb-1">Всего решено задач</p>
                        <p className="text-xl font-semibold text-white">
                            {data.codeChallenges?.totalCompleted || 0}
                        </p>
                    </div>

                    {/* Языки */}
                    <div>
                        <h3 className="text-sm text-gray-400 mb-4">Языки программирования</h3>
                        <div className="space-y-3">
                            {targetLanguages.map((lang) => {
                                const langStats = data.ranks?.languages?.[lang.key];
                                
                                return (
                                    <div
                                        key={lang.name}
                                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Code className={`w-4 h-4 ${lang.color}`} />
                                            <span className="text-white text-sm font-medium">{lang.name}</span>
                                        </div>
                                        
                                        {langStats ? (
                                            <div className="text-right">
                                                <p className="text-accent font-semibold text-sm">
                                                    {Math.abs(langStats.rank)} kyu
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {langStats.score} очков
                                                </p>
                                            </div>
                                        ) : (
                                            <span className="text-gray-600 text-sm">—</span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                        <a
                            href={`https://www.codewars.com/users/${data.username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-accent transition-colors"
                        >
                            Профиль на Codewars →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}