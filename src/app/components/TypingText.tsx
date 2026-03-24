"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
    text: string;
    typingSpeed?: number;
    eraseSpeed?: number;
    pause?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
    text,
    typingSpeed = 150,
    eraseSpeed = 100,
    pause = 3000,
}) => {
    const [displayed, setDisplayed] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(true);

    useEffect(() => {
        let index = 0;
        let interval: NodeJS.Timeout;

        if (isTyping) {
            // Печать текста
            interval = setInterval(() => {
                // FIX 1: Захватываем символ СЕЙЧАС, пока index не изменился
                const currentChar = text[index];
                
                // FIX 2: Проверка на выход за границы строки
                if (index < text.length) {
                    setDisplayed((prev) => prev + currentChar);
                }
                
                index++;

                if (index >= text.length) {
                    clearInterval(interval);
                    setTimeout(() => setIsTyping(false), pause);
                }
            }, typingSpeed);
        } else {
            // Стирание текста
            interval = setInterval(() => {
                setDisplayed((prev) => {
                    if (prev.length <= 1) {
                        clearInterval(interval);
                        setIsTyping(true);
                        return "";
                    }
                    return prev.slice(0, -1);
                });
            }, eraseSpeed);
        }

        return () => clearInterval(interval);
    }, [isTyping, text, typingSpeed, eraseSpeed, pause]);

    return (
        <h2 className="text-2xl font-bold border-r-4 border-accent inline-block min-h-[2rem]">
            {displayed}
        </h2>
    );
};

export default TypingText;