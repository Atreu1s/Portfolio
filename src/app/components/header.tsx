import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ul className="h-16 flex items-center justify-end gap-2">
            
            <li>
              <Link 
                href="#about" 
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors duration-300 ease-in-out"
              >
                Обо мне
              </Link>
            </li>

            <li>
              <Link 
                href="#education" 
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors duration-300 ease-in-out"
              >
                Образование
              </Link>
            </li>

            <li>
              <Link 
                href="#skills" 
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors duration-300 ease-in-out"
              >
                Навыки
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}