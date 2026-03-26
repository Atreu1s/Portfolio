"use client";

import Header from "./components/header";
import TypingText from "./components/TypingText";
import SkillsGrid from "./components/skills";
import Works from "./components/Works";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Footer from "./components/footer";
import Separator from "./components/Seporator";
// import CodewarsStats from "./components/CodeStats";

// TODO: Шапка (Hero) Навыки (Stack) Опыт работы Проекты Контакты
export default function Home() {
  return (
    <>
    <Header />

    <section className="flex justify-center px-4 mx-4 my-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white">

        <div className="flex justify-center">
          <div className="w-64 h-64 animate-slime p-1 bg-accent">
            <div className="w-full h-full overflow-hidden animate-slime bg-bcolor ">
              <img src="/RealImg.webp" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold">Захаров Артём Михайлович</h1>
          </div>

          <div className="h-8 text-accent text-xl">
            <TypingText text="Fullstack-разработчик &nbsp;"
            typingSpeed={120}
            eraseSpeed={10}
            pause={3000}
            />
          </div>

          <div>
            <p className="text-lg font-bold">Telegram: <a href="https://t.me/Atreu1s_IT" className="text-accent" target="_blank" rel="noopener noreferrer">@Atreu1s_IT</a></p>
          </div>

        </div>

      </div>
    </section>

    <Separator />

    <section className="flex justify-center px-4 my-20" id="about">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 text-white md:border md:border-white/20 md:shadow-[0_0_30px_rgba(255,255,255,0.1)] md:rounded-lg md:hover:border-white/40 md:hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300">

                {/* Левая колонка - Обо мне */}
                <div className="p-6 md:p-8 border border-white/20 rounded-2xl md:border-0 md:rounded-none md:border-r-0 relative">
                    {/* Линия 90% только на десктопе */}
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[90%] w-px bg-white/20" />
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl text-accent font-bold">Обо мне</h2>
                        <p>
                            Fullstack-разработчик <span className="text-accent">(React + Node.js)</span> с опытом создания веб-приложений полного цикла. <br /> <br />
                            Проектирую архитектуру БД <span className="text-accent">(PostgreSQL, MongoDB)</span>, обеспечиваю безопасность <span className="text-accent">(JWT, XSS/CSRF)</span>.<br /> <br />
                            Внедряю <span className="text-accent">AI-инструменты</span> для автоматизации разработки. Продуктивен в команде, соблюдаю дедлайны.
                        </p>
                    </div>
                </div>

                {/* Правая колонка - Навыки */}
                <div className="p-6 md:p-8" id="skills">
                    <h2 className="text-2xl text-accent font-bold">Навыки</h2>
                    <div className="mt-4">
                        <SkillsGrid />
                    </div>
                </div>
            </div>
        </section>

    <Separator />

    <section className="px-4 mx-4 my-20 md:text-center" id="works">
      <h2 className="text-2xl font-bold">Опыт работы</h2>
      <Works />
    </section>

    <Separator />

    <section className="px-4 mx-4 my-20" id="contacts">
      <Contacts />
    </section>

    <Separator />

    <section className="px-4 mx-4 my-20" id="projects">
      <Projects />
    </section>

    {/* <section className="px-4 mx-4 my-20" id="codewars">
      <CodewarsStats />
    </section> */}

    <Separator />

    <section className="px-4 mx-4 my-20 md:text-center" id="education">
      <h2 className="text-2xl font-bold">Образование</h2>
      <Education />
    </section>

    <Footer />
    </>
  );
}
