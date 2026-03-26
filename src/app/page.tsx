"use client";

import Header from "./components/header";
import TypingText from "./components/TypingText";
import SkillsGrid from "./components/skills";
import Works from "./components/Works";

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
              <img src="/RealImgS.webp" className="w-full h-full object-contain" />
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

    <div className="md:hidden flex items-center gap-4 my-12">
      <div className="flex-1 h-px bg-white/20"></div>
      <div className="w-2 h-2 rounded-full bg-accent"></div>
      <div className="flex-1 h-px bg-white/20"></div>
    </div>

    <section className="flex justify-center px-4 mx-4 my-20 " id="about">
      
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-white 
        md:border md:border-white/20 md:shadow-[0_0_30px_rgba(255,255,255,0.1)] md:rounded-lg
      md:hover:border-white/40 md:hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] 
        transition-all duration-300"
        suppressHydrationWarning={true}>

            <div className="flex items-center border border-white p-6 rounded-2xl h-full ">
              <div className="space-y-4  ">
                <h2 className="text-2xl text-accent font-bold" >Обо мне</h2>
                <p>Fullstack-разработчик <span className="text-accent">(React + Node.js)</span> с опытом создания веб-приложений полного цикла. <br></br> <br></br>
                Проектирую архитектуру БД <span className="text-accent">(PostgreSQL, MongoDB)</span>, обеспечиваю безопасность <span className="text-accent">(JWT, XSS/CSRF)</span>.<br></br> <br></br>
                Внедряю <span className="text-accent">AI-инструменты</span> для автоматизации разработки. Продуктивен в команде, соблюдаю дедлайны.</p>
              </div>
            </div>

            <div className="space-y-4 md:p-6" id="skills">
              <h2 className="text-xl font-bold">Навыки</h2>
              <div>
                <SkillsGrid />
              </div>
            </div>
        </div>
    </section>

    <div className="md:hidden flex items-center gap-4 my-12">
      <div className="flex-1 h-px bg-white/20"></div>
      <div className="w-2 h-2 rounded-full bg-accent"></div>
      <div className="flex-1 h-px bg-white/20"></div>
    </div>

    <section className="px-4 mx-4 my-20 md:text-center" id="works">
      <h2 className="text-2xl font-bold">Опыт работы</h2>
      <Works />
    </section>
    </>
  );
}
