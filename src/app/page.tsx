"use client";

import Header from "./components/header";
import TypingText from "./components/TypingText";


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
    </>
  );
}
