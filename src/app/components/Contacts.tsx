'use client';

import { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import { FaTelegram, FaGithub, FaEnvelope } from 'react-icons/fa';

const contacts = [
    {
        name: 'Telegram',
        value: '@Atreu1s_IT',
        link: 'https://t.me/Atreu1s_IT',
        icon: FaTelegram,
        color: 'hover:border-violet-500/50 hover:shadow-violet-500/20',
        copyable: true,
    },
    {
        name: 'Email',
        value: 'atreu1si7@gmail.com',
        link: 'mailto:atreu1si7@gmail.com',
        icon: FaEnvelope,
        color: 'hover:border-violet-500/50 hover:shadow-violet-500/20',
        copyable: true,
    },
    {
        name: 'GitHub',
        value: 'github.com/Atreu1s',
        link: 'https://github.com/Atreu1s',
        icon: FaGithub,
        color: 'hover:border-violet-500/50 hover:shadow-violet-500/20',
        copyable: true,
    },
    {
        name: 'Резюме',
        value: 'Скачать PDF',
        link: '/Захаров Артем Михайлович.pdf',
        icon: Download,
        color: 'hover:border-accent/50 hover:shadow-accent/20',
        copyable: false,
        isResume: true,
    },
];

export default function Contacts() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = async (e: React.MouseEvent, text: string, index: number) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleDownloadResume = (e: React.MouseEvent) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Zakharov_Artem_Rezume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="flex justify-center my-10" id="contacts">
            <div className="max-w-6xl w-full">

                <h2 className="text-2xl font-bold text-white mb-8 text md:text-center">Контакты</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contacts.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.isResume ? '#' : contact.link}
                            onClick={contact.isResume ? handleDownloadResume : undefined}
                            target={!contact.isResume && contact.name !== 'Email' ? '_blank' : undefined}
                            rel={!contact.isResume && contact.name !== 'Email' ? 'noopener noreferrer' : undefined}
                            className={`group relative flex items-center gap-4 p-5 border border-white/20 rounded-lg 
                            bg-bcolor/30 hover:bg-bcolor/50 ${contact.color}
                            hover:shadow-lg transition-all duration-300`}
                        >
                            <contact.icon className="w-6 h-6 text-gray-400 group-hover:text-accent transition-colors shrink-0" />
                            
                            <div className="flex-1 min-w-0">
                                <span className="text-xs text-gray-500 uppercase tracking-wider">
                                    {contact.name}
                                </span>
                                <p className="text-white font-medium truncate group-hover:text-accent transition-colors">
                                    {contact.value}
                                </p>
                            </div>

                            {contact.copyable && (
                                <button
                                    onClick={(e) => handleCopy(e, contact.value, index)}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                                    title="Скопировать"
                                >
                                    {copiedIndex === index ? (
                                        <Check className="w-4 h-4 text-accent" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                    )}
                                </button>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}