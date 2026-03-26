'use client';

import { FaTelegram, FaEnvelope } from 'react-icons/fa';

const footerLinks = [
    { name: 'Telegram', href: 'https://t.me/Atreu1s_IT', icon: FaTelegram },
    { name: 'Email', href: 'mailto:atreu1si7@gmail.com', icon: FaEnvelope },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-6 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center gap-6 mb-4">
                    {footerLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.name !== 'Email' ? '_blank' : undefined}
                            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                            title={link.name}
                        >
                            <link.icon className="w-5 h-5" />
                            <span className="text-sm ">{link.name}</span>
                        </a>
                    ))}
                </div>
                
                <p className="text-center text-accent text-xs">
                    © 2026 Atreu1s
                </p>
            </div>
        </footer>
    );
}